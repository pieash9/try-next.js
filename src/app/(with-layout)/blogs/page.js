// "use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next js",
};

// const blogs = [
//   {
//     id: 1,
//     year: "2013",
//     title: "title 1",
//   },
//   {
//     id: 2,
//     year: "2014",
//     title: "title 2",
//   },
//   {
//     id: 3,
//     year: "2015",
//     title: "title 1",
//   },
//   {
//     id: 4,
//     year: "2016",
//     title: "title 4",
//   },
// ];
const BlogsPage = async () => {
  //   const router = useRouter();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, title, body }) => (
        <div key={id} className="border border-blue-500 my-2 p-2 rounded">
          <h3 className="text-2xl">{title}</h3>
          <p>{body}</p>
          <Link
            className="block  "
            //   onClick={() => router.push(`blogs/${year}/${id}?title=${title}`)}
            href={`blogs/${id}`}
          >
            <button className="p-2 bg-gray-300 rounded">details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
