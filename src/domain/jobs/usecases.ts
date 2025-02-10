import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_SPACE_ID
} from "../contentful/constants";
import { sleep } from "../utils";
import JobPto from "./ptos";

export async function GetJobsUseCase(): Promise<JobPto[]> {
  try {
    await sleep(2000);
    const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=job`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.items) {
      throw new Error("No job postings found.");
    }

    // ✅ Transform Contentful response into `JobPto[]`
    const jobs: JobPto[] = data.items.map((item: any) => ({
      jobId: item.sys.id,
      role: item.fields.role || "Unknown Role",
      team: item.fields.team || "Unknown Team",
      location: item.fields.location || "Remote",
      remote: item.fields.remote,
      description: item.fields.description || "No description available.",
      employmentType: item.fields.employmentType || "Full-time",
      postedDate: item.fields.postedDate
    }));

    return jobs;
  } catch (error) {
    console.error("Error in GetJobsUseCase:", error);
    return [];
  }
}

export async function GetJobByIdUseCase(jobId: string): Promise<JobPto | null> {
  try {
    const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/entries/${jobId}?access_token=${CONTENTFUL_ACCESS_TOKEN}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.warn(`Job not found: ${jobId} (HTTP ${response.status})`);
      return null; // ✅ Return null instead of throwing an error
    }

    const data = await response.json();
    if (!data.fields) {
      console.warn(`Job ID ${jobId} exists but has missing fields.`);
      return null; // ✅ If job has no fields, return null
    }

    return {
      jobId: data.sys.id,
      role: data.fields.role || "Unknown Role",
      team: data.fields.team || "Unknown Team",
      location: data.fields.location || "Remote",
      remote: data.fields.remote,
      description: data.fields.description || "No description available.",
      employmentType: data.fields.employmentType || "Full-time",
      postedDate: data.fields.postedDate
    };
  } catch (error) {
    console.error("Error in GetJobByIdUseCase:", error);
    return null; // ✅ Return null on error
  }
}
