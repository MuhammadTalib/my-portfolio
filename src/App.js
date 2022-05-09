import React, { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./Components/sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/about";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import axios from "axios";
import backImage from "./Images/back2.png";
import Grid from "@mui/material/Grid";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { createTheme, adaptV4Theme } from "@mui/material/styles";
let primary = "#950740";

export const theme1 = createTheme(
  adaptV4Theme({
    palette: {
      primary: { main: primary, light: "#901f6117" },
      secondary: { main: "#829ae621" },
    },
  })
);
export function getFaviconEl(id) {
  return document.getElementById(id);
}

function App() {
  const [myInfo, setMyInfo] = useState(null);

  useEffect(() => {
    const getMyInfo = async () => {
      let result = await axios.get(
        "https://api.github.com/users/MuhammadTalib",
        {
          headers: {
            Authorization: "token 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",
          },
        }
      );
      setMyInfo(result?.data);

      const favicon = getFaviconEl("favicon");
      favicon.href = result?.data.avatar_url;

      return result;
    };
    getMyInfo();
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme1}>
        <BrowserRouter>
          {myInfo && (
            <Grid container>
              <Grid item xs={12} lg={3} md={3} xl={3}>
                <SideBar myInfo={myInfo} />
              </Grid>
              <Grid
                item
                xs={12}
                lg={9}
                md={9}
                xl={9}
                style={{
                  backgroundImage: `url(${backImage})`,
                  backgroundColor: "white",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100vh",
                  overflowY: "scroll",
                }}
              >
                <Switch>
                  <Route exact path="/" component={About}></Route>
                  <Route path="/projects" component={Projects}></Route>
                  <Route path="/contactme" component={ContactMe}></Route>
                </Switch>
              </Grid>
            </Grid>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
