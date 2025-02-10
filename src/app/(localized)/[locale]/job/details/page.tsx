"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import View from "@/presentation/jobDetails/main/view";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams?.get("id") || ""; // ✅ Get the `id` from query params

  // ✅ Redirect to 404 if `id` is missing
  useEffect(() => {
    if (!jobId || jobId === "") {
      router.push("/404");
    }
  }, [jobId, router]);

  if (!jobId) return null; // Prevent rendering if `jobId` is missing (redirect happens)

  return <View jobId={jobId} />;
}
