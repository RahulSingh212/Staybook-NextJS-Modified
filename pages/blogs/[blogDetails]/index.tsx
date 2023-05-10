import React from "react";
import Head from "next/head";

import classes from "./BlogDetails.module.scss";

import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

import BlogTableContent from "@/components/screens/blogs/BlogTableContent";

type Props = {
  singlePost: any;
};

export default function BlogDetails(props: Props) {
  console.log(props.singlePost);
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>
          {props.singlePost.title ? props.singlePost.title : "StayBook Posts"}
        </title>
        <meta
          name="description"
          content="StayBook Booking engine for Hotels enabled with high speed wifi throughout. There are different wifi connections on different floors. The guest can find the wifi passwords on the wifi cards inside of their rooms we have a specialized work station for our guests with high speed cables. Delhi hotels"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className={`w-screen`}>
        <div className={classes.outerFloat}>
          <div className={classes.floating}>
            <div className={classes.innerFloat}>
              <div
                onClick={() => {
                  router.push({ pathname: "/hotel" });
                }}
                className={`${classes.btn} ${classes["btn-primary"]} cursor-pointer`}
              >
                Book Now
              </div>
            </div>
          </div>
        </div>
        <div className={classes.postBody}>
          <h4>{props.singlePost.title}</h4>
          <div className={classes.backgroundImg}>
            {props.singlePost.mainImage && props.singlePost.mainImage.asset && (
              <img
                src={props.singlePost.mainImage.asset.url}
                alt={props.singlePost.title}
                title={props.singlePost.title}
              />
            )}
          </div>
        </div>

        <div className={classes.blogBody}>
          <div className={classes.blogContent}>
            {/* <div className={classes.desc}>
              <BlockContent
                blocks={props.singlePost.body}
                projectId="fifev1uu"
                dataset="blogs"
              />
            </div> */}

            {props.singlePost.bullet_points && (
              <div className={classes.tableOfContents}>
                {props.singlePost.bullet_points.map(
                  (item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.heading}</td>
                    </tr>
                  )
                )}
              </div>
            )}

            {/* {props.singlePost.bullet_points && (
              <div className={classes.allContent}>
                {props.singlePost.bullet_points.map(
                  (item: any, index: number) => (
                    <div>
                      <div className={classes.topicHeading}>{item.heading}</div>
                      <div className={classes.content}>
                        <BlockContent
                          blocks={item.heading_content}
                          projectId="fifev1uu"
                          dataset="blogs"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            )} */}
          </div>
          {props.singlePost.images && (
            <div className={classes.blogImages}>
              {props.singlePost.images && (
                <>
                  {props.singlePost.images.map((item: any, index: number) => (
                    <img src={item.asset.url}></img>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </React.Fragment>
  );
}

export async function getServerSideProps(context: any) {
  const { params, query, req, res } = await context;

  const slug_Name = params?.blogDetails;

  const postInfoQuery = groq`
    *[slug.current == "${slug_Name}"] {
        title,
        body,
        mainImage {
        asset -> {
            _id,
            url
        },
        alt
        },
        description,
        bullet_points[],
        images[] {
        asset -> {
            _id,
            url
        },
        alt
        }
    }
  `;

  const postsInfo: any[] = await sanityClient.fetch(postInfoQuery);

  return {
    props: {
      singlePost: postsInfo[0],
    },
  };
}
