
import HomeOutput from '../src/component/HomeOutput';
import Layout from '../src/component/Layout';
import getNavData from '../src/inc/getNavData';
import homeData from '../src/inc/homeData';


const Home = ({headerMenu,homeDataOutput}) => {
  const homeDatOutput= homeDataOutput.data.homePageData.homePage;
  return (
      <Layout headerMenu={headerMenu}>
          <div>
              <HomeOutput hmDataOutput={homeDatOutput}></HomeOutput>
          </div>
      </Layout>
  );
};

export async function getStaticProps(context) {
    return {
      props: {
        headerMenu : await getNavData(),
        homeDataOutput : await homeData()
      }
    }
  }

export default Home;

