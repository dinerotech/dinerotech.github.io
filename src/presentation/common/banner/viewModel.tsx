"use client";
import React from "react";

export interface ViewModel {
  isHidden: boolean;
  onHide: () => void;
}

export default function useViewModel() {
  const [hidden, setHidden] = React.useState(false);

  const onHide = React.useCallback(() => {
    setHidden(true);
  }, [setHidden]);

  return {
    isHidden: hidden,
    onHide
  };
}
