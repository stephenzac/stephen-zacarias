import TopScrollBar from "../components/top-scroll-bar";
import Projects from "../components/projects";
import About from "../components/about";
import Interests from "../components/interests";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-auto w-auto pb-4">
      <TopScrollBar />

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Interests section */}
      <Interests />

      {/* Bottom section */}
      <Footer />
    </main>
  );
}
