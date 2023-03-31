import { socialLinks } from './socialMediaLinks';
import { Icon } from 'components/Icon';
import styles from './SocialMedia.module.css';

export const SocialMediaIcons = ({ desktop }) =>
  socialLinks.map(({ label, url, icon }) => (
    <a
      key={label}
      data-navbar-item={desktop || undefined}
      className={styles.IconLink}
      aria-label={label}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={styles.navIcon} icon={icon} />
    </a>
  ));
