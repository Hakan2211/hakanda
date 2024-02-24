import Header from '@/components/header/header';
import styles from './about.module.css';

function About() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.about_section}>About</div>
      </div>
    </>
  );
}

export default About;
