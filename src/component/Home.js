import React from "react";

//images
import customAquarium from "../assets/img/Living_Room.jpg";
import maintenance from "../assets/img/IMG_4568.jpg";
import liveCoral from "../assets/img/IMG_4600.jpg";

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
  media: {
    height: 140,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className="home-container">
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
          <h2 className="services">Services</h2>
          <div className="cards">
            <Card className="card-shadow">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={customAquarium}
                  title="Custom Aquarium"
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
            <Card className="card-shadow">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={maintenance}
                  title="Aquarium Maintenance"
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
            <Card className="card-shadow">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={liveCoral}
                  title="Live Coral"
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
                    We have the best live coral avaiable to plant in your home
                    or office tank.
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
