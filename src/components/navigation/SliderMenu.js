import React,{useContext} from "react";
import clsx from "clsx";
import {useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import menuConfiguration from "./MenuConfiguration.json";
import {SliderMenuStyle} from "./SliderMenuStyle"
import { NavigationContext } from "./NavigationContext";

const SliderMenu = (props) => {
  const { open, handleDrawerClose } = props;
  const theme = useTheme();
  const classes = SliderMenuStyle(theme);
  const navContext = useContext(NavigationContext)

  const buildMenuItem = (menuItem,index) => {
    const menuElement = (
      
      <ListItem 
        button 
        key={menuItem.name}
        selected={menuItem.id === navContext.drawerMenuItemSelected}
        classes={{ selected: classes.active }}>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={menuItem.displayName+ navContext.drawerMenuItemSelected} />
      </ListItem>
    );
    return !menuItem.routeUrl ? attachRouteLink(menuElement,menuItem.routeUrl) : menuElement;
  };
  
  const attachRouteLink = (menuElement, routeUrl) => {
    return (
      <Link
        to={routeUrl}
        style={{ textDecoration: "none", color: "#424242" }}
      >
        {menuElement}
      </Link>
    );
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuConfiguration.map((menuItem, index) => buildMenuItem(menuItem))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SliderMenu;
