'use client'

type LinkPropsType = {id: number, title: string, href: string}

function NavItem({links, openMenu}: {
    links: LinkPropsType[],
    openMenu?: () => void
}) {


    return (
        links.map(link =>
            <li key={link.id} onClick={openMenu}>
                <a href={link.href}>
                    {link.title}
                </a>
            </li>
        )
    )
}

export default NavItem