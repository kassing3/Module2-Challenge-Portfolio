const homeBanner = document.getElementById("home-banner")
const aboutMeSection = document.getElementById("aboutMeSection")
const projectsSection = document.getElementById("projectsSection")

const homeNavBTN = document.getElementById("homeNavBTN")
const aboutNavBTN = document.getElementById("aboutNavBTN")
const projectsNavBTN = document.getElementById("projectsNavBTN")

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const techSkillsLi = document.getElementById("techSkillsLi")
const techSkills = [
    "HTML5",
    "Python",
    "JavaScript",
    "CSS3",
    "Git",
    "Github",
    "Bootstrap",
    "jQuery",
    "JSON",
    "Node.js",
    "Express.js",
    "MySQL",
    "React",
    "NoSQL",
    "Google Suite",
    "Adobe Photoshop",
    "Slack",
    "Zoom",
    "Figma",
    "Prototyping",
    "Smartsheet",
    "Trello",
    "Wordpress",
    "Canva",
    "Adobe Creative Cloud",
    "Agile Methodologies",
    "Wireframing",
    "Usability Testing",
    "Jira",
    "Adobe XD"

]


//Change to 

const changeToAboutSection = (e) => {


    homeBanner.classList.add("d-none");
    projectsSection.classList.add("d-none");
    aboutMeSection.classList.remove("d-none");

    if( homeNavBTN.classList.contains("active") ){
        homeNavBTN.classList.remove("active");
        aboutNavBTN.classList.add("active");

    }

    if( projectsNavBTN.classList.contains("active") ){
        projectsNavBTN.classList.remove("active");
        aboutNavBTN.classList.add("active");
    }
}


const changeToProjectSection = (e) => {


    homeBanner.classList.add("d-none");
    aboutMeSection.classList.add("d-none");
    projectsSection.classList.remove("d-none");

    if( homeNavBTN.classList.contains("active") ){
        homeNavBTN.classList.remove("active");
        projectsNavBTN.classList.add("active");

    }

    if( aboutNavBTN.classList.contains("active") ){
        aboutNavBTN.classList.remove("active");
        projectsNavBTN.classList.add("active");
    }
}


aboutNavBTN.addEventListener("click", changeToAboutSection);
projectsNavBTN.addEventListener("click", changeToProjectSection);


//Add skills to Technical Skills Section

function getSkills(){
    for ( var i = 0; i < techSkills.length; i++) {
        alphTechSkills = techSkills.sort()
        let skill = document.createElement("li");
        skill.classList.add("border", "border-top-0","border-start-0" );
        skill.textContent = alphTechSkills[i]; 
        techSkillsLi.append(skill);
    }

}

getSkills();

