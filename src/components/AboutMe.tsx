import thesis from '../assets/resources/Thesis - Two-Body Problem.pdf';

function AboutMe({age}: Readonly<{ age: number }>) {
    return (
        <div>
            <p className={'text-4xl font-bold text-center mb-4'}>About Me</p>
            <p className={'text-xl'}>
                Hi, I'm Connor Schweighöfer, an {age}-year-old developer with around {age - 15} years of programming
                experience. My expertise lies in Java and backend development, but I've also worked on a variety
                of projects including plugins, desktop, and frontend applications.
                <br/><br/>
                I developed an interest in Computer Science at the age of 14 by playing Minecraft and creating my own
                modifications for the game. My focus quickly shifted towards learning Java, and after a few months,
                I completed the <a href={'https://java-programming.mooc.fi/'}>Java Programming Course</a> from the
                University of Helsinki. At the same time, I became active on the <a href={'https://togetherjava.org/'}>Together
                Java</a> Discord server. Now, I am an active helper and community lead on the server, which helps me
                to stay up-to-date with latest technologies.
                <br/><br/>
                Throughout the journey as a developer, I have been working on a wide range of projects. I contributed
                to <a href={'https://github.com/Together-Java/TJ-Bot'}>TJ-Bot</a>, an open-source Discord bot for the
                Together Java Discord server. Additionally, I have been working on my own little projects like
                a Minecraft Plugin library called <a href={'https://github.com/SquidXTV/FrameUI'}>FrameUI</a> and JavaFX
                projects, including my <a href={thesis}>thesis</a> on the
                two-body problem.
                <br/><br/>
                I am currently studying Applied Computer Science at the <a
                href={'https://www.fhdw.de/en'}>FHDW</a> with <a href={'https://www.adesso.de/en/'}>adesso SE</a> as my
                partner company. I alternate every three months between working at the company and attending university,
                allowing me to gain both theoretical knowledge and practical experience. Recently, I completed
                the <a href={'https://spring.academy/paths/spring-certified-professional-2023'}>Spring
                Certified Professional</a> course from Spring Academy and plan to take the certification exam in the near future.
                Additionally, I successfully passed the <a
                href={'https://aws.amazon.com/certification/certified-cloud-practitioner/'}>AWS Certified Cloud
                Practitioner</a> exam.
                <br/><br/>
                At the moment I'm collaborating with two fellow students on a demo project designed for learning
                purposes. We're building a to-do app using Spring, React, GitLab, AWS and Terraform. This project
                is helping us gain hands-on experience in fullstack development.
                <br/><br/>
                Outside of programming, I have an appreciation for nature, spending my free time exploring on my
                mountain bike. I also enjoy playing football and video games with friends.
            </p>
        </div>
    )
}

export default AboutMe;
