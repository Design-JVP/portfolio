import { createBrowserRouter, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import CursorFollower from "./components/CursorFollower";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

function Root() {
  return (
    <>
      <CursorFollower />
      <Navbar />
      <Outlet />
      <ContactSection />
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "project/:id", Component: ProjectPage },
    ],
  },
]);
