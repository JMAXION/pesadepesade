// StockModalMap.jsx
import React, { useEffect } from "react";

const { kakao } = window;

export default function StockModalMap({ places }) {
  useEffect(() => {
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
        selectedLocation = locations.seongsu;
        break;
      case "hannam":
        selectedLocation = locations.hannam;
        break;
      default:
        selectedLocation = locations.seongsu; // 기본값 설정
        break;
    }

    var staticMapContainer = document.getElementById("staticMap"),
      staticMapOption = {
        center: selectedLocation.latlng,
        level: 3, // 확대 레벨
        marker: [
          {
            position: selectedLocation.latlng,
            text: selectedLocation.title, // 마커에 표시될 텍스트
          },
        ],
      };

    // 이미지 지도를 생성합니다
    new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
  }, [places]);

  return (
    <div
      id="staticMap"
      style={{ width: "500px", height: "500px", zIndex: 1, margin: "0 auto" }}
    ></div>
  );
}
