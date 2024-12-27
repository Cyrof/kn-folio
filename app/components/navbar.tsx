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
                <div className="text-red-400">
                    <img src="/images/portfolio2.svg" alt="portfolio_logo" className="fill-current"/>
                </div>
                {/* can add hamburger menu */}
                <div className="tabs hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-row space-x-4 p-4 font-medium">
                        {[
                            { href: '/', label: 'About Me' },
                            { href: '/skills', label: 'Skills' },
                            { href: '/projects', label: 'Projects' },
                            { href: '/contact', label: 'Contact' },
                        ].map(({ href, label }, index) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={isActive(pathname, href) ? 'page' : undefined}
                                    className={`px-5 py-2 ${isActive(pathname, href) ? 'text-red-400' : 'hover:text-red-400 text-gray-200'
                                    }`}
                                >
                                    <span className="text-red-400">
                                        {index + 1}. 
                                    </span>
                                    <span className="ml-1">
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;