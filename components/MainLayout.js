import { Footer, Header } from "./StaticComponents";

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;

{
	/* <p>HELLO</p>
<br/>
<hr/>
 */
}
