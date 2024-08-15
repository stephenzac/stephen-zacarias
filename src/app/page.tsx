import Projects from "../components/projects/projects";
import About from "../components/about/about";
import Interests from "../components/interests/interests";
import Footer from "../components/app/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-auto w-auto pb-4">
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
