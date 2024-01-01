import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
    ];

    return (
        <div>
        <div className='flex justify-between mt-3 container mx-auto'>
            <Link className='text-4xl font-bold' href={'/'}>NEXT.JS</Link>
            <div className='flex gap-5'>
                {
                    links.map(nav=> <Link key={nav.id} href={nav.url}>{nav.title}</Link>)
                }
            </div>
        </div>
        </div>
    );
};

export default Navbar;