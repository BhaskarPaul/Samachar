import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Welcome from "./assets/components/Welcome";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import News from "./assets/components/News";

function App() {
    return (
        <div className="App">
            <Router>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Switch>
                            <Route path="/" component={Welcome} exact />
                            <Route path="/news" component={News} exact />
                        </Switch>
                        {/* <Welcome /> */}
                    </Container>
                </React.Fragment>
            </Router>
        </div>
    );
}

export default App;
