import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
// import { getUsername } from "../../store/storage";

import { IoBedOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";

const Navigation = () => {
	const [open, setOpen] = useState(true);
	const [isLoggedIn, isLoggedOut] = useState(false);
	// const user = getUsername();
	// const {name} = user;
	
	const itemsMenu = [
		{ name: "Home", href: '/home' },
		{ name: "Venues", href: '/venues' },
		{ name: "Details", href: `/venue/${id}`},
		{ name: "Dashboard", href: '/dashboard' },
	];

	const profileUser = [
		{ name: "Your Profile", icon: <AiOutlineUser /> },
		{ name: "Settings", icon: <AiOutlineSetting /> },
		{ name: "Sign Out", icon: <IoExitOutline /> },
	];

	return (
		<div>
			<nav className='bg-white shadow '>
				<div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
					<div className='flex h-16 justify-between'>
						<div className='flex px-2 lg:px-0'>
						
							<div className='flex flex-shrink-0 items-center'>
								<NavLink to="/home">
								<IoBedOutline className='block h-8 w-auto text-purple-600' />
								<h1 className='hidden text-purple-600 text-lg ml-2 md:block'>
									Holidaze
								</h1>
								</NavLink>
							
								
								
							</div>
							
							<div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
								{itemsMenu.map((menu, index) => (
									<>
										<NavLink
											key={index}
											to={menu.href}
											className={({ isActive }) => {
												return (
													"inline-flex items-center border-b-2  px-1 pt-1  text-sm font-medium text-black" +
													(isActive
														? "inline-flex items-center border-b-2 border-purple-500  px-1 pt-1 text-sm font-medium "
														: " border-transparent  hover:border-gray-400 hover:text-purple-600 ")
												);
											}}>
											{menu.name}
										</NavLink>
									</>
								))}
							</div>
						</div>
						<div className='flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end'>
							<div className='w-full max-w-lg lg:max-w-xs'>
								<label
									htmlFor='search'
									className='sr-only'>
									Search
								</label>
								<div className='relative'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
										<BiSearch className='h-5 w-5 text-purple-600' />
									</div>
									<input
										id='search'
										name='search'
										className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-purple-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-purple-400 sm:text-sm sm:leading-6'
										placeholder='Search...'
										type='search'
									/>
								</div>
							</div>
						</div>
						<div className='flex items-center lg:hidden'>
							{/* <!-- Mobile menu button --> */}
							<button
								type='button'
								onClick={() => setOpen(!open)}
								className='inline-flex items-center justify-center rounded-md p-2 text-purple-50 bg-purple-300 hover:bg-white hover:text-purple-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400'
								aria-controls='mobile-menu'
								aria-expanded='false'>
								<span className='sr-only'>Open main menu</span>
								<FiMenu
									name={open ? "close" : "menu-outline"}
									className='block h-6 w-6'
								/>
							</button>
						</div>

						{/* <!-- Profile button --> */}
						<div className='hidden lg:ml-4 lg:flex lg:items-center'>
							<div className=' relative ml-4 flex-shrink-0'>
								<div>
									<button
										type='button'
										className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
										id='user-menu-button'
										aria-expanded='false'
										aria-haspopup='true'>
										<span className='sr-only'>Go to profile menu</span>
										<NavLink
											className='text-purple-600 text-base mr-4'
											to='/signup'>
											Sign up
										</NavLink>
										<img
											className='h-8 w-8 rounded-full hidden'
											src='https://akhbarelmi.ir/media/covers/175146.jpg'
											alt='avatar'
										/>
									</button>
								</div>
							</div>
							<span className=' hidden ml-4 text-base items-center text-purple-600 cursor-pointer'>
								<IoExitOutline className='ml-2 h-4 w-4' />
								Sign out
							</span>

							<NavLink className='text-purple-600 text-base' to='/login'>Login
							</NavLink>
							 
						</div>
					</div>
				</div>
				<div
					id='mobile-menu'
					className={`${open ? "block" : "hidden"} lg:hidden`}>
					<div className='space-y-1 pb-3 pt-2'>
						{itemsMenu.map((menu, index) => (
							<>
								<NavLink
									key={index}
									to={menu.href}
									className={({ isActive }) => {
										return (
											"block border-l-4 border-transparent text-base py-2 pl-3 pr-4" +
											(isActive
												? "font-medium border-transparent "
												: "border-transparent text-base font-medium text-gray-600 hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600")
										);
									}}>
									{menu.name}
								</NavLink>
							</>
						))}
					</div>
					<div className='border-t border-gray-200 pb-3 pt-4'>
						<div className='flex items-center px-4'>
							<div className='flex-shrink-0'>
								<img
									className='h-10 w-10 rounded-full '
									src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
									alt='avatar'
								/>
							</div>
							<div className='ml-3'>
								<div className='text-base font-medium text-gray-800'>Tom Cook</div>
								<div className='text-sm font-medium text-gray-500'>tom@example.com</div>
							</div>
						</div>
						<div className='mt-3 space-y-1'>
							{profileUser.map((menu, index) => (
								<>
									<NavLink
										key={index}
										to={menu.href}
										className='block px-4 py-2 text-base font-medium text-black hover:bg-purple-50 hover:text-purple-600'>
										{menu.name}
										<span className='text-2xl block float-left mr-2'>
											{menu.icon ? menu.icon : <AiOutlineUser />}
										</span>
									</NavLink>
								</>
							))}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
