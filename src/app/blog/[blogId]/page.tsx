interface Params {
  params: { blogId: string };
}
export default function BlogDetail({ params }: Params) {
  return (
    <div>
      <h1>Detail Blog: {params.blogId}</h1>
    </div>
  );
}
