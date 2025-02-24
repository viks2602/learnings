import ProductList from "@/components/shared/product/product-list";

import { getLatestProducts } from "@/lib/actions/product.actions";
//!this is just for test
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const  Home = async() => {
   const latestProducts = await getLatestProducts();
  // await delay(300);
  return (
   <>
  <ProductList data={latestProducts} title='New Arrivals'/>
   </>
  );
}
export default Home;