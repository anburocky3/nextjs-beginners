import Link from "next/link";
import PostList from "./PostList";

export const metadata = {
  title: "Posts",
  description: "This is posts page",
};

export default function Posts() {
  return (
    <div className="p-4">
      <Link href="/" className="text-blue-500 text-sm hover:underline">
        &larr; Back to Home
      </Link>
      <h4 className="font-medium">Posts regarding next.js concepts!</h4>

      <PostList />
    </div>
  );
}
