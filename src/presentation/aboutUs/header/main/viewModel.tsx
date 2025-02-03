import React from "react";

export interface ViewModel {
  isMobileViewHidden: boolean;
  onHideMobileView: () => void;
  onShowMobileView: () => void;
}

export default function useViewModel(): ViewModel {
  const [hidden, setHidden] = React.useState(true);

  const onHideMobileView = React.useCallback(() => {
    setHidden(true);
  }, [setHidden]);

  const onShowMobileView = React.useCallback(() => {
    setHidden(false);
  }, [setHidden]);

  return {
    isMobileViewHidden: hidden,
    onHideMobileView,
    onShowMobileView
  };
}
