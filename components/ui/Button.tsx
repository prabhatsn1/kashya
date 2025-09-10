"use client";

import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";

interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: "primary" | "secondary" | "outline" | "text";
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  loading = false,
  children,
  disabled,
  fullWidth = false,
  sx,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(248, 187, 217, 0.4)",
          },
        };
      case "secondary":
        return {
          backgroundColor: "secondary.main",
          color: "text.primary",
          "&:hover": {
            backgroundColor: "secondary.dark",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(230, 230, 250, 0.4)",
          },
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "primary.main",
          border: "2px solid",
          borderColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(248, 187, 217, 0.4)",
          },
        };
      case "text":
        return {
          backgroundColor: "transparent",
          color: "primary.main",
          "&:hover": {
            backgroundColor: "primary.light",
            transform: "translateY(-1px)",
          },
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      <MuiButton
        disabled={disabled || loading}
        fullWidth={fullWidth}
        sx={{
          position: "relative",
          minHeight: 44,
          transition: "all 0.3s ease-in-out",
          ...getVariantStyles(),
          ...sx,
        }}
        {...props}
      >
        {loading && (
          <CircularProgress
            size={20}
            sx={{
              position: "absolute",
              color: "inherit",
            }}
          />
        )}
        <span style={{ opacity: loading ? 0 : 1 }}>{children}</span>
      </MuiButton>
    </motion.div>
  );
};

export default Button;
