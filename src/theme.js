import React from "react";
import { Global as EmoGlobal, css } from "@emotion/core";
import facepaint from "facepaint";

// NOTES
/**
 * middle width: 1060
 * nav height: 64px
 */

const bps = ["400", "600", "800", "1060"];

// MQ EXAMPLES
// ${mq[1]} {
//   display: none;
// }
// import { mq } from "../../theme";

// ${mq[3]} {
//   font-size: 65px;
// }
// ${mq[2]} {
//   font-size: 50px;
// }
// ${mq[1]} {
//   font-size: 30px;
// }
// ${mq[0]} {
//   font-size: 20px;
// }

/**
 * NOTES
 * Upcoming.jsx uses a mq
 */

export const mq = bps.map((bp) => `@media (max-width: ${bp}px)`);

export const mqO = facepaint([
  `@media(max-width: ${bps[3]}px)`,
  `@media(max-width: ${bps[2]}px)`,
  `@media(max-width: ${bps[1]}px)`,
  `@media(max-width: ${bps[0]}px)`,
]);

export const mqNew = (bp) => `@media (max-width: ${bp}px)`;

export const theme = {
  colors: {
    ylc_blue: "#2F3575",
    text: "#02111B",
    light_accent: "#EBF2FA",
    medium_accent: "#B4CDED",
    lighter_grey: "#FDFDFD",
    medium_grey: "#EFEFEF",
    faded_text: "#B3B7BA",
  },
  zIndex: {
    first: 10,
    second: 20,
    third: 30,
    fourth: 40,
    top: 50,
  },
  fonts: {
    big_header: css`
      font-family: Poppins;
      font-weight: bolder;
      ${mqO({
        fontSize: ["75px", null, "60px", "40px", null],
      })}
    `,
    medium_header: css`
      font-family: Poppins;
      font-weight: bold;
      ${mqO({
        fontSize: ["36px", null, null, "25px", null],
      })}
    `,
    small_header: css`
      font-size: 24px;
      font-family: Poppins;
      font-weight: bold;
    `,
    extra_small_header: css`
      font-size: 20px;
      font-family: Poppins;
      font-weight: bold;
    `,
    body_text: css`
      font-size: 16px;
      font-family: Noto Sans;
      ${mq[2]} {
        font-size: 14px;
      }
    `,
    body_text_bold: css`
      font-size: 16px;
      font-family: Noto Sans;
      font-weight: bold;
      ${mq[2]} {
        font-size: 14px;
      }
    `,
    small_body_text: css`
      font-size: 12px;
      font-family: Noto Sans;
      ${mq[2]} {
        font-size: 10px;
      }
    `,
    large_button_text: css`
      font-size: 14px;
      font-family: Poppins;
      /* font-weight: bold; */
    `,
    small_button_text: css`
      font-size: 12px;
      font-family: Poppins;
      /* font-weight: bold; */
    `,
  },
  hover: {
    box: css`
      /* box-shadow: 0px 4px 4px lightgray; */
      /* box-shadow: 1px 0px 4px 1px lightgray; */
      box-shadow: 1px 0px 6px 4px lightgray;
    `,
  },
};

export const Global = () => (
  <EmoGlobal
    styles={(p) => css`
      * {
        box-sizing: border-box;
      }
      html {
        @font-face {
          font-family: Noto Sans;
          src: url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap");
        }
        @font-face {
          font-family: Poppins;
          src: url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");
        }
      }
      body {
        margin: 0;
        a {
          text-decoration: none;
          color: inherit;
          &:hover: {
            color: "#EFEFEF";
          }
        }
      }
    `}
  />
);
