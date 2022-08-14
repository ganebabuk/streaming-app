import styles from './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['copyright']}>
      <p className={'text-center'}>&copy; github.com/ganebabuk</p>
    </div>
  );
}

export default Footer;
