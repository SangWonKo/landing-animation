import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core';
import Intro from './intro/IntroPage';
import Footer from './common/Footer';
import { ThemeProvider } from '../context/themeProvider';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: "1 0 auto",
        // minWidth: theme.typography.pxToRem(1200),
        maxWidth: "100%",
        padding: 0,
        position: "relative"
    }
}));

const RawContainer = () => {
    const classes = useStyles();
    
    return (
        <ThemeProvider>
            <Switch>
                <Route path={"/"} exact>
                    <Redirect push={false} to="/intro" />
                </Route>
                <Route path="*">
                    
                    <Container className={classes.container}>
                        <Route path="/intro">
                            <Intro />
                        </Route>
                    </Container>
                    <Footer />
                </Route>

            </Switch>

        </ThemeProvider>
    );
};

export default RawContainer;