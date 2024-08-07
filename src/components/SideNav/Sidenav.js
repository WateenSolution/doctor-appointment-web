import React from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions";
import { sideBarItems } from "../../utilities/constant";
import { logo } from "../../utilities";
import {
  HomeIcon,
  LogoutIcon,
  BookAppointmentIcon,
  MyAppointmentIcon,
  LiveChatIcon,
} from "../../components";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRight: "2px solid rgba(255, 255, 255, 0.2)",
  borderTopRightRadius: "15px",
  borderBottomRightRadius: "15px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  height: "100vh", // Ensure the Drawer takes full height
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  borderRight: "2px solid rgba(255, 255, 255, 0.2)",
  borderTopRightRadius: "15px",
  borderBottomRightRadius: "15px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  padding: "5px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  height: "100vh", // Ensure the Drawer takes full height
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",

  boxSizing: "border-box",
  height: "100vh",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const renderMenu = (viewOption, color) => {
  switch (viewOption) {
    case "home":
      return <HomeIcon height={20} width={20} fill={color} />;
    case "appointment":
      return <BookAppointmentIcon height={20} width={20} fill={color} />;

    case "myAppointment":
      return <MyAppointmentIcon height={20} width={20} fill={color} />;
    case "liveChat":
      return <LiveChatIcon height={20} width={20} fill={color} />;
    default:
      return null;
  }
};

export default function Sidenav(props) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  const [open, setOpen] = React.useState(!isMobile);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
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

  const onLogout = async () => {
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
      toast.error("Network error, please check your connection.");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Ensure the Box takes full height */}
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open && (
            <img
              src={logo}
              height={"25%"}
              width={"25%"}
              alt="Logo"
              className="logoAnimation"
              style={{ marginLeft: "10px" }}
            />
          )}
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
            if (item?.roles.includes(userInfo?.user?.role)) {
              return (
                <ListItem
                  key={item?.id}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    component={Link}
                    to={item?.path}
                    selected={
                      location.pathname === item?.path ||
                      location?.pathname === item?.sub_path
                    }
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition:
                        "background-color 0.3s ease, transform 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {renderMenu(
                        item?.icon,
                        location.pathname === item?.path ||
                          location?.pathname === item?.sub_path
                          ? "#012d75"
                          : "#fff"
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={item?.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            } else {
              return null;
            }
          })}
          <ListItem key="logout" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={onLogout}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "background-color 0.3s ease, transform 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  transform: "scale(1.02)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon height={20} width={20} />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        {!open && (
          <IconButton
            color="#012d75"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{
              position: "absolute",
              top: theme.spacing(2),
              left: theme.spacing(1),
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              padding: "10px",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 5px 14px rgba(0, 0, 0, 0.15)",
                backgroundColor: "transparent",
                transform: "scale(1.1)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pb: 3, pl: 3, pr: 3 }}>
        {props?.children}
      </Box>
    </Box>
  );
}
