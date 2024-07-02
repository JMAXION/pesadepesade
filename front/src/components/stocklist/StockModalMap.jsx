import React, { useEffect } from "react";

const { kakao } = window;

export default function StockModalMap() {
  useEffect(() => {
    // 성수점과 한남점의 위치 좌표
    const locations = [
      {
        title: "페사드 성수점",
        latlng: new kakao.maps.LatLng(37.544579, 127.055831),
      },
      {
        title: "페사드 한남점",
        latlng: new kakao.maps.LatLng(37.529659, 127.001678),
      },
    ];

    var staticMapContainer = document.getElementById("staticMap"),
      staticMapOption = {
        center: new kakao.maps.LatLng(37.537187, 127.005476), // 중앙 좌표는 두 위치의 중간 지점으로 설정
        level: 3, // 확대 레벨
        marker: locations.map((location) => ({
          position: location.latlng,
          text: location.title, // 마커에 표시될 텍스트
        })),
      };

    // 이미지 지도를 생성합니다
    new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
  }, []);

  return (
    <div
      id="staticMap"
      style={{ width: "500px", height: "500px", zIndex: 1, margin: "0 auto" }}
    ></div>
  );
}
