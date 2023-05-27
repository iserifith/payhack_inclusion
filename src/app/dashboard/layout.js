"use client";
// import "@/styles/globals.css";
import Sidebar from "../../components/shared/Sidebar";

export default function App({ Component, pageProps, children }) {
  return (
    <Sidebar>
      {/* <Component {...pageProps} /> */}
      {children}
    </Sidebar>
  );
}
