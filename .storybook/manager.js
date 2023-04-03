import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://salonikabra.netlify.app/icon.svg',
    brandTitle: 'Dr. Saloni Kabra Components',
    brandUrl: 'https://salonikabra.netlify.app',
  },
});
