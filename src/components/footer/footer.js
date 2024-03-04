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
    <div className=" border-t-[1px] border-slate-200">
      <div className={styles.wrapper}>
        <div className={styles.footer_main}>
          <div className={`${styles.footer_links} text-slate-400 text-sm py-2`}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <BlogIcon className="w-6 h-6 text-slate-400" />
                <span>Blog</span>
              </div>
              <div className="flex gap-1 items-center">
                <RSSIcon className="w-6 h-6 text-slate-400" />
                <span>RSS</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <TwitterIcon className="w-6 h-6 text-slate-400" />
                <span>Twitter</span>
              </div>
              <div className="flex gap-1 items-center">
                <InstagramIcon className="w-6 h-6 text-slate-400" />
                <span>Instagram</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <SendIcon className="w-6 h-6 text-slate-400" />
                <span>Contact</span>
              </div>
              <div className="flex gap-1 items-center">
                <MailIcon className="w-6 h-6 text-slate-400" />
                <span>Newsletter</span>
              </div>
            </div>
          </div>
          <div className="flex items-baseline justify-between w-[100%]">
            <Logo className="h-12 w-12" />
            <p>
              &#169; {year}{' '}
              <span className=" tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-800 to-yellow-400">
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
