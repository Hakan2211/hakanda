import ContactForm from '@/components/ContactForm/contactForm';
import styles from './contact.module.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

function Contact() {
  return (
    <main className="h-[100svh] flex flex-col bg-[var(--bg-color)]">
      <Header />
      <div className="h-[150px]"></div>
      <div className={`${styles.wrapper} h-[100%] flex items-start `}>
        <div className={`${styles.form_wrapper}`}>
          <div className="tracking-wide text-lg text-[var(--text-color-primary-600)]">
            <p>
              Contact me by filling the form below or{' '}
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hakando3d@gmail.com"
                className="underline underline-offset-2 cursor-pointer hover:text-yellow-600 transition-colors duration-300 ease-in-out"
              >
                click here
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer className="" />
    </main>
  );
}

export default Contact;
