const boxes = [
	{ img: "/images/1652163564.jpg", title: 'Himachal Pradesh' },
	{ img: "/images/1652163616.jpg", title: 'Manali' },
	{ img: "/images/1652163630.jpg", title: 'Shimla' },
	{ img: "/images/1652163644.jpg", title: 'Kerla' },
]

const RenderBox = ({ img, title }) => {
	return <>
		<div className="box">
			<img src={img} alt="" />
			<div className="title p-3">{title}</div>
		</div>
	</>
}

const HomeContent = () => {
	return <>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat perspiciatis iusto laudantium deserunt nam facere odio a laboriosam quod, ducimus dolorem obcaecati facilis, atque ipsam amet earum, neque ipsum fugit?</p>

		<div className="d-flex flex-wrap box-content" style={{ gap: '20px' }}>
			{/* 3rd Way */}
			{boxes.map((item, index) => <RenderBox key={index} img={item.img} title={item.title} />)}

			{/* 2nd Way */}
			{/* {boxes.map((item, index) => <div key={index} className="box">
				<img src={item.img} alt="" />
				<div className="title">{item.title}</div>
			</div>)} */}
			{/* 1st Way */}
			{/* <div className="box">
				<img src="/images/1652163564.jpg" alt="" />
				<div className="title">Himachal Pradesh</div>
			</div>
			<div className="box">
				<img src="/images/1652163616.jpg" alt="" />
				<div className="title">Manali</div>
			</div>
			<div className="box">
				<img src="/images/1652163630.jpg" alt="" />
				<div className="title">Shimla</div>
			</div> */}
		</div>

	</>
};

export default HomeContent;
