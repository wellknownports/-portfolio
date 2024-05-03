import React from "react";
import { List } from "@react95/core";
import { Awfxcg321303 } from "@react95/icons";
import * as S from "./layoutStyling";
import FlowKat_Faker from "../images/faker_flowkat.png";

function CharacterDesign({ closeCharacterDesign, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Character_Design.txt"}
      closeModal={closeCharacterDesign}
      height="100%"
      icon={<Awfxcg321303 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeCharacterDesign}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <S.textModal>
          <h1>MSI 2024 Fighting!!</h1>
            <div align="center">
                  <img
                    src={FlowKat_Faker}
                    aria-hidden
                    alt="페이커 빙의"
                    class="full-width-image"
                  ></img>
            </div>
                <div align="center" class="image-text">
                  <p>모든트래픽은저를통합니다.png</p>
                </div>
                Everything okay, my man?
                Turn the music up
                Mm, we're not going home tonight, alright
                네 계획에 없던 party
                Up and down, round and round
                Hit the spot, spot, spot, spot
                엎치락뒤치락 정신을 왜 차려? 왜?
                Hey, girl, where you at?
                데리러 갈게 send me the address (hey)
                No dress code 대충 걸치면 돼
                우린 꾸밈없고, 나머진 억텐 (yeah)
                농익은 분위기 it's too sticky (sticky)
                마구 부대껴, 어머! 정전기 찌릿 (찌릿)
                여긴 내 동생 저기는 내 homie (what's up?)
                순둥이지만 음악 틀면 눈 돌지
                Chillin' out, we yellin' out, one more
                찐친 vibe 위아래 안 따져
                부끄런 I 피식 E를 드러내
                포위됐어 넌, now hands in the air
                Mm, we're not going home tonight, alright
                네 계획에 없던 party
                Up and down, round and round
                Hit the spot, spot, spot, spot
                엎치락뒤치락 정신을 왜 차려? 왜?
                Up and down, round and round
                Everybody, hit the spot
                Up and down, round and round
                Everybody, hit the top
                Up and down, round and round
                Everybody, make it loud
                Up and down, round and round
                Ain't nobody hold us down
                어깨 툭툭 he say, "Yo, JENNIE
                Told you that 도망치면 배신"
                Yeah, I know, I know
                일단 더우니까 바람 쐬러 나가
                Bae, 나갈 때 뒤로 딱 붙어
                땀 뺐으니까 후딱 ice cream, go
                들키면 피곤해져, put your mask on
                한바퀴 돌고 퀵하게 조인해 (ah)
                우리 프로젝트 타이틀 명은 "J-Z"
                We gon' run this town, that's crazy (uh)
                짱박아 놨던 네 똘끼를 꺼내, huh
                해방됐어 넌, now hands in the air
                Mm, we're not going home tonight, alright
                네 계획에 없던 party
                Up and down, round and round
                Hit the spot, spot, spot, spot
                엎치락뒤치락 정신을 왜 차려? 왜?
                Up and down, round and round
                Everybody, hit the spot
                Up and down, round and round
                Everybody, hit the top
                Up and down round and round
                Everybody, make it loud
                Up and down, round and round
                Everybody, stop, wait a minute, ow
                Hey, hey
                Yeah, come vibe with us, ride with us (hey)
                Hey, hey
                Hey
        </S.textModal>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default CharacterDesign;
