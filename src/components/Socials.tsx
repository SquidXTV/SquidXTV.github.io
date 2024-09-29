import cv from '../assets/resources/CV_English.pdf'

function SocialMediaLink({link, image, alt} : Readonly<{ link: string, image: string, alt: string }>) {
    return (
        <a className={'mx-1'} href={link}>
            <img src={image} alt={alt}/>
        </a>
    )
}

function Socials() {
    return (
        <div className={'flex justify-center my-5'}>
            <SocialMediaLink link={'https://github.com/SquidXTV'}
                             image={'https://img.shields.io/badge/SquidXTV--blue?logo=github&style=social'}
                             alt={'GitHub Link'}/>
            <SocialMediaLink link={'mailto:squidxtv@gmail.com'}
                             image={'https://img.shields.io/badge/SquidXTV-EA4335?style=flat&logo=gmail&logoColor=dfdfdf'}
                             alt={'E-Mail Link'}/>
            <SocialMediaLink link={'https://discord.com/users/565887697269293066'}
                             image={'https://img.shields.io/badge/SquidXTV-EA4335?style=flat&logo=discord&logoColor=ffffff&color=768BD5'}
                             alt={'Discord Link'}/>
            <SocialMediaLink link={cv}
                             image={'https://img.shields.io/badge/Resume-grey?style=flat-square&logo=adobeacrobatreader'}
                             alt={'CV Link'}/>
        </div>
    )
}

export default Socials;
