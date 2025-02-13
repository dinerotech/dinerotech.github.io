"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect } from "react";

import View from "@/presentation/blogPost/main/view";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <BlogPostContent />
    </Suspense>
  );
}

function BlogPostContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const postId = searchParams?.get("id") || "";

  useEffect(() => {
    if (!postId) {
      router.push("/404");
    }
  }, [postId, router]);

  if (!postId) return null;

  return <View />;
}
