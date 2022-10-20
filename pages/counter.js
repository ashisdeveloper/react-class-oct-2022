import Head from "next/head";
import React from "react";
import { useState } from "react";

const Home = () => {
	const [num, setNum] = useState(0);

	const addNum = (val) => {
		setNum(val + 1);
	};
	const minusNum = (val) => {
		setNum(val - 1);
	};

	return (
		<>
			{/* <React.Fragment> */}
			{/* REACT FRAGMENT */}
			<Head>
				<title>Counter Page</title>
			</Head>
			<div>
				<button onClick={() => minusNum(num)}>-</button> {num}
				<button className="btn" onClick={() => addNum(num)}>
					+
				</button>
			</div>
			{/* </React.Fragment> */}
		</>
	);
};
export default Home;

/* export default function Home() {
	return (
		<div>
			<button>-</button> 0 <button>+</button>
		</div>
	);
} */
