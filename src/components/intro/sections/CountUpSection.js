import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex",
    // flexDirection: "row",
    width: "100%",
    padding: theme.typography.pxToRem(40),
    margin: 0,
    alignItems: "center",
    textAlign: "center",

    "& h2": {
      marginBottom: theme.typography.pxToRem(32),
    }

  },
  grid: {
    justifyContent: "center",
    maxWidth: theme.typography.pxToRem(1000),
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h3": {
      fontSize: theme.typography.pxToRem(64),
      color: "#06b0d7",
      fontWeight: "bold",
    },
    "& div": {
      fontSize: theme.typography.pxToRem(24),
      color: "#333",
      textAlign: "left",
      marginLeft: theme.typography.pxToRem(18)
    },
    "& span": {
      color: "#0b3351",
      fontWeight: "bold",
    },

  }
  // item: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   "& h3": {
  //     fontSize: theme.typography.pxToRem(48),
  //     fontWeight: "bold",
  //     color: "#333",
  //     lineHeight: 1.25
  //   },
  //   "& h6": {
  //     fontSize: theme.typography.pxToRem(24),
  //     color: "#595959",
  //     lineHeight: theme.typography.pxToRem(32),
  //     marginTop: theme.typography.pxToRem(36),
  //   },
  //   "& span": {
  //     color: "#06b0d7",
  //     fontWeight: "bold",
  //   },
  //   "& img": {
  //     width: theme.typography.pxToRem(500),
  //   }
  // }
}));

const CountUpSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h2>👏🏼 디디캐스트 도입 후 이렇게 달라졌어요</h2>
      <Container className={classes.grid}>
        <Grid container spacing={5}>
          {cntItems.map((item) => (
            <CountUpItem item={item} />
          ))}
        </Grid>
      </Container>



    </Container>
  );
};

const cntItems = [
  { ratio: 92, text: "<span>영상 제작 시간</span>과<br /> <span>비용</span>이 대폭 절감됐어요" },
  { ratio: 81, text: "<span>디디캐스트 App</span> 덕분에<br /> 언제나 편하게 볼 수 있어요" },
  { ratio: 74, text: "<span>멤버 관리 기능</span>이 있어<br /> 업무가 수월해졌어요" },
  { ratio: 73, text: "<span>라이브와 녹화 영상</span><br /> 모두 볼 수 있어서 좋았어요" }
]

const CountUpItem = ({ item }) => {
  const { ratio, text } = item;
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.item}>
      <Typography variant="h3">{ratio}%</Typography>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Grid>
  );
}

export default CountUpSection;