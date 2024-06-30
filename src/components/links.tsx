import { DiGithubBadge } from "react-icons/di";
import { AiFillSpotify, AiFillLinkedin } from "react-icons/ai";

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
  ];

  return (
    <div className="flex flex-row gap-4 self-center">
      {links.map((link: MyLinks) => {
        return (
          <div key={link.link}>
            <a
              href={link.link}
              target="_blank"
              className="hover:scale-110 hover:text-white transition-all flex flex-row items-center text-lg"
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
