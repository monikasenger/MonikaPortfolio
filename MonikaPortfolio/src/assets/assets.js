// data/skills.js

// Technical Skills (based on your expertise)
export const technicalSkills = [
  // Programming Languages
  { name: "Java", icon: "FaJava" },
  { name: "JavaScript", icon: "SiJavascript" },

  // Frameworks & Libraries
  { name: "React.js", icon: "FaReact" },
  { name: "Java Swing", icon: "FaLaptopCode" },
  { name: "Spring Boot", icon: "SiSpringboot" },
   { name: "Next.js", icon: "SiNextdotjs" }, 
   { name: "Recharts", icon: "FaChartPie" },
  { name: "shadcn/ui", icon: "FaLayerGroup" }, 

  // Backend & Database
  { name: "Node.js", icon: "FaNodeJs" },
  { name: "Express.js", icon: "FaNodeJs" },
  { name: "Java JDBC", icon: "FaDatabase" },
  { name: "MySQL", icon: "SiMysql" },
  { name: "MongoDB", icon: "SiMongodb" },
  

  // Authentication & Access Control
  { name: "Session-based Login", icon: "FaLock" },
  { name: "Role-Based Access Control", icon: "FaUserShield" },

  // Web Technologies
  { name: "HTML5", icon: "FaHtml5" },
  { name: "CSS3", icon: "FaCss3Alt" },

  // Version Control & Deployment
  { name: "Git", icon: "FaGitAlt" },
  { name: "GitHub", icon: "FaGithub" },
  { name: "Render", icon: "FaCloudUploadAlt" },
   { name: "Vercel", icon: "SiVercel" }, 

  // Tools & Analytics
  { name: "Power BI", icon: "SiPowerbi" },
  { name: "Microsoft Excel", icon: "SiMicrosoftexcel" }
];


// Tools
export const tools = [
 // Tools & IDEs
  { name: "VS Code", icon: "SiVisualstudiocode" },
  { name: "Eclipse", icon: "FaLaptopCode" },
  { name: "IntelliJ IDEA", icon: "FaLaptopCode" },
  { name: "MySQL Workbench", icon: "FaDatabase" },
];

// Soft Skills
export const softSkills = [
  { name: "Problem Solving", icon: "FaLightbulb" },
  { name: "Team Collaboration", icon: "FaUsers" },
  { name: "Time Management", icon: "FaClock" },
  { name: "Adaptability", icon: "FaSyncAlt" },
  { name: "Effective Communication", icon: "FaComments" },
  { name: "Self-Motivation", icon: "FaFire" },
];

// Other Skills
export const otherSkills = [
  { name: "Portfolio Design", icon: "FaPaintBrush" },
  { name: "Project Documentation", icon: "FaFileAlt" },
  { name: "Typing & Excel", icon: "FaKeyboard" },
  { name: "Google Docs/Sheets", icon: "FaGoogleDrive" },
];



export const projectList = [
  {
    title: "Personal Finance Visualizer",
    description: "Next.js + React + MongoDB web app for tracking personal finances with charts, categories, and budgeting features.",
    tech: ["Next.js", "React", "MongoDB", "Recharts", "shadcn/ui"],
    githubLink: "https://github.com/monikasenger/Personal-Finance-Visualizer",
    liveLinks: {
      Demo: "https://personal-finance-visualizer.vercel.app/",
    },
    image: "/projects/personal-finance.png",
    category: "Major",
  },
  {
    title: "Inventory Management System",
    description: "Java + MySQL based desktop app to manage billing and stock tracking.",
    tech: ["Java", "MySQL", "Swing", "JDBC"],
    githubLink: "https://github.com/monikasenger/Inventory-Management-System",
    image: "/projects/inventory.jpg",
    category: "Major",
  },
  {
    title: "Doctor Appointment Booking (MediShed)",
    description: "React + MongoDB app with patient, doctor & admin portals for appointment booking and profile management.",
    tech: ["React", "MongoDB", "Node.js"],
    githubLink: "https://github.com/monikasenger/Doctor-Appointment-Booking-System",
    liveLinks: {
      Patient: "https://doctor-appointment-patient-r2y6.onrender.com",
      Admin_Doctor: "https://doctor-appointment-admin-doctor.onrender.com",
    },
    image: "/projects/medished.png",
    category: "Major",
  },
  {
    title: "Book Review App (Admin Only)",
    description: "MERN stack based book management and review system for admin use.",
    tech: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/monikasenger/BookReview",
    liveLinks: {
      ALL: "https://book-review-frontend-6pdt.onrender.com",
    },
    image: "/projects/bookreview.png",
    category: "Major",
  },
  {
    title: "Travel Management System",
    description: "Java Swing + MySQL based desktop application to manage travel bookings, packages, hotels, and customer details.",
    tech: ["Java", "MySQL", "Swing", "JDBC"],
    githubLink: "https://github.com/monikasenger/TravelManagementSystem",
    image: "/projects/travel.png",
    category: "Major",
  },

   {
    title: "Currency Converter",
    description: "Java console app that converts currency with user input and logic.",
    tech: ["Java", "Swing"],
    githubLink: "https://github.com/monikasenger/CurrencyConverter",
    image: "/projects/currency.png",
    category: "Mini",
  },
  {
    title: "Desktop Application Collection",
    description: "Collection of mini Java desktop apps for learning multithreading, file handling, etc.",
    tech: ["Java", "Swing"],
    githubLink: "https://github.com/monikasenger/DesktopApplication",
    image: "/projects/desktop-apps.png",
     category: "Mini",
  },
  {
    title: "Tic Tac Toe Game",
    description: "Simple Tic Tac Toe logic game made using Java.",
    tech: ["Java", "Swing"],
    githubLink: "https://github.com/monikasenger/TicTacToeGame",
    image: "/projects/tic-tac-toe.png",
     category: "Mini",
  },
  {
  title: "User Registration & Login (Servlet-JSP)",
  description: "Simple user registration and login system using JSP, Servlet, and JDBC with MySQL backend.",
  tech: ["Java", "Servlet", "JSP", "JDBC", "MySQL"],
  githubLink: "https://github.com/monikasenger/thursday-project/tree/main/registration-login%20page(using%20servlet%2C%20jdbc%2Cjsp%20page)", 
  image: "/projects/user-login.jpg", 
  category: "Mini",
}
,
 {
  title: "Java Servlet Mini Projects",
  description: "Mini projects built using Java Servlets, JSP, and JDBC including Student Registration System and a School Management Web App.",
  tech: ["Java", "Servlet", "JSP", "JDBC", "MySQL"],
  githubLink: "https://github.com/monikasenger/thursday-project", 
  image: "/projects/servlet-mini.jpg",
  category: "Mini",
},

  {
  title: "More Mini Projects",
  description: "ATM System, Student Management, Hotel Menu,  and many more.",
  tech: ["Java", "Servlet", "Hibernate", "JDBC"],
  githubLink: "https://github.com/monikasenger/java_program",
  image: "/projects/more-mini.jpg",
  category: "Mini",
}

]; 
