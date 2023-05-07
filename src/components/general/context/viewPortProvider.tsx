import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
} from "react";

type ReportProviderProps = {
  children: ReactNode;
};
type ViewPortType = "mobile" | "tablet" | "desktop";

export const ViewportContext = createContext("");

const getViewportType = (width: number) => {
  if (width < 768) {
    return "mobile";
  } else if (width >= 768 && width < 992) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const ViewportProvider: FC<ReportProviderProps> = ({ children }) => {
  const [viewport, setViewport] = useState<ViewPortType>(
    getViewportType(window.innerWidth)
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setViewport(getViewportType(window.innerWidth));
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportProvider;
