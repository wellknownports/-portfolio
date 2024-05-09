import React from "react";
import { Frame, List } from "@react95/core";
import { Winpopup3, User } from "@react95/icons";
import * as S from "./layoutStyling";

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
          height: "352px",
        }}
      >
       만든 사람1: 오꿀복 <br />
       만든 사람2: 허디퍼 <br />
       만든 사람3: 스파크 <br />
      </Frame>
    </S.layoutMain>
  );
}

export default Makers;
