import SingleProduct from "./SingleProduct";

const Matrix = ({ matrix, categories, segments, segment, segmentIndex }) => {
  const getBackgroundStyle = (segmentIndex) => {
    const baseStyle = {
      backdropFilter: "blur(36px)",
      WebkitBackdropFilter: "blur(36px)", // for Safari support
    };

    if (segmentIndex % 2 === 0) {
      // Even index
      return {
        ...baseStyle,
        background: "rgba(255, 255, 255, 0.2)",
      };
    }

    // Odd index
    return baseStyle;
  };
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}
    >
      {categories.map((category) => {
        const productsInCell = matrix[category]?.[segment] || [];
        const bgStyle = getBackgroundStyle(segmentIndex);

        return (
          <div
            key={`${category}-${segment}`}
            className={`  min-h-10 grid place-items-start border-[1px] border-white ${
              segmentIndex === 0 ? "rounded-t-xl" : ""
            } 
  ${segmentIndex === segments.length - 1 ? "rounded-b-xl" : ""}`}
            style={{
              ...bgStyle,
              gridTemplateRows: `repeat(${Math.ceil(
                Math.sqrt(productsInCell.length || 1)
              )}, 1fr)`,
              gridAutoRows: "min-content",
            }}
          >
            {productsInCell.map((product, index) => (
              <SingleProduct
                product={product}
                key={`${product.productName}-${index}`}
              />
            ))}
            {productsInCell.length === 0 && <div className=""></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Matrix;
