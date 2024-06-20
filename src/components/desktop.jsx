/* 리액트에서 useState, useCallback 원자재 수입 */
import React, { useState, useCallback } from "react";

/* @react95/core로부터 글로벌스타일, 테마프로바이더, 리스트, 프레임, 프로그레스바, 태스크바 원자재 수입 */
import {
  GlobalStyle,
  ThemeProvider,
  List,
  Frame,
  ProgressBar,
  TaskBar,
} from "@react95/core";

/* 이미지 넣으려면 이렇게 해야되드라 */
import FlowKat_Logo from "../images/flowkat-logo1.png";
import FlowKat_Bing from "../images/spining_flowkat.gif";

/* 수입 또 수입 */
import socialMedia from "./socialMedia";
import Shortcuts from "./desktopIcons";
import * as S from "./layoutStyling";
import "./styles.scss";

/* @react95/icons에서 아이콘으로 쓸 것들 수입 */
import {
  Progman37,
  Mspaint,
  User,
  CdMusic,
  Progman34,
  Mail,
  Main100,
  ComputerFind,
  Network3,
  Winpopup3,
} from "@react95/icons";

/* 금산 인삼, 풍기 인견, 포항 과메기 수입 */
import ReleaseNote from "./releasenote";
import CharacterDesign from "./characterdesign";
import Makers from "./makers";
import Yeonmu from "./yeonmu";


/* 데스크탑이라는 전체창에 대한 함수  */
function Desktop() {
  /* Mobile 감지해서 상태를 저장 */
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

/* 이건 아직 모르겠음 useState 깡통 만들어두는 듯. 어다가 쓰려나 */
  const [items] = useState([]);

  /* About Modal */
  const [showAboutModal, setShowAboutModal] = useState(true);
  const handleOpenAboutModal = useCallback(() => {
    setShowAboutModal(true);
  }, []);
  const handleCloseAboutModal = useCallback(() => {
    setShowAboutModal(false);
  }, []);

  /* Release Note Modal */
  const [showReleaseNoteModal, setShowReleaseNoteModal] = useState(true);
  const handleOpenReleaseNoteModal = useCallback(() => {
    setShowReleaseNoteModal(true);
  }, []);
  const handleCloseReleaseNoteModal = useCallback(() => {
    setShowReleaseNoteModal(false);
  }, []);

  /* Character Design Modal */
  const [showCharacterDesignModal, setShowCharacterDesignModal] = useState(false);
  const handleOpenCharacterDesignModal = useCallback(() => {
    setShowCharacterDesignModal(true);
  }, []);
  const handleCloseCharacterDesignModal = useCallback(() => {
    setShowCharacterDesignModal(false);
  }, []);

  /* Makers Modal */
  const [showMakersModal, setShowMakersModal] = useState(false);
  const handleOpenMakersModal = useCallback(() => {
    setShowMakersModal(true);
  }, []);
  const handleCloseMakersModal = useCallback(() => {
    setShowMakersModal(false);
  }, []);

    /* Yeonmu Modal */
    const [showYeonmuModal, setShowYeonmuModal] = useState(false);
    const handleOpenYeonmuModal = useCallback(() => {
      setShowYeonmuModal(true);
    }, []);
    const handleCloseYeonmuModal = useCallback(() => {
      setShowYeonmuModal(false);
    }, []);

  /* Manual Modal */
  const [showManualModal, setShowManualModal] = useState(false);
  const handleOpenManualModal = useCallback(() => {
    setShowManualModal(true);
  }, []);
  const handleCloseManualModal = useCallback(() => {
    setShowManualModal(false);
  }, []);

  /* Release Note Shortcut */
  const closeReleaseNote = () => {
    toggleReleaseNote(false);
  };

  const openReleaseNote = () => {
    toggleReleaseNote(true);
  };
  const [rnOpened, toggleReleaseNote] = useState(false);

  /* Character Design Shortcut */

  const closeCharacterDesign = () => {
    toggleCharacterDesign(false);
  };

  const openCharacterDesign = () => {
    toggleCharacterDesign(true);
  };

  const [cdOpened, toggleCharacterDesign] = useState(false);

  /* Makers Shortcut */

  const closeMakers = () => {
    toggleMakers(false);
  };

  const openMakers = () => {
    toggleMakers(true);
  };

  const [mkOpened, toggleMakers] = useState(false);

  /* Yeonmu Shortcut */

  const closeYeonmu = () => {
    toggleYeonmu(false);
  };

  const openYeonmu = () => {
    toggleYeonmu(true);
  };


  const [ymOpened, toggleYeonmu] = useState(false);

/* 윈도우 데스크탑을 그려 보아요 */

  return (
    <ThemeProvider theme="millenium">
      <GlobalStyle></GlobalStyle>
      {showAboutModal && (
        <S.layoutMain
          isMobile={isMobile}
          icon={<ComputerFind variant="16x16_4" />}
          title={"About.txt"}
          closeModal={handleCloseAboutModal}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseAboutModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <S.layoutMainContent bg="white" boxShadow="out">
            <S.textModal>
              <h1>FlowKat!</h1>
              <p>
               FlowKat은 오픈소스 APM의 대표격인 스카우터 기반의 Java 애플리케이션 성능 관리 솔루션입니다.
               스카우터가 가진 강력한 기능들은 사용성이 높은 웹으로 이식하고 사용자 편의와 분석 기능을 덧붙여 완성했습니다.
               서비스 전반의 흐름을 수집하여 직관적이고 다양한 방법으로 사용자에게 새로운 모니터링 경험을 제공하려 노력하는 미어캣.
               바로 플로우캣입니다.
              </p>
            <div align="center">
                  <img
                    src={FlowKat_Logo}
                    aria-hidden
                    alt="귀여운 플로우캣 로고"
                    class="full-width-image"
                  ></img>
            </div>
                <div align="center" class="image-text">
                  <p>flowkat_logo.png</p>

                </div>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showCharacterDesignModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"flowkat design.jpeg"}
          closeModal={handleCloseCharacterDesignModal}
          icon={<User variant="16x16_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseCharacterDesignModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
         <S.layoutMainContent bg="white" boxShadow="out">
            <S.textModal>
              <h1>FlowKat & Scouter</h1>
              <p>
               FlowKat은 오픈소스 APM의 대표격인 스카우터 기반의 Java 애플리케이션 성능 관리 솔루션입니다.
               스카우터가 가진 강력한 기능들은 사용성이 높은 웹으로 이식하고 사용자 편의와 분석 기능을 덧붙여 완성했습니다.
               서비스 전반의 흐름을 수집하여 직관적이고 다양한 방법으로 사용자에게 새로운 모니터링 경험을 제공하려 노력하는 미어캣.
               바로 플로우캣입니다.
              </p>
            <div align="center">
              <img
                src={FlowKat_Bing}
                aria-hidden
                alt="BingBing FlowKat"
                class="full-width-image"
              ></img>
            </div>
            <div class="image-text">
              <p align="center">spining-flowkat.gif</p>
            </div>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showManualModal && (
        <S.layoutMain
          isMobile={isMobile}
          closeModal={handleCloseManualModal}
          height="100%"
          icon={<Mspaint variant="16x16_4" />}
          width={340}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseManualModal}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
          title="FlowKat_Quick_Guide.doc"
        >
          <S.textModal>
          <p>
            <h1>Quick Guide</h1>
            <b>플로우캣 서비스를 빠르게 만나볼 수 있는 가이드 문서입니다.</b>
            <br />
            <h2>설치 단계 요약</h2>

            1. 플로우캣 서버 설치 파일(flowkat-package.tar.gz)을 준비된 서버(Ubuntu 22.04)에 업로드합니다. <br />
            2. 설치 계정은 root를 제외한 계정으로 준비합니다. ex) flowkat, apm 등등 <br />
            3. 설치 파일 압축 해제 <br />
            4. 수집 서버 설치 <br />
            5. API 서버 설치 <br />
            6. 대시보드 서버 설치 <br />
            7. 에이전트 설치 <br />
            8. 플로우캣 서비스 확인 <br />

            <h2>환경 변수 설정</h2>
            <b>원활한 설치 진행을 위해 다음과 같이 사용자 계정의 환경 변수를 수정합니다.</b>
            <br />

            <code>
              $vi ~/.bashrc
              ...
              # 예시
              export JAVA_HOME=/home/ubuntu/jdk8u402-b06
              export FLOWKAT_HOME=/home/ubuntu/flowkat
              export FLOWKAT_COLLECTOR_SERVER_HOME=$FLOWKAT_HOME/collect.server
              export FLOWKAT_API_SERVER_HOME=$FLOWKAT_HOME/api.server
              export FLOWKAT_DASHBOARD_SERVER_HOME=$FLOWKAT_HOME/dashboard.server
              ...
            </code>

           </p>
          </S.textModal>
        </S.layoutMain>
      )}
      <TaskBar
        list={
          <List>
            <List.Item
              as="a"
              href="mailto:admin@papercraft.dev"
              icon={<Mail variant="32x32_4" />}
              target="_blank"
            >
              &nbsp;Email me
            </List.Item>
            <List.Divider />
            <List.Item icon={<Network3 variant="32x32_4" />}>
              Socials
              <List>
                {socialMedia.map(({ icon, name, url }) => (
                  <List.Item
                    as="a"
                    href={url}
                    icon={icon}
                    key={name}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {name}
                  </List.Item>
                ))}
              </List>
            </List.Item>
            <List.Item
              icon={<User variant="32x32_4" />}
              onClick={handleOpenCharacterDesignModal}
            >
              &nbsp;FlowKat
            </List.Item>
            <List.Item
              icon={<Mspaint variant="32x32_4" />}
              onClick={handleOpenManualModal}
            >
              &nbsp;Manual
            </List.Item>
            <List.Divider />
            <List.Item
              icon={<ComputerFind variant="32x32_4" />}
              onClick={handleOpenAboutModal}
            >
              &nbsp;About
            </List.Item>
          </List>
        }
      />
      <React.Fragment>
        <Shortcuts
          openReleaseNote={openReleaseNote}
          openCharacterDesign={openCharacterDesign}
          openMakers={openMakers}
          openYeonmu={openYeonmu}
        />
        {rnOpened && (
          <ReleaseNote
            items={items}
            closeReleaseNote={closeReleaseNote}
            isMobile={isMobile}
          />
        )}
        {cdOpened && <CharacterDesign items={items} closeCharacterDesign={closeCharacterDesign} isMobile={isMobile} />}
        {mkOpened && (
          <Makers items={items} closeMakers={closeMakers} isMobile={isMobile} />
        )}
        {ymOpened && (
          <Yeonmu items={items} closeYeonmu={closeYeonmu} isMobile={isMobile} />
        )}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Desktop;