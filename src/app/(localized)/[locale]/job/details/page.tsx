"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import View from "@/presentation/jobDetails/main/view";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <JobDetailsContent />
    </Suspense>
  );
}

function JobDetailsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams?.get("id") || ""; // ✅ Get job ID from query params

  // ✅ Redirect to 404 if `id` is missing
  useEffect(() => {
    if (!jobId) {
      router.push("/404");
    }
  }, [jobId, router]);

  if (!jobId) return null; // Prevent rendering if `jobId` is missing

  return <View jobId={jobId} />;
}
