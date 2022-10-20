import Head from "next/head";
import HomeContent from "../components/HomeContent";
import MainLayout from "../components/MainLayout";

const AppHomePage = () => {
	return (
		<>
			<Head>
				<title>App Home</title>
			</Head>
			<MainLayout>
				<HomeContent />
			</MainLayout>
		</>
	);
};

export default AppHomePage;
