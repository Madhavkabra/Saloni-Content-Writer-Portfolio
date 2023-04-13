import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';
import { classes, cssProps } from 'utils/style';
import { Chips } from 'components/Chips';
import Avatar from '../../components/Icon/svg/avatar.svg';
import FilledStar from '../../components/Icon/svg/filledStar.svg';
import styles from './Articles.module.css';

const ArticlesPost = ({
  slug,
  title,
  abstract,
  date,
  featured,
  banner,
  categories,
  timecode,
  review,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.postLabel} size="s">
          Featured
        </Text>
      )}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={{ src: banner }}
            placeholder={{ src: `${banner.split('.')[0]}-placeholder.jpg` }}
            alt=""
            role="presentation"
          />
        </div>
      )}
      {!featured && (
        <RouterLink href={`/articles/${slug}`} scroll={false}>
          <a
            className={styles.postLink}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.postDetails}>
              <div aria-hidden className={styles.postDate}>
                <Divider lineWidth="33%" notchWidth="64px" notchHeight="8px" />
                {categories?.map((text, index) => (
                  <div className={styles.chipsArticle} key={index}>
                    {text}
                  </div>
                ))}
              </div>

              <Heading as="h2" level={featured ? 2 : 4}>
                {title}
              </Heading>

              <Text size={featured ? 'l' : 's'} as="p">
                {abstract}
              </Text>
              <div className={styles.postFooter}>
                <Button secondary iconHoverShift icon="chevronRight" as="div">
                  Read
                </Button>
                <Text className={styles.timecode} size="s">
                  {timecode}
                </Text>
              </div>
            </div>
          </a>
        </RouterLink>
      )}
      {featured && (
        <div className={classes(styles.postLink, styles.reviewContainer)}>
          <Heading className={styles.heading} level={5} as="h1">
            Reviews
          </Heading>

          {review.map((data, index) => (
            <div className={styles.reviewDiv} key={index}>
              <Text as="div" size="s" className={styles.reviewSubHeading}>
                {review[index][3]}
              </Text>
              <div className={styles.reviewAvatarTextDiv}>
                <Avatar height="3em" width="3em" />
                <div>
                  <Text as="div" size="s">
                    {review[index][0]}
                  </Text>
                  <div className={styles.reviewRating}>
                    <Text as="span" size="s">
                      {review[index][1]}
                    </Text>
                    {[...Array(Number(review[index][1][0])).keys()].map((data, index) => (
                      <FilledStar color="yellow" key={index} />
                    ))}
                  </div>
                </div>
              </div>
              <Text as="div" className={styles.reviewText}>
                {review[index][2]}
              </Text>
              <Divider
                notchWidth="64px"
                notchHeight="5px"
                className={styles.reviewDivider}
              />
            </div>
          ))}
        </div>
      )}
      {featured && (
        <Text aria-hidden className={styles.postTag} size="s">
          477
        </Text>
      )}
    </article>
  );
};

const SkeletonPost = ({ index }) => {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post, styles.skeleton)}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Coming soon...
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevronRight" as="div">
              Read more
            </Button>
            <Text className={styles.timecode} size="s">
              00:00:00:00
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Articles = ({ posts, featured }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const router = useRouter();
  let urlPath = router.asPath;
  const splittedUrlPath = urlPath?.split('=');

  useEffect(() => {
    if (splittedUrlPath.length > 1) {
      const category = splittedUrlPath[1]?.replaceAll('+', ' ');
      setSelectedCategories([category]);
    } else {
      setSelectedCategories([]);
    }
  }, []);

  const categories = [
    'Academic Writing',
    'Case Study',
    'Medical Content Writing',
    'Landing Page Copy',
    'Service Page',
    'Product Description',
    'Procedure Page',
    'Technical Writing',
    'SEO Writing',
    'Blog',
    'Web Page Content',
    'Newsletter',
    'Reset All',
  ];

  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="Work Samples" />
      </Heading>
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      <div className={styles.categoriesContainer}>
        {categories.map((title, index) => (
          <Chips
            title={title}
            selected={selectedCategories.includes(title)}
            key={index}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        ))}
      </div>
      {posts.map(({ slug, ...post }, index) => {
        if (
          selectedCategories.some(elem => post.categories.includes(elem)) ||
          selectedCategories.length === 0
        )
          return <ArticlesPost key={slug} slug={slug} index={index} {...post} />;
      })}
      {Array(1)
        .fill()
        .map((skeleton, index) => (
          <SkeletonPost key={index} />
        ))}
    </div>
  );

  const featuredPost = <ArticlesPost {...featured} />;

  return (
    <article className={styles.articles}>
      <Meta
        title="Articles"
        description="A collection of technical design and development articles. May contain incoherent ramblings."
      />
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            {postList}
            {featuredPost}
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {postsHeader}
            {featuredPost}
            {postList}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
};
