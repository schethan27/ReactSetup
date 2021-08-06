import React from "react";
import LandingPage from "./landingPage/LandingPage";
import {ThemeProvider} from "@material-ui/core/styles";
import {appGlobalCssTheme} from './AppStyles';
import CssBaseline from "@material-ui/core/CssBaseline"

const App =(props)=>{
  
    return (
        <ThemeProvider theme={appGlobalCssTheme}>
           <CssBaseline />
          <LandingPage />
        </ThemeProvider>
      );
}

export default App;
