import { makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;
const SliderMenuStyle = makeStyles(theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      minHeight:"64px"
    },
    toolbar:{
      minHeight:"73px"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    active: {
      backgroundColor: "#303F9F !important",
      border: "1px solid white",
    }
  }));

  export {SliderMenuStyle};