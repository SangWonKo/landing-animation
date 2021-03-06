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
      color:  "var(--text)",
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
      color: "var(--navy-text)",
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
    color:  "var(--text)",
    textAlign: "left",
    marginLeft: theme.typography.pxToRem(18)
  }
}));

const CountUpSection = () => {
  const classes = useStyles();
  const {ref, style} = useFadeIn();

  return (
    <Container className={classes.container} ref={ref} style={style}>
      <h1>ππΌ λλμΊμ€νΈ λμ ν μ΄λ κ² λ¬λΌμ‘μ΄μ</h1>
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
  { ratio: 92, text: "<span>μμ μ μ μκ°</span>κ³Ό<br /> <span>λΉμ©</span>μ΄ λν­ μ κ°λμ΄μ" },
  { ratio: 81, text: "<span>λλμΊμ€νΈ App</span> λλΆμ<br /> μΈμ λ νΈνκ² λ³Ό μ μμ΄μ" },
  { ratio: 74, text: "<span>λ©€λ² κ΄λ¦¬ κΈ°λ₯</span>μ΄ μμ΄<br /> μλ¬΄κ° μμν΄μ‘μ΄μ" },
  { ratio: 73, text: "<span>λΌμ΄λΈμ λΉν μμ</span><br /> λͺ¨λ λ³Ό μ μμ΄μ μ’μμ΄μ" }
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