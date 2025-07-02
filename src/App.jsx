import BgImage from "../public/bg_image.png";
import "./App.css";
import Header from "./components/Header/Header";
import ProductMatrix from "./components/Table/ProductMatrix";


function App() {
  return (
    <div className="min-h-screen bg-cover bg-center relative px-14">
      <img
        src={BgImage}
        alt=""
        className=" absolute w-full h-full top-0 left-0 -z-10"
      />
      <Header />
      <ProductMatrix />
    </div>
  );
}

export default App;
