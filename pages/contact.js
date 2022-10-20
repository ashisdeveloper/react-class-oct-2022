import Head from "next/head";
import ContactContent from "../components/ContactContent";
import MainLayout from "../components/MainLayout";

const AppContactPage = () => {
	return (
		<>
			<Head>
				<title>App Contact</title>
			</Head>

			<MainLayout>
				<ContactContent />
			</MainLayout>
		</>
	);
};

export default AppContactPage;
