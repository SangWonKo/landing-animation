import { Container, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import useFadeIn from '../../../hooks/useFadeIn';
import useIntersection from '../../../hooks/useIntersection';
import SloganImage from "../../../images/landingmainimg.png";
import DidicastLogo from "../../../images/logo-didicast-gray.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#d7f0f7",
    padding: "20px 30px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    // flexDirection: "row",
    maxWidth: "100%",
    width: "100%",
    minHeight: theme.typography.pxToRem(480),
    padding: theme.typography.pxToRem(40),
    // margin: 0,
    paddingTop: theme.typography.pxToRem(72),
    alignItems: "center",
    whiteSpace: "nowrap",
    // backgroundColor: "#d7f0f7",
    "& img": {
      width: theme.typography.pxToRem(500),
    }
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.typography.pxToRem(50),
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

  }
}));

const FadeInSection = ({setHeaderShown}) => {
  const classes = useStyles();
  const fadeInAnimation = {
    0: useFadeIn('up', 1, 0.3),
    1: useFadeIn('up', 1, 0.4),
    2: useFadeIn('up', 1, 0.5),
    3: useFadeIn('up', 1, 0.2),
    4: useFadeIn('up', 1, 0.2),
    5: useFadeIn('up', 1, 0.2),
  };

  const { ref } = useFadeIn();
  const {isIntersected} = useIntersection(ref);  


  useEffect(() => {
    setHeaderShown(!isIntersected);
  }, [setHeaderShown, isIntersected]);

  return (
    <div className={classes.wrapper} ref={ref}>
      <img src={DidicastLogo} alt="디디캐스트 로고" />
      <Container className={classes.container}>
        <div className={classes.item}>
          <Typography variant="h3" {...fadeInAnimation[4]}>5분 안에 만드는 <br /> 온라인 사내 교육 플랫폼</Typography>
          <Typography variant="h6" {...fadeInAnimation[5]}>
            <span {...fadeInAnimation[0]}>디디캐스트</span>는 <br />
            지식을 영상으로 만드는 <span {...fadeInAnimation[1]}>디디캠</span>과 <br />
            영상을 지식으로 보여주는 <span {...fadeInAnimation[2]}>캐스티오</span>의 <br />
            통합 서비스입니다
          </Typography>
        </div>
        <img src={SloganImage} alt="슬로건이미지" {...fadeInAnimation[3]} />
      </Container>
    </div>

    // <Grid container spacing={5} className={classes.container}>
    //   <Grid item xs={6} className={classes.item}>
    //     <Typography variant="h3">5분 안에 만드는 <br /> 온라인 사내 교육 플랫폼</Typography>
    //     <Typography variant="h6">
    //       <span>디디캐스트</span>는 <br />
    //       지식을 영상으로 만드는 <span>디디캠</span>과 <br />
    //       영상을 지식으로 보여주는 <span>캐스티오</span>의 <br />
    //       통합 서비스입니다
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={6} className={classes.item}>
    //     <img src={SloganImage} alt="슬로건이미지" />
    //   </Grid>

    // </Grid>

    // <div className={classes.container}>

    // </div>
  );
};

export default FadeInSection;