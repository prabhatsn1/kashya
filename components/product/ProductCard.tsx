"use client";

import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
  Chip,
  Rating,
  Stack,
} from "@mui/material";
import { FavoriteBorder, Favorite, ShoppingBag } from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
  isWishlisted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onAddToWishlist,
  isWishlisted = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [wishlistStatus, setWishlistStatus] = useState(isWishlisted);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlistStatus(!wishlistStatus);
    onAddToWishlist?.(product);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(product);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Product Image */}
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <CardMedia
              component="img"
              height="280"
              image={product.images[0]}
              alt={product.name}
              sx={{
                transition: "transform 0.3s ease-in-out",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />

            {/* Badges */}
            <Box sx={{ position: "absolute", top: 12, left: 12 }}>
              <Stack spacing={1}>
                {product.isNew && (
                  <Chip
                    label="New"
                    size="small"
                    sx={{
                      backgroundColor: "success.main",
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                )}
                {product.isBestseller && (
                  <Chip
                    label="Bestseller"
                    size="small"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                )}
                {discountPercentage > 0 && (
                  <Chip
                    label={`-${discountPercentage}%`}
                    size="small"
                    sx={{
                      backgroundColor: "error.main",
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                )}
              </Stack>
            </Box>

            {/* Wishlist Button */}
            <Box sx={{ position: "absolute", top: 12, right: 12 }}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                animate={{ scale: wishlistStatus ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <IconButton
                  onClick={handleWishlistClick}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                    },
                  }}
                >
                  {wishlistStatus ? (
                    <Favorite sx={{ color: "error.main" }} />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
              </motion.div>
            </Box>

            {/* Quick Actions (Visible on Hover) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.2 }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 1,
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<ShoppingBag sx={{ fontSize: 18 }} />}
                  onClick={handleAddToCart}
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    borderRadius: 1.5,
                    boxShadow: "0 1px 4px rgba(80, 80, 80, 0.08)",
                    px: 1.8,
                    py: 0.7,
                    minWidth: 0,
                    textTransform: "none",
                    transition:
                      "transform 0.13s, box-shadow 0.13s, background 0.18s",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      boxShadow: "0 2px 8px rgba(80, 80, 80, 0.13)",
                      transform: "scale(1.04)",
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Product Details */}
          <CardContent sx={{ flexGrow: 1, pb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                mb: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.description}
            </Typography>

            {/* Rating */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 2 }}
            >
              <Rating
                value={product.rating}
                precision={0.1}
                size="small"
                readOnly
              />
              <Typography variant="body2" color="text.secondary">
                ({product.reviewCount})
              </Typography>
            </Stack>

            {/* Price */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "primary.main" }}
              >
                ${product.price.toFixed(2)}
              </Typography>
              {product.originalPrice && (
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "line-through",
                    color: "text.secondary",
                  }}
                >
                  ${product.originalPrice.toFixed(2)}
                </Typography>
              )}
            </Stack>

            {/* Size Options Preview */}
            <Stack direction="row" spacing={0.5} sx={{ mt: 2 }}>
              {product.sizes.slice(0, 4).map((size) => (
                <Chip
                  key={size}
                  label={size}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: "0.75rem" }}
                />
              ))}
              {product.sizes.length > 4 && (
                <Chip
                  label={`+${product.sizes.length - 4}`}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: "0.75rem" }}
                />
              )}
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
