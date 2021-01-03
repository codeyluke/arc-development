import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import forwardArrow from '../assets/forwardArrow.svg';
import backArrow from '../assets/backArrow.svg';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

import integrationAnimation from '../animations/integrationAnimation/data.json';

import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{
              marginRight: '1em',
              marginLeft: '-3.5em',
            }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/custom-software-development"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <img
                src={backArrow}
                alt="back to custom software development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/website-development"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <img src={forwardArrow} alt="forward to website Development" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item container direction="column" md>
          <Typography
            variant="h2"
            gutterBottom
            align={matchesSM ? 'center' : 'inherit'}
          >
            Integration
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : 'inherit'}
          >
            Our technology enables an innate interconnection between web and
            mobile applications, putting everything you need right in one
            convenient place.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : 'inherit'}
          >
            This allows you to extend your reach, reinvent interactions, and
            develop a stronger relationship with your users than ever before.
          </Typography>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid item container direction="column" md>
          <Typography
            variant="h2"
            align={matchesSM ? 'center' : 'right'}
            gutterBottom
          >
            Simultaneous Platform Support
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : 'right'}
          >
            Our cutting-edge development process allows us to create apps for
            iPhone, Android, and tablets — all at the same time.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : 'right'}
          >
            This significantly reduces costs and creates a more unified brand
            experience across all devices.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h2" gutterBottom align="center">
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant="h2" gutterBottom align="center">
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="access"
              style={{ maxWidth: matchesXS ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h2" gutterBottom align="center">
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="increase engagement" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
