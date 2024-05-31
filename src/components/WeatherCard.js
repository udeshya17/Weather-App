import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 800,
    height: "auto",
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "20px",
  },
  content: {
    flex: "1 0 auto",
    textAlign: "center",
  },
  media: {
    width: 150,
    height: 150,
    marginBottom: "20px",
    "@media (min-width:600px)": {
      marginBottom: "0",
      marginRight: "20px",
      position: "relative",
    },
  },
  dataGrid: {
    width: "100%",
  },
  dataItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (min-width:600px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
}));

const WeatherCard = ({ weatherData }) => {
  const classes = useStyles();
  const { current } = weatherData;
  const { location } = weatherData;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        image={`https:${current.condition.icon}`}
        alt={current.condition.text}
      />
      <CardContent className={classes.content}>
        <Typography variant="h3">
          {location.name} | {location.country}
        </Typography>
        <Grid container spacing={2} className={classes.dataGrid}>
          <Grid item xs={12} sm={6} className={classes.dataItem}>
            <Typography variant="body1">Temperature:</Typography>
            <Typography variant="body1">
              {current.temp_c} °C / {current.temp_f} °F
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.dataItem}>
            <Typography variant="body1" marginX={3}>
              Condition:
            </Typography>
            <Typography variant="body1">{current.condition.text}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.dataItem}>
            <Typography variant="body1">Wind Speed:</Typography>
            <Typography variant="body1">{current.wind_kph} km/h</Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.dataItem}>
            <Typography variant="body1" marginX={3}>
              Humidity:
            </Typography>
            <Typography variant="body1">{current.humidity}%</Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.dataItem}>
            <Typography variant="body1">Cloud Coverage:</Typography>
            <Typography variant="body1">{current.cloud}%</Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.dataItem}>
            <Typography variant="body1" marginX={3}>
              Last Updated:
            </Typography>
            <Typography variant="body1">{current.last_updated}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
