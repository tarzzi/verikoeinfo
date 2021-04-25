import "@fontsource/lora"
import "@fontsource/varela"
import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
      {children}
    </div>
  )
}