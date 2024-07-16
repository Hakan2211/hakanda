import { Tweet } from 'react-tweet';
import './TwitterEmbed.css';
function TwitterEmbed({ id }) {
  return (
    <div className="w-full" data-theme="dark">
      <Tweet style={{ maxWidth: '100%' }} id={id} />
    </div>
  );
}

export default TwitterEmbed;
