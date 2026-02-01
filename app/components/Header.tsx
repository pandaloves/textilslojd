"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { text: "Hem", path: "/" },

  {
    text: "Elevgalleri",
    path: "/elevgalleri",
    subItems: [
      { text: "Åk 3", path: "/elevgalleri/ak-3" },
      { text: "Åk 4", path: "/elevgalleri/ak-4" },
      { text: "Åk 5", path: "/elevgalleri/ak-5" },
      { text: "Åk 6", path: "/elevgalleri/ak-6" },
      { text: "Åk 7", path: "/elevgalleri/ak-7" },
      { text: "Åk 8", path: "/elevgalleri/ak-8" },
      { text: "Åk 9", path: "/elevgalleri/ak-9" },
    ],
  },
  { text: "Säkerhet i textilslöjden", path: "/sakerhet-i-slojden" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleSubMenuClick = (menuText: string) => {
    if (openSubMenu === menuText) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(menuText);
    }
  };

  const isSubItemActive = (subItems: any[]) => {
    return subItems.some((item) => pathname === item.path);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={isHovered ? 4 : 1}
        sx={{
          transition: "all 0.3s ease-in-out",
          height: { xs: "80px", sm: "100px" },
          "&:hover": {
            backgroundColor: "primary.dark",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: "80px", sm: "100px" },
            height: "100%",
            paddingX: { xs: 2, sm: 4 },
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                flexGrow: 0,
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.2rem",
                  md: "2.5rem",
                },
                fontWeight: 700,
                letterSpacing: "0.5px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Textilslöjd med Mei
            </Typography>
          </Link>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            size="large"
            sx={{
              padding: 2,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "rotate(90deg)",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: "2rem", sm: "2.5rem" } }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            pt: 2,
          }}
          role="presentation"
          onClick={(e) => {
            // Don't close drawer when clicking inside submenu
            const target = e.target as HTMLElement;
            if (!target.closest(".MuiListItemButton-root")) {
              toggleDrawer(false);
            }
          }}
        >
          <Typography
            variant="h6"
            sx={{
              px: 3,
              py: 2,
              fontWeight: 600,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            Meny
          </Typography>
          <List sx={{ pt: 0 }}>
            {menuItems.map((item) => (
              <div key={item.path}>
                {item.subItems ? (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleSubMenuClick(item.text)}
                        sx={{
                          px: 3,
                          py: 1.5,
                          "&:hover": {
                            backgroundColor: "action.hover",
                          },
                          backgroundColor: isSubItemActive(item.subItems)
                            ? "primary.light"
                            : "transparent",
                        }}
                      >
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            fontWeight: isSubItemActive(item.subItems)
                              ? 700
                              : 500,
                            fontSize: "1.1rem",
                          }}
                        />
                        {openSubMenu === item.text ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItemButton>
                    </ListItem>
                    <Collapse
                      in={openSubMenu === item.text}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.subItems.map((subItem) => (
                          <ListItem
                            key={subItem.path}
                            disablePadding
                            sx={{ pl: 4 }}
                          >
                            <Link
                              href={subItem.path}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                                width: "100%",
                              }}
                            >
                              <ListItemButton
                                selected={pathname === subItem.path}
                                sx={{
                                  px: 3,
                                  py: 1.2,
                                  "&:hover": {
                                    backgroundColor: "action.hover",
                                  },
                                  "&.Mui-selected": {
                                    backgroundColor: "primary.light",
                                    "&:hover": {
                                      backgroundColor: "primary.main",
                                    },
                                  },
                                }}
                              >
                                <ListItemText
                                  primary={subItem.text}
                                  primaryTypographyProps={{
                                    fontWeight:
                                      pathname === subItem.path ? 600 : 400,
                                    fontSize: "1rem",
                                  }}
                                />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItem key={item.path} disablePadding>
                    <Link
                      href={item.path}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <ListItemButton
                        selected={pathname === item.path}
                        sx={{
                          px: 3,
                          py: 1.5,
                          "&:hover": {
                            backgroundColor: "action.hover",
                          },
                          "&.Mui-selected": {
                            backgroundColor: "primary.light",
                            "&:hover": {
                              backgroundColor: "primary.main",
                            },
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            fontWeight: pathname === item.path ? 700 : 500,
                            fontSize: "1.1rem",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                )}
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
