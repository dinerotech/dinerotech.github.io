import React from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import SubmitFormUseCase from "@/domain/forms/usecases";
import { JOB_SUBMISSION_ENDPOINT } from "@/domain/forms/constants";
import { useRouter } from "next/navigation";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export interface ViewModel {
  loading: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function useViewModel(): ViewModel {
  const { locale } = React.useContext(LocaleContext);
  const [loading, setLoading] = React.useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const handleSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      if (!executeRecaptcha) {
        alert("reCAPTCHA is not ready yet.");
        return;
      }
      try {
        const formData = new FormData(event.currentTarget);
        const token = await executeRecaptcha("submit_job_form");
        formData.append("captchaToken", token);
        formData.append("submittedAt", new Date().toISOString());
        const result = await SubmitFormUseCase(
          JOB_SUBMISSION_ENDPOINT,
          formData
        );
        if (result) {
          router.push(`/${locale.identifier}/thank-you`);
        } else {
          alert(
            "An error occurred while submitting the form. Please try again."
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [executeRecaptcha, router, locale.identifier]
  );

  return {
    loading,
    handleSubmit
  };
}
