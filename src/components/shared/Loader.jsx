import {BiLoaderAlt} from "react-icons/bi";

const Loader = () => {
	return (
		<div>
			<div role='status' className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center ">
				<BiLoaderAlt className=" text-8xl animate-spin text-purple-500" />
				<span className=''>Loading...</span>
			</div>
		</div>
	);
};

export default Loader;
