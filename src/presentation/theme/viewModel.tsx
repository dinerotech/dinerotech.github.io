import { PageLayoutType } from "@/domain/theme/ptos";
import {
  getPageLayoutTypeUseCase,
  getPageOptsUseCase
} from "@/domain/theme/useCases";
import { usePathname } from "next/navigation";
import { PageOpts } from "nextra";

interface ViewModelPto {
  layoutType: PageLayoutType;
  layoutPageOpts: PageOpts;
}

export default function useViewModel(pageOpts: PageOpts): ViewModelPto {
  const pathname = usePathname();
  const layoutType: PageLayoutType = getPageLayoutTypeUseCase(pathname);
  const layoutPageOpts = getPageOptsUseCase(pathname, layoutType, pageOpts);

  return {
    layoutType,
    layoutPageOpts
  };
}
