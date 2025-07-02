"use client";

import { useMemo } from "react";
import { products } from "../../data/products";

import MatrixRows from "./MatrixRows";
import TableTab from "./TableTab";

const ProductMatrix =()=> {
  const processedData = useMemo(() => {
    const matrix = {};
    const segmentTotals = {};

    // Get unique categories and segments, sorted
    const categories = [...new Set(products.map((p) => p.category))].sort();
    const segments = [...new Set(products.map((p) => p.segment))].sort();

    // Initialize matrix with empty arrays for each category & segment pair
    categories.forEach((category) => {
      matrix[category] = {};
      segments.forEach((segment) => {
        matrix[category][segment] = [];
      });
    });

    // Initialize segment totals
    segments.forEach((segment) => {
      segmentTotals[segment] = 0;
    });

    // Fill matrix and calculate totals
    products.forEach((product) => {
      const { category, segment, productPrice } = product;

      if (matrix[category] && matrix[category][segment]) {
        matrix[category][segment].push(product);
        segmentTotals[segment] += productPrice;
      }
    });

    return { matrix, categories, segments, segmentTotals };
  }, [products]);

  const { categories } = processedData;

  return (
    <div className="grid grid-cols-[5%_95%]  w-full h-full">
      <div className="flex justify-center items-center h-full w-full">
        <TableTab />
      </div>
      <div className="p-8  mx-auto w-full ">
        <div className="overflow-x-auto px-16">
          {/* Category Headers */}

          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}
          >
            {categories.map((category) => (
              <div key={category} className="text-center px-2">
                <h3 className="font-semibold text-sm text-black uppercase tracking-wide py-2">
                  {category.replace("category", "Category ")}
                </h3>
              </div>
            ))}
          </div>

          {/* Matrix Rows */}

          <MatrixRows processedData={processedData} />
        </div>
      </div>
    </div>
  );
}

export default ProductMatrix