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
          height: { xs: "auto", md: "80vh" },
          minHeight: { xs: "60vh", md: "auto" },
          background:
            "linear-gradient(135deg, #FFE4E1 0%, #F0F8FF 50%, #F0FFF0 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          px: { xs: 1, sm: 2 },
          py: { xs: 4, md: 0 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={{ xs: 3, md: 4 }}
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
                    fontSize: { xs: "1.75rem", sm: "2.5rem", md: "4rem" },
                    fontWeight: 700,
                    mb: { xs: 1, md: 2 },
                    background: "linear-gradient(45deg, #F8BBD9, #E91E63)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: { xs: "center", md: "left" },
                    lineHeight: { xs: 1.2, md: 1.1 },
                  }}
                >
                  Express Your Style
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.5rem" },
                    color: "text.secondary",
                    mb: { xs: 2, md: 4 },
                    fontWeight: 400,
                    textAlign: { xs: "center", md: "left" },
                    lineHeight: { xs: 1.4, md: 1.3 },
                    px: { xs: 1, md: 0 },
                  }}
                >
                  Discover trendy fashion pieces that celebrate your unique
                  personality
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1.5, sm: 2 }}
                  alignItems="center"
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  <Button
                    variant="primary"
                    size="large"
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      maxWidth: { xs: "280px", sm: "none" },
                    }}
                  >
                    Shop New Collection
                  </Button>
                  <Button
                    variant="outline"
                    size="large"
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      maxWidth: { xs: "280px", sm: "none" },
                    }}
                  >
                    Explore Trends
                  </Button>
                </Stack>
              </motion.div>
            </Box>
            <Box flex={1} sx={{ width: "100%", mt: { xs: 2, md: 0 } }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 200, sm: 280, md: 400 },
                    backgroundColor: "rgba(248, 187, 217, 0.1)",
                    borderRadius: { xs: 2, md: 4 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: { xs: "auto", md: 0 },
                    maxWidth: { xs: "300px", sm: "none" },
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
                    sizes="(max-width: 600px) 300px, 50vw"
                    priority
                  />
                </Box>
              </motion.div>
            </Box>
          </Stack>
        </Container>

        {/* Floating Elements - Hide on mobile */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "10%",
            zIndex: 1,
            display: { xs: "none", md: "block" },
          }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
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
      </Box>

      {/* Seasonal Offer Strip */}
      
      <Box sx={{ backgroundColor: "secondary.main", py: { xs: 1, md: 2 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 0.5, md: 2 }}
              flexWrap="wrap"
            >
              <LocalOffer
                sx={{
                  color: "primary.main",
                  fontSize: { xs: 16, sm: 20, md: 24 },
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1.25rem" },
                  lineHeight: { xs: 1.3, md: 1.4 },
                  px: { xs: 0.5, md: 0 },
                }}
              >
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
          py: { xs: 3, md: 8 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                mb: { xs: 1, md: 2 },
                fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                px: { xs: 1, md: 0 },
              }}
            >
              Shop by Category
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{
                mb: { xs: 3, md: 6 },
                fontSize: { xs: "0.875rem", md: "1rem" },
                px: { xs: 2, md: 0 },
              }}
            >
              Find your perfect style across our curated collections
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(auto-fit, minmax(250px, 1fr))",
              },
              gap: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/shop?category=${category.name.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: { xs: 240, sm: 280, md: 300 },
                      cursor: "pointer",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-8px)" },
                        boxShadow: {
                          xs: "0 4px 12px rgba(0,0,0,0.1)",
                          md: "0 12px 25px rgba(0,0,0,0.15)",
                        },
                      },
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: { xs: 160, sm: 180, md: 200 },
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
                          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                          priority={index < 2}
                        />
                      </Box>
                      <Chip
                        label={`${category.count} items`}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: { xs: 8, md: 12 },
                          right: { xs: 8, md: 12 },
                          backgroundColor: "white",
                          fontSize: { xs: "0.7rem", md: "0.75rem" },
                        }}
                      />
                    </Box>
                    <CardContent sx={{ py: { xs: 1.5, md: 2 } }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          textAlign: "center",
                          fontSize: {
                            xs: "1rem",
                            sm: "1.125rem",
                            md: "1.5rem",
                          },
                        }}
                      >
                        {category.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* New Arrivals */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #fdf6f0 0%, #f7fafd 100%)",
          py: { xs: 3, md: 8 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: { xs: 3, md: 4 } }}
              spacing={{ xs: 1.5, sm: 2 }}
            >
              <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: { xs: 0.5, md: 1 },
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                  }}
                >
                  New Arrivals
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                >
                  Fresh styles just landed
                </Typography>
              </Box>
              <Link href="/shop?filter=new" style={{ textDecoration: "none" }}>
                <Button
                  variant="outline"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    px: { xs: 2, md: 3 },
                  }}
                >
                  View All
                </Button>
              </Link>
            </Stack>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(auto-fit, minmax(250px, 1fr))",
              },
              gap: { xs: 1, sm: 2, md: 3 },
            }}
          >
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Best Sellers */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f9faf3 0%, #f7fafd 100%)",
          py: { xs: 3, md: 8 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: { xs: 3, md: 4 } }}
              spacing={{ xs: 1.5, sm: 2 }}
            >
              <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    mb: { xs: 0.5, md: 1 },
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <TrendingUp
                    sx={{
                      color: "primary.main",
                      fontSize: { xs: 20, md: 24 },
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                    }}
                  >
                    Best Sellers
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                >
                  Customer favorites that everyone loves
                </Typography>
              </Box>
              <Link
                href="/shop?filter=bestseller"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outline"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    px: { xs: 2, md: 3 },
                  }}
                >
                  View All
                </Button>
              </Link>
            </Stack>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(auto-fit, minmax(250px, 1fr))",
              },
              gap: { xs: 1, sm: 2, md: 3 },
            }}
          >
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Collections Preview */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f3faf7 0%, #f7fafd 100%)",
          py: { xs: 3, md: 8 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                mb: { xs: 1, md: 2 },
                fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                px: { xs: 1, md: 0 },
              }}
            >
              Curated Collections
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{
                mb: { xs: 3, md: 6 },
                fontSize: { xs: "0.875rem", md: "1rem" },
                px: { xs: 2, md: 0 },
              }}
            >
              Discover themed collections for every occasion
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {collections.slice(0, 3).map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link
                  href={`/collections/${collection.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: { xs: 320, sm: 350, md: 400 },
                      cursor: "pointer",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-8px)" },
                        boxShadow: {
                          xs: "0 4px 12px rgba(0,0,0,0.1)",
                          md: "0 12px 25px rgba(0,0,0,0.15)",
                        },
                      },
                      transition: "all 0.3s ease-in-out",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: { xs: 180, sm: 200, md: 250 },
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
                        <Typography
                          variant="h6"
                          color="text.secondary"
                          sx={{
                            fontSize: {
                              xs: "0.875rem",
                              sm: "1rem",
                              md: "1.25rem",
                            },
                            textAlign: "center",
                            px: 2,
                          }}
                        >
                          {collection.name} Collection
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        p: { xs: 1.5, md: 2 },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          fontSize: {
                            xs: "1rem",
                            sm: "1.125rem",
                            md: "1.5rem",
                          },
                        }}
                      >
                        {collection.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          flex: 1,
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                          lineHeight: 1.4,
                        }}
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
                          alignSelf: "flex-start",
                          fontSize: { xs: "0.7rem", md: "0.75rem" },
                        }}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Instagram Feed */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f7f3fa 0%, #f7fafd 100%)",
          py: { xs: 3, md: 8 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 1, md: 2 }}
              sx={{ mb: { xs: 2, md: 4 } }}
            >
              <Instagram
                sx={{
                  color: "primary.main",
                  fontSize: { xs: 20, sm: 24, md: 32 },
                }}
              />
              <Typography
                variant="h2"
                textAlign="center"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                }}
              >
                #KashyaStyle
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{
                mb: { xs: 3, md: 6 },
                fontSize: { xs: "0.875rem", md: "1rem" },
                px: { xs: 2, md: 0 },
              }}
            >
              See how our customers style their Kashya pieces
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(3, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 1, sm: 1.5, md: 2 },
              maxWidth: { xs: "100%", sm: "80%", md: "60%" },
              mx: "auto",
            }}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "100%",
                    backgroundColor: "primary.light",
                    borderRadius: { xs: 1, md: 2 },
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      transform: { xs: "none", md: "scale(1.05)" },
                      "& .overlay": {
                        opacity: { xs: 0.7, md: 1 },
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
                    <IconButton
                      sx={{
                        color: "white",
                        zIndex: 20,
                        fontSize: { xs: 16, md: 20 },
                      }}
                    >
                      <Instagram />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Image
                      src={`/images/blog/college-budget.jpg`}
                      alt={`Instagram Post ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 600px) 33vw, (max-width: 900px) 25vw, 20vw"
                    />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
