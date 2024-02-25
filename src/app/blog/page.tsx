import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
  description: "desciption blog",
};

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
    </div>
  );
}
