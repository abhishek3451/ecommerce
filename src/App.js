import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "./Store/AuthContext";
import Navbarr from "./component/Layout/Navbar";
import { Suspense } from "react";
import Footer from "./component/Layout/Footer";
import Spin from "./component/Layout/Spinner";

const ProductDetail = React.lazy(() =>
  import("./component/Pages/SingleProduct")
);
const UpdatePass = React.lazy(() => import("./component/Auth/UpdatePass"));
const ContactUS = React.lazy(() => import("./component/Pages/ContactUS"));
const AuthForm = React.lazy(() => import("./component/Auth/AuthForm"));
const About = React.lazy(() => import("./component/Pages/About"));
const Cart = React.lazy(() => import("./component/Cart/Cart"));
const Section = React.lazy(() => import("./component/ItemList/Section"));
const Tour = React.lazy(() => import("./component/Pages/Tour"));
const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <Suspense fallback={<Spin />}>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Tour />} />
          <Route
            path="/store"
            element={isLoggedIn ? <Section /> : <Navigate to="/login" />}
          />
          <Route path="/updatePass" element={<UpdatePass />} />
          <Route path="/store/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUS />} />

          <Route path="/login" element={<AuthForm />} />
          <Route path="/cart" element=<Cart /> />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
