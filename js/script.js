document.addEventListener('DOMContentLoaded', () => {
    const age = calculateAge(17, 7, 2005)
    document.querySelectorAll('.replace-age').forEach(function (element) {
        element.innerHTML = element.innerHTML.replace("[Age]", age.toString());
    })

    fetch('resources/projects.json')
        .then(value => value.json())
        .then(data => generateProjects(data))
        .catch(reason => console.log('Error fetching JSON data:', reason))
})

function calculateAge(day, month, year) {
    const now = new Date()
    let age = now.getFullYear() - year

    let currentMonth = now.getMonth() + 1
    if (currentMonth < month || (currentMonth === month && now.getDate() < day)) {
        age -= 1
    }

    return age;
}

function generateProjects(data) {
    const container = document.querySelector('.container');
    const projectsSection = document.createElement('div')
    projectsSection.classList.add('section', 'projects')

    const projectTitle = document.createElement('h2')
    projectTitle.classList.add('section-title')
    projectTitle.textContent = 'Projects'

    const projectList = document.createElement('div')
    projectList.classList.add('project-list')

    data.forEach(function (project) {
        const projectBox = document.createElement('div');
        projectBox.classList.add('project-box');

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = project.title;

        const projectGithub = document.createElement('div')
        projectGithub.classList.add('project-github');

        const githubLink = document.createElement('a')
        githubLink.href = project.github
        githubLink.target = '_blank'

        const githubIcon = document.createElement('img')
        githubIcon.src = 'img/github-logo.png'
        githubIcon.alt = 'Source Code'

        githubLink.appendChild(githubIcon)
        projectGithub.appendChild(githubLink)

        const techStack = document.createElement('div')
        techStack.classList.add('project-tech-stack')
        project['tech-stack'].forEach(function (technology) {
            const techBox = document.createElement('div')
            techBox.classList.add('project-tech')
            techBox.textContent = technology
            techStack.appendChild(techBox)
        })

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description');
        projectDescription.textContent = project.description;


        projectBox.appendChild(projectTitle);
        projectBox.appendChild(projectGithub)
        projectBox.appendChild(techStack)
        projectBox.appendChild(projectDescription);

        projectList.appendChild(projectBox);
    })

    projectsSection.appendChild(projectTitle)
    projectsSection.appendChild(projectList)

    container.append(projectsSection)

}
