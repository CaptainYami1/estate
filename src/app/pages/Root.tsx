import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { ScrollToTop } from "../components/ui/scrolltotop";

export function Root() {
  return (
    <ThemeProvider >
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
