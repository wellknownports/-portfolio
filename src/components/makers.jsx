import React from "react";
import { Frame, List } from "@react95/core";
import { Winpopup3, User } from "@react95/icons";
import * as S from "./layoutStyling";

import wellknownports from "../images/wp_icon.png";
import scouter from "../images/scouter_icon.png";
import jbt from "../images/jbt_icon.png";

function Makers({ closeMakers, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Makers"}
      closeModal={closeMakers}
      height="100%"
      icon={<User variant="16x16_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeMakers}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <Frame
        boxShadow="none"
        style={{
          height: "1080px",
        }}
      >
      <h1>여기에는 FlexBox 사용해보겠습니다.</h1>
      https://d2.naver.com/helloworld/8540176
      <div>
       <img
          src={wellknownports}
          aria-hidden
          alt="wellknownports"
        ></img>
       장승환 차장

           주요 업무: FlowKat 총괄
           업무 상세:
               제품 납품
               고객 응대
               업무 보고
               일정 관리
               기술 지원
               업무 협의
               제품 기획 및 프로토타입 제작
       </div>

       <div>
         <img
           src={scouter}
           aria-hidden
           alt="scouter"
         ></img>
       허여송 차장

           주요 업무: FlowKat 개발
           업무 상세:
               제품 기능 로드맵 관리
               제품 릴리스 관리
               제품 트러블 슈팅 관리
               제품 데이터 수집 개발
               제품 데이터 저장 개발
               제품 데이터 연동 인터페이스 개발
               제품 데이터 시각화 개발
               제품 기술 지원 및 컨설팅
       </div>
        <div>
         <img
           src={jbt}
           aria-hidden
           alt="jbt"
         ></img>
       이향희 과장

           주요 업무: FlowKat 디자인
           업무 상세:
               기획의 시각화
               개발자와 협업하여 설계 및 구현
               브랜드 가이드라인 수립
               홍보 실행에 필요한 소재 제작
               온/오프라인 브랜드 자산 고도화
               상품 제작 및 판촉물 제작
               인터페이스 디자인(설계)
               디자인 시스템 구축
               화면 단위 구성
               개발도구를 이용한 웹 컨텐츠 관리
       </div>
      </Frame>
    </S.layoutMain>
  );
}

export default Makers;
