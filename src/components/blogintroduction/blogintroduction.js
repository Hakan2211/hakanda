import React from 'react';
import TwitterIcon from '../icons/twitterIcon';
import ArrowUpRight from '../icons/arrow-up-right';
import { Button } from '../ui/button';
import Link from 'next/link';

function BlogIntro() {
  return (
    <div className="flex flex-col gap-6 col-start-2 col-end-3 ">
      <div className="leading-relaxed tracking-wider text-[var(--text-color-primary-800)]">
        <h1 className="font-medium">
          Welcome! I am{' '}
          <span className="font-semibold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-800 to-yellow-400">
            Hakan
          </span>
          . This blog serves as a hub for my explorations into{' '}
          <span className="bg-[var(--background-topic-yellow)] rounded-lg p-1">
            psychology
          </span>
          ,
          <span className="bg-[var(--background-topic-red)] rounded-lg p-1">
            neuroscience
          </span>
          , the dynamics of the{' '}
          <span className="bg-[var(--background-topic-blue)] rounded-lg p-1">
            stock market
          </span>
          , and personal reflections on a broad spectrum of topics. Here, we
          look into complex interplay between{' '}
          <span className="-rotate-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-emerald-400">
            order
          </span>{' '}
          and{' '}
          <span className="inline-block rotate-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-800 to-lime-400 ">
            chaos
          </span>
          , seeking to understand the mechanisms that underlie our thoughts,
          actions and the broader economic and social systems.
        </h1>
        <h2 className="font-normal text-[var(--text-color-primary-600)]">
          Reflecting on the nature of our explorations, Friedrich Nietzsche's
          words resonate deeply:{' '}
          <span className="italic underline-offset-8 underline">
            "One must still have chaos in oneself to be able to give birth to a
            dancing star."
          </span>{' '}
          This space is dedicated to the pursuit of knowledge and insight,
          acknowledging the chaos that fuels our quest for clarity and the
          structures we construct in response.
        </h2>
        <h2 className="font-normal text-[var(--text-color-primary-600)]">
          Join me in this exploration, where we strive to discern meaning amidst
          the tumult, embracing the elegance of structure as we navigate through
          the uncertainties of life.
        </h2>
      </div>
      <div className="flex gap-4">
        <div className="relative group">
          <div className="w-20 h-6 absolute left-4 bg-yellow-400 filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out "></div>
          <Button className="relative z-10 bg-[var(--text-color-primary-100)] text-yellow-600 hover:bg-[var(--text-color-primary-200)] transition-bg duration-300 ease-in-out ">
            <Link href={'/about'} className="flex items-center">
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
