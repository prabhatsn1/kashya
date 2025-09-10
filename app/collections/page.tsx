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
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { collections } from "../../data";

const CollectionsPage: React.FC = () => {
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
            Our Collections
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            Curated fashion collections for every style and occasion
          </Typography>
        </motion.div>

        {/* Collections Grid */}
        <Stack spacing={4}>
          {collections.map((collection, index) => (
            <Box key={collection.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link
                  href={`/collections/${collection.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: 500,
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
                        height: 300,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          background: `linear-gradient(135deg, ${
                            index % 2 === 0 ? "#FFE4E1" : "#F0F8FF"
                          } 0%, ${
                            index % 2 === 0 ? "#F0FFF0" : "#E6E6FA"
                          } 100%)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h5" color="text.secondary">
                          {collection.name} Collection
                        </Typography>
                      </Box>
                      <Chip
                        label={`${collection.products.length} items`}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          backgroundColor: "white",
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                        {collection.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.6 }}
                      >
                        {collection.description}
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Chip
                          label={collection.theme}
                          variant="outlined"
                          sx={{
                            color: "primary.main",
                            borderColor: "primary.main",
                            fontWeight: 500,
                          }}
                        />
                        <Typography
                          variant="body2"
                          color="primary.main"
                          sx={{ fontWeight: 600 }}
                        >
                          Explore Collection →
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default CollectionsPage;
