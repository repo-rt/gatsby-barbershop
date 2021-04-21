import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../sass/index.scss"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

//// --- Part two : STYLING - 1:06 min
