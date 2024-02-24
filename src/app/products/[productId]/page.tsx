import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resovle) => {
    setTimeout(() => {
      resovle(`Iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return (
    <div>
      <h1>Detail Product: {params.productId} </h1>
    </div>
  );
}
