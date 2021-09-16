import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useFadeIn from '../../hooks/useFadeIn';
import useIntersection from '../../hooks/useIntersection';
import Header from '../common/Header';
import CountUpSection from './sections/CountUpSection';
import FadeInSection from './sections/FadeInSection';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "scroll",
        // paddingTop: theme.typography.pxToRem(72),
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
    const [headerShown, setHeaderShown] = useState(false);
    return (
        <div className={classes.container}>
            <Header headerShown={headerShown}/>
            {/* <div className={classes.dummy} />
             <div className={classes.dummy} /> */}
            <FadeInSection setHeaderShown={setHeaderShown}/>
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