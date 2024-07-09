
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function GiftCard(){
  const [isClick, setIsClick] = useState(false) 
  function handleState(){
    setIsClick(!isClick)
  }

  return(
    <div className="gift-wrapper"> 
      <div className="gift-content" onClick={handleState}>
        <span className="gift-your">For your Gift</span> <FontAwesomeIcon className="gift-arrow" icon={faArrowRightLong } />
      {isClick &&
        <div className="gift-content-info">
          <img src="https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/wJk/img/detail/message_card.png" alt="" />
      
        <div className="gift-desc">
         <span className="gift-card">메시지 카드 증정</span><br></br>
         <span className="purchase-option">구매시 옵션에서 선택해주세요</span>
        </div>
        </div>
       }
      </div>
    </div>
  )
}