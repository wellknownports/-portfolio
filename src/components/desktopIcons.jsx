import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import IconBox from "./iconBox";
import IconText from "./iconText";
import "./styles.scss";
import { Awfxcg321303, Explorer103, CdMusic } from "@react95/icons";

function Shortcuts({ openReleaseNote, openCharacterDesign, openMakers }) {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle></GlobalStyle>
        <IconBox className="pointer" onClick={() => openReleaseNote()}>
          <Explorer103 className="pointer" variant="32x32_4" />
          <IconText className="pointer">ReleaseNote.txt</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openCharacterDesign()}>
          <Awfxcg321303 className="pointer" variant="32x32_4" />
          <IconText className="pointer">Character.txt</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openMakers()}>
          <CdMusic className="pointer" variant="32x32_4" />
          <IconText className="pointer">Makers.txt</IconText>
        </IconBox>
      </ThemeProvider>
    </div>
  );
}

export default Shortcuts;
