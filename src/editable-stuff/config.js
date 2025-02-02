// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aryan",
  middleName: "",
  lastName: "Sarswat",
  message: " Automating the World with Technology ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AryanSarswat",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/aryan_sarswat/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/aryan-sarswat",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/aryan.png"),
  imageSize: 375,
  message: "My name is Aryan Sarswat. I’m presently studying Computer Science from the National University of Singapore. I'm extremely passionate about automating everything around me! I am currently interested in Machine Learning, particularly in the limitless potential of Computer Vision. In my free time I like working creating AI bots for board games and playing Chess! I used to be a Mechanical Engineering major but after taking some Machine Learning courses and building my own Object detector I transferred to Computer Science and never looked back!",
  resume: require("../editable-stuff/Aryan_Sarswat_2022_Resume.pdf"),
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Final Year Project',// Here Add Company Name
      companyLogo: require('../assets/img/a-star.png'),
      companyName: "Agency For Science, Technology And Research (A*STAR)",
      date: 'August 2022 – Present',
      description: "Currently doing research to improve the generalization of deep learning models for deep-fake detection.",
    },
    {
      role: 'Teaching Assistant',
      companyLogo: require('../assets/img/nus.png'),
      companyName: "National University of Singapore CS3244 (Machine Learning)",
      date: 'August 2022 – December 2022',
      description: "Teaching Assistant for CS3244 (Machine Learning) at the National University of Singapore. Was responsible for setting and grading assignments, exams and final projects. Taught a class of 15 students on various concepts in Machine Learning. Mentored 3 project groups on their final projects."
    },
    {
      role: 'Technology Intern',
      companyLogo: require('../assets/img/mci.jpg'),
      companyName: "Ministry of Communications and Information (MCI)",
      date: 'May 2022 – August 2022',
      description: "Created a website which uses blockchain to prove the authenticity of a document. The website was built using ReactJS and the backend was built using Python."
    },
  ]
}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "AryanSarswat", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/aryan.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/aryan.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "Java", value: 85 },
    { name: "C/C++", value: 85 },
    { name: "Data Structures", value: 85 },
    { name: "LaTex", value: 80 },
    { name: "Deep Learning", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 65 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Collaboration", value: 70 },
    { name: "Time Management", value: 90 },
    { name: "Leadership", value: 70 },
    { name: "Adaptability", value: 80 },
    { name: "Initiative", value: 85 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 60 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently applying for Graduate School and looking for any Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "aryansarswat2000@gmail.com",
};



// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
