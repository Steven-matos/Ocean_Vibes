import React from "react";
import Nav from "./Nav.js";

import {
  Button,
  Icon,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Nav />
      <header className="header">
        <h1>Ocean Vibes Aquarium</h1>
        <div className="contactBtn">
          <Button
            variant="contained"
            color="primary"
            endIcon={<Icon>call</Icon>}
            href="tel:+14075564715"
          >
            Call Us
          </Button>
        </div>
      </header>
      <section>
        <article>
          <h2>
            Ocean Vibes Aquarium offers you the most beautiful custom made
            aquarium
          </h2>
          <p className="intro">
            We are specialists in the making of uniquely crafted aquariums for
            salt and fresh water fish.
            <br />
            <br />
            We invest heavily in addressing our customer's needs by offering one
            on one help which sets us apart from our competition.
            <br />
            <br />
            We have worked closely with home and business owners, interior
            designers, architects, developers and contractors to bring their
            ideas and projects to life.
            <br />
            <br />
            We work within your budget!
          </p>
          <h2>Services:</h2>
          <div className="cards">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Custom Aquarium
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    In case you're keen on a hand crafted tank, regardless of
                    whether for your home or business, we are prepared to assist
                    you with designing a stunning aquarium that accommodates
                    your most explicit prerequisites.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Aquarium Maintenance
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    We are always ready to help you to make sure your aquarium
                    looks its best at all times.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Live Corals
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
