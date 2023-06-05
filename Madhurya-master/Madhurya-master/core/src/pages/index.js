import { useSelector } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutOne } from "../components/Layout";
import { HeroSliderOne } from "../components/HeroSlider";
import { ProductTab } from "../components/ProductTab";
import { ImageCta } from "../components/Cta";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
import imageCtaData from "../data/image-cta/image-cta-one.json";
import { fetchAllProducts } from "../services/product.services";
import { useEffect } from "react";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const newProducts = getProducts(products, "decor", "new", 9);
  const popularProducts = getProducts(products, "decor", "popular", 9);
  const saleProducts = getProducts(products, "decor", "sale", 9);

async function getAllProducts() {
  const products = await fetchAllProducts();
  console.log(products)
}

  useEffect(() => {
    console.log('gere')
   getAllProducts();
  
    
  }, [])
  

  return (
    <LayoutOne aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderOne sliderData={heroSliderData} />

      {/* product tab */}
      <ProductTab
        newProducts={newProducts}
        popularProducts={popularProducts}
        saleProducts={saleProducts}
      />

      {/* image cta */}
      <ImageCta
        image={imageCtaData.image}
        tags={imageCtaData.tags}
        title={imageCtaData.title}
        url={imageCtaData.url}
      />
    </LayoutOne>
  );
};

// const axios = require('axios');

// const shop = 'shopify.com/store/d15726';
// const apiVersion = '2023-06'; // Replace with the desired API version
// const apiToken = '8503c260523c96f85c4d35d761097195';

// // Example GET request to fetch all products
// axios.get(`https://${shop}/admin/api/${apiVersion}/products.json`, {
//   headers: {
//     'X-Shopify-Access-Token': apiToken,
//   },
// })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


export default Home;
