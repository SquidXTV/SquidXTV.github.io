import './App.css'
import Profile from "./components/Profile.tsx";
import AboutMe from "./components/AboutMe.tsx";
import {calculateAge} from "./util/DateUtil.ts";
import ProjectList from "./components/ProjectList.tsx";
import Divider from "./components/Divider.tsx";

function App() {
    const age: number = calculateAge();

    return (
        <>
            <div className={'flex justify-center p-5'}>
                <div className={'max-w-4xl *:my-12'}>
                    <Profile age={age}/>
                    <Divider/>
                    <AboutMe age={age}/>
                    <Divider/>
                    <ProjectList/>
                </div>
            </div>
            <footer className={'text-center pb-7'}>
                <p>&copy; 2024 Connor Schweighöfer</p>
                <p>Contact: squidxtv@gmail.com</p>
            </footer>
        </>

    )
}

export default App
