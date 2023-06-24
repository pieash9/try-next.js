// "use client";

import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const Segments = ({ params, searchParams }) => {
  const { year, id } = params.segments || [];
  // const params2 = useParams();
  // const searchParams2 = useSearchParams();
  console.log(params2.segments.split("/"),searchParams2.get("title"));
  return (
    <div>
      SingleBlog {year || new Date().getFullYear()} for {id} <br />
      {searchParams.title}
    </div>
  );
};

export default Segments;
