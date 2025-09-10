"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  IconButton,
} from "@mui/material";
import {
  ArrowForward,
  TrendingUp,
  LocalOffer,
  Instagram,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "../components/product/ProductCard";
import Button from "../components/ui/Button";
import { sampleProducts, categories, collections } from "../data";
import Image from "next/image";

const HomePage: React.FC = () => {
  const newArrivals = sampleProducts.filter((p) => p.isNew);
  const bestSellers = sampleProducts.filter((p) => p.isBestseller);

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          height: { xs: "60vh", md: "80vh" },
          background:
            "linear-gradient(135deg, #FFE4E1 0%, #F0F8FF 50%, #F0FFF0 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
          >
            <Box flex={1}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    fontWeight: 700,
                    mb: 2,
                    background: "linear-gradient(45deg, #F8BBD9, #E91E63)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Express Your Style
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    color: "text.secondary",
                    mb: 4,
                    fontWeight: 400,
                  }}
                >
                  Discover trendy fashion pieces that celebrate your unique
                  personality
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button variant="primary" size="large">
                    Shop New Collection
                  </Button>
                  <Button variant="outline" size="large">
                    Explore Trends
                  </Button>
                </Stack>
              </motion.div>
            </Box>
            <Box flex={1}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 300, md: 400 },
                    backgroundColor: "rgba(248, 187, 217, 0.1)",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/products/top1-2.jpg"
                    alt="Hero Banner"
                    width={400}
                    height={400}
                    style={{
                      objectFit: "cover",
                      borderRadius: 16,
                      width: "100%",
                      height: "100%",
                    }}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    priority
                  />
                </Box>
              </motion.div>
            </Box>
          </Stack>
        </Container>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ position: "absolute", top: "20%", right: "10%", zIndex: 1 }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "primary.light",
              opacity: 0.6,
            }}
          />
        </motion.div>
      </Box>

      {/* Seasonal Offer Strip */}
      <Box sx={{ backgroundColor: "secondary.main", py: 2 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <LocalOffer sx={{ color: "primary.main" }} />
              <Typography variant="h6" textAlign="center">
                🌸 Spring Sale: Up to 40% off on selected items! Limited time
                offer 🌸
              </Typography>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Categories */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f7fafd 0%, #f3f3fa 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
              Shop by Category
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 6 }}
            >
              Find your perfect style across our curated collections
            </Typography>
          </motion.div>

          <Stack direction="row" spacing={3} flexWrap="wrap">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ flex: "1 1 220px", maxWidth: 300, minWidth: 200 }}
              >
                <Link
                  href={`/shop?category=${category.name.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: 300,
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                      },
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: 200,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "primary.light",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 600px) 100vw, 300px"
                          priority={index < 2}
                        />
                      </Box>
                      <Chip
                        label={`${category.count} items`}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          backgroundColor: "white",
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        {category.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* New Arrivals */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #fdf6f0 0%, #f7fafd 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 4 }}
            >
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>
                  New Arrivals
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Fresh styles just landed
                </Typography>
              </Box>
              <Link href="/shop?filter=new" style={{ textDecoration: "none" }}>
                <Button variant="outline" endIcon={<ArrowForward />}>
                  View All
                </Button>
              </Link>
            </Stack>
          </motion.div>

          <Stack direction="row" flexWrap="wrap" spacing={3}>
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ flex: "1 1 220px", maxWidth: 300, minWidth: 200 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Best Sellers */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f9faf3 0%, #f7fafd 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 4 }}
            >
              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: 1 }}
                >
                  <TrendingUp sx={{ color: "primary.main" }} />
                  <Typography variant="h2">Best Sellers</Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary">
                  Customer favorites that everyone loves
                </Typography>
              </Box>
              <Link
                href="/shop?filter=bestseller"
                style={{ textDecoration: "none" }}
              >
                <Button variant="outline" endIcon={<ArrowForward />}>
                  View All
                </Button>
              </Link>
            </Stack>
          </motion.div>

          <Stack direction="row" flexWrap="wrap" spacing={3}>
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ flex: "1 1 220px", maxWidth: 300, minWidth: 200 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Collections Preview */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f3faf7 0%, #f7fafd 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" textAlign="center" sx={{ mb: 2 }}>
              Curated Collections
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 6 }}
            >
              Discover themed collections for every occasion
            </Typography>
          </motion.div>

          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            flexWrap="wrap"
          >
            {collections.slice(0, 3).map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ flex: "1 1 300px", maxWidth: 400, minWidth: 260 }}
              >
                <Link
                  href={`/collections/${collection.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: 400,
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                      },
                      transition: "all 0.3s ease-in-out",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: 250,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "primary.light",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h6" color="text.secondary">
                          {collection.name} Collection
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                        {collection.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {collection.description}
                      </Typography>
                      <Chip
                        label={collection.theme}
                        size="small"
                        variant="outlined"
                        sx={{
                          color: "primary.main",
                          borderColor: "primary.main",
                        }}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Instagram Feed */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f7f3fa 0%, #f7fafd 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{ mb: 6 }}
            >
              <Instagram sx={{ color: "primary.main", fontSize: 32 }} />
              <Typography variant="h2" textAlign="center">
                #KashyaStyle
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 6 }}
            >
              See how our customers style their Kashya pieces
            </Typography>
          </motion.div>

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent="center"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  flex: "1 1 120px",
                  maxWidth: 180,
                  minWidth: 120,
                  marginBottom: 16,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "100%",
                    backgroundColor: "primary.light",
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      "& .overlay": {
                        opacity: 1,
                      },
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <IconButton sx={{ color: "white", zIndex: 20 }}>
                      <Instagram />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Image
                      src={`/images/blog/college-budget.jpg`}
                      alt={`Instagram Post ${index + 1}`}
                      width={120}
                      height={120}
                      style={{ borderRadius: 8 }}
                    />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
