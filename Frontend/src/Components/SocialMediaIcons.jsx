import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-7">
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="size-8" />
      </a>
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="size-8" />
      </a>
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="size-8" />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
