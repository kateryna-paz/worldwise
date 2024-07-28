import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound.jsx";

import AppLayout from "./pages/AppLayout.jsx";

function App() {
  return (
    <div>
      <h1>Hello Router!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
