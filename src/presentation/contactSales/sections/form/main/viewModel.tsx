import React from "react";
import { SITE_KEY } from "@/domain/recaptcha/constants";

export interface ViewModel {
  siteKey: string;
  captchaToken: string | null;
  handleCaptchaChange: (token: string | null) => void;
}

export default function useViewModel(): ViewModel {
  const [captchaToken, setCaptchaToken] = React.useState<string | null>("");

  const handleCaptchaChange = React.useCallback(
    (token: string | null) => {
      setCaptchaToken(token);
    },
    [setCaptchaToken]
  );

  return {
    siteKey: SITE_KEY,
    captchaToken,
    handleCaptchaChange
  };
}
