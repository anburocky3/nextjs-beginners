import PostDetail from "./PostDetail";

export async function generateMetadata({ params }) {
  const { postId } = await params;
  async function getPost() {
    const response = await fetch(
      `https://mimic-server-api.vercel.app/posts/${postId}`,
    );
    return await response.json();
  }
  const post = await getPost();
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostDetailPage({ params }) {
  const { postId } = await params;

  return (
    <div className="p-4">
      <PostDetail postId={postId} />
    </div>
  );
}
