import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Wellcome Home</h1>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/products">Product</Link>
    </div>
  );
}

export default Home;
