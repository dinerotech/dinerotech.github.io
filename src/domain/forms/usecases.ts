import { sleep } from "../utils";

export default async function SubmitFormUseCase(
  endpoint: string,
  data: FormData
): Promise<boolean> {
  try {
    // ✅ Simulate delay for testing
    await sleep(2000);
    return true;

    // ✅ Send `FormData` using fetch
    const response = await fetch(endpoint, {
      method: "POST",
      body: data // ✅ Send FormData directly
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.success || false;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
}
