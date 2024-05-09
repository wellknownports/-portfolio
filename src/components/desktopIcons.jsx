import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import IconBox from "./iconBox";
import IconText from "./iconText";
import "./styles.scss";
import { Winpopup3, Explorer103, CdMusic, User, Msrating106 } from "@react95/icons";

function Shortcuts({ openReleaseNote, openCharacterDesign, openMakers, openYeonmu }) {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle></GlobalStyle>
        <IconBox className="pointer" onClick={() => openYeonmu()}>
          <Msrating106 className="pointer" variant="32x32_4" />
          <IconText className="pointer">연무기술.txt</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openReleaseNote()}>
          <Explorer103 className="pointer" variant="32x32_4" />
          <IconText className="pointer">ReleaseNote.txt</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openCharacterDesign()}>
          <Winpopup3 className="pointer" variant="32x32_4" />
          <IconText className="pointer">Character.txt</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openMakers()}>
          <User className="pointer" variant="32x32_4" />
          <IconText className="pointer">Makers.txt</IconText>
        </IconBox>
      </ThemeProvider>
    </div>
  );
}

export default Shortcuts;
