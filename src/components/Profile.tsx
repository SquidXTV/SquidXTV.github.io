import profile from '../assets/images/profile-picture.png'
import Socials from "./Socials.tsx";

function Profile({age} : Readonly<{ age: number }>) {
    return (
        <div>
            <img className={'w-1/4 h-1/4 rounded-full mx-auto'} alt='profile' src={profile}/>
            <div className={'text-center *:my-5'}>
                <p className={'text-[2.5rem] font-bold'}>Connor Schweighöfer | SquidXTV</p>
                <p className={'text-xl text-[#666]'}>Software Developer | {age} years old | 🇩🇪</p>
                <Socials/>
            </div>
        </div>
    );
}

export default Profile;
