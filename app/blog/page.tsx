"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
} from "@mui/material";
import { AccessTime, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { blogPosts } from "../../data";
import Button from "../../components/ui/Button";

const BlogPage: React.FC = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const categories = [
    "Fashion Tips",
    "Style Guide",
    "Trends",
    "College Fashion",
    "Sustainability",
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
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
              Fashion & Style Blog
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Get inspired with the latest fashion trends, styling tips, and
              insights from our fashion experts
            </Typography>
          </Box>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
            sx={{ mb: 6 }}
          >
            <Chip
              label="All Posts"
              variant="filled"
              color="primary"
              clickable
              sx={{ fontWeight: 600 }}
            />
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant="outlined"
                clickable
                sx={{
                  "&:hover": {
                    backgroundColor: "primary.light",
                    color: "primary.main",
                  },
                }}
              />
            ))}
          </Stack>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card sx={{ mb: 8, overflow: "hidden" }}>
              <Stack direction={{ xs: "column", md: "row" }}>
                <Box
                  sx={{
                    height: { xs: 250, md: 400 },
                    background:
                      "linear-gradient(135deg, #FFE4E1 0%, #F0F8FF 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    Featured Blog Image
                  </Typography>
                </Box>
                <CardContent
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <Stack spacing={2} sx={{ flex: 1 }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {featuredPost.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{ textTransform: "capitalize" }}
                        />
                      ))}
                    </Stack>

                    <Typography variant="h3" sx={{ fontWeight: 600 }}>
                      {featuredPost.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {featuredPost.excerpt}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar sx={{ backgroundColor: "primary.main" }}>
                        {featuredPost.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          {featuredPost.author}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="caption" color="text.secondary">
                            {featuredPost.publishedAt.toLocaleDateString()}
                          </Typography>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={0.5}
                          >
                            <AccessTime sx={{ fontSize: 14 }} />
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {featuredPost.readTime} min read
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                    </Stack>
                  </Stack>

                  <Button
                    variant="primary"
                    endIcon={<ArrowForward />}
                    sx={{ mt: 3, alignSelf: "flex-start" }}
                  >
                    Read Full Article
                  </Button>
                </CardContent>
              </Stack>
            </Card>
          </motion.div>
        )}

        {/* Other Posts */}
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
              Latest Articles
            </Typography>
          </motion.div>

          <Stack
            direction={{ xs: "column", md: "row" }}
            flexWrap="wrap"
            spacing={4}
          >
            {otherPosts.map((post, index) => (
              <Box key={post.id} sx={{ flex: "1 1 50%", minWidth: 0 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                      },
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <Box
                      sx={{
                        height: 200,
                        background: `linear-gradient(135deg, ${
                          index % 2 === 0 ? "#F0F8FF" : "#FFE4E1"
                        } 0%, ${index % 2 === 0 ? "#E6E6FA" : "#F0FFF0"} 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" color="text.secondary">
                        Blog Post Image
                      </Typography>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={2}>
                        <Stack
                          direction="row"
                          spacing={1}
                          flexWrap="wrap"
                          gap={1}
                        >
                          {post.tags.slice(0, 2).map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              variant="outlined"
                              sx={{ textTransform: "capitalize" }}
                            />
                          ))}
                        </Stack>

                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {post.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.6 }}
                        >
                          {post.excerpt}
                        </Typography>

                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <Avatar
                              sx={{
                                width: 32,
                                height: 32,
                                backgroundColor: "primary.main",
                                fontSize: "0.875rem",
                              }}
                            >
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </Avatar>
                            <Box>
                              <Typography
                                variant="caption"
                                sx={{ fontWeight: 600, display: "block" }}
                              >
                                {post.author}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {post.publishedAt.toLocaleDateString()}
                              </Typography>
                            </Box>
                          </Stack>

                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={0.5}
                          >
                            <AccessTime
                              sx={{ fontSize: 14, color: "text.secondary" }}
                            />
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {post.readTime} min
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}

            {/* Placeholder for more posts */}
            {Array.from({ length: 4 }).map((_, index) => (
              <Box
                key={`placeholder-${index}`}
                sx={{ flex: "1 1 50%", minWidth: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                      },
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <Box
                      sx={{
                        height: 200,
                        background: `linear-gradient(135deg, ${
                          index % 3 === 0
                            ? "#E6E6FA"
                            : index % 3 === 1
                            ? "#F0FFF0"
                            : "#FFE4E1"
                        } 0%, ${
                          index % 3 === 0
                            ? "#F0F8FF"
                            : index % 3 === 1
                            ? "#F5FFFA"
                            : "#FFF0F5"
                        } 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" color="text.secondary">
                        Blog Post {index + 3}
                      </Typography>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            label="Fashion"
                            size="small"
                            variant="outlined"
                          />
                          <Chip label="Tips" size="small" variant="outlined" />
                        </Stack>

                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Fashion Article Title {index + 3}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.6 }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore.
                        </Typography>

                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <Avatar
                              sx={{
                                width: 32,
                                height: 32,
                                backgroundColor: "primary.main",
                                fontSize: "0.875rem",
                              }}
                            >
                              FA
                            </Avatar>
                            <Box>
                              <Typography
                                variant="caption"
                                sx={{ fontWeight: 600, display: "block" }}
                              >
                                Fashion Author
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                Jan {15 + index}, 2024
                              </Typography>
                            </Box>
                          </Stack>

                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={0.5}
                          >
                            <AccessTime
                              sx={{ fontSize: 14, color: "text.secondary" }}
                            />
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {5 + index} min
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button variant="outline" size="large">
              Load More Articles
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogPage;
