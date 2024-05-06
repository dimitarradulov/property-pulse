"use client";

import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type LoadingSpinnerProps = {
  loading: boolean;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const LoadingPage = ({ loading }: LoadingSpinnerProps) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
