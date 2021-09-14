import { Container, Grid, makeStyles } from '@material-ui/core';
import useCountUp from '../../../hooks/useCountUp';
import useFadeIn from '../../../hooks/useFadeIn';

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex",
    // flexDirection: "row",
    width: "100%",
    maxWidth: "100%",
    padding: theme.typography.pxToRem(40),
    margin: 0,
    alignItems: "center",
    textAlign: "center",
    whiteSpace: "nowrap",

    "& h1": {
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
      display: "flex",
      fontSize: theme.typography.pxToRem(64),
      color: "#06b0d7",
      fontWeight: "bold",
      margin: 0,
    },
    "& span": {
      color: "#0b3351",
      fontWeight: "bold",  
    },
  },
  ratio: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end"
  },
  text: {
    fontSize: theme.typography.pxToRem(24),
    color: "#333",
    textAlign: "left",
    marginLeft: theme.typography.pxToRem(18)
  }
}));

const CountUpSection = () => {
  const classes = useStyles();
  const {ref, style} = useFadeIn();

  return (
    <Container className={classes.container} ref={ref} style={style}>
      <h1>👏🏼 디디캐스트 도입 후 이렇게 달라졌어요</h1>
      <Container className={classes.grid}>
        <Grid container spacing={8}>
          {cntItems.map((item, index) => (
            <CountUpItem item={item} key={index}/>
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
  const countupAnimation = useCountUp(ratio, 0, ratio*20);
  return (
    <Grid item xs={6} className={classes.item}>
      <Grid item xs={5} className={classes.ratio}>
        <h3 {...countupAnimation}>0</h3>
        <h3>%</h3>
      </Grid>
      <Grid  item xs={7} dangerouslySetInnerHTML={{ __html: text }} className={classes.text}/>
    </Grid>
  );
}

export default CountUpSection;