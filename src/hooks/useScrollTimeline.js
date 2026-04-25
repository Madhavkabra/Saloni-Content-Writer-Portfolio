import { useEffect, useMemo, useRef, useState } from 'react';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function useScrollTimeline({ sectionRef, itemCount }) {
  const cardRefs = useRef([]);
  const frameRef = useRef();
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cardOffsets, setCardOffsets] = useState([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    const handleUpdate = () => {
      if (!sectionRef.current || cardRefs.current.length === 0) return;
      const viewportCenter = window.innerHeight / 2;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = Math.max(1, sectionRect.height - window.innerHeight * 0.5);
      const progressRaw = (window.innerHeight * 0.35 - sectionRect.top) / totalScrollable;
      const nextProgress = clamp(progressRaw, 0, 1);
      const progressDrivenIndex = clamp(
        Math.round(nextProgress * Math.max(itemCount - 1, 0)),
        0,
        Math.max(itemCount - 1, 0)
      );

      let closestIndex = progressDrivenIndex;
      let closestDistance = Number.POSITIVE_INFINITY;
      const nextOffsets = Array.from({ length: itemCount }, (_, index) => {
        const node = cardRefs.current[index];
        if (!node) return 1.25;
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = center - viewportCenter;
        const normalized = clamp(distance / (window.innerHeight * 0.45), -1.25, 1.25);
        const absDistance = Math.abs(distance);
        if (absDistance < closestDistance) {
          closestDistance = absDistance;
          closestIndex = index;
        }
        return normalized;
      });

      setCardOffsets(nextOffsets);
      setActiveIndex(closestIndex);
      setProgress(nextProgress);
      frameRef.current = undefined;
    };

    const onScroll = () => {
      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(handleUpdate);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionRef, itemCount]);

  const goToIndex = index => {
    const nextIndex = clamp(index, 0, itemCount - 1);
    const node = cardRefs.current[nextIndex];
    if (!node) return;
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const onTimelineKeyDown = event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      goToIndex(activeIndex + 1);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      goToIndex(activeIndex - 1);
    }
  };

  const setCardRef = (index, node) => {
    cardRefs.current[index] = node;
  };

  return useMemo(
    () => ({
      activeIndex,
      progress,
      cardOffsets,
      isInView,
      reducedMotion,
      setCardRef,
      onTimelineKeyDown,
      goToIndex,
    }),
    [activeIndex, progress, cardOffsets, isInView, reducedMotion]
  );
}
