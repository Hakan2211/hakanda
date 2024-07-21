import ContactForm from '@/components/ContactForm/contactForm';
import styles from './contact.module.css';

import Footer from '@/components/footer/footer';
import Link from 'next/link';
import ArrowLeft from '@/components/icons/arrow-left';

function Contact() {
  return (
    <main className="h-[100svh] flex flex-col bg-[var(--bg-color)]">
      <div className="h-[150px]"></div>

      <div className={`${styles.wrapper} h-[100%] flex items-start `}>
        <div className={`${styles.form_wrapper}`}>
          {' '}
          <div className="flex flex-col gap-4  items-start mb-6">
            <Link
              className="flex items-center mb-10  text-sm gap-1 text-[var(--text-color-primary-800)] hover:text-yellow-600 transition-colors duration-300 ease-in-out  group"
              href={'/articles'}
            >
              <ArrowLeft className="w-4 h-4 transition-transform transform group-hover:-translate-x-1 hover:ease-in-out duration-500 " />
              <span className="">All articles</span>
            </Link>
          </div>
          <div className="tracking-wide text-lg text-[var(--text-color-primary-600)]">
            <p>
              Contact me by filling the form below or{' '}
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hakanda3d@gmail.com"
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
