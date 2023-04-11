import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import medicalContentWriting from 'assets/medicalContentWriting.jpg';
import medicalContentWritingLarge from 'assets/medicalContentWriting-large.jpg';
import landingPage from 'assets/landingPage.jpg';
import landingPageLarge from 'assets/landingPage-large.jpg';
import productEquipement from 'assets/productEquipement.jpg';
import productEquipementLarge from 'assets/productEquipement-large.jpg';
import procedurePage from 'assets/procedurePage.jpg';
import procedurePageLarge from 'assets/procedurePage-large.jpg';
import technicalWriting from 'assets/technical-writing.jpg';
import technicalWritingLarge from 'assets/technical-writing-large.jpg';
import healthCareProfessional from 'assets/healthCareProfessional.jpg';
import healthCareProfessionalLarge from 'assets/healthCareProfessional-large.jpg';
import academicWritingLarge from 'assets/academic-writing-large.jpg';
import academicWriting from 'assets/academic-writing.png';
import seoWriting from 'assets/seo-writing.jpg';
import seoWritingLarge from 'assets/seo-writing-large.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { Text } from 'components/Text';
import { Button } from 'components/Button';

import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer', 'Prototyper', 'Animator', 'Illustrator', 'Modder'];

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
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      // projectSeven,
      // projectEight,
      // projectNine,
      details,
    ];

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
        title="Designer + Developer"
        description="Design portfolio of Hamish Williams — a product designer working on web & mobile
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
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Academic Writing"
        description="With extensive knowledge of research and academic writing styles, I offer high-quality and well-researched academic writing services, including literature reviews, research papers, reports, etc."
        buttonText="View Assignments"
        buttonLink="articles/?0=Academic+Writing"
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [academicWriting, academicWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
            {
              srcSet: [academicWriting, academicWriting],
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Medical Content Writing"
        description="I provide professional medical content writing services that are accurate, informative, and engaging. From blog posts and articles to social media content and website copy, I help clients communicate complex medical information in an accessible and easy-to-understand way."
        buttonText="View Content"
        buttonLink="/articles/?0=Medical+Content+Writing"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [medicalContentWriting, medicalContentWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Landing Page Copy"
        description="As a medical writer, I create compelling landing page copy that highlights the benefits of medical products and services. I help businesses convert website visitors into leads and customers through persuasive and engaging copy."
        buttonText="View Content"
        buttonLink="/articles/?0=Landing+Page+Copy"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [landingPage, landingPageLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Service Page"
        description="With my expertise in medical writing, I craft informative and persuasive service pages that highlight the unique benefits of medical services. I help clients differentiate themselves from competitors and drive more website traffic."
        buttonText="View Content"
        buttonLink="/articles/?0=Service+Page"
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
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Product Description"
        description=" I specialize in creating clear, concise, and persuasive product descriptions for medical products. Whether it's medical devices, supplements, or pharmaceuticals, I help clients convey the benefits and features of their products in an easy-to-understand way."
        buttonText="View Content"
        buttonLink="/articles/?0=Product+Description"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [productEquipement, productEquipementLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="SEO Writing"
        description="I specialize in creating SEO-friendly medical content that helps businesses rank higher in search engine results. With my knowledge of keyword research and on-page optimization, I help clients attract more website traffic and generate more leads."
        buttonText="View Content"
        buttonLink="/articles/?0=SEO+Writing"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [seoWriting, seoWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <div className={styles.buttonContainer}>
        <div>
          <Button iconHoverShift>Healthcare professional</Button>
        </div>
        <div>
          <Button iconHoverShift href="/articles/?0=Case+Study" iconEnd="arrowRight">
            Case Study
          </Button>
        </div>
        <div>
          <Button iconHoverShift href="/articles/?0=Procedure+Page" iconEnd="arrowRight">
            Procedure Page
          </Button>
        </div>
        <div>
          <Button
            iconHoverShift
            href="/articles/?0=Technical+Writing"
            iconEnd="arrowRight"
          >
            Technical Writing
          </Button>
        </div>
        <div>
          <Button iconHoverShift href="/articles/?0=Blog" iconEnd="arrowRight">
            Blog
          </Button>
        </div>
        <div>
          <Button
            iconHoverShift
            href="/articles/?0=Web+Page+Content"
            iconEnd="arrowRight"
          >
            Web Page Content
          </Button>
        </div>
        <div>
          <Button iconHoverShift href="/articles/?0=Newsletter" iconEnd="arrowRight">
            Newsletter
          </Button>
        </div>
        <div>
          <Button iconHoverShift>Editing and Proofreading</Button>
        </div>
      </div>
      {/* <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Designing the future of education"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-8"
        alternate
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="Video game progress tracking"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
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
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
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
      /> */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
