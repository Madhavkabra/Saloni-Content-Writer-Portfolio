import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      About Dr. Saloni
    </Heading>
    <Text className={styles.subtitle} data-visible={visible} size="l" as="p">
      Where clinical practice meets content strategy
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hi, I&#39;m Dr. Saloni, a licensed medical doctor and senior clinical content strategist
      with <span className={styles.highlight}>6+ years</span> of experience transforming
      complex clinical knowledge into content that ranks on Google, builds patient trust,
      and drives real business results.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&#39;ve worked across telehealth, pharma, genetic testing, fertility, skincare,
      nutrition &amp; holistic wellness, thyroid care, functional medicine, pet care,
      insurance, ophthalmology, oncology, dental, plastic surgery, mental health,
      homeopathy, alternative medicine, and many more, for clients across India, the US,
      UK, Dubai, and globally.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      What sets me apart? I don&#39;t just write; I bring a{' '}
      <span className={styles.highlight}>clinician&#39;s eye</span> to every piece. I know
      what patients search for, what worries them, what language resonates, what providers
      need to communicate, and how Google decides what ranks. That combination has helped{' '}
      <span className={styles.highlight}>
        brands like Cetaphil, Medgenome, HolisticWow, Health Science Institute, Ferty9,
        Dr. Batra&#39;s Homeopathy, Vetic Pet Clinic, ManipalCigna, Maxivision Eye Hospital
      </span>{' '}
      and many more grow their digital presence with content that&#39;s medically sound and
      search-optimized.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Currently, I serve as Senior Clinical Consultant &amp; Writer at HealthOK Global (by
      Norstella), where I test and evaluate medical apps and digital health platforms from
      a clinician&#39;s perspective, and translate those insights into content that improves
      user trust and product visibility.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&#39;ve retained tough clients, delivered under tight deadlines, and written content
      that quietly powers some of healthcare&#39;s most recognizable brands, often behind the
      scenes as a trusted ghostwriter.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&#39;m available for freelance and contract projects on direct engagement.
    </Text>
    <Text className={styles.interests} data-visible={visible} size="l" as="p">
      🎯 Travel · Chess · Singing
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Headshot of Dr. Saloni"
                />
              </div>
            </div>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button className={styles.button} data-visible={visible} href="/resume" icon="arrowRight">
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
