import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_SPACE_ID
} from "../contentful/constants";
import { sleep } from "../utils";
import JobPto from "./ptos";

export default async function GetJobsUseCase(): Promise<JobPto[]> {
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
      jobId: item.fields.jobId,
      role: item.fields.role || "Unknown Role",
      team: item.fields.team || "Unknown Team",
      location: item.fields.location || "Remote",
      description: item.fields.description || "",
      employmentType: item.fields.employmentType || "Full-time",
      postedDate: item.fields.postedDate
    }));

    return jobs;
  } catch (error) {
    console.error("Error in GetJobsUseCase:", error);
    return [];
  }
}
