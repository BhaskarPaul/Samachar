import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Welcome from "./assets/components/Welcome";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import News from "./assets/components/News";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App" style={{ overflowY: "hidden" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Router>
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="md">
                <Switch>
                  {/* <Route path="/" component={} exact /> */}
                  <Route path="/" component={News} />
                </Switch>
                {/* <Welcome /> */}
              </Container>
            </React.Fragment>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
