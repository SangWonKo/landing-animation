import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import SloganImage from "../../../images/landingmainimg.png";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex",
    // flexDirection: "row",
    width: "100%",
    padding: theme.typography.pxToRem(40),
    margin: 0,
    alignItems: "center"

  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    "& h3": {
      fontSize: theme.typography.pxToRem(48),
      fontWeight: "bold",
      color: "#333",
      lineHeight: 1.25
    },
    "& h6": {
      fontSize: theme.typography.pxToRem(24),
      color: "#595959",
      lineHeight: theme.typography.pxToRem(32),
      marginTop: theme.typography.pxToRem(36),
    },
    "& span": {
      color: "#06b0d7",
      fontWeight: "bold",
    },
    "& img": {
      width: theme.typography.pxToRem(500),
    }
  }
}));

const FadeInSection = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item xs={6} className={classes.item}>
        <Typography variant="h3">5분 안에 만드는 <br /> 온라인 사내 교육 플랫폼</Typography>
        <Typography variant="h6">
          <span>디디캐스트</span>는 <br />
          지식을 영상으로 만드는 <span>디디캠</span>과 <br />
          영상을 지식으로 보여주는 <span>캐스티오</span>의 <br />
          통합 서비스입니다
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.item}>
        <img src={SloganImage} alt="슬로건이미지" />
      </Grid>

    </Grid>
    // <div className={classes.container}>

    // </div>
  );
};

export default FadeInSection;