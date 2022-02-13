import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";


  const homeData = async() => {
        const HomePageData = await client.query({
        query: gql`
            query homeData {
                homePageData: pageBy(uri: "https://accounting5.thetaxq.com/wordpress/home/") {
                homePage {
                    bannerbutton
                    bannercontent
                    bannertitle
                    bannerimage {
                    sourceUrl
                    }
                }
                }
            }
                  
        `
        })
        return HomePageData;
  }
  
  export default homeData;