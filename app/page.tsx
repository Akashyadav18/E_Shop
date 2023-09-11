import Image from "next/image";
import Container from "./components/Container";
import HomeBanner from "./components/banner/HomeBanner";
import { products } from "./utils/data";
import { truncateText } from "./utils/truncateText";
import ProductCard from "./components/products/ProductCard";

export default function Home() {
  return (
    <div className="my-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-8 my-8">
          {products.map((product) => (
            <div>
              <ProductCard data={product}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
