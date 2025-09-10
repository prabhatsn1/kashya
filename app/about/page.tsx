"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Avatar,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import {
  Favorite,
  Co2Outlined,
  LocalShipping,
  Groups,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Favorite sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Made with Love",
      description:
        "Every piece is carefully selected and designed with young women in mind.",
    },
    {
      icon: <Co2Outlined sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Sustainable Fashion",
      description:
        "We believe in responsible fashion that doesnt compromise on style.",
    },
    {
      icon: <LocalShipping sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Fast & Reliable",
      description:
        "Quick delivery and hassle-free returns for the best shopping experience.",
    },
    {
      icon: <Groups sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Community First",
      description: "Building a community of confident, stylish young women.",
    },
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & Creative Director",
      bio: "Fashion designer with 8+ years of experience in womens fashion.",
    },
    {
      name: "Anita Verma",
      role: "Head of Design",
      bio: "Trend forecaster who brings fresh perspectives to our collections.",
    },
    {
      name: "Kavya Patel",
      role: "Sustainability Lead",
      bio: "Passionate about ethical fashion and sustainable practices.",
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h1"
              sx={{ mb: 3, fontSize: { xs: "2rem", md: "3rem" } }}
            >
              About Kashya
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 800, mx: "auto" }}
            >
              Empowering young women through fashion that celebrates
              individuality, confidence, and style.
            </Typography>
          </Box>
        </motion.div>

        {/* Our Story */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          sx={{ mb: 8 }}
        >
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Founded in 2020, Kashya was born from a simple belief: every
                young woman deserves to feel confident and beautiful in what she
                wears. We started as a small team of fashion enthusiasts who
                wanted to create affordable, trendy pieces that speak to the
                modern girl.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Today, we&apos;ve grown into a community of thousands of young
                women who share our passion for style, sustainability, and
                self-expression. Each piece in our collection is thoughtfully
                designed to help you tell your unique story.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                From college campuses to first jobs, from casual hangouts to
                special occasions, Kashya is here to be part of your journey.
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                sx={{
                  height: 400,
                  backgroundColor: "primary.light",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Our Story Image
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Stack>

        {/* Our Values */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", mb: 6, fontWeight: 600 }}
            >
              What We Stand For
            </Typography>
          </motion.div>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
            {values.map((value, index) => (
              <Box key={value.title} sx={{ flex: 1, minWidth: 0 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{value.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Meet the Team */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", mb: 6, fontWeight: 600 }}
            >
              Meet the Team
            </Typography>
          </motion.div>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            {team.map((member, index) => (
              <Box key={member.name} sx={{ flex: 1, minWidth: 0 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card sx={{ textAlign: "center", p: 3 }}>
                    <CardContent>
                      <Avatar
                        sx={{
                          width: 100,
                          height: 100,
                          mx: "auto",
                          mb: 3,
                          backgroundColor: "primary.main",
                          fontSize: "2rem",
                        }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="primary.main"
                        sx={{ mb: 2 }}
                      >
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            sx={{
              p: 6,
              textAlign: "center",
              background: "linear-gradient(135deg, #FFE4E1 0%, #F0F8FF 100%)",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 600, mb: 3 }}>
              Our Mission
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.6 }}
            >
              To create beautiful, affordable fashion that empowers young women
              to express their unique style while building a more sustainable
              and inclusive fashion industry.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutPage;
