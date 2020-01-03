import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* ***********************************
 *
 *    Ire's CSS Reset & Base
 *
 * *********************************** */
/* Reset margin, padding, border
 * *********************************** */
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
span,
em,
small,
strong,
sub,
sup,
mark,
del,
ins,
strike,
abbr,
dfn,
blockquote,
q,
cite,
code,
pre,
ol,
ul,
li,
dl,
dt,
dd,
div,
section,
article,
main,
aside,
nav,
header,
hgroup,
footer,
img,
figure,
figcaption,
address,
time,
audio,
video,
canvas,
iframe,
details,
summary,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
}

/* Typography
  * *********************************** */
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.4;
}

* {
  font-family: "Noto Sans Japanese", "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro",
    "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
  font-size: inherit;
  line-height: inherit;
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  opacity: 0.7;
}

button {
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}

/* Layout
  * *********************************** */
article,
aside,
footer,
header,
nav,
section,
main {
  display: block;
}

* {
  box-sizing: border-box;
  color: #707070;
}

*:before,
*:after {
  box-sizing: inherit;
}

/* Elements
  * *********************************** */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

ol,
ul {
  list-style: none;
}

img,
video {
  max-width: 100%;
}

img {
  border-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}

/* Attributes & states
  * *********************************** */
[hidden] {
  display: none !important;
}

[disabled] {
  cursor: not-allowed;
}

:focus:not(:focus-visible) {
  outline: none;
}

/* Utility classes
  * *********************************** */
.sr-only {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  left: -9999px;
  top: -9999px;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

body {
  position: relative;
  background: #f0f3f4;
}
`;

export default GlobalStyle;
