import gamestackTexture2Large from 'assets/gamestack-list.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';

import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';

import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';

import resumesliceTextureLarge from 'assets/resume-slice-app-large.jpg';
import resumesliceTexture from 'assets/resume-slice-app.jpg';

import proofReadingLarge from 'assets/proofReading-large.jpg';
import proofReading from 'assets/proofReading.jpg';

import academicWritingLarge from 'assets/academic-writing-large1.jpg';
import academicWriting from 'assets/academic-writing1.jpg';

import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Doctor', 'Academic', 'Proofreader',
  'Medical', 'SEO', 'Blogger', 'Content', 'Teleconsultation'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();

  const details = useRef();

  useEffect(() => {
    const sections = [intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Writer + Healthcare Provider"
        description="Design portfolio of Dr. Saloni Kabra — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Healthcare Professional"
        description="I can help you write articles on a variety of topics, including current events, politics, science, and technology. I can produce articles that are informative, engaging, and well-researched."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        alternate
        id="project-2"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Academic Writing"
        description="As an experienced academic writer, I can help you with all aspects of academic writing, from selecting a topic and conducting research to organizing your ideas and polishing your final draft. I have expertise in a variety of disciplines, including literature, science, history, sociology, psychology, and business, among others.
        I work closely with my clients to ensure that their academic writing meets their specific requirements and exceeds their expectations. Whether you need help with a single assignment or ongoing support throughout your academic career, I'm here to help. Contact me today to learn more about how I can assist you in achieving your academic goals."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [academicWriting, academicWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
            {
              srcSet: [academicWriting, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Case Studies"
        description="I provide comprehensive research paper writing services that include topic selection, literature review, data analysis, and report writing. I can help you produce high-quality research papers that are well-researched, well-organized, and well-written."
        buttonText="View Paper"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
              // srcSet: [gamestackTexture2, gamestackTexture2Large],
              // placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Service Page"
        description="I offer content creation services for businesses and individuals. Whether you need blog posts, social media content, or website copy, I can help you create engaging and informative content that resonates with your target audience."
        buttonText="View Content"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-5"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Product Description"
        description="I can help you write articles on a variety of topics, including current events, politics, science, and technology. I can produce articles that are informative, engaging, and well-researched."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-6"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Landing Page Copy"
        description="I can help you write articles on a variety of topics, including current events, politics, science, and technology. I can produce articles that are informative, engaging, and well-researched."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-7"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="SEO Content Writing"
        description="I can help you write articles on a variety of topics, including current events, politics, science, and technology. I can produce articles that are informative, engaging, and well-researched."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-8"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Blog"
        description="I can help you write articles on a variety of topics, including current events, politics, science, and technology. I can produce articles that are informative, engaging, and well-researched."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-9"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Technical Writing"
        description="I can help you write articles on a variety of topics, including current events, politics, science, and technology. I can produce articles that are informative, engaging, and well-researched."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-10"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        alternate
        title="Resume Writing"
        description="I provide resume writing services that can help you stand out in a competitive job market. I can create a professional and personalized resume that highlights your skills, achievements, and experience."
        buttonText="View Resume"
        buttonLink="/projects/slice"
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [resumesliceTexture, resumesliceTexture],
              placeholder: sliceTexturePlaceholder,

            },
            {
              srcSet: [resumesliceTextureLarge, resumesliceTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-11"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Newsletter"
        description=" I offer proofreading and editing services for all types of written content. I can review your work for grammar, spelling, and punctuation errors, as well as ensure that the content is clear, concise, and coherent."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [proofReading, proofReadingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-12"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Proofreading and Editing"
        description=" I offer proofreading and editing services for all types of written content. I can review your work for grammar, spelling, and punctuation errors, as well as ensure that the content is clear, concise, and coherent."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [proofReading, proofReadingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
