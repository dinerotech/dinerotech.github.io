import JobPto from "@/domain/jobs/ptos";
import { GetJobByIdUseCase } from "@/domain/jobs/usecases";
import { useRouter } from "next/navigation";
import React from "react";

export interface ViewModel {
  loading: boolean;
  job: JobPto | null;
}

export default function useViewModel(jobId: string): ViewModel {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [job, setJob] = React.useState<JobPto | null>(null);

  React.useEffect(() => {
    if (!jobId) {
      router.push("/404"); // ✅ Redirect to 404 if jobId is missing
      return;
    }

    const fetchJob = async () => {
      try {
        setLoading(true);
        const jobData = await GetJobByIdUseCase(jobId);

        if (!jobData) {
          router.push("/404"); // ✅ Redirect if job is not found
          return;
        }

        setJob(jobData);
      } catch (error) {
        console.error("Error fetching job details:", error);
        router.push("/404"); // ✅ Redirect on API error
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId, router]);

  return {
    loading,
    job
  };
}
