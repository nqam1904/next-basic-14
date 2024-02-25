"use client";

import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    // router.push("/");
    // router.replace("/");
    router.back();
    // router.forward();
  };

  return (
    <div>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default OrderProduct;
