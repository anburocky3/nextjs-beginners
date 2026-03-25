"use client";

import { useEffect, useState } from "react";

export default function PostDetail({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        `https://mimic-server-api.vercel.app/posts/${postId}`,
      );
      const post = await response.json();
      setPost(post);
    }

    getPost();
  }, [postId]);

  return (
    <div className="p-4">
      {post && (
        <div>
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
