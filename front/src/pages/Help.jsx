import React from "react";
import SubTitle from "../components/SubTitle";
import "../css/footer.css";

export default function Help() {
  return (
    <div className="content">
      <SubTitle title="Help" />
      <div className="help-container">
        <ul>
          <li>
            <h1>고객센터</h1>
            <p className="help-header">
              Tel 02-6956-0053 <span> | </span>
              Email <a href="mailto:info@pesade.kr">info@pesade.kr</a>
              <span> | </span>
              상담시간 10am - 5pm / 점심시간 11:30am - 1:00pm
            </p>
          </li>
          <li>
            <h1>배송</h1>
            <p className="help-content">
              주문 조회 - 로그인 후 ACCOUNT - ‘주문조회’ 에서 확인하실 수
              있습니다.
              <br />
              배송 조회 - CJ대한통운(www.cjlogistics.com)
              <br />
              배송 지역 - 대한민국 전국
              <br />
              배송 방법 - CJ대한통운 배송
              <br />
              배송 비용 - 전 제품 무료 배송 (Acc 단독구매시 제외)
              <br />
              배송 기간 - 영업일 기준 1-2일 내 출고 진행됩니다. 배송은 지역
              택배사 사정에 따라 약간의 지연이 생길 수 있습니다.
              <br />
              도서, 산간 지역은 배송일이 추가적으로 소요될 수 있으며, 상품의
              재고 상황에 따라 다소 지연될 수 있습니다.
            </p>
          </li>
          <li>
            <h1>반품</h1>
            <p className="help-content">
              교환 및 반품 안내
              <br />
              - 단순 변심으로 인한 반품은 제품 수령일로부터 7일 이내에 신청이
              가능합니다.
              <br />
              - 교환 및 반품 시 Q&A 또는 페사드 고객센터(02-6956-0053)를 통해
              문의 부탁드립니다. (카카오톡 채널 문의 가능)
              <br />
              - 모든 환불은 반품 배송비를 차감한 금액으로 환불 처리됩니다.
              <br />
            </p>
          </li>
          <li>
            <h1>교환 및 반품 불가 안내</h1>
            <p className="help-content">
              - 단순 변심으로 인한 교환, 반품 요청이 상품을 수령한 날로부터 7일
              을 경과한 경우.
              <br />
              - 상품을 사용한 흔적, 상품의 가치가 훼손되어 재판매가 불가한 경우.
              가능합니다.
              <br />
              - 구매자의 책임 있는 사유로 상품의 부속품과 택·라벨, 세트 상품
              구성의 일부를 훼손 및 사용, 제거한 경우, 본품 박스 개봉한 경우.
              <br />
              - 사전 접수 없이 일방적으로 보낸 상품 또는 교환 및 환불로 처리가
              불가한 경우 착불로 반송 처리됩니다.
              <br />- 반품하실 때는 부속품을 반드시 상품과 동시에 반송해
              주십시오. (상품을 처음 받아보았을 때의 원 상태)
            </p>
          </li>
          <li>
            <h1>포인트</h1>
            <p className="help-content">
              - 첫 회원가입 시 즉시 사용 가능한 3000원 상당의 할인 쿠폰이
              지급됩니다.
              <br />
              - 회원가입 시 제공되는 쿠폰은 90일 이내 사용 가능합니다.
              <br />
              - 타 쿠폰 과 중복 적용이 불가능합니다.
              <br />
              - 구매 후기 작성 시, 포인트가 지급됩니다. (텍스트 500p /
              포토1000p)
              <br />- 포인트는 누적 포인트 최소 1000포인트 이상일 때 사용
              가능합니다.
              <br />
              - Acc 메뉴는 포인트 결제 적용되지 않습니다.
              <br />- 비회원 구매 시 후기 포인트 적용이 불가능합니다.(네이버페이
              구매 포함)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
