import { ReactElement } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import TopFooter from "./TopFooter";

interface layoutProps {
  children: ReactElement[];
}

export default function Layout({ children }: layoutProps) {
  return (
    <>
      <TopBar />
      <Header />
      <div className="main-content">
        {children}
      </div>
      <TopFooter />
      <Footer />
    </>
  )
}
