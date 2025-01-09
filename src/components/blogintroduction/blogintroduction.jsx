import React from 'react';
import TwitterIcon from '../icons/twitterIcon';
import ArrowUpRight from '../icons/arrow-up-right';
import { Button } from '../ui/button';
import Link from 'next/link';
import ArrowLeft from '../icons/arrow-left';

function BlogIntro() {
  return (
    <div className="flex flex-col gap-6 col-start-2 col-end-3 ">
      <Link
        className="flex items-center w-fit text-sm gap-1 text-[var(--text-color-primary-900)] hover:text-yellow-600 transition-colors duration-300 ease-in-out  group"
        href={'/'}
      >
        <ArrowLeft className="w-4 h-4 transition-transform transform group-hover:-translate-x-1 hover:ease-in-out duration-500 " />
        <span className="">Home</span>
      </Link>
      <div className="text-balance leading-relaxed tracking-wider text-[var(--text-color-primary-800)]">
        <h1 className="font-medium md:font-normal tracking-wider leading-[1.9] md:leading-loose text-[1.25rem] md:text-[1.5rem]">
          Welcome! I am{' '}
          <span className="font-semibold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-800 to-yellow-400">
            Hakan
          </span>
          , and I'm excited to welcome you to my blog. This is where I dive into
          topics like{' '}
          <span className="bg-[var(--background-topic-yellow)] rounded-lg p-1 mr-1">
            psychology
          </span>
          ,
          <span className="bg-[var(--background-topic-red)] rounded-lg p-1 mr-1 ml-1">
            neuroscience
          </span>
          , the{' '}
          <span className="bg-[var(--background-topic-blue)] rounded-lg p-1 mr-1 ml-1">
            stock market
          </span>
          , and share my personal thoughts on a wide range of subjects.
          Together, we'll explore how{' '}
          <span className="-rotate-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-emerald-400">
            order
          </span>{' '}
          and{' '}
          <span className="inline-block rotate-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-800 to-lime-400 mr-1 ">
            chaos
          </span>
          interact, trying to understand what drives our thoughts and actions,
          as well as the bigger economic and social systems around us.
        </h1>
        <h2 className="font-normal leading-[1.9] tracking-widest text-[1rem] md:text-[1.25rem] text-[var(--text-color-primary-600)]">
          Nietzsche once said,{' '}
          <span className="italic underline-offset-8 underline">
            "One must still have chaos in oneself to be able to give birth to a
            dancing star."{' '}
          </span>
          This idea really hits home for me. Here, we're all about seeking
          knowledge and insights, embracing the chaos that helps us find
          clarity, and building the structures that support our understanding.
        </h2>
        <h2 className="font-normal leading-[1.9] tracking-widest text-[1rem] md:text-[1.25rem] text-[var(--text-color-primary-600)]">
          Join me on this journey as we search for meaning in the midst of
          life's ups and downs, appreciating the beauty of organized thinking
          while navigating through the uncertainties we all face.
        </h2>
      </div>
      <div className="flex gap-4">
        <div className="relative group">
          <div className="w-20 h-6 absolute left-4 bg-yellow-400 filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out "></div>
          <Button className="relative z-10 bg-[var(--text-color-primary-100)] text-yellow-600 hover:bg-[var(--text-color-primary-200)] transition-bg duration-300 ease-in-out ">
            <Link prefetch={true} href={'/about'} className="flex items-center">
              <span>About me</span>
              <ArrowUpRight className="ml-2 w-4 h-4 " />
            </Link>
          </Button>
        </div>

        <div>
          <div className="relative group">
            <div className="w-20 h-6 absolute left-4 bg-yellow-400 filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out "></div>
            <Button className="relative z-10 bg-[var(--text-color-primary-100)] text-yellow-600 hover:bg-[var(--text-color-primary-200)] transition-bg duration-300 ease-in-out ">
              <a
                className="flex items-center"
                href="https://twitter.com/hakanbilgo"
                target="blank"
              >
                <span>@hakanbilgo</span>
                <TwitterIcon className="ml-2 w-4 h-4 " />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogIntro;
