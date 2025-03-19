import { LoaderCircle } from "lucide-react";
import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center p-4">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default LoadingIndicator;
