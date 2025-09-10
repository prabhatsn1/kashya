"use client";

import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Stack,
  Chip,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FilterList, Clear, GridView, ViewList } from "@mui/icons-material";
import { motion } from "framer-motion";
import ProductCard from "../../components/product/ProductCard";
import Button from "../../components/ui/Button";
import { sampleProducts, filterOptions, sortOptions } from "../../data";

const ShopPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [filters, setFilters] = useState({
    categories: [] as string[],
    sizes: [] as string[],
    colors: [] as string[],
    priceRange: [0, 200] as number[],
  });

  const filteredProducts = useMemo(() => {
    let filtered = [...sampleProducts];

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Apply size filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => filters.sizes.includes(size))
      );
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors.some((color) => filters.colors.includes(color))
      );
    }

    // Apply price filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // popularity - keep bestsellers first
        filtered.sort(
          (a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0)
        );
    }

    return filtered;
  }, [filters, sortBy]);

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleSizeChange = (size: string) => {
    setFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleColorChange = (color: string) => {
    setFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: newValue as number[],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      sizes: [],
      colors: [],
      priceRange: [0, 200],
    });
  };

  const activeFiltersCount =
    filters.categories.length +
    filters.sizes.length +
    filters.colors.length +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 200 ? 1 : 0);

  const FilterPanel = () => (
    <Box sx={{ p: 3 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 3 }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Filters
        </Typography>
        {activeFiltersCount > 0 && (
          <Button
            variant="text"
            size="small"
            onClick={clearAllFilters}
            startIcon={<Clear />}
          >
            Clear All ({activeFiltersCount})
          </Button>
        )}
      </Stack>

      {/* Categories */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Categories
        </Typography>
        <FormGroup>
          {filterOptions.categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  sx={{ color: "primary.main" }}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>
      </Box>

      {/* Sizes */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Sizes
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {filterOptions.sizes.map((size) => (
            <Chip
              key={size}
              label={size}
              clickable
              variant={filters.sizes.includes(size) ? "filled" : "outlined"}
              color={filters.sizes.includes(size) ? "primary" : "default"}
              onClick={() => handleSizeChange(size)}
            />
          ))}
        </Stack>
      </Box>

      {/* Colors */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Colors
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {filterOptions.colors.map((color) => (
            <Chip
              key={color}
              label={color}
              clickable
              variant={filters.colors.includes(color) ? "filled" : "outlined"}
              color={filters.colors.includes(color) ? "primary" : "default"}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </Stack>
      </Box>

      {/* Price Range */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Price Range
        </Typography>
        <Box sx={{ px: 1 }}>
          <Slider
            value={filters.priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={200}
            valueLabelFormat={(value) => `$${value}`}
            sx={{ color: "primary.main" }}
          />
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              ${filters.priceRange[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${filters.priceRange[1]}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Shop All
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Discover our complete collection of trendy fashion pieces
          </Typography>
        </motion.div>

        {/* Controls Bar */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            mb: 4,
            p: 2,
            backgroundColor: "background.paper",
            borderRadius: 2,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            {isMobile && (
              <Button
                variant="outline"
                startIcon={<FilterList />}
                onClick={() => setFilterDrawerOpen(true)}
              >
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </Button>
            )}

            <Typography variant="body1" color="text.secondary">
              {filteredProducts.length} products
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            {/* View Mode Toggle */}
            <Stack direction="row">
              <IconButton
                onClick={() => setViewMode("grid")}
                sx={{
                  color:
                    viewMode === "grid" ? "primary.main" : "text.secondary",
                  backgroundColor:
                    viewMode === "grid" ? "primary.light" : "transparent",
                }}
              >
                <GridView />
              </IconButton>
              <IconButton
                onClick={() => setViewMode("list")}
                sx={{
                  color:
                    viewMode === "list" ? "primary.main" : "text.secondary",
                  backgroundColor:
                    viewMode === "list" ? "primary.light" : "transparent",
                }}
              >
                <ViewList />
              </IconButton>
            </Stack>

            {/* Sort Dropdown */}
            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel>Sort by</InputLabel>
              <Select
                value={sortBy}
                label="Sort by"
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Stack direction={isMobile ? "column" : "row"} spacing={3}>
          {/* Desktop Filters Sidebar */}
          {!isMobile && (
            <Box sx={{ width: "25%", minWidth: 280 }}>
              <Paper sx={{ position: "sticky", top: 100 }}>
                <FilterPanel />
              </Paper>
            </Box>
          )}

          {/* Products Section */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={3}>
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={3}
                sx={{
                  justifyContent: viewMode === "list" ? "center" : "flex-start",
                }}
              >
                {filteredProducts.map((product, index) => (
                  <Box
                    key={product.id}
                    sx={{
                      width:
                        viewMode === "list"
                          ? "100%"
                          : {
                              xs: "100%",
                              sm: "calc(50% - 12px)",
                              md: "calc(33.333% - 16px)",
                            },
                      minWidth: viewMode === "list" ? "100%" : "280px",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  </Box>
                ))}
              </Stack>
            </Stack>

            {filteredProducts.length === 0 && (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  No products found
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Try adjusting your filters to see more results
                </Typography>
                <Button variant="primary" onClick={clearAllFilters}>
                  Clear All Filters
                </Button>
              </Box>
            )}
          </Box>
        </Stack>
      </Container>

      {/* Mobile Filter Drawer */}
      <Drawer
        anchor="left"
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 320,
            maxWidth: "90vw",
          },
        }}
      >
        <FilterPanel />
      </Drawer>
    </Box>
  );
};

export default ShopPage;
