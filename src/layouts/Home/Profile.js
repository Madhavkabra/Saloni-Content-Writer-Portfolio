import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
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
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hi, I&#39;m Dr. Saloni, a doctor and professional writer with over five years of
      experience in the healthcare industry. I&#39;m currently working with HealthOk,
      where I combine my passion for helping people live healthier lives with my writing
      skills to communicate important health information in a clear, concise way. I&#39;ve
      had the opportunity to work with a diverse range of patients, from children to
      seniors, and I find nothing more rewarding than making a positive impact on
      someone&#39;s health and wellbeing.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In addition to my work at HealthOk, I am also a freelance writer who has worked with
      clients from all over the world. Whether it&#39;s academic writing, medical writing,
      product descriptions, or technical writing, I always strive to deliver content that
      is well-researched, informative, and engaging. My experience includes creating
      social media posts, developing content strategies, generating landing page copy, and
      more.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Apart from clinical services and writing, some other activities that I love to do!
      <Text data-visible={visible} size="l" as="p">
        🎯 Travel
      </Text>
      <Text data-visible={visible} size="l" as="p">
        🎯 Playing Chess
      </Text>
      <Text data-visible={visible} size="l" as="p">
        🎯 Singing
      </Text>
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
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Know Who I'm
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <Image
                  placeholder={profileImgPlaceholder}
                  srcSet={profileKatakana}
                  className={styles.profileText}
                  style={{
                    top: '-110px',
                    left: '91px',
                    scale: '0.85',
                    transform: 'rotate(90deg)',
                  }}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
