import githubLogo from '../assets/images/github-mark-white.svg'
import Technologies from "./Technologies.tsx";

interface Project {
    title: string;
    description: string;
    github: string;
    technologies: string[];
}

const projects: Project[] = [
    {
        'title': 'TJ-Bot',
        'description': 'TJ-Bot is a Discord Bot used on the Together Java server. It is maintained by the community, anyone can contribute.',
        'github': 'https://github.com/Together-Java/TJ-Bot/pulls?q=is%3Apr+author%3Asquidxtv ',
        'technologies': ['Java 22', 'JDA', 'Discord', 'Gradle', 'JUnit', 'Mockito', 'SonarQube', 'Spotless', 'SQLite', 'Flyway', 'jOOQ', 'Log4j 2', 'SLF4J']
    },
    {
        'title': 'FrameUI',
        'description': 'FrameUI is a Minecraft plugin library designed to easily create screens within a server.',
        'github': 'https://github.com/SquidXTV/FrameUI',
        'technologies': ['Java 21', 'SpigotMC', 'PacketEvents', 'Gradle', 'JUnit 5', 'Mockito']
    },
    {
        'title': 'Thesis: Simulation of the Two-Body problem',
        'description': 'TwoBodySimulation is a simple simulation of two celestial bodies using the Euler method.',
        'github': 'https://github.com/SquidXTV/TwoBodyProblem',
        'technologies': ['Java 17', 'JavaFX', 'Maven', 'jPackage', 'Thesis']
    }
]

function ProjectItem({project}: Readonly<{ project: Project }>) {
    return (
        <div className={'bg-[#222] shadow-[0_2px_4px_rgba(0,0,0,0.75)] px-6 py-4 rounded-lg'}>
            <div className={'flex justify-between items-center'}>
                <p className={'text-3xl my-2'}>{project.title}</p>
                <a className={'w-6 h-6 align-middle'} href={project.github}>
                    <img alt={'GitHub Icon'} src={githubLogo}/>
                </a>
            </div>
            <Technologies technologies={project.technologies}/>
            <p className={'text-xl my-2'}>{project.description}</p>
        </div>
    )
}

function ProjectList() {
    return (
        <div>
            <p className={'text-4xl font-bold text-center mb-4'}>Projects</p>
            <ul className={'flex justify-center flex-col gap-5'}>
                {
                    projects.map(project =>
                        <li key={project.title}>
                            <ProjectItem project={project}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ProjectList;
