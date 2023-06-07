import { fetchProducts } from "../../store/modules/theVenueSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


function ProductsPage() {
	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.theVenueSlice);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
					<h2 className='sr-only'>Products</h2>
					<div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
						{product.map((product) => (
							<div key={product.id}>
								<div className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
									<div className='aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96'>
										<img
											src={product.media[0]}
											alt='a place to stay'
											className='h-full w-full object-cover object-center sm:h-full sm:w-full'
										/>
									</div>
									<div className='flex flex-1 flex-col space-y-2 p-4'>
										<h3 className='text-sm font-medium text-gray-900'>{product.name}</h3>
										<p className='text-sm text-gray-500'></p>
										<div className='flex flex-1 flex-col justify-end'>
											<p className='text-sm italic text-gray-500'>Guests{product.maxGuests}</p>
											<p className='text-base font-medium text-gray-900'>{product.price} NOK</p>
										</div>
                              <Link to={`/details/:${product.id}`}
											className='inline-flex items-center w-1/3 md:w-1/2  px-3 py-2 text-sm font-medium text-center text-white bg-purple-300 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none'>
											Read more
											<AiOutlineArrowRight className='w-4 h-4 ml-2 -mr-1 text-2xl' />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductsPage;
