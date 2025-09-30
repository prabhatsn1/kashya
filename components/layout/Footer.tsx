"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  TextField,
  Button,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import {
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup");
  };

  return (
    <Box component="footer" sx={{ backgroundColor: "#f8f9fa", mt: 8 }}>
      {/* Newsletter Section */}
      <Box sx={{ backgroundColor: "primary.main", py: { xs: 2, md: 4 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1.5, md: 3 }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                textAlign={{ xs: "center", md: "left" }}
                sx={{ width: { xs: "100%", md: "auto" } }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    mb: { xs: 0.5, md: 1 },
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2.125rem" },
                  }}
                >
                  Stay in Style
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    opacity: 0.9,
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    px: { xs: 1, md: 0 },
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Get the latest fashion updates and exclusive offers
                </Typography>
              </Box>

              <Box
                component="form"
                onSubmit={handleNewsletterSubmit}
                sx={{
                  display: "flex",
                  gap: { xs: 1, sm: 2 },
                  width: { xs: "100%", md: 400 },
                  flexDirection: { xs: "column", sm: "row" },
                  px: { xs: 1, sm: 0 },
                }}
              >
                <TextField
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{
                    flex: 1,
                    backgroundColor: "white",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      fontSize: { xs: "0.75rem", md: "1rem" },
                      height: { xs: "36px", md: "auto" },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "primary.main",
                    px: { xs: 2, md: 3 },
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    minHeight: { xs: "36px", md: "auto" },
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Main Footer Content */}
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 2.5, md: 6 }, px: { xs: 2, sm: 3 } }}
      >
        {/* Mobile Compact Layout */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {/* Brand Info - Mobile */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Dancing Script", cursive',
                color: "primary.main",
                mb: 1,
                fontSize: "1.75rem",
              }}
            >
              Kashya
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: "text.secondary",
                fontSize: "0.75rem",
                lineHeight: 1.4,
                px: 2,
              }}
            >
              Trendy, affordable fashion for young women
            </Typography>

            {/* Social Media Icons - Mobile */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ justifyContent: "center", mb: 2 }}
            >
              <IconButton sx={{ color: "primary.main", p: 0.75 }}>
                <Instagram sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton sx={{ color: "primary.main", p: 0.75 }}>
                <Facebook sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton sx={{ color: "primary.main", p: 0.75 }}>
                <Twitter sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton sx={{ color: "primary.main", p: 0.75 }}>
                <Pinterest sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Box>

          {/* Links Grid - Mobile */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              mb: 2,
            }}
          >
            {/* Shop Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textAlign: "center",
                }}
              >
                Shop
              </Typography>
              <Stack spacing={0.5} alignItems="center">
                {["New Arrivals", "Dresses", "Tops", "Sale"].map((item) => (
                  <MuiLink
                    key={item}
                    component={Link}
                    href="/shop"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.75rem",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {item}
                  </MuiLink>
                ))}
              </Stack>
            </Box>

            {/* Customer Care & About Combined */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textAlign: "center",
                }}
              >
                Support
              </Typography>
              <Stack spacing={0.5} alignItems="center">
                {[
                  { label: "Size Guide", href: "/size-guide" },
                  { label: "Contact", href: "/contact" },
                  { label: "About", href: "/about" },
                  { label: "Blog", href: "/blog" },
                ].map((item) => (
                  <MuiLink
                    key={item.label}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.75rem",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {item.label}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Contact Info - Mobile Compact */}
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Stack spacing={0.5} alignItems="center">
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.75rem",
                }}
              >
                hello@kashya.com • +1 (555) 123-4567
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.75rem",
                }}
              >
                123 Fashion Street, New York, NY 10001
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* Desktop Layout */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 4 }}
          useFlexGap
          flexWrap="wrap"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {/* Brand Info */}
          <Box
            flex={1}
            minWidth={{ xs: "100%", md: 240 }}
            mb={{ xs: 3, md: 0 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Dancing Script", cursive',
                color: "primary.main",
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Kashya
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                color: "text.secondary",
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.6,
                maxWidth: { xs: "100%", md: "280px" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              Empowering young women with trendy, affordable fashion that
              celebrates individuality and confidence. Every piece tells a
              story.
            </Typography>

            {/* Social Media Icons */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            >
              <IconButton
                sx={{
                  color: "primary.main",
                  p: { xs: 1, md: 1.5 },
                }}
              >
                <Instagram sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "primary.main",
                  p: { xs: 1, md: 1.5 },
                }}
              >
                <Facebook sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "primary.main",
                  p: { xs: 1, md: 1.5 },
                }}
              >
                <Twitter sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "primary.main",
                  p: { xs: 1, md: 1.5 },
                }}
              >
                <Pinterest sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box
            flex={1}
            minWidth={{ xs: "50%", sm: "33%", md: 160 }}
            mb={{ xs: 3, md: 0 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Shop
            </Typography>
            <Stack spacing={1.5}>
              {[
                "New Arrivals",
                "Dresses",
                "Tops",
                "Skirts",
                "Accessories",
                "Sale",
              ].map((item) => (
                <MuiLink
                  key={item}
                  component={Link}
                  href="/shop"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.875rem", md: "0.875rem" },
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                    display: "block",
                    py: 0.25,
                  }}
                >
                  {item}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Customer Care */}
          <Box
            flex={1}
            minWidth={{ xs: "50%", sm: "33%", md: 160 }}
            mb={{ xs: 3, md: 0 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Customer Care
            </Typography>
            <Stack spacing={1.5}>
              {[
                { label: "Size Guide", href: "/size-guide" },
                { label: "Shipping Info", href: "/shipping" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <MuiLink
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.875rem", md: "0.875rem" },
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                    display: "block",
                    py: 0.25,
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* About */}
          <Box
            flex={1}
            minWidth={{ xs: "50%", sm: "33%", md: 160 }}
            mb={{ xs: 3, md: 0 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              About
            </Typography>
            <Stack spacing={1.5}>
              {[
                { label: "Our Story", href: "/about" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <MuiLink
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.875rem", md: "0.875rem" },
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                    display: "block",
                    py: 0.25,
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box
            flex={1}
            minWidth={{ xs: "100%", md: 200 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Get in Touch
            </Typography>
            <Stack spacing={2}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <Email
                  sx={{ fontSize: { xs: 16, md: 16 }, color: "primary.main" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.875rem", md: "0.875rem" },
                  }}
                >
                  hello@kashya.com
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <Phone
                  sx={{ fontSize: { xs: 16, md: 16 }, color: "primary.main" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.875rem", md: "0.875rem" },
                  }}
                >
                  +1 (555) 123-4567
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="flex-start"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <LocationOn
                  sx={{
                    fontSize: { xs: 16, md: 16 },
                    color: "primary.main",
                    mt: 0.5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.875rem", md: "0.875rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  123 Fashion Street
                  <br />
                  New York, NY 10001
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>

      {/* Bottom Bar */}
      <Divider />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
          sx={{ py: { xs: 1.5, md: 3 } }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.7rem", md: "0.875rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © 2024 Kashya. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 3 }}
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {["Privacy", "Terms", "Cookies"].map((item, index) => {
              const fullNames = [
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
              ];
              return (
                <MuiLink
                  key={item}
                  component={Link}
                  href={`/${fullNames[index]
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.7rem", md: "0.875rem" },
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </MuiLink>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
