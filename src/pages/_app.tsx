import React from "react";
import type { AppProps } from "next/app";
import "@styles/style.scss";

type TodofyAppProps = AppProps & {};

const TodofyApp: React.FC<TodofyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default TodofyApp;
