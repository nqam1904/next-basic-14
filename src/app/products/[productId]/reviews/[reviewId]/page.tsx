import { notFound } from "next/navigation";

type Params = {
  params: {
    productId: string;
    reviewId: string;
  };
};
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
function ReviewDetail({ params }: Params) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (+params.reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Product: {params.productId} for reviews: {params.reviewId}
      </h1>
    </div>
  );
}

export default ReviewDetail;
