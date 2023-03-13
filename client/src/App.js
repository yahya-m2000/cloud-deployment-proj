import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile } from "./screens";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* vietnamese */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/quicksand/v30/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58m-wjwxUD2GF9Zc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/quicksand/v30/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58i-wjwxUD2GF9Zc.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/quicksand/v30/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-wjwxUD2GFw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
 /* cyrillic-ext */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zo-mM4MwWJXNqA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zoamM4MwWJXNqA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zo2mM4MwWJXNqA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zoymM4MwWJXNqA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lobster/v28/neILzCirqoswsqX9zoKmM4MwWJU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const res = await fetch("http://localhost:3000/users", {
        mode: "cors",
      });
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    async function fetchMessageData() {
      const res = await fetch("http://localhost:3000/messages", {
        mode: "cors",
      });
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    fetchUserData();
    fetchMessageData();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
