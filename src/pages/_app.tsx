import React from 'react';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { themes } from '@styles/themes/themes';

type TodofyAppProps = AppProps & {};

const TodofyApp: React.FC<TodofyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: themes.lightTheme.className,
        dark: themes.darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default TodofyApp;
