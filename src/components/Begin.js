import { ReactComponent as BTC } from "../Assets/bitcoin-blue.svg";
import { ReactComponent as Arrow } from "../Assets/right-arrow.svg";
import { ReactComponent as Phone } from "../Assets/phone.svg";

const Begin = () => {
	return (
		<div className="px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 pb-1 pt-20 lg:max-w-6xl w-full mx-auto">
			<div className="flex mt-10 lg:mt-0">
				<div className="my-auto">
					<div className="flex">
						<BTC />
						<p className="mx-2 font-semibold text-coinbase hover:underline">
							Jump start your portfolio
						</p>
						<Arrow className="my-auto" />
					</div>

					<p className="font-semibold text-4xl md:text-6xl  mb-6 max-w-md mt-10 md:2 ">
						Jump start <br/>your crypto portfolio
					</p>
					<p className="text-md text-gray-600 md:text-xl md:text-black md:font-medium lg:font-semibold">
						Coinbase is the easiest place to buy and sell
						cryptocurrency. Sign up and get started today.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-5 mt-8 mb-3">
						<input
							style={{ borderRadius: "4px" }}
							className="transition duration-250 w-full md:col-span-4 lg:col-span-3 py-5 bg-white border border-gray-200 focus:border-coinbase focus:outline-none px-4"
							type="text"
							placeholder="Email Address"
						/>
						<button
							className="bg-coinbase text-white px-2 md:ml-2 text-sm w-full md:col-span-1 lg:col-span-2 py-5 mt-2 md:mt-0"
							style={{ borderRadius: "4px" }}
						>
							Get Started
						</button>
					</div>
					<span className="underline text-xs text-coinbase">
						* Terms apply
					</span>
				</div>
			</div>

			<div className="ml-6 hidden lg:block">
				<Phone className="w-5/6" />
			</div>
		</div>
	);
};

export default Begin;
