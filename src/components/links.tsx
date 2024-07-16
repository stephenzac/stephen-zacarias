import { DiGithubBadge } from "react-icons/di";
import { AiFillSpotify, AiFillLinkedin, AiFillMail } from "react-icons/ai";

type MyLinks = {
  linkText: string;
  link: string;
  linkIcon: any;
};
export default function Links() {
  const links: MyLinks[] = [
    {
      linkText: "GitHub",
      link: "https://github.com/stephenzac",
      linkIcon: <DiGithubBadge />,
    },

    {
      linkText: "LinkedIn",
      link: "https://linkedin.com/in/stephen-zac",
      linkIcon: <AiFillLinkedin />,
    },
    {
      linkText: "Spotify",
      link: "https://open.spotify.com/user/cheesehugger1",
      linkIcon: <AiFillSpotify />,
    },
    {
      linkText: "stephenzacarias2@gmail.com",
      link: "mailto:stephenzacarias2@gmail.com",
      linkIcon: <AiFillMail />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center w-full lg:w-4/5 gap-4 self-center">
      {links.map((link: MyLinks) => {
        return (
          <div key={link.link}>
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform hover:text-white flex flex-row items-center text-lg lg:text-2xl"
            >
              {link.linkIcon}
              {link.linkText}
            </a>
          </div>
        );
      })}
    </div>
  );
}
