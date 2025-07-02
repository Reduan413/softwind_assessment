
import ProductImg from "../../../public/product_image.png";
const SingleProduct = ({ product }) => {
  return (
    <div className="text-center border-b-[1px] border-white w-full last:border-0 py-3">
        <img src={ProductImg} alt="" className="w-8 h-6 mx-auto"/>
        <p className="text-xs text-center">{product?.productName}</p>
    </div>
  );
};

export default SingleProduct