import {
    gql
  } from "@apollo/client";
import { client } from "./apploClient";

  const aboutData = async() => {
        const AboutPageData = await client.query({
        query: gql`
            query aboutQuery {
              aboutQueryData: pageBy(uri: "https://accounting5.thetaxq.com/wordpress/about/") {
                aboutPage {
                  abouttitle
                  aboutcontent
                  aboutimage {
                    sourceUrl
                  }
                }
              }
            }       
        `
        })
        return AboutPageData;
  }
  
  export default aboutData;