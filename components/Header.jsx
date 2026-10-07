

export default function Header() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "navy" }}>Welcome To SAU</h1>
      <div style={{ textAlign: "center", color: "navy" }}>
        <a href="/">Home</a> | <a href="/about">About</a> |{" "}
        <a href="/contact">Contact</a> | <a href="/dti/sau/product">Product</a>
      </div>
      <hr
        style={{
          borderColor: "navy",
          border: "0",
          height: "2px",
          backgroundColor: "navy",
          width: "100%",
        }}
      />
    </>
  );
}