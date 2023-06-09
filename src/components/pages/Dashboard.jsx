import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";

const Dashboard = () => {
	const [open, setOpen] = useState();

	return (
		<>
			<header className='bg-gradient-to-r from-white via-purple-200 to-pink-200 shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<div className='h-28 lg:h-38'></div>
					<div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
						<div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
							<div className='flex'>
								<img
									className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
									src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
									alt=''
								/>
							</div>
							<div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
								<div className='mt-6 min-w-0 flex-1 sm:hidden md:block'>
									<h1 className='truncate text-2xl font-bold text-gray-900'>
										
									</h1>
								</div>
								<div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0'>
									<button
										onClick={() => setOpen(!open)}
										type='button'
										className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
										<MdOutlinePostAdd className='-ml-0.5 mr-1.5 h-5 w-5 text-purple-400' />
										<span>Post Venue</span>
									</button>

									<button
										type='button'
										className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
										<IoSettingsOutline className='-ml-0.5 mr-1.5 h-5 w-5 text-purple-400' />
										<span>Setting</span>
									</button>
								</div>
							</div>
						</div>
						<div className='mt-6 hidden min-w-0 flex-1 sm:block md:hidden'>
							<h1 className='truncate text-2xl font-bold text-gray-900'>
								Ricardo Cooper
							</h1>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div
					className={`${
						open ? "block" : "hidden"
					} m-auto mt-8 max-w-2xl shadow flex-col justify-center px-6 py-12 lg:px-8s`}>
					<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
						<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
							Post your venue
						</h2>
					</div>
					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
						<form className='space-y-6'>
							<div>
								<label
									htmlFor='title'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Title
								</label>
								<div className='mt-2'>
									<input
										id='title'
										title='title'
										type='title'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='Descrition'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Descrition
								</label>
								<div className='mt-2'>
									<textarea
										id='Descrition'
										title='Descrition'
										type='text'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'></textarea>
								</div>
							</div>
							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									Post
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className='bg-white'>
					<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
						<div className='max-w-3xl'>
							<h2
								id='features-heading'
								className='font-medium text-gray-500'>
								My Venues and boookings
							</h2>
						</div>
						<div className='mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
							<div className='flex flex-col-reverse'>
								<div className='mt-6'>
									<h3 className='text-sm font-medium text-gray-900'>Three card types</h3>
									<p className='mt-2 text-sm text-gray-500'>
										Today, Next, and Someday cards allow you to defer your dreams into the
										future.
									</p>
								</div>
								<div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100'>
									<img
										src='https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-01.jpg'
										alt='Green cardstock box containing white, beige, and brown cards.'
										className='object-cover object-center'
									/>
								</div>
							</div>
							<div className='flex flex-col-reverse'>
								<div className='mt-6'>
									<h3 className='text-sm font-medium text-gray-900'>The perfect mix</h3>
									<p className='mt-2 text-sm text-gray-500'>
										Each refill pack contains plenty of cards to last you a month of
										procrastination.
									</p>
								</div>
								<div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100'>
									<img
										src='https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-02.jpg'
										alt='Green cardstock box open with 50 cards inside.'
										className='object-cover object-center'
									/>
								</div>
							</div>
							<div className='flex flex-col-reverse'>
								<div className='mt-6'>
									<h3 className='text-sm font-medium text-gray-900'>Dot grid backs</h3>
									<p className='mt-2 text-sm text-gray-500'>
										Flip a card over to doodle during meetings when you should be
										listening.
									</p>
								</div>
								<div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100'>
									<img
										src='https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-03.jpg'
										alt='Detail of white today card, beige next card, and brown someday card with dot grid.'
										className='object-cover object-center'
									/>
								</div>
							</div>

							<div className='flex flex-col-reverse'>
								<div className='mt-6'>
									<h3 className='text-sm font-medium text-gray-900'>Refill packs</h3>
									<p className='mt-2 text-sm text-gray-500'>
										Subscribe and save on routine refill packs to keep you productive all
										year long.
									</p>
								</div>
								<div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100'>
									<img
										src='https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-04.jpg'
										alt='Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.'
										className='object-cover object-center'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Dashboard;
