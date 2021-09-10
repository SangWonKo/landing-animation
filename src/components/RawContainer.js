import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core';
import Header from './common/Header';
import Intro from './intro/Intro';
import Footer from './common/Footer';

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: theme.typography.pxToRem(1320)
    }
}));

const RawContainer = () => {
    const classes = useStyles();
    return (
        <div>
            <Switch>
                <Route path={"/"} exact>
                    <Redirect push={false} to="/intro" />
                </Route>
                <Route path="*">
                    <Header />
                    <Container className={classes.container}>
                        <Route path="/intro">
                            <Intro />
                        </Route>
                    </Container>
                    <Footer />
                </Route>

            </Switch>

        </div>
    );
};

export default RawContainer;