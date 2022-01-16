import "./index.css";
import PageHeader from "./components/pageHeader/PageHeader";
import PageFooter from "./components/pageFooter/PageFooter";
import ListingPage from "./components/listingPage/ListingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <main>
        <Routes>
          <Route path="/" element={<ListingPage />} exact />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      <PageFooter />
    </BrowserRouter>
  );
};

export default App;
