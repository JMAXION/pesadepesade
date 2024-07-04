import React, { useEffect, useRef, useState } from "react";
import StockModalMap from "./StockModalMap";
import "../../css/stock/stockmodal.css"; // CSS 파일을 import 합니다.
const { kakao } = window;

export default function StockModal({ type, onClose, places }) {
  const modalRef = useRef();
  const [fadeOut, setFadeOut] = useState(false); // 애니메이션
  console.log("placesfrommapcontainermodal", places);

  const locations = {
    seongsu: {
      title: "페사드 성수점",
      latlng: new kakao.maps.LatLng(37.542181, 127.0556108),
    },
    hannam: {
      title: "페사드 한남점",
      latlng: new kakao.maps.LatLng(37.537156, 126.99964),
    },
  };

  let selectedLocation;
  switch (places) {
    case "seongsu":
      selectedLocation = locations.seongsu.title;
      break;
    case "hannam":
      selectedLocation = locations.hannam.title;
      break;
    default:
      selectedLocation = locations.seongsu; // 기본값 설정
      break;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      onClose();
    }, 500);
  }; // 애니메이션

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className={`modal ${fadeOut ? "fade-out" : ""}`}>
        <div>{selectedLocation}</div>
        <StockModalMap places={places} />
      </div>
    </div>
  );
}
