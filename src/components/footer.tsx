export default function Footer() {
  return (
    <footer className="flex flex-col items-start w-full text-sm text-balance px-5 mr-auto pt-4 text-gray-400">
      <p>&copy; Stephen Zacarias 2024</p>
      <p>
        Built with <span className="text-white">Next.js</span>,{" "}
        <span className="text-white">Tailwind CSS</span>,{" "}
        <span className="text-white">Framer Motion</span>,{" "}
        <span className="text-white">react-icons</span>, and deployed on{" "}
        <span className="text-white">Vercel</span>
      </p>
    </footer>
  );
}
