"use client";

import { getPosts } from "@/lib/requests";
import { useInfiniteQuery } from "@tanstack/react-query";
import BlogCard from "./blog-card";
import { Button } from "./ui/button";
import { FaAngleDown } from "react-icons/fa";

export default function Posts() {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (lastPage) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <>
      {data?.pages.map((group) =>
        group?.map((post) => <BlogCard key={post.cursor} post={post.node} />)
      )}
      <div className="col-span-1 lg:col-span-3 w-full flex justify-center my-5">
        <Button
          className="w-full flex items-center justify-center"
          variant="outline"
          disabled={!hasNextPage || isFetching}
          onClick={() => fetchNextPage()}
        >
          {isFetching
            ? "Loading..."
            : hasNextPage
            ? <><span className="mx-3">Load more</span> <FaAngleDown size={15} /></>
            : "That's all for today!"}
        </Button>
      </div>
    </>
  );
}
