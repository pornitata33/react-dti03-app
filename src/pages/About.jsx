import Header from "../components/Header";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <Header />
      <div>
        {/* <h1>About Page</h1> */}
        <h1 style={{ textAlign: "center", color: "magenta" }}>About Page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          ipsa ipsum tenetur quibusdam, debitis vitae cum consequuntur, maxime
          ullam voluptas quia nam dolore laborum. Accusantium earum libero minus
          laboriosam quae ea obcaecati labore facilis, eos facere ullam, eius,
          itaque consequuntur nemo debitis! Sit amet perferendis, praesentium
          obcaecati enim at hic?
        </p>
      </div>
      <Footer />
    </>
  );
}
