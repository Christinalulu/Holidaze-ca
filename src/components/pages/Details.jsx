// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";


const Details = () => {
	// let {id} = useParams();
	// const dispatch = useDispatch();
	

	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
					<div className='lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
						<div className='lg:col-span-4 lg:row-end-1'>
							<div className='aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100'>
								<img
									src='https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg'
									alt='venues'
									className='object-cover object-center'
								/>
							</div>
						</div>
						<div className='mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none'>
							<div className='flex flex-col-reverse'>
								<div className='mt-4'>
									<h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
										Application UI Icon Pack
									</h1>

									<p className='mt-2 text-sm text-gray-500'>
										Version 1.0 (Updated <time dateTime='2021-06-05'>June 5, 2021</time>)
									</p>
								</div>
							</div>

							<p className='mt-6 text-gray-500'>
								The Application UI Icon Pack comes with over 200 icons in 3 styles:
								outline, filled, and branded. This playful icon pack is tailored for
								complex application user interfaces with a friendly and legible look.
							</p>
							<p className=' mt-4 text-red-600'> Price 300 NOK</p>

							<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2'>
								<button
									type='button'
									className='flex w-full items-center justify-center rounded-md border border-transparent bg-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none'>
									BUY
								</button>
							</div>

							<div className='mt-10 border-t border-gray-200 pt-10'>
								<h3 className='text-sm font-medium text-gray-900'>Location Details</h3>
								<div className='prose prose-sm mt-4 text-gray-500'>
									<ul role='list'>
										<li>200+ SVG icons in 3 unique styles</li>
										<li>Compatible with Figma, Sketch, and Adobe XD</li>
										<li>Drawn on 24 x 24 pixel grid</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
