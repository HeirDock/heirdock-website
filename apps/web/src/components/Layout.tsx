import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import DocumentTitle from "./DocumentTitle";

export default function Layout() {
  return (
    <>
      <DocumentTitle />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
