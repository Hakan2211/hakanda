import React from 'react';

function BlogIntro() {
  return (
    <div className="flex flex-col gap-6 col-start-2 col-end-3 ">
      <div className="leading-relaxed tracking-wider text-slate-800">
        <h1 className="font-medium">
          Welcome! I am{' '}
          <span className="font-semibold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-800 to-yellow-400">
            Hakan
          </span>
          . This blog serves as a hub for my explorations into{' '}
          <span className="bg-yellow-200 rounded-lg p-1">psychology</span>,
          <span className="bg-red-200 rounded-lg p-1">neuroscience</span>, the
          dynamics of the{' '}
          <span className="bg-blue-200 rounded-lg p-1">stock market</span>, and
          personal reflections on a broad spectrum of topics. Here, we delve
          into complex interplay between{' '}
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
        <h2 className="font-normal text-slate-600">
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
        <h2 className="font-normal text-slate-600">
          Join me in this exploration, where we strive to discern meaning amidst
          the tumult, embracing the elegance of structure as we navigate through
          the uncertainties of life.
        </h2>
      </div>
      <div>Links</div>
    </div>
  );
}

export default BlogIntro;
