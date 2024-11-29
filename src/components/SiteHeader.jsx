import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Link,
  useMediaQuery,
  useTheme,
  CssBaseline,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const navItems = [
  { label: "New notes", href: "/new-notes" },
  { label: "Clients", href: "/clients" },
  { label: "Clinicians", href: "/clinicians" },
  { label: "Templates", href: "/templates" },
  { label: "Earn $80", href: "/earn" },
];
const drawerWidth = 200;
export function SiteHeader(props) {
  const { window } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Clients");
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleNavItemClick = (label) => {
    setSelectedItem(label);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="./m-logo.png" alt="Logo" style={{ height: 40 }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            component="a"
            href={item.href}
            onClick={() => handleNavItemClick(item.label)}
            sx={{
              color:
                item.label === "Earn $80"
                  ? "transparent"
                  : selectedItem === item.label
                  ? "#731054"
                  : "#707070",
              fontWeight: selectedItem === item.label ? 700 : "normal",
              background:
                item.label === "Earn $80"
                  ? "linear-gradient(295.67deg, #DE0D6F 16.23%, #731054 83.77%)"
                  : "none",
              WebkitBackgroundClip: item.label === "Earn $80" ? "text" : "none",
              WebkitTextFillColor:
                item.label === "Earn $80" ? "transparent" : "inherit",
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                textDecoration:
                  selectedItem === item.label && item.label !== "Earn $80"
                    ? "underline #731054"
                    : "none",
                textUnderlineOffset: "4px",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img src="./m-logo.png" alt="Logo" />
          </Box>
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexGrow: 1,
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  onClick={() => handleNavItemClick(item.label)}
                  sx={{
                    color:
                      item.label === "Earn $80"
                        ? "transparent"
                        : selectedItem === item.label
                        ? "#731054"
                        : "#707070",
                    fontWeight: selectedItem === item.label ? 800 : "normal",
                    background:
                      item.label === "Earn $80"
                        ? "linear-gradient(295.67deg, #DE0D6F 16.23%, #731054 83.77%)"
                        : "none",
                    WebkitBackgroundClip:
                      item.label === "Earn $80" ? "text" : "none",
                    WebkitTextFillColor:
                      item.label === "Earn $80" ? "transparent" : "inherit",
                    position: "relative",
                    "&::after": {
                      content: item.label === selectedItem ? '""' : "none",
                      position: "absolute",
                      bottom: -12,
                      left: 0,
                      width: "100%",
                      height: 3,
                      backgroundColor: "#731054",
                      borderRadius: "2px",
                    },
                  }}
                >
                  <Typography variant="body1">{item.label}</Typography>
                </Link>
              ))}
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  marginTop: "5px",
                }}
              >
                <img src="./note-2.png" alt="note" />
                <Typography variant="body2" sx={{ color: "#707070" }}>
                  12 notes left
                </Typography>
                <IconButton>
                  <img src="./info-circle.png" alt="info" />
                </IconButton>
              </Box>
            )}
            <Button
              sx={{
                background: "linear-gradient(90deg, #8B004B, #D81B60)",
                color: "white",
                padding: "6px 16px",
                fontSize: "0.875rem",
                fontWeight: 500,
                "&:hover": {
                  opacity: 0.9,
                },
              }}
            >
              Become SUPER
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#DDDDDD",
                  color: "#555555",
                  width: 32,
                  height: 32,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                M
              </Avatar>
              <IconButton
                sx={{
                  padding: 0,
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>
            {isMobile && (
              <IconButton
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { xs: "block", sm: "none" }, mr: 0 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        anchor="right"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
SiteHeader.propTypes = {
  window: PropTypes.func,
};
export default SiteHeader;
