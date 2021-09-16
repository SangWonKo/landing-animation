import { AppBar, Button, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import DidicastLogo from "../../images/logo-didicast-gray.svg";

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        // minWidth: theme.typography.pxToRem(1200),
        maxHeight: theme.typography.pxToRem(72),
        border: `${theme.typography.pxToRem(1)} solid #e9e9e9`,
        backgroundColor: "#ffffff",
        color: "#595959",
        fontSize: theme.typography.pxToRem(16),
        boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(2)} rgb(0, 0, 0, 0.05)`,
        padding: `${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(30)}`,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        opacity: 0,
        transition: "0.2s all",

        "& > .fadein": {
            opacity: 1
        },

        "& div": {
            display: "flex",
            alignItems: "center",
        },

        "& img": {
            marginRight: theme.typography.pxToRem(16),
        },

        "& a": {
            fontSize: theme.typography.pxToRem(16),
            lineHeight: theme.typography.pxToRem(24),
            color: "#595959",
            textDecoration: "none",
            marginRight: theme.typography.pxToRem(20),
        }

    },
    button: {
        color: "white",
        padding: `${theme.typography.pxToRem(9)} ${theme.typography.pxToRem(20)}`,
        borderRadius: theme.typography.pxToRem(5),
        boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(4)} 0 rgb(1, 176, 215, 0.1)`,
    }

}));
const Header = ({headerShown}) => {
    const classes = useStyles();
    // const animation = useFadeIn("down", 0.3, 0);
    useEffect(() => {
        console.log(headerShown);
    },[headerShown]);
    return (
        <AppBar className={`${classes.header} ${headerShown ? "fadein" : ""}`} >
            <div>
                <img src={DidicastLogo} alt="디디캐스트 로고" />
                <a href="/">서비스 소개</a>
                <a href="https://enterprise.didicast.com/pricing" target="_blank" rel="noreferrer">요금 안내</a>
                <a href="https://enterprise.didicast.com/faq" target="_blank" rel="noreferrer">FAQ</a>
            </div>
            <div>
                <Button className={classes.button} style={{ backgroundColor: "#3f5c74", marginRight: "16px" }}>제안서 다운로드</Button>
                <Button className={classes.button} style={{ backgroundColor: "#06b0d7" }}>로그인</Button>
            </div>
        </AppBar>
    );
};

export default Header;