import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: '#fff',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: 'Services', link: '/services' },
    {
      name: 'Custom Software Development',
      link: '/custom-software-development',
    },
    {
      name: 'Mobile App Development',
      link: '/mobile-app-development',
    },
    {
      name: 'Website Development',
      link: '/website-development',
    },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/custom-software-development':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobile-app-development':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/website-development':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;
      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;
      case '/estimate':
        if (value !== 5) {
          setValue(5);
        }
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" className={classes.logo} />
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
                value={0}
              />
              <Tab
                aria-controls={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                onMouseOver={(e) => handleClick(e)}
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
                value={1}
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
                value={2}
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
                value={3}
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
                value={4}
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/estimate"
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option.name}
                  onClick={(e) => {
                    handleMenuItemClick(e, i);
                    handleClose();
                    setValue(1);
                  }}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
