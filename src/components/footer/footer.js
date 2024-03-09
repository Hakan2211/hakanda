import Link from 'next/link';
import Logo from '../header/logo';
import BlogIcon from '../icons/blogIcon';
import InstagramIcon from '../icons/instagramIcon';
import MailIcon from '../icons/mailIcon';
import RSSIcon from '../icons/rssIcon';
import SendIcon from '../icons/sendIcon';
import TwitterIcon from '../icons/twitterIcon';
import styles from './footer.module.css';

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="border-t-[1px] border-slate-200 mt-10">
      <div className={styles.wrapper}>
        <div className={styles.footer_main}>
          <div
            className={`${styles.footer_links} text-slate-400 text-sm py-2  `}
          >
            <div className="flex flex-col gap-4">
              <Link
                href={'/articles'}
                className="flex gap-1 items-center group w-16 "
              >
                <BlogIcon className="w-6 h-6 text-slate-400 group-hover:text-yellow-600 transition-colors duration-300 ease-in" />
                <span className="group-hover:text-yellow-600 transition-colors duration-300 ease-in">
                  Blog
                </span>
              </Link>
              <a
                href={'/rss.xml'}
                className="flex gap-1 items-center  group w-16"
              >
                <RSSIcon className="w-6 h-6 text-slate-400  group-hover:text-yellow-600 transition-colors duration-300 ease-in" />
                <span className="group-hover:text-yellow-600 transition-colors duration-300 ease-in">
                  RSS
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://twitter.com/hakanbilgo"
                target="_blank"
                className="flex gap-1 items-center group w-20"
              >
                <TwitterIcon className="w-6 h-6 text-slate-400 group-hover:text-yellow-600 transition-colors duration-300 ease-in " />
                <span className="group-hover:text-yellow-600 transition-colors duration-300 ease-in">
                  Twitter
                </span>
              </a>
              <a
                href="https://www.instagram.com/lifebooke"
                target="_blank"
                className="flex gap-1 items-center hover:cursor-pointer group w-28 "
              >
                <InstagramIcon className="w-6 h-6 text-slate-400 group-hover:text-yellow-600 transition-colors duration-300 ease-in " />
                <span className="group-hover:text-yellow-600 transition-colors duration-300 ease-in">
                  Instagram
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hbilgic1992@gmail.com"
                className="flex gap-1 items-center hover:cursor-pointer w-24 group"
              >
                <SendIcon className="w-6 h-6 text-slate-400 group-hover:text-yellow-600 transition-colors duration-300 ease-in" />
                <span className="group-hover:text-yellow-600 transition-colors duration-300 ease-in">
                  Contact
                </span>
              </a>
              <div className="flex gap-1 items-center group w-28 hover:cursor-pointer relative ">
                <MailIcon className="w-6 h-6 text-slate-400 group-hover:text-yellow-600 transition-colors duration-300 ease-in " />
                <span className="group-hover:text-yellow-600 transition-colors duration-300 ease-in">
                  Newsletter
                </span>
              </div>{' '}
              <span className="absolute text-xs translate-y-16 translate-x-6 underline underline-offset-4">
                coming soon!
              </span>
            </div>
          </div>
          <div className="flex items-baseline justify-between gap-4  w-[100%]">
            <Link href={'/'}>
              <Logo className="h-12 w-12" />
            </Link>

            <p className="mr-28">
              &#169; {year}
              <span className="tracking-wider ml-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-800 to-yellow-400">
                Hakan Bilgic
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
