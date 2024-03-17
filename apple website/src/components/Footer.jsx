import { footerLinks } from '../constants';
import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="font-semibold text-gray text-xs">
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{' '}
            <span className="underline text-blue cursor-pointer">
              {' '}
              Find an Apple store.
            </span>{' '}
            or{' '}
            <span className="underline text-blue cursor-pointer">
              other retailer
            </span>{' '}
            near you.
          </p>
          <p>Or call +91-0000-1111-11</p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col justify-between items-center">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={i} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col justify-between items-center">
          <p className="font-semibold text-gray text-xs">
            This website is developed by Bhaskar Sahu from{' '}
            <a
              href="https://www.youtube.com/@javascriptmastery"
              target="blank"
              className="text-blue underline"
            >
              Javascript Mastery
            </a>{' '}
            Tutorials.
          </p>
          <div className="text-2xl flex gap-6">
            <a href="https://github.com/Bhaskarsahu23" target="blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bhaskar-sahu-975948212/"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/BHASKAR23_98" target="blank">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
