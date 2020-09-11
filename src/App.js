import React, { useEffect } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import { Router } from "@reach/router";
import Loader from "./shared/Loader";
import Footer from "./shared/Footer";
import Navigation from "./shared/Navigation";
// styling
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme, Global } from "./theme";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["/admin"]);

const githubBasePath = "/ylc_website/_v2";

// STYLED COMPONENTS
const PageContent = styled.div`
  height: 100%;
`;

const ComponentContent = styled.div`
  height: 100%;
`;

const FullPage = styled.div`
  background: ${(p) =>
    p.routePath === "about/opportunities"
      ? p.theme.colors.light_accent
      : "transparent"};
`;

const appBodyStyles = (theme) => css`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 230px;
`;

//Dynamic routes
let CMS = undefined;
if (typeof document !== "undefined" && typeof window !== "undefined") {
  CMS = require("./CMS").default;
}

const ScrollToTop = ({ children, location }) => {
  useEffect(() => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Root>
      <Global />
      <ThemeProvider theme={theme}>
        <PageContent className="page-content">
          <React.Suspense fallback={<Loader />}>
            <Router>
              <ScrollToTop path="/">
                {CMS && <CMS path={`/admin`} />}
                <Routes
                  path="*"
                  render={({ routePath, getComponentForPath }) => {
                    const el = getComponentForPath(routePath);
                    return (
                      <FullPage routePath={routePath}>
                        <div css={appBodyStyles}>
                          <Navigation
                            // isHome={routePath === githubBasePath + "/"}
                            isHome={routePath === "/"}
                          />
                          <ComponentContent routePath={routePath}>
                            {el}
                          </ComponentContent>
                          <Footer />
                        </div>
                      </FullPage>
                    );
                  }}
                />
              </ScrollToTop>
            </Router>
          </React.Suspense>
        </PageContent>
      </ThemeProvider>
    </Root>
  );
}

export default App;
