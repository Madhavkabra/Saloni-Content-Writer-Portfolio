import gamestackTexture2Large from 'assets/gamestack-list.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import landingPage from 'assets/landingPage.jpg';
import landingPageLarge from 'assets/landingPage-large.jpg';
import technicalWriting from 'assets/technical-writing.jpg';
import technicalWritingLarge from 'assets/technical-writing-large.jpg';
import seoWriting from 'assets/seo-writing.jpg';
import seoWritingLarge from 'assets/seo-writing-large.jpg';
import blog from 'assets/blog.jpg';
import blogLarge from 'assets/blog-large.jpg';
import webPageContent from 'assets/webPageContent.jpg';
import webPageContentLarge from 'assets/webPageContent-large.jpg';
import newsletter from 'assets/newsletter.jpg';
import newsletterLarge from 'assets/newsletter-large.jpg';
import medicalContentWriting from 'assets/medicalContentWriting.jpg';
import medicalContentWritingLarge from 'assets/medicalContentWriting-large.jpg';
import productEquipement from 'assets/productEquipement.jpg';
import productEquipementLarge from 'assets/productEquipement-large.jpg';
import procedurePage from 'assets/procedurePage.jpg';
import procedurePageLarge from 'assets/procedurePage-large.jpg';
import academicWritingLarge from 'assets/academic-writing-large1.jpg';
import academicWriting from 'assets/academic-writing1.png';
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

const disciplines = [
  'Doctor',
  'Academic',
  'Proofreader',
  'Medical',
  'SEO',
  'Blogger',
  'Content',
  'Teleconsultation',
];

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
  const projectTen = useRef();
  const projectEleven = useRef();
  const projectTwelve = useRef();

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
      projectSeven,
      projectEight,
      projectNine,
      projectTen,
      projectEleven,
      projectTwelve,
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
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Academic Writing"
        description="With extensive knowledge of research and academic writing styles, I offer high-quality and well-researched academic writing services, including literature reviews, research papers, reports, etc."
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
        title="Case Study"
        description="I create well-researched case studies highlighting the practical applications of medical theory and research. My case studies are detailed and well-researched, providing valuable insights for academic purposes."
        buttonText="View Paper"
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
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Medical Content Writing"
        description="I provide professional medical content writing services that are accurate, informative, and engaging. From blog posts and articles to social media content and website copy, I help clients communicate complex medical information in an accessible and easy-to-understand way."
        buttonText="View articles"
        buttonLink="/projects/slice"
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
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Landing Page Copy"
        description="As a medical writer, I create compelling landing page copy that highlights the benefits of medical products and services. I help businesses convert website visitors into leads and customers through persuasive and engaging copy."
        buttonText="View articles"
        buttonLink="/projects/slice"
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
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Service Page"
        description="With my expertise in medical writing, I craft informative and persuasive service pages that highlight the unique benefits of medical services. I help clients differentiate themselves from competitors and drive more website traffic."
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
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Product Description"
        description=" I specialize in creating clear, concise, and persuasive product descriptions for medical products. Whether it's medical devices, supplements, or pharmaceuticals, I help clients convey the benefits and features of their products in an easy-to-understand way."
        buttonText="View articles"
        buttonLink="/projects/slice"
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
        id="project-7"
        alternate
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Procedure Page"
        description="With my experience in medical writing, I create detailed and informative procedure pages that provide patients with step-by-step guidance on medical procedures. I help clients offer valuable resources to their patients and reduce the risk of confusion or complications."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [procedurePage, procedurePageLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="Technical Writing"
        description="I offer technical writing services that are accurate, clear, and concise. From user manuals and operating procedures to regulatory documentation, I help clients communicate complex technical information to various audiences."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [technicalWriting, technicalWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-9"
        alternate
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}
        title="SEO Writing"
        description="I specialize in creating SEO-friendly medical content that helps businesses rank higher in search engine results. With my knowledge of keyword research and on-page optimization, I help clients attract more website traffic and generate more leads."
        buttonText="View articles"
        buttonLink="/projects/slice"
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
      <ProjectSummary
        id="project-10"
        sectionRef={projectTen}
        visible={visibleSections.includes(projectTen.current)}
        index={10}
        title="Blog"
        description="I provide engaging and informative blog content that covers a wide range of medical topics. From industry news and trends to patient education and lifestyle advice, I help clients establish themselves as thought leaders in the medical industry."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [blog, blogLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-11"
        alternate
        sectionRef={projectEleven}
        visible={visibleSections.includes(projectEleven.current)}
        index={11}
        title="Web Page Content"
        description="With my expertise in medical writing, I create informative and persuasive web page content that resonates with target audiences. I help clients improve their website's user experience and increase conversions through compelling and engaging copy."
        buttonText="View articles"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [webPageContent, webPageContentLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-12"
        sectionRef={projectTwelve}
        visible={visibleSections.includes(projectTwelve.current)}
        index={12}
        title="Newsletter"
        description="I offer professional medical newsletter writing services that help businesses stay connected with their audience. From industry updates and news to company updates and promotions, I help clients create informative, engaging, and effective newsletters."
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [newsletter, newsletterLarge],
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
