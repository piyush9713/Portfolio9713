import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiNextdotjs,
  SiMui,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGit,
  SiStyledcomponents,
} from "react-icons/si";

const skillsData = [
  { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
  { Icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { Icon: FaJsSquare, color: "#F7DF1E", label: "JavaScript" },
  { Icon: FaReact, color: "#61DBFB", label: "ReactJS" },
  { Icon: SiRedux, color: "#764ABC", label: "Redux" },
  { Icon: SiNextdotjs, color: "#FFFFFF", label: "Next.js" },
  { Icon: GrMysql, color: "#00758F", label: "MySQL" },
  { Icon: SiMongodb, color: "#4DB33D", label: "MongoDB" },
  { Icon: FaNodeJs, color: "#8CC84B", label: "NodeJS" },
  { Icon: SiExpress, color: "#F7DF1E", label: "Express" },
  { Icon: SiTailwindcss, color: "#38B2AC", label: "Tailwind CSS" },
  { Icon: SiBootstrap, color: "#563D7C", label: "Bootstrap" },
  { Icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
  { Icon: TbBrandFramerMotion, color: "#F7DF1E", label: "Framer Motion" },
  { Icon: SiMui, color: "#1525b6", label: "Material UI" },
  { Icon: SiStyledcomponents, color: "#00d1b2", label: "Styled Components" },
  { Icon: SiGit, color: "#F05032", label: "Git" },
  { Icon: SiGithub, color: "#FFFFFF", label: "GitHub" },
  { Icon: VscVscode, color: "#0170FE", label: "VS Code" },
  { Icon: SiPostman, color: "#FF6C37", label: "Postman" },
];

// Reusable Skill Component
const SkillCard = ({ Icon, color, label }) => (
  <div className="flex items-center px-4 sm:px-5 py-2 sm:py-3 border rounded-full bg-black text-white transition-transform duration-500 transform hover:scale-110">
    <Icon color={color} size={28} />
    <span className="text-lg sm:text-2xl font-semibold ml-2">{label}</span>
  </div>
);

const Skills = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-shadow-dark text-5xl font-extrabold sm:text-6xl text-center mb-14">
          My Toolbox
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 px-4 ">
          {skillsData.map(({ Icon, color, label }, index) => (
            <SkillCard key={index} Icon={Icon} color={color} label={label} />
          ))}
        </div>
      </div>
      <hr className="mt-16 pb-16" />
    </div>
  );
};

export default Skills;
