import JobPto from "@/domain/jobs/ptos";
import GetJobsUseCase from "@/domain/jobs/usecases";
import React from "react";

export interface ViewModel {
  loading: boolean;
  jobs: JobPto[];
}

export default function useViewModel(): ViewModel {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [jobs, setJobs] = React.useState<JobPto[]>([]);

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobPosts = await GetJobsUseCase();
        setJobs(jobPosts);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return {
    loading,
    jobs
  };
}
