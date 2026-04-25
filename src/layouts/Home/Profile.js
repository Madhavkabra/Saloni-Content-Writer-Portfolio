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
      I&#39;ve worked across telehealth, pharma, fertility, genetics, skincare, nutrition,
      thyroid care, pet care, insurance, and multi-specialty clinical networks across India,
      the US, UK, Dubai, and global remote markets.
    </Text>
    <blockquote className={styles.pullQuote} data-visible={visible}>
      &#34;I bring a clinician&#39;s eye to every piece, so healthcare content is both medically
      sound and commercially effective.&#34;
    </blockquote>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Currently, I serve as Senior Clinical Consultant &amp; Writer at HealthOK Global (by
      Norstella), where I evaluate digital health platforms and translate those insights into
      content that improves user trust, discoverability, and patient engagement.
    </Text>
    <ul className={styles.achievementList} data-visible={visible}>
      <li>Trusted by brands including Cetaphil, Medgenome, Ferty9, and Vetic Pet Clinic</li>
      <li>Retained high-expectation clients through quality, speed, and clinical rigor</li>
      <li>Available for freelance and contract projects through direct engagement</li>
    </ul>
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
