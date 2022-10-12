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

