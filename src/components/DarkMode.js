import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { ThemeContext } from '../context/themeProvider';

const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: theme.typography.pxToRem(20),
        padding: `${theme.typography.pxToRem(5)} 0`,
        backgroundColor: "var(--dummy-bg)",
        borderRadius: theme.typography.pxToRem(8),
        boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(4)} 0 rgb(1, 176, 215, 0.1)`,
        marginRight: theme.typography.pxToRem(8),

        "&:hover": {
            backgroundColor: "var(--dummy-bg)",
        }
    }
}));

const DarkMode = () => {
    const classes = useStyles();
    return (
        <ThemeContext.Consumer>
            {ctx => (
                <Button onClick={() => ctx.setTheme(ctx.theme === "light" ? "dark" : "light")} className={classes.button}>
                    {ctx.theme === "light" ? "🌞" : "🌚"}
                </Button>
            )}
        </ThemeContext.Consumer>
    );
};

export default DarkMode;