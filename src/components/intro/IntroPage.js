import { makeStyles } from '@material-ui/core';
import React from 'react';
import CountUpSection from './sections/CountUpSection';
import FadeInSection from './sections/FadeInSection';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "scroll",
        marginTop: theme.typography.pxToRem(72),
        // paddingLeft: theme.typography.pxToRem(40),
        // paddingRight: theme.typography.pxToRem(40),
    },
    dummy: {
        width: "100%",
        height: theme.typography.pxToRem(700),
        backgroundColor: "#f9f9f9"
    }
}));
const IntroPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <FadeInSection />
            <div className={classes.dummy}>
                <h1>dummy section</h1>
            </div>
            <CountUpSection />
            <div className={classes.dummy}>
                <h1>dummy section</h1>
            </div>
        </div>
    );
};

export default IntroPage;