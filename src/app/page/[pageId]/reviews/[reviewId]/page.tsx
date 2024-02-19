import { notFound } from "next/navigation";

interface Params {
  params: {
    pageId: string;
    reviewId: string;
  };
}
const ReviewPage = ({ params }: Params) => {
  if (+params.reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Page: {params.pageId} for reviews: {params.reviewId}
      </h1>
    </div>
  );
};
export default ReviewPage;
