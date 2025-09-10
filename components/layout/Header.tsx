"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Stack,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ShoppingBag,
  FavoriteBorder,
  Person,
  Menu as MenuIcon,
  Search,
} from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Dancing Script", cursive',
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                Kashya
              </Typography>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack
              direction="row"
              spacing={3}
              sx={{ flex: 1, justifyContent: "center" }}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        color: "primary.dark",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Stack>
          )}

          {/* Action Icons */}
          <Stack direction="row" spacing={1}>
            <IconButton sx={{ color: "text.primary" }}>
              <Search />
            </IconButton>

            <Link href="/account">
              <IconButton sx={{ color: "text.primary" }}>
                <Person />
              </IconButton>
            </Link>

            <Link href="/wishlist">
              <IconButton sx={{ color: "text.primary" }}>
                <Badge badgeContent={2} color="primary">
                  <FavoriteBorder />
                </Badge>
              </IconButton>
            </Link>

            <Link href="/cart">
              <IconButton sx={{ color: "text.primary" }}>
                <Badge badgeContent={3} color="primary">
                  <ShoppingBag />
                </Badge>
              </IconButton>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Dancing Script", cursive',
              color: "primary.main",
              textAlign: "center",
              mb: 3,
            }}
          >
            Kashya
          </Typography>
        </Box>
        <List>
          {navigationItems.map((item) => (
            <ListItem
              key={item.href}
              component={Link}
              href={item.href}
              onClick={toggleMobileMenu}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiTypography-root": {
                    fontWeight: 500,
                    color: "text.primary",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
