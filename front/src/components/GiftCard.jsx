import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function GiftCard() {
  const [isClick, setIsClick] = useState(false);

  function handleState() {
    setIsClick(!isClick);
  }

  return (
    <div className="gift-wrapper">
      <div className={`gift-content ${isClick ? 'active' : ''}`} onClick={handleState}>
        <span className="gift-your">For your Gift</span>
        <FontAwesomeIcon className={`gift-arrow ${isClick ? 'rotate' : ''}`} icon={faArrowRightLong} />
        {isClick && (
          <div className="gift-content-info poor-story-regular">
            
            <div className="gift-desc">
              <span className="gift-card">메시지 카드 증정</span>
              <br />
              <span className="purchase-option">구매시 옵션에서 선택해주세요</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
