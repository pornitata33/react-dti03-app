import Header from "../components/Header";
import Footer from "../components/Footer";
export default function NotFound() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", color: "orange" }}>NotFound</h1>
      <p style={{ textAlign: "center" }}>
        The page you are looking for does not exist.
      </p>
      <Footer />
    </>
  );
}