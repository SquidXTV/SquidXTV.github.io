function Technologies({technologies} : Readonly<{ technologies: string[] }>) {
    return (
        <ul className={'flex flex-wrap'}>
            {
                technologies.map(technology =>
                    <li className={'bg-[#616ec4] text-sm mr-1.5 px-2.5 py-1 mb-1.5'} key={technology}>
                        {technology}
                    </li>
                )
            }
        </ul>
    )
}

export default Technologies;
