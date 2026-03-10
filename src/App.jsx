
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./section/Home";
import About from "./section/AboutUs"
import Contact from "./section/contact";
import Products from "./section/Products";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
         <Products />

      </main>
      <Footer />
    </>
  );
}
