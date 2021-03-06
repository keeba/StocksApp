import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CollectionsIcon from "@material-ui/icons/Collections";
import ListIcon from "@material-ui/icons/List";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CallToActionIcon from "@material-ui/icons/CallToAction";

const useStyles = makeStyles({
  root: {
    borderBottom: "5px solid #D3D3D3",
    padding: 10,
    borderRight: "10px solid #D3D3D3",
  },
  card: {
    backgroundColor: "#FDFFFF",
    minHeight: 105,
  },
  cardcontent: {
    paddingBottom: "5px !important",
  },
  smallfont: {
    fontSize: "0.75em",
  },
  inline: {
    display: "inline-block",
    width: 120,
  },
  valuefield: {
    float: "right",
  },
  button: {
    margin: "7.5px 0px",
  },
  bold: {
    fontWeight: "bold",
  },
  boldright: {
    fontWeight: "bold",
    float: "right",
  },
  downred: {
    verticalAlign: "middle",
    color: "red",
  },
  upgreen: {
    verticalAlign: "middle",
    color: "green",
  },
  list: {
    float: "left",
    marginRight: 10,
    marginTop: 15,
  },
  icon: {
    verticalAlign: "middle",
    marginRight: 5,
    width: 15,
  },
});

const PositiveSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    height: 8,
  },
  thumb: { display: "none" },
  track: {
    height: 8,
    borderRadius: 0,
    backgroundColor: "green",
  },
  rail: {
    height: 8,
    borderRadius: 0,
    opacity: 1,
  },
}))(Slider);
const NegativeSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    height: 8,
  },
  thumb: { display: "none" },
  track: {
    height: 8,
    borderRadius: 0,
    backgroundColor: "red",
  },
  rail: {
    height: 8,
    borderRadius: 0,
    opacity: 1,
  },
}))(Slider);

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  colorSecondary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  barColorPrimary: {
    backgroundColor: "green",
    borderRadius: 5,
  },
  barColorSecondary: {
    backgroundColor: "red",
    borderRadius: 5,
  },
  progressBarContainer: {
    transform: [{ rotate: "180deg" }],
  },
}))(LinearProgress);

export default function Stock(props) {
  const stock = props.stock;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Card className={classes.card} variant='outlined'>
            <CardContent className={classes.cardcontent}>
              <Typography variant='caption'>{stock.Name}</Typography>
              <ListIcon className={classes.list}></ListIcon>
              <Typography variant='h6'>
                $
                <span
                  style={{
                    color: "#0041C2",
                    fontSize: "1.3em",
                  }}
                >
                  {stock.Price}
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.card} variant='outlined'>
            <CardContent className={classes.cardcontent}>
              <Typography className={classes.smallfont}>
                <CollectionsIcon className={classes.icon}></CollectionsIcon>
                <span className={classes.inline}>Quantity</span>
                <span className={classes.bold}>{stock.Quantity}</span>
              </Typography>
              <Typography className={classes.smallfont}>
                <AlternateEmailIcon
                  className={classes.icon}
                ></AlternateEmailIcon>
                <span className={classes.inline}>Avg. Cost</span>
                <span className={classes.bold}>
                  {formatCurrency(stock.AvgCost)}
                </span>
              </Typography>
              <Typography className={classes.smallfont}>
                <CallToActionIcon className={classes.icon}></CallToActionIcon>
                <span className={classes.inline}>Invested Amt</span>
                <span className={classes.bold}>
                  {formatCurrency(stock.InvestedAmount)}
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.card} variant='outlined'>
            <CardContent className={classes.cardcontent}>
              <Typography className={classes.bold}>
                Market Value
                <span className={classes.valuefield}>
                  {getMarketValue(stock.Quantity, stock.Price)}
                </span>
              </Typography>
              <Typography>
                % of portfolio value
                <span className={classes.boldright}>
                  {stock.PercentPortfolio}
                </span>
              </Typography>
              <BorderLinearProgress
                value={parseFloat(stock.PercentPortfolio)}
                variant='determinate'
                className={classes.progressbar}
                color='primary'
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.card} variant='outlined'>
            <CardContent className={classes.cardcontent}>
              <Typography className={classes.bold}>
                Unrealized P/L
                <span className={classes.valuefield}>
                  {formatCurrency(stock.UnrealizedPL)}
                </span>
              </Typography>
              <Typography>
                % Return
                <span className={classes.boldright}>
                  {getPercentElement(
                    stock.PercentReturn,
                    classes.downred,
                    classes.upgreen
                  )}
                  {removeSign(stock.PercentReturn)} %
                </span>
              </Typography>
              {getSlider(stock.PercentReturn)}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={1}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
          >
            BUY
          </Button>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
          >
            SELL
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

// utility functions
function getMarketValue(quantity, price) {
  return formatCurrency(parseFloat(quantity) * parseFloat(price));
}

function formatCurrency(money) {
  money = money.toString();
  let sign = "";
  if (money.match(/^\-(.*)/)) {
    sign = "-";
  }
  money = money.replace(sign, "");
  return sign + "$" + money;
}

function getPercentElement(percent, classred, classgreen) {
  percent = percent.toString();
  if (percent.match(/^\-(.*)/)) {
    return <ArrowDropDownIcon className={classred}></ArrowDropDownIcon>;
  } else {
    return <ArrowDropUpIcon className={classgreen}></ArrowDropUpIcon>;
  }
}

function removeSign(percent) {
  return percent.replace("-", "");
}

function getSlider(percent) {
  percent = parseFloat(percent);
  if (percent >= 0) {
    return <PositiveSlider value={[0, percent]} min={-100} max={100} />;
  } else {
    return <NegativeSlider value={[percent, 0]} min={-100} max={100} />;
  }
}
