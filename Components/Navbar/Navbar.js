"use client"
import React, { useState } from 'react'
import Logo from '../../Components/Images/Logo.png'
import Image from 'next/image'
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Laraval from '../../Components/Images/laraval.png'
import Javascript from '../../Components/Images/js.png'
import Reactjs from '../../Components/Images/reactjs.png'
import Python from '../../Components/Images/python.png'
import Swift from '../../Components/Images/swift.png'
import Html from '../../Components/Images/html.png'
import Php from '../../Components/Images/php.png'
import Wp from '../../Components/Images/wp.png'
import Shopfiy from '../../Components/Images/shopify.png'
import Magento from '../../Components/Images/magento.png'
import Css from '../../Components/Images/css.png'
import Net from '../../Components/Images/net.png'
import Flutter from '../../Components/Images/flutter.png'
import Figma from '../../Components/Images/figma.png'
import Meta from '../../Components/Images/meta.png'
import Analytics from '../../Components/Images/nalytics.png'
import GoogleAds from '../../Components/Images/googleads.png'
import Angular from '../../Components/Images/angular.png'
import Web from '../../Components/Images/web.png'
import App from '../../Components/Images/app.png'
import Software from '../../Components/Images/software.png'
import Ecommerce from '../../Components/Images/ecommerce.png'
import Graphics from '../../Components/Images/graphics.png'
import SocialMedia from '../../Components/Images/socialmedia.png'
import Digital from '../../Components/Images/digital.png'
import Ppc from '../../Components/Images/ppc.png'
import Seo from '../../Components/Images/seo.png'
import Content from '../../Components/Images/content.png'
import Call from '../../Components/Images/call.png'
import Hire from '../../Components/Images/hire.png'
// Navlinks data
const navLinks = [
    {
        label: 'Technologies',
        subLinks: [
            { label: 'Web Development', href: '/services/web' },
            { label: 'App Development', href: '/services/app' },
        ],
    },
    {
        label: 'Services',
        subLinks: [
            { label: 'E-commerce', href: '/solutions/ecommerce' },
            { label: 'CRM', href: '/solutions/crm' },
        ],
    },
    {
        label: 'Portfolio',
        href: '/about',
    },
    {
        label: 'About Us',
        href: '/contact',
    },
];

const techSubLinks = [
    { Image: Laraval, label: 'Laravel', href: '/technologies/laravel', border: 'border-red-400' },
    { Image: Javascript, label: 'JavaScript', href: '/technologies/javascript', border: 'border-yellow-400' },
    { Image: Reactjs, label: 'React JS', href: '/technologies/react', border: 'border-cyan-400' },
    { Image: Python, label: 'Python', href: '/technologies/python', border: 'border-blue-400' },
    { Image: Swift, label: 'Swift', href: '/technologies/swift', border: 'border-red-400' },
    { Image: Html, label: 'HTML', href: '/technologies/html', border: 'border-red-400' },
    { Image: Php, label: 'PHP', href: '/technologies/php', border: 'border-blue-400' },
    { Image: Wp, label: 'Wordpress', href: '/technologies/wordpress', border: 'border-blue-400' },
    { Image: Shopfiy, label: 'Shopify', href: '/technologies/shopify', border: 'border-green-400' },
    { Image: Magento, label: 'Magento', href: '/technologies/magento', border: 'border-orange-400' },
    { Image: Css, label: 'CSS', href: '/technologies/css', border: 'border-blue-400' },
    { Image: Net, label: '.NET', href: '/technologies/net', border: 'border-purple-400' },
    { Image: Flutter, label: 'Flutter', href: '/technologies/flutter', border: 'border-blue-400' },
    { Image: Figma, label: 'Figma', href: '/technologies/figma', border: 'border-purple-400' },
    { Image: Meta, label: 'Meta', href: '/technologies/meta', border: 'border-blue-400' },
    { Image: Analytics, label: 'Analytics', href: '/technologies/analytics', border: 'border-orange-400' },
    { Image: GoogleAds, label: 'Google Ads', href: '/technologies/google-ads', border: 'border-blue-400' },
    { Image: Angular, label: 'Angular', href: '/technologies/angular', border: 'border-red-400' },
];

const servicesSubLinks = [
    {Image: Web, label: 'Web Development', href: '/services/web' },
    {Image: App, label: 'App Development', href: '/services/app' },
    {Image: Software, label: 'Software Development', href: '/services/software' },
    {Image: Ecommerce, label: 'Ecommerce Development', href: '/services/ecommerce' },
    {Image: Graphics, label: 'Graphics & UI/UX', href: '/services/graphics' },
    {Image: SocialMedia, label: 'Social Media', href: '/services/social-media' },
    {Image: Digital, label: 'Digital Marketing', href: '/services/digital-marketing' },
    {Image: Ppc, label: 'PPC & Amazon', href: '/services/ppc-amazon' },
    {Image: Seo, label: 'Search Engine Optimization', href: '/services/seo' },
    {Image: Content, label: 'Content Writing', href: '/services/content-writing' },
    {Image: Call, label: 'Call Center', href: '/services/call-center' },
    {Image: Hire, label: 'Hire Us', href: '/services/hire-us' },
];

const Navbar = () => {
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    // Helper to check if navlink or any sublink is active
    const isActive = (link) => {
        if (link.subLinks) {
            return link.subLinks.some(sub => sub.href === pathname);
        }
        return link.href === pathname;
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className='bg-[#262323] w-full h-[90px] flex items-center justify-between px-10 lg:px-20 lg:pl-40 py-10'
                style={{ boxShadow: "0px 5px 15px 0px #262323" }}>
                <div className="navbar-logo">
                    <Link href='/'><Image src={Logo} alt="Logo" width={200} height={50} className='w-[70px] h-[45.6px]' /></Link>
                </div>
                {/* Desktop links/buttons */}
                <div className="hidden lg:flex navbar-links items-center gap-2 ml-10">
                    {navLinks.map((link, idx) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => link.subLinks && setDropdownIndex(idx)}
                            onMouseLeave={() => link.subLinks && setDropdownIndex(null)}
                        >
                            {idx === 0 ? (
                                // Technologies dropdown with grid cards
                                <>
                                    <span
                                        className={`cursor-pointer text-[15px] text-white px-3 py-2 flex items-center gap-1 transition-colors duration-200 hover:text-[#41B349] ${isActive(link) ? 'text-[#41B349]' : ''
                                            }`}
                                    >
                                        {link.label}
                                        <FaChevronDown className="ml-1 text-xs mt-1" />
                                    </span>
                                    <div
                                        className={`absolute -left-60 mt-1.5 bg-white shadow-2xl rounded-xl z-20 min-w-[1020px] px-8 py-8 transition-all duration-200
                      ${dropdownIndex === idx ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                    `}
                                        style={{ top: '60px' }}
                                    >
                                        <div className="grid grid-cols-6 gap-6">
                                            {techSubLinks.map((sub, i) => (
                                                <a
                                                    key={sub.label}
                                                    href={sub.href}
                                                    className={`flex flex-col items-center justify-center h-[120px] w-[150px] bg-white ${sub.border} border-2 rounded-xl p-4 transition-shadow duration-200 hover:shadow-lg hover:border-[#41B349]`}
                                                >
                                                    {/* Placeholder for image */}
                                                    <div className="mb-2 w-[48px] h-[48px] flex items-center justify-center">
                                                        {/* Add image here later */}
                                                        <Image src={sub.Image} alt={sub.label} width={40} height={40} className='object-contain' />
                                                    </div>
                                                    <span className="text-black font-semibold text-lg text-center">{sub.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : idx === 1 ? (
                                // Services dropdown with grid cards
                                <div className='relative'>
                                    <span
                                        className={`cursor-pointer text-white px-3 py-2 flex items-center gap-1 transition-colors duration-200 hover:text-[#41B349] ${isActive(link) ? 'text-[#41B349]' : ''
                                            }`}
                                    >
                                        {link.label}
                                        <FaChevronDown className="ml-1 text-xs mt-1" />
                                    </span>
                                    <div
                                        className={`absolute -left-90 mt-1.5 bg-white shadow-2xl rounded-xl z-20 min-w-[1020px] px-8 py-8 transition-all duration-200
                      ${dropdownIndex === idx ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                    `}
                                        style={{ top: '60px' }}
                                    >
                                        <div className="grid grid-cols-4 gap-6 ">
                                            {servicesSubLinks.map((sub, i) => (
                                                <div key={i} className='border-l-2 border-l-[#41B349] px-2'>
                                                    <a
                                                        key={sub.label}
                                                        href={sub.href}
                                                        className={`flex flex-row items-center h-[80px] w-[230px] rounded-[20px]  px-2 bg-white transition-all duration-200 hover:bg-[#41B349]/20`}
                                                    >
                                                        {/* Placeholder for image */}
                                                        <div className="mr-4 w-[80px] h-[48px] flex items-center justify-center">
                                                            <Image src={sub.Image} alt={sub.label} width={100} height={40} className='object-contain' />
                                                        </div>
                                                        <span className="text-black font-semibold text-lg">{sub.label}</span>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : link.subLinks ? (
                                // ...existing code for other dropdowns...
                                <>
                                    <span
                                        className={`cursor-pointer text-white px-3 py-2 flex items-center gap-1 transition-colors duration-200 hover:text-[#41B349] ${isActive(link) ? 'text-[#41B349]' : ''
                                            }`}
                                    >
                                        {link.label}
                                        <FaChevronDown className="ml-1 text-xs mt-1" />
                                    </span>
                                    <div
                                        className={`absolute left-0 mt-2 bg-[#262323] shadow-lg rounded z-10 min-w-[160px] transition-all duration-200
                      ${dropdownIndex === idx ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                    `}
                                    >
                                        {link.subLinks.map((sub) => (
                                            <a
                                                key={sub.label}
                                                href={sub.href}
                                                className={`block px-4 py-2 text-white transition-colors duration-200 hover:text-[#41B349] hover:bg-gray-700 ${pathname === sub.href ? 'text-[#41B349]' : ''
                                                    }`}
                                            >
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                // ...existing code for normal links...
                                <a
                                    href={link.href}
                                    className={`text-white px-3 py-2 transition-colors duration-200 hover:text-[#41B349] ${isActive(link) ? 'text-[#41B349]' : ''
                                        }`}
                                >
                                    {link.label}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                <div className="hidden lg:flex navbar-buttons items-center gap-4">
                    <button
                    className="bg-[#41B349] text-white text-[15px] font-medium w-[104px] h-[39px] rounded-[20px] hover:bg-white hover:text-black transition ease-in-out duration-200 cursor-pointer"
                        
                    >
                        Get POS
                    </button>
                    <button
                    className="bg-[#41B349] text-white text-[15px] font-medium w-[104px] h-[39px] rounded-[20px] hover:bg-white hover:text-black transition ease-in-out duration-200 cursor-pointer"

                        // style={{
                        //     backgroundColor: '#41B349',
                        //     color: '#fff',
                        //     fontSize: '15px',
                        //     fontWeight: 500,
                        //     width: '130px',
                        //     height: '39px',
                        //     borderRadius: '20px',
                        // }}
                    >
                        Get a Quote
                    </button>
                </div>
                {/* Mobile menu button */}
                <button
                    className="lg:hidden  flex items-center justify-between text-white text-2xl"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                >
                    <FaBars />
                </button>
            </nav>

            {/* Mobile Navbar Overlay */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ${
                    mobileOpen
                        ? 'translate-x-0 opacity-100 visible'
                        : '-translate-x-full opacity-0 invisible'
                }`}
                style={{
                    background: '#262323',
                }}
            >
                <div className="flex items-center justify-between px-6 py-6">
                    {/* Logo top left */}
                    <Link href='/' onClick={() => setMobileOpen(false)}>
                        <Image src={Logo} alt="Logo" width={140} height={50} className='w-[70px] h-[45.6px]' />
                    </Link>
                    {/* Close icon top right */}
                    <button
                        className="text-white text-2xl"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                </div>
                {/* Mobile nav links */}
                <div className="flex flex-col gap-4 mt-10 px-8">
                    {navLinks.map((link, idx) => (
                        <div key={link.label} className="relative ">
                            {link.subLinks ? (
                                <MobileDropdown  label={link.label} subLinks={
                                    idx === 0 ? techSubLinks.map(sub => ({ label: sub.label, href: sub.href })) :
                                    idx === 1 ? servicesSubLinks.map(sub => ({ label: sub.label, href: sub.href })) :
                                    link.subLinks
                                } setMobileOpen={setMobileOpen} />
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-white text-lg py-3 px-2 rounded  hover:bg-[#41B349]/20 transition-colors duration-200"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    {/* Mobile buttons */}
                    {/* <div className="flex flex-col gap-3 mt-8">
                        <button
                            style={{
                                backgroundColor: '#41B349',
                                color: '#fff',
                                fontSize: '15px',
                                fontWeight: 500,
                                width: '100%',
                                height: '44px',
                                borderRadius: '20px',
                            }}
                        >
                            Get Post
                        </button>
                        <button
                            style={{
                                backgroundColor: '#41B349',
                                color: '#fff',
                                fontSize: '15px',
                                fontWeight: 500,
                                width: '100%',
                                height: '44px',
                                borderRadius: '20px',
                            }}
                        >
                            Get a Quote
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

// MobileDropdown component for smooth dropdown transition
function MobileDropdown({ label, subLinks, setMobileOpen }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                className="flex items-center justify-between w-full text-white text-lg  px-2  rounded hover:bg-[#41B349]/20 transition-colors duration-200"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span>{label}</span>
                <div className='w-[40px] h-[20px] rounded-[10px] border flex items-center justify-center'>
                    <FaChevronDown className={` ml-0 text-xs transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 mt-2' : 'max-h-0'}`}
            >
                <div className="flex flex-col gap-2 pl-4">
                    {subLinks.map((sub) => (
                        <Link
                            key={sub.label}
                            href={sub.href}
                            className="text-white text-base py-2 px-2 rounded hover:bg-[#41B349]/20 transition-colors duration-200"
                            onClick={() => setMobileOpen(false)}
                        >
                            {sub.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar
