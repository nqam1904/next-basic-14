import Link from "next/link";

function Product() {
  const productId = Math.floor(Math.random() * 100);
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </div>
  );
}

export default Product;
