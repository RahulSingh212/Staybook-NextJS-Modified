import React from "react";
import Head from "next/head";
import Image from "next/image";

import classes from "./blogs.module.scss";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

import BlogCard from "@/components/screens/blogs/BlogCard";
import { useRouter } from "next/router";

type Props = {
  posts: any[];
  filteredPosts: any[];
};

export default function Blogs(props: Props) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [posts, setPosts] = React.useState<any[]>(props.posts);
  const [filteredPosts, setFilteredPosts] = React.useState<any[]>(
    props.filteredPosts
  );

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const toPlainText = (blocks: any[]) => {
    return blocks
      .map((block) => {
        if (block._type !== "block" || !block.children) {
          return "";
        }
        return block.children.map((child: any) => child.text).join("");
      })
      .join("\n\n");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const filter: any[] = [];
    posts.forEach((post) => {
      if (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        toPlainText(post.body).toLowerCase().includes(query.toLowerCase())
      ) {
        filter.push(post);
      }
    });
    setFilteredPosts(filter);
  };

  return (
    <React.Fragment>
      <Head>
        <title>StayBook Blogs</title>
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
        <div className={classes.blogHeader}>
          <Image
            src={`/images/favicon.png`}
            alt="StayBook Hotels"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
          <h4 className={classes.heading}>Blog page</h4>

          <span className={classes["sr-only"]}>Search</span>

          <form
            className={`relative w-[90%] flex justify-center`}
            onSubmit={handleSubmit}
          >
            <input
              className="relative w-[90%] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm blogSearch"
              placeholder="Search blogs"
              type="text"
              name="search"
              value={query}
              onChange={handleChange}
            />

            <button
              id="searchBlogsButton"
              type="submit"
              className="relative w-[10%] p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex align-middle items-center justify-evenly"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className={classes["sr-only"]}>Search</span>
            </button>
          </form>
        </div>

        <div className={classes.blogsContainer}>
          {filteredPosts.map((post: any, index: number) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}

export const getStaticProps = async () => {
  const blogsQuery = groq`
    *[_type == "post"] {
      title,
      slug,
      body,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }
  `;

  const blogsList: any[] = await sanityClient.fetch(blogsQuery);
  return {
    props: {
      posts: blogsList,
      filteredPosts: blogsList,
    },
  };
};
