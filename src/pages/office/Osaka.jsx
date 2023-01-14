import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidevar from "../../components/sidevar";

const Osaka = () => {
  return (
    <>
      <Head>
        <title>大阪事務所</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6">
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Osaka;
