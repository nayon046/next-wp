import AboutPage from '../src/component/AboutPage';
import Layout from '../src/component/Layout';
import aboutData from '../src/inc/aboutData';
import getNavData from '../src/inc/getNavData';

const About = ({headerMenu,aboutData}) => {
  const AboutPageData = aboutData.data.aboutQueryData.aboutPage;
  console.log(aboutData);
    return (
        <Layout headerMenu={headerMenu}>
                <AboutPage AboutPageData={AboutPageData}></AboutPage>
        </Layout>

    );
};

export async function getStaticProps(context) {
    return {
      props: {
        headerMenu : await getNavData(),
        aboutData : await aboutData()
      }
    }
}

export default About;


