import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function ProductInfo({ prop }) {
  const [isClick, setIsClick] = useState(false);

  function handleState() {
    setIsClick(!isClick);
  }

  return (
    <div className="gift-wrapper">
      <div
        className={`gift-content  ${isClick ? "active" : ""}`}
        onClick={handleState}
      >
        <span className="gift-your ">Notice</span>
        <FontAwesomeIcon
          className={`gift-arrow ${isClick ? "rotate" : ""}`}
          icon={faArrowRightLong}
        />
        {isClick && (
          <div className="gift-content-info poor-story-regular">
            <div className="product-notice" style={{ whiteSpace: "pre-wrap",fontSize:'16px' }}>
              {prop.pnotice}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
