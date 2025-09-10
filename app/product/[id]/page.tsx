import React from "react";
import { notFound } from "next/navigation";
import { sampleProducts } from "../../../data";
import ProductDetailClient from "./ProductDetailClient";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = sampleProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;
