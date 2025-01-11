import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";
import pro4 from "../assets/project4.png";
import pro5 from "../assets/project5.png";
import pro6 from "../assets/project6.png";

// Array to hold work project data
const WorkCardData = [
  {
    imgsrc: pro1,
    title: "Project Manager",
    subtitle: "The Ripana Designers and Contractors",
    date: "Feb 2022 – Mar 2023",
    text: "Spearheaded project planning and execution for multiple construction sites, leveraging Smartsheet and other tools to track progress, allocate resources, and monitor costs, achieving a 25% reduction in material wastage.",
    link: "https://web.facebook.com/ripanacontractors/?_rdc=1&_rdr",
  },
  {
    imgsrc: pro2,
    title: "Intern",
    subtitle: "The National Construction Authority",
    date: "Feb 2022 – Mar 2023",
    text: "Enhanced document control systems, introducing an efficient system for weekly and monthly reports, improving accessibility by 50%. Successfully accredited over 100 skilled workers, ensuring compliance with NCA regulations.",
    link: "https://nca.go.ke/",
  },
  {
    imgsrc: pro3,
    title: "Field Engineer",
    subtitle: "Ripana Contractors",
    date: "Jul 2020 – Dec 2021",
    text: "Streamlined workforce productivity by optimizing work schedules, reducing downtime by 15%. Conducted regular site visits and implemented cost-saving strategies, resulting in a 20% reduction in project costs.",
    link: "https://web.facebook.com/ripanacontractors/?_rdc=1&_rdr",
  },
  {
    imgsrc: pro4,
    title: "Intern",
    subtitle: "Britech Consultancy",
    date: "Apr 2019 – Aug 2019",
    text: "Oversaw engineering tasks, including structural calculations and project closeout reports, reducing engineer costs by 44%. Facilitated on-time delivery of projects by resolving engineering queries promptly.",
    link: "https://britechconsultancy.com/",
  },
  {
    imgsrc: pro5,
    title: "Project Team Leader",
    subtitle: "Moi University",
    date: "Aug 2018 – Apr 2019",
    text: "Analyzed data using Civil 3D for accurate road alignments and executed methods for project efficiency. Coordinated with a team to meet deadlines and improve traffic flow through plan modifications.",
    link: "https://www.mu.ac.ke/",
  },
  {
    imgsrc: pro6,
    title: "Chief Intern",
    subtitle: "China Wu Yi",
    date: "Apr 2017 – Aug 2017",
    text: "Prepared and maintained construction schedules, ensuring projects were executed within time and budget constraints. Calculated cost estimates and enforced safety protocols, achieving 100% compliance.",
    link: "https://chinawuyi.co.ke/",
  },
];

// Function to validate links
const isValidLink = (url) => {
  try {
    new URL(url); // Check if the URL is valid
    return true;
  } catch (e) {
    return false;
  }
};

export default WorkCardData.map((item, index) => ({
  ...item,
  validLink: isValidLink(item.link) ? item.link : "#", // Adding a fallback for invalid links
  key: index, // Adding a key for React rendering
}));
