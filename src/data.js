// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaLink,
  FaPython,
  FaAws
} from "react-icons/fa";
import { SiGoland, SiJavascript, SiOpenai, SiKubernetes, SiPostgresql, SiSolidity } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "jespinoza17";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = <p>My name is Juan Espinoza and I'm a full stack software engineer based in the Bay Area. I'm proficient in a variety of programming languages, including JavaScript, Python, and Go, and I am always looking for ways to improve and expand my skillset. When I'm not working, I love to read and stay up to date with the latest developments in the tech world. Check out this <a target="_blank" href="https://careerkarma.com/blog/how-to-build-a-strong-tech-career-with-codesmith/">Career Karma article</a> I was featured in</p>;

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 2,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <SiGoland className="display-4" />,
    name: "Go",
  },
  {
    id: 4,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 5,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 6,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 7,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 8,
    skill: <SiOpenai className="display-4" />,
    name: "Openai",
  },
  {
    id: 9,
    skill: <FaAws className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <SiKubernetes className="display-4" />,
    name: "Kubernetes",
  },
  {
    id: 11,
    skill: <SiPostgresql className="display-4" />,
    name: "Postgresql",
  },
  {
    id: 12,
    skill: <FaDocker className="display-4" />,
    name: "Docker",
  },
];

// Resume link (string - "https://YourResumeUrl") -  using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Sentiment_Analyzer", "quick-jest", "dev-portfolio"]; // add KuberOptic someday

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
