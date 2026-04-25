import ArrowDown from 'assets/arrow-down.svg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Section } from 'components/Section';
import { useTheme } from 'components/ThemeProvider';
import { Transition } from 'components/Transition';
import { VisuallyHidden } from 'components/VisuallyHidden';
import { useScrollToHash } from 'hooks';
import dynamic from 'next/dynamic';
import RouterLink from 'next/link';
import { Fragment } from 'react';
import styles from './Intro.module.css';

const DisplacementSphere = dynamic(() =>
  import('layouts/Home/DisplacementSphere').then(mod => mod.DisplacementSphere)
);

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const theme = useTheme();
  const titleId = `${id}-title`;
  const subtitleId = `${id}-subtitle`;
  const scrollToHash = useScrollToHash();

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme.themeId} timeout={3000}>
        {(visible, status) => (
          <Fragment>
            <DisplacementSphere />
            <header className={styles.heroContent} aria-labelledby={titleId} aria-describedby={subtitleId}>
              <p className={styles.badge} data-status={status}>
                Available for Remote &amp; Freelance Projects
              </p>
              <h1 className={styles.headline} data-status={status} id={titleId}>
                <DecoderText text="Dr. Saloni Kabra" start={status !== 'exited'} delay={220} />
              </h1>
              <p className={styles.subheadline} data-status={status} id={subtitleId}>
                <span className={styles.subheadlinePhrase}>Senior Clinical Consultant</span>
                <span className={styles.subheadlineDot} aria-hidden>
                  &middot;
                </span>
                <span className={styles.subheadlinePhrase}>Medical Writer</span>
                <span className={styles.subheadlineDot} aria-hidden>
                  &middot;
                </span>
                <span className={styles.subheadlinePhrase}>SEO Health Content Strategist</span>
              </p>
              <p className={styles.tagline} data-status={status}>
                Doctor by training. Writer by craft. Your content&#39;s{' '}
                <span className={styles.accent}>competitive edge</span> in healthcare.
              </p>
              <nav className={styles.actions} aria-label="Primary actions">
                <Button className={styles.primaryCta} href="/#services" aria-label="View my work">
                  View My Work
                </Button>
                <Button
                  className={styles.secondaryCta}
                  href="/contact#contact"
                  aria-label="Let's work together"
                >
                  Let&#39;s Work Together
                </Button>
              </nav>
            </header>
            <RouterLink href="/#services">
              <a
                className={styles.scrollIndicator}
                data-status={status}
                data-hidden={scrollIndicatorHidden}
                onClick={handleScrollClick}
                aria-label="Scroll to services section"
              >
                <VisuallyHidden>Scroll to services</VisuallyHidden>
              </a>
            </RouterLink>
            <RouterLink href="/#services">
              <a
                className={styles.mobileScrollIndicator}
                data-status={status}
                data-hidden={scrollIndicatorHidden}
                onClick={handleScrollClick}
                aria-label="Scroll to services section"
              >
                <VisuallyHidden>Scroll to services</VisuallyHidden>
                <ArrowDown aria-hidden />
              </a>
            </RouterLink>
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}
