import React from "react";
import { List } from "@react95/core";
import { Explorer103 } from "@react95/icons";
import * as S from "./layoutStyling";
import "./releasenotecss.scss"


function ReleaseNote({ closeReleaseNote, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Release_Note.txt"}
      closeModal={closeReleaseNote}
      height="100%"
      icon={<Explorer103 variant="16x16_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeReleaseNote}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <S.textModal>
            <div>
            <div className="full-screen">
                <h1>FlowKat v5.0.0 Build 183</h1>
                <b>릴리스 날짜: 2024.4.29</b>

                <p>대시보드 서버는 수집 서버 시간 조회 기능 때문에 이전 릴리스 된 API 서버, 수집 서버와 호환되지 않습니다.</p>

                <h2>수집 서버</h2>
                <ul>
                    <li>
                        <p><b className="feature-text">Feature</b> 성능 카운터 캐쉬에 수집 시점 시간 정보 추가</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> XLOG 프로파일 검색 최대 개수 500개에서 5,000개로 수정</p>
                    </li>
                </ul>
                <h2>API 서버</h2>
                <ul>
                    <li>
                        <p><b className="feature-text">Feature</b> 수집 서버 시간 조회 하는 API 추가</p>
                    </li>
                </ul>
                <h2>대시보드 서버</h2>
                <ul>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] 액티브 스피드 바 클릭시 오브젝트 조회 대상이 모니터링 중인 대상과 상이하게 나오는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] 방문자 수, 이번주 방문자 수, 일일 방문자 수 오브젝트 별 필터링 안되는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] XLOG 새로 고침 클릭 시 이전 데이터와 중복 되어 나오는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] 브라우저에서 URL를 /workspace 입력시 화면이 빈페이지에서 나오는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] API 서버 다운 또는 수집 서버 다운 발생시 XLOG 조회 오류 메세지 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] API 서버 다운 또는 수집 서버 다운 발생시 액티브 서비스 조회 오류 메세지 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [설정 > 사용자 관리] 권한 수정시 수집 서버 ID 가 변경 될 경우 전체가 선택 되는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> 대시보드 다운 발생 시 1분이내 복구가 안되면 강제 로그 아웃 되도록 수정</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> 대시보드 사용자 인증 토큰 시간 만료 여부 대시보드 서버 시간 기준 수정</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> 대시보드 차트 데이터 조회 시 수집 서버 시간 기준 표시하고 데이터를 가져올 수 있도록 수정</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> XLOG 프로파일 조회 최대 개수 기존 200개에서 5,000개로 수정</p>
                    </li>
                    <li>
                        <p><b className="feature-text">Feature</b> XLOG 프로파일 조회 화면에서 TOP-N,에러 필터 버튼 추가</p>
                    </li>
                    <li>
                        <p><b className="feature-text">Feature</b> 계정 패스워드 초기화 Command Line Tool 추가</p>
                    </li>
                </ul>

                <h1>FlowKat v5.0.0 Build 183</h1>
                <b>릴리스 날짜: 2024.4.29</b>

                <p>대시보드 서버는 수집 서버 시간 조회 기능 때문에 이전 릴리스 된 API 서버, 수집 서버와 호환되지 않습니다.</p>

                <h2>수집 서버</h2>
                <ul>
                    <li>
                        <p><b className="feature-text">Feature</b> 성능 카운터 캐쉬에 수집 시점 시간 정보 추가</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> XLOG 프로파일 검색 최대 개수 500개에서 5,000개로 수정</p>
                    </li>
                </ul>
                <h2>API 서버</h2>
                <ul>
                    <li>
                        <p><b className="feature-text">Feature</b> 수집 서버 시간 조회 하는 API 추가</p>
                    </li>
                </ul>
                <h2>대시보드 서버</h2>
                <ul>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] 액티브 스피드 바 클릭시 오브젝트 조회 대상이 모니터링 중인 대상과 상이하게 나오는 현상 수정나오는 현상 수정나오는 현상 수</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] 방문자 수, 이번주 방문자 수, 일일 방문자 수 오브젝트 별 필터링 안되는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] XLOG 새로 고침 클릭 시 이전 데이터와 중복 되어 나오는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] 브라우저에서 URL를 /workspace 입력시 화면이 빈페이지에서 나오는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] API 서버 다운 또는 수집 서버 다운 발생시 XLOG 조회 오류 메세지 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [실시간 > 대시보드] API 서버 다운 또는 수집 서버 다운 발생시 액티브 서비스 조회 오류 메세지 수정</p>
                    </li>
                    <li>
                        <p><b className="fixed-text">Fixed</b> [설정 > 사용자 관리] 권한 수정시 수집 서버 ID 가 변경 될 경우 전체가 선택 되는 현상 수정</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> 대시보드 다운 발생 시 1분이내 복구가 안되면 강제 로그 아웃 되도록 수정</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> 대시보드 사용자 인증 토큰 시간 만료 여부 대시보드 서버 시간 기준 수정</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> 대시보드 차트 데이터 조회 시 수집 서버 시간 기준 표시하고 데이터를 가져올 수 있도록 수정</p>
                    </li>
                    <li>
                        <p><b className="change-text">Change</b> XLOG 프로파일 조회 최대 개수 기존 200개에서 5,000개로 수정</p>
                    </li>
                    <li>
                        <p><b className="feature-text">Feature</b> XLOG 프로파일 조회 화면에서 TOP-N,에러 필터 버튼 추가</p>
                    </li>
                    <li>
                        <p><b className="feature-text">Feature</b> 계정 패스워드 초기화 Command Line Tool 추가</p>
                    </li>
                </ul>
            </div>
            </div>
        </S.textModal>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default ReleaseNote;
