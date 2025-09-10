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
      <Box sx={{ backgroundColor: "primary.main", py: 4 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography variant="h4" sx={{ color: "white", mb: 1 }}>
                  Stay in Style
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "white", opacity: 0.9 }}
                >
                  Get the latest fashion updates and exclusive offers
                </Typography>
              </Box>

              <Box
                component="form"
                onSubmit={handleNewsletterSubmit}
                sx={{
                  display: "flex",
                  gap: 2,
                  minWidth: { xs: "100%", md: 400 },
                  flexDirection: { xs: "column", sm: "row" },
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
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "primary.main",
                    px: 3,
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
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          useFlexGap
          flexWrap="wrap"
        >
          {/* Brand Info */}
          <Box flex={1} minWidth={240} mb={{ xs: 4, md: 0 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Dancing Script", cursive',
                color: "primary.main",
                mb: 2,
              }}
            >
              Kashya
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
              Empowering young women with trendy, affordable fashion that
              celebrates individuality and confidence. Every piece tells a
              story.
            </Typography>

            {/* Social Media Icons */}
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: "primary.main" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "primary.main" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "primary.main" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "primary.main" }}>
                <Pinterest />
              </IconButton>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box flex={1} minWidth={160} mb={{ xs: 4, md: 0 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Shop
            </Typography>
            <Stack spacing={1}>
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
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Customer Care */}
          <Box flex={1} minWidth={160} mb={{ xs: 4, md: 0 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Customer Care
            </Typography>
            <Stack spacing={1}>
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
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* About */}
          <Box flex={1} minWidth={160} mb={{ xs: 4, md: 0 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              About
            </Typography>
            <Stack spacing={1}>
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
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box flex={1} minWidth={200}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Get in Touch
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Email sx={{ fontSize: 16, color: "primary.main" }} />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  hello@kashya.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Phone sx={{ fontSize: 16, color: "primary.main" }} />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  +1 (555) 123-4567
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOn
                  sx={{ fontSize: 16, color: "primary.main", mt: 0.5 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ py: 3 }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © 2024 Kashya. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <MuiLink
                  key={item}
                  component={Link}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </MuiLink>
              )
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
