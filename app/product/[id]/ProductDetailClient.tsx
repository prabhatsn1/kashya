"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Chip,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Avatar,
  LinearProgress,
} from "@mui/material";
import {
  FavoriteBorder,
  Favorite,
  Share,
  ExpandMore,
  LocalShipping,
  Autorenew,
  Security,
  Star,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";
import ProductCard from "../../../components/product/ProductCard";
import { sampleProducts } from "../../../data";
import { Product } from "../../../types";

const ProductDetailClient = ({ product }: { product: Product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const relatedProducts = sampleProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const reviews = [
    {
      id: "1",
      name: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      comment: "Love this dress! Perfect fit and the fabric is so comfortable.",
      helpful: 12,
    },
    {
      id: "2",
      name: "Emma L.",
      rating: 4,
      date: "2024-01-10",
      comment: "Beautiful dress, runs slightly small. Order one size up!",
      helpful: 8,
    },
    {
      id: "3",
      name: "Jessica K.",
      rating: 5,
      date: "2024-01-05",
      comment: "Absolutely gorgeous! Got so many compliments.",
      helpful: 15,
    },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 15, percentage: 62 },
    { stars: 4, count: 6, percentage: 25 },
    { stars: 3, count: 2, percentage: 8 },
    { stars: 2, count: 1, percentage: 4 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }
    console.log("Added to cart:", {
      product,
      selectedSize,
      selectedColor,
      quantity,
    });
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log("Added to wishlist:", product);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
          {/* Product Images */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ position: "sticky", top: 100 }}>
                {/* Main Image */}
                <Box
                  sx={{
                    width: "100%",
                    height: 500,
                    backgroundColor: "primary.light",
                    borderRadius: 2,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    Product Image {selectedImageIndex + 1}
                  </Typography>
                </Box>
                {/* Image Thumbnails */}
                <Stack direction="row" spacing={1}>
                  {product.images.map((image: string, index: number) => (
                    <Box
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: "primary.light",
                        borderRadius: 1,
                        cursor: "pointer",
                        border: selectedImageIndex === index ? 2 : 1,
                        borderColor:
                          selectedImageIndex === index
                            ? "primary.main"
                            : "divider",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {index + 1}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Box>

          {/* Product Details */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Product Info */}
              <Stack spacing={3}>
                {/* Title and Actions */}
                <Box>
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-between"
                  >
                    <Typography variant="h3" sx={{ fontWeight: 600, flex: 1 }}>
                      {product.name}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <IconButton onClick={handleAddToWishlist}>
                        {isWishlisted ? (
                          <Favorite sx={{ color: "error.main" }} />
                        ) : (
                          <FavoriteBorder />
                        )}
                      </IconButton>
                      <IconButton>
                        <Share />
                      </IconButton>
                    </Stack>
                  </Stack>

                  {/* Rating */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mt: 1 }}
                  >
                    <Rating
                      value={product.rating}
                      precision={0.1}
                      size="small"
                      readOnly
                    />
                    <Typography variant="body2" color="text.secondary">
                      {product.rating} ({product.reviewCount} reviews)
                    </Typography>
                  </Stack>
                </Box>

                {/* Price */}
                <Box>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 700, color: "primary.main" }}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                    {product.originalPrice && (
                      <>
                        <Typography
                          variant="h6"
                          sx={{
                            textDecoration: "line-through",
                            color: "text.secondary",
                          }}
                        >
                          ${product.originalPrice.toFixed(2)}
                        </Typography>
                        <Chip
                          label={`${Math.round(
                            ((product.originalPrice - product.price) /
                              product.originalPrice) *
                              100
                          )}% OFF`}
                          color="error"
                          size="small"
                          sx={{ fontWeight: 600 }}
                        />
                      </>
                    )}
                  </Stack>
                </Box>

                {/* Description */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {product.description}
                </Typography>

                {/* Size Selection */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Size
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {product.sizes.map((size: string) => (
                      <Chip
                        key={size}
                        label={size}
                        clickable
                        variant={selectedSize === size ? "filled" : "outlined"}
                        color={selectedSize === size ? "primary" : "default"}
                        onClick={() => setSelectedSize(size)}
                        sx={{
                          minWidth: 50,
                          "&:hover": { backgroundColor: "primary.light" },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* Color Selection */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Color
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {product.colors.map((color: string) => (
                      <Chip
                        key={color}
                        label={color}
                        clickable
                        variant={
                          selectedColor === color ? "filled" : "outlined"
                        }
                        color={selectedColor === color ? "primary" : "default"}
                        onClick={() => setSelectedColor(color)}
                        sx={{
                          "&:hover": { backgroundColor: "primary.light" },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* Quantity */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Quantity
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      sx={{ minWidth: 40, width: 40, height: 40 }}
                    >
                      -
                    </Button>
                    <Typography
                      variant="h6"
                      sx={{ minWidth: 30, textAlign: "center" }}
                    >
                      {quantity}
                    </Typography>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => setQuantity(quantity + 1)}
                      sx={{ minWidth: 40, width: 40, height: 40 }}
                    >
                      +
                    </Button>
                  </Stack>
                </Box>

                {/* Add to Cart */}
                <Stack spacing={2}>
                  <Button
                    variant="primary"
                    size="large"
                    fullWidth
                    onClick={handleAddToCart}
                    disabled={!selectedSize || !selectedColor}
                  >
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </Button>
                  <Button variant="outline" size="large" fullWidth>
                    Buy Now
                  </Button>
                </Stack>

                {/* Product Features */}
                <Paper sx={{ p: 3, backgroundColor: "background.default" }}>
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <LocalShipping sx={{ color: "primary.main" }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Free Shipping
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          On orders over $50
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Autorenew sx={{ color: "primary.main" }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Easy Returns
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          30-day return policy
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Security sx={{ color: "primary.main" }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Secure Payment
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          SSL encrypted checkout
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>
            </motion.div>
          </Box>
        </Stack>

        {/* Product Details Accordion */}
        <Box sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Product Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  • Material:{" "}
                  {product.tags.includes("cotton")
                    ? "100% Cotton"
                    : "Premium fabric blend"}
                  <br />
                  • Care Instructions: Machine wash cold, tumble dry low
                  <br />
                  • Fit: True to size
                  <br />
                  • Model is 5&apos;7&quot; wearing size M<br />• Imported
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Size Guide
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  Size guide information and measurements table would go here.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Shipping & Returns
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  • Free shipping on orders over $50
                  <br />
                  • Standard delivery: 3-5 business days
                  <br />
                  • Express delivery: 1-2 business days
                  <br />
                  • 30-day return policy
                  <br />• Free returns and exchanges
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        </Box>

        {/* Reviews Section */}
        <Box sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
              Customer Reviews
            </Typography>

            <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
              {/* Review Summary */}
              <Box sx={{ flex: 1 }}>
                <Paper sx={{ p: 3, textAlign: "center" }}>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}
                  >
                    {product.rating}
                  </Typography>
                  <Rating
                    value={product.rating}
                    precision={0.1}
                    size="large"
                    readOnly
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Based on {product.reviewCount} reviews
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    {ratingBreakdown.map((item) => (
                      <Stack
                        key={item.stars}
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{ mb: 1 }}
                      >
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="body2">{item.stars}</Typography>
                          <Star sx={{ fontSize: 16, color: "warning.main" }} />
                        </Stack>
                        <LinearProgress
                          variant="determinate"
                          value={item.percentage}
                          sx={{ flex: 1, height: 6, borderRadius: 3 }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ minWidth: 30 }}
                        >
                          {item.count}
                        </Typography>
                      </Stack>
                    ))}
                  </Box>
                </Paper>
              </Box>

              {/* Individual Reviews */}
              <Box sx={{ flex: 2 }}>
                <Stack spacing={3}>
                  {reviews.map((review) => (
                    <Paper key={review.id} sx={{ p: 3 }}>
                      <Stack
                        direction="row"
                        alignItems="flex-start"
                        spacing={2}
                      >
                        <Avatar sx={{ backgroundColor: "primary.main" }}>
                          {review.name.charAt(0)}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ mb: 1 }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 600 }}
                            >
                              {review.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {new Date(review.date).toLocaleDateString()}
                            </Typography>
                          </Stack>
                          <Rating
                            value={review.rating}
                            size="small"
                            readOnly
                            sx={{ mb: 2 }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                          >
                            {review.comment}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {review.helpful} people found this helpful
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </motion.div>
        </Box>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
                You Might Also Like
              </Typography>
              <Stack direction="row" spacing={3} flexWrap="wrap">
                {relatedProducts.map((relatedProduct) => (
                  <Box
                    key={relatedProduct.id}
                    sx={{
                      flex: { xs: "1 1 100%", sm: "1 1 50%", md: "1 1 25%" },
                      minWidth: 0,
                    }}
                  >
                    <ProductCard product={relatedProduct} />
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProductDetailClient;
