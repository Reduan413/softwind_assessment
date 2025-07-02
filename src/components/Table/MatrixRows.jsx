import Matrix from "./Matrix";

const MatrixRows = ({ processedData }) => {
  const { matrix, categories, segments, segmentTotals } = processedData;

  return (
    <div className="">
      {segments.map((segment, segmentIndex) => (
        <div
          key={segment}
          className="grid grid-cols-[1fr] gap-4 items-center relative"
        >
          {/* Fixed Segment Label - Left */}
          <div
            className="text-black py-2 px-3 rounded-xl z-10 absolute top-0 bottom-0 my-auto h-fit -left-16 uppercase font-medium text-sm bg-[rgba(255, 255, 255, 0.2)]"
            style={{
              backdropFilter: "blur(90px)",
              boxShadow: "14px 0px 31.3px 0px #0000001A",
            }}
          >
            {segment.replace("segment", "Segment ")}
          </div>

          {/* Product Matrix Cells */}
          <Matrix
            matrix={matrix}
            categories={categories}
            segments={segments}
            segment={segment}
            segmentIndex={segmentIndex}
          />

          {/* Fixed Segment Total - Right */}
          <div
            className="text-black py-2 px-4 rounded-xl z-10 absolute top-0 bottom-0 my-auto h-fit -right-10 uppercase font-medium text-sm"
            style={{
              backdropFilter: "blur(90px)",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "14px 0px 31.3px 0px #0000001A",
            }}
          >
            ${segmentTotals[segment]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatrixRows;
