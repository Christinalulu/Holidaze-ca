import { NavLink } from "react-router-dom";

import {BsTwitter} from "react-icons/bs"
import {FaFacebookSquare} from "react-icons/fa"
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineReddit} from "react-icons/ai"

const Footer = () => {

	// const footerNav = [
	// 	{ name: "Home", href: "/" },
	// 	{ name: "Venues", href: "venues" },
	// 	{ name: "Details", href: "/product/:id" },
	// 	{ name: "Dashboard", href: "/dashboard" },
	// ];

	const iconsFooter = [
		{icon: <BsTwitter/>},
		{icon: <FaFacebookSquare/>},
		{icon: <AiOutlineGithub/>},
		{icon: <AiOutlineReddit/>},
	]

	return (
		<div>
			<footer className='bg-white'>
				<div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
					<nav
						className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
						aria-label='Footer'>
						<div className='pb-6'>
							<NavLink
								
								className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
								About
							</NavLink>
						</div>
						<div className='pb-6'>
							<NavLink
								
								className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
								Blog
							</NavLink>
						</div>
						<div className='pb-6'>
							<NavLink
								
								className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
								Jobs
							</NavLink>
						</div>
						<div className='pb-6'>
							<NavLink
								
								className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
								Press
							</NavLink>
						</div>
						<div className='pb-6'>
							<NavLink
								
								className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
								Accessibility
							</NavLink>
						</div>
						<div className='pb-6'>
							<NavLink
								
								className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
								Partners
							</NavLink>
						</div>
					</nav>
					<div className='mt-10 flex justify-center space-x-10'>
					{iconsFooter.map((item, index) =>(
						<div key={index} className="h-6 w-6 text-2xl">
							{item.icon}
						</div>
					))}
					</div>
					<p className='mt-10 text-center text-xs leading-5 text-gray-500'>
						&copy; 2020 Your Company, Inc. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
