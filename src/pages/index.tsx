import React from "react";
import CoreLayout from "src/components/layout/core-layout";
import CoreLayoutHead from "src/components/layout/core-layout-head";

const Home = () => {
  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: "Home",
      }}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </CoreLayout>
  );
};

export default Home;
