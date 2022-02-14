import "./index.css";
import PageHeader from "./components/pageHeader/PageHeader";
import PageFooter from "./components/pageFooter/PageFooter";
import ListingPage from "./components/listingPage/ListingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
