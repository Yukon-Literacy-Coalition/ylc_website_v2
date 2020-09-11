import { useState, useEffect } from "react";

export const truncate = (str, limit) => {
  return str.split(" ").splice(0, limit).join(" ");
};

export const returnSplitText = (str) => {
  const first = str.split(" ").splice(0, 1).join(" ");
  const rest = str.split(" ").splice(1).join(" ");
  return [first, rest];
};

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    typeof window !== "undefined"
      ? getWindowDimensions()
      : { innerWidth: 100, innerHeight: 100 }
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
};
