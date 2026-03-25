"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://mimic-server-api.vercel.app/posts?_limit=10",
      );
      const data = await response.json();
      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <div className="my-5">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.id}`}
          className="bg-blue-100 p-4 rounded-md mb-4 block"
        >
          <h5 className="font-medium">{post.title}</h5>
          <p className="text-sm text-gray-600">{post.body}</p>
        </Link>
      ))}
    </div>
  );
}
