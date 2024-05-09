import React from "react";
import { Frame, List } from "@react95/core";
import { Msrating106, User } from "@react95/icons";
import * as S from "./layoutStyling";

function Yeonmu({ closeYeonmu, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Yeonmu"}
      closeModal={closeYeonmu}
      height="100%"
      icon={<Msrating106 variant="16x16_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeYeonmu}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <Frame
        boxShadow="none"
        style={{
          height: "352px",
        }}
      >
       연무기술 가로연 세로무
      </Frame>
    </S.layoutMain>
  );
}

export default Yeonmu;
