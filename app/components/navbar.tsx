// Main Navigate bar 
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const isActive = (currentPath: string, path: string): boolean => {
    return currentPath === path;
};

const NavBar = () => {
    const pathname = usePathname();

    return (
        <nav>
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <span>Icon Here</span>
                {/* can add hamburger menu */}
                <div className="tabs hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-row space-x-4 p-4 font-medium">
                        {[
                            { href: '/', label: 'About Me' },
                            { href: '/skills', label: 'Skills' },
                            { href: '/projects', label: 'Projects' },
                            { href: '/contact', label: 'Contact' },
                        ].map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={isActive(pathname, href) ? 'page' : undefined}
                                    className={`px-3 py-2 rounded-md ${isActive(pathname, href) ? 'text-blue-500' : 'hover:text-blue-500'
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8"> */}
                        {/* <li> */}
                            {/* <a href="#" className="block py-2 px-3 md:bg-transparent md:p-0" aria-current="page">About Me</a> */}
                        {/* </li> */}
                        {/* <li> */}
                            {/* <a href="#">Skills</a> */}
                        {/* </li> */}
                        {/* <li> */}
                            {/* <a href="">Projects</a> */}
                        {/* </li> */}
                        {/* <li> */}
                            {/* <a href="">Contact</a> */}
                        {/* </li> */}
                    {/* </ul> */}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;