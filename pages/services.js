import Head from "next/head";
import MainLayout from "../components/MainLayout";
import ServicesContent from "../components/ServicesContent";

const AppServicesPage = () => {
	return (
		<>
			<Head>
				<title>App Services</title>
			</Head>

			<MainLayout>
				<ServicesContent />
			</MainLayout>
		</>
	);
};

export default AppServicesPage;

{
	/* <p>HELLO PARA</p> // IF it has children
<p /> // IF it has no children */
}
