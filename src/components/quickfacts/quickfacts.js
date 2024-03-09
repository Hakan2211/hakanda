import ArrowRight from '../icons/arrow-right';

function QuickFacts() {
  return (
    <div className="text-base leading-[1.9] tracking-[0.3px] text-slate-600">
      <h2 className="text-2xl font-medium underline underline-offset-4">
        Quick facts about me
      </h2>
      <div>
        <ul>
          <li className="flex  gap-2">
            <ArrowRight className="w-4 h-4 translate-y-2" />
            <span className="text-balance">
              I graduated in 2020 with a Master of Science in
              <span className="text-nowrap"> Electrical Engineering </span>
              from the Technical University of Brunswick.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>My blood type is AB negative.</span>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>I am left-handed.</span>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>My zodiac sign is Scorpio.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuickFacts;
