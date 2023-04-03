import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://salonikabra.netlify.app">Primary link</Link>
    <Link secondary href="https://salonikabra.netlify.app">
      Secondary link
    </Link>
  </StoryContainer>
);
