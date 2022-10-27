import Head from "next/head";
import React, { useEffect } from "react";
import { useState } from "react";
import MainLayout from "../components/MainLayout";
import { ToastContainer, toast } from 'react-toastify';

const CounterPage = () => {
	const [num, setNum] = useState(0);

	const addNum = (val) => {
		if (val < 10) setNum(val + 1);
		else toast.error('Maximum value reached')
	};
	const minusNum = (val) => {
		if (val > 0) setNum(val - 1);
		else toast.error('Value can\'t be negative')
	};

	// If the 2nd parameter of useEffect is an empty array, then it loads on the first render
	useEffect(() => {
		setNum(5)
		console.log('Initial page load')
	}, [])

	useEffect(() => {
		console.log('Value changed to ' + num)
		if (num == 10) {
			console.log('Maximum value reached')
		}
		if (num == 0) {
			console.log('Value can\'t be negative')
		}
	}, [num])


	return (
		<>
			{/* <React.Fragment> */}
			{/* REACT FRAGMENT */}
			<Head>
				<title>Counter Page</title>
			</Head>
			<MainLayout>
				<div>
					<button className="btn btn-danger" onClick={() => minusNum(num)}>-</button>
					<span className="px-2">{num}</span>
					<button className="btn btn-success" onClick={() => addNum(num)}>
						+
					</button>
				</div>
			</MainLayout>
			{/* </React.Fragment> */}
		</>
	);
};
export default CounterPage;

/* export default function Home() {
	return (
		<div>
			<button>-</button> 0 <button>+</button>
		</div>
	);
} */
