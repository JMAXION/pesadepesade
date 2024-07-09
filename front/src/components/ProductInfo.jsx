import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function ProductInfo({prop}){
  const [isClick, setIsClick] = useState(false);

  function handleState() {
    setIsClick(!isClick);
  }

  return (
    <div className="gift-wrapper">
      <div className={`gift-content ${isClick ? 'active' : ''}`} onClick={handleState}>
        <span className="gift-your">Product info</span>
        <FontAwesomeIcon className={`gift-arrow ${isClick ? 'rotate' : ''}`} icon={faArrowRightLong} />
        {isClick && (
          <div className="gift-content-info">
            <div>{prop.pinfo}</div>
          </div>
        )}
      </div>
    </div>
  );
}
