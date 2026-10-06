import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function NotFound() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", color: "red" }}>404 - ไม่พบหน้านี้</h1>
      <p>ขออภัย ไม่มีหน้าที่คุณค้นหา</p>
      <Footer />
    </>
  );
}