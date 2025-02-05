import React from "react";

export interface ViewModel {
  collapsed: boolean;
  onToggleVisibility: () => void;
}

export default function useViewModel(): ViewModel {
  const [collapsed, setCollapsed] = React.useState(true);

  const onToggleVisibility = React.useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed, setCollapsed]);

  return {
    collapsed,
    onToggleVisibility
  };
}
