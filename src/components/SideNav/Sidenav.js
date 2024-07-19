import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import Notification from "@mui/icons-material/Notifications";
import { Avatar, Menu, MenuItem, useMediaQuery } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions";
import { networkText, sideBarItems } from "../../utilities/constant";
import { logo } from "../../utilities/images";
import { logoutIcon, menuIcon, profileIcon } from "../../utilities";
import {
  AlarmsIcon,
  ContactIcon,
  DevicesIcon,
  HomeIcon,
  InductionIcon,
  OmIcon,
  ReportsIcon,
  SettingsIcon,
  SitesIcon,
  VendorIcon,
} from "../../components";

const drawerWidth = 250;

const toolbarIconStyle = {
  backgroundColor: "var(--neutral_light)",
  borderRadius: "4px",
  padding: "10px",
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "var(--gr10)",
  border: "none",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "var(--gr10)",
  border: "none",
  padding: "5px",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "var(--gr10)",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const renderMenu = (viewOption, color) => {
  switch (viewOption) {
    case "home":
      return <HomeIcon height={20} width={20} fill={color} />;
    case "om":
      return <OmIcon height={20} width={20} fill={color} />;
    case "devices":
      return <DevicesIcon height={20} width={20} fill={color} />;
    case "sites":
      return <SitesIcon height={20} width={20} fill={color} />;
    case "alarms":
      return <AlarmsIcon height={20} width={20} fill={color} />;
    case "induction":
      return <InductionIcon height={20} width={20} fill={color} />;
    case "reports":
      return <ReportsIcon height={20} width={20} fill={color} />;
    case "contact":
      return <ContactIcon height={20} width={20} fill={color} />;
    case "settings":
      return <SettingsIcon height={20} width={20} fill={color} />;
    case "user":
      return <SettingsIcon height={20} width={20} fill={color} />;
    case "vendor":
      return <VendorIcon height={20} width={20} fill={color} />;

    default:
      return null;
  }
};

export default function Sidenav(props) {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint as per your needs
  const theme = useTheme();
  const [open, setOpen] = React.useState(!isMobile ? true : false);
  const [anchorEl, setAnchorEl] = React.useState(null); // State for the anchor element of the dropdown
  const location = useLocation(); // Get the current location
  const dispatch = useDispatch(null);
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state?.auth);

  React.useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async (values) => {
    if (navigator.onLine) {
      const body = {
        onSuccess: async (res) => {
          if (res) {
            localStorage.removeItem("token");
            navigate("/login");
          }
        },
        onFailure: (res) => {
          toast.error(res?.message || "Internal Server Error");
        },
      };

      dispatch(logoutAction(body));
    } else {
      toast.error(networkText);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="#012d75"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              backgroundColor: "var(--neutral_light)",
              borderRadius: "4px",
              padding: "10px",
              "&:hover": {
                boxShadow: "0px 5px 14px 0px var(--box_shadow)",
                backgroundColor: "transparent",
              },
            }}
          >
            <img src={menuIcon} height={20} width={20} />
          </IconButton>

          <div>
            <img height={"25%"} width={"25%"} src={logo} />
          </div>
          <Box sx={{ flexGrow: 1 }} />

          {/* Spacer to push Avatar and username to the right */}

          <IconButton
            style={toolbarIconStyle}
            onClick={handleAvatarClick}
            sx={{
              "&:hover": {
                boxShadow: "0px 5px 14px 0px var(--box_shadow)",
                backgroundColor: "transparent",
              },
            }}
          >
            <img src={profileIcon} height={20} width={20} />
          </IconButton>
          <IconButton
            style={{ ...toolbarIconStyle, marginLeft: "8px" }}
            onClick={onLogout}
            sx={{
              "&:hover": {
                boxShadow: "0px 5px 14px 0px var(--box_shadow)",
                backgroundColor: "transparent",
              },
            }}
          >
            <img src={logoutIcon} height={20} width={20} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{}}
          >
            {/* Add menu items here */}

            <MenuItem
              sx={{ minWidth: 120, minHeight: 25 }}
              onClick={() => {
                handleMenuClose();
                navigate("/change-password");
              }}
            >
              Change Password
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton className="navBtnStyle" onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarItems.map((item, index) => {
            return (
              item?.roles.includes(userInfo?.user?.role) && (
                <ListItem
                  key={item?.id}
                  disablePadding
                  sx={{
                    display: "block",
                    backgroundColor: "none",
                  }}
                >
                  <div
                    style={{
                      margin: "0px 6px 0px 6px",
                      borderRadius: 4,
                      backgroundColor:
                        location.pathname === item.path ||
                        location?.pathname === item?.sub_path ||
                        location?.pathname === item?.sub_path1
                          ? "#012d75"
                          : "#f0f0f0",
                    }}
                  >
                    <ListItemButton
                      component={Link} // Use Link component for navigation
                      to={item?.path} // Specify the path for the link
                      // className="navBtnStyle"
                      sx={{
                        // minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        my: 1.5,
                        "&:hover": {
                          boxShadow: "0px 5px 14px 0px var(--box_shadow)",
                          //backgroundColor: "var(--neutral_light)",
                          borderRadius: "4px",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color:
                            location.pathname === item.path ||
                            location?.pathname === item?.sub_path ||
                            location?.pathname === item?.sub_path1
                              ? "#f0f0f0"
                              : "#012d75",
                        }}
                      >
                        {renderMenu(
                          item?.icon,
                          location.pathname === item.path ||
                            location?.pathname === item?.sub_path ||
                            location?.pathname === item?.sub_path1
                            ? "#f0f0f0"
                            : "#012d75"
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={item?.title}
                        sx={{
                          opacity: open ? 1 : 0,
                          color:
                            location.pathname === item.path ||
                            location?.pathname === item?.sub_path ||
                            location?.pathname === item?.sub_path1
                              ? "#f0f0f0"
                              : "#012d75", // Set the text color
                        }}
                      />
                    </ListItemButton>
                  </div>
                </ListItem>
              )
            );
          })}
        </List>
      </Drawer>

      <Box component="main" sx={{ p: 0, width: "100%" }}>
        <DrawerHeader />
        {props?.children}
      </Box>
    </Box>
  );
}
