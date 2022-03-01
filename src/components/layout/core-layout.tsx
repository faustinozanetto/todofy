import React from "react";
import { CoreLayoutHeadProps } from "./core-layout-head";

type CoreLayoutProps = {
  children: React.ReactNode;
  head: React.FC<CoreLayoutHeadProps>;
  headProps: CoreLayoutHeadProps;
};

const CoreLayout: React.FC<CoreLayoutProps> = (props) => {
  const { children, head: Head, headProps } = props;

  return (
    <div>
      {/* Head */}
      <Head {...headProps} />

      {/* Children */}
      {children}
    </div>
  );
};

export default CoreLayout;
