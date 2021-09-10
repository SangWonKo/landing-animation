import { AppBar, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import DidicastLogo from "../../images/logo-didicast-gray.svg";

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        minWidth: theme.typography.pxToRem(1320),
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

       
    },
    button: {
        color: "white"
    }
  
}));
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header}>
            <img src={DidicastLogo} alt="디디캐스트 로고"/>
            <div>
                <Button className={classes.button}>제안서 다운로드</Button>
                <Button>로그인</Button>
            </div>
        </AppBar>
    );
};

export default Header;