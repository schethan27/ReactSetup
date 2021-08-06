import React, { useState } from "react";
import SliderMenu from "../navigation/SliderMenu";
import Header from "../header/Header";
import { LandingPageStyle } from "./LandingPageStyle";
import NavigationProvider from "../navigation/NavigationContext";
import Dashboard from "../dashboard/Dashboard";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const LandingPage = (props) => {
  const classes = LandingPageStyle();
  const [open, setOpen] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <NavigationProvider>
        <SliderMenu open={open} handleDrawerClose={handleDrawerClose} />
        <main className={classes.content}>
          <Container maxWidth="lg">
            <BrowserRouter>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => {
                    return isUserAuthenticated ? (
                      <Redirect to="/dashboard" />
                    ) : (
                      <Redirect to="/error" />
                    );
                  }}
                />
                <Route exact path="/dashboard">
                  <Dashboard/>
                </Route>
              </Switch>
            </BrowserRouter>
          </Container>
        </main>
      </NavigationProvider>
    </div>
  );
};

export default LandingPage;
