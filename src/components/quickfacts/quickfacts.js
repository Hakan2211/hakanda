import ArrowRight from '../icons/arrow-right';
import Textlink from '../textlink/textlink';

function QuickFacts() {
  return (
    <div className="text-base leading-[1.9] tracking-[0.3px] text-[var(--text-color-primary-600)]">
      <div className="text-2xl py-6 tracking-wider underline underline-offset-4 text-[var(--text-color-primary-700)] ">
        Quick facts about me
      </div>
      <div>
        <ul>
          <li className="flex gap-2">
            <ArrowRight className="w-4 h-4 shrink-0 translate-y-2" />
            <span className="text-balance">
              Graduated in 2020 with a Master of Science in
              <span className="text-nowrap"> Electrical Engineering </span>
              from the{' '}
              <a
                href="https://www.tu-braunschweig.de/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-color-primary-600)] underline underline-offset-2 hover:text-yellow-600 transition-colors duration-300 ease-in-out"
              >
                Technical University of Braunschweig.
              </a>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>Blood Type: AB negative.</span>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>Left-handed.</span>
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <span>Zodiac Sign: Scorpio.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuickFacts;
