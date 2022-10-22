import { Footer, Header } from "./StaticComponents";

const MainLayout = ({ children }) => {
	return (
		<div className="container">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;

{
	/* <p>HELLO</p>
<br/>
<hr/>
 */
}
