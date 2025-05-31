"use client"            // this is to create dark and light theme .
// this theme provider is then used in the layout.js

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
