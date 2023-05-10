import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import classes from "./BlogCard.module.scss";

type Props = {
  post: any;
};

export default function BlogCard(props: Props) {
  const router = useRouter();
  const showBlogDetails = () => {
    console.log("Slug-Name");
    console.log(props.post.slug.current);
    router.push({ pathname: `/blogs/${props.post.slug.current}` });
  };

  return (
    <article
      key={props.post.slug.current}
      className={classes.blogCard}
      onClick={showBlogDetails}
    >
      <img src={props.post.mainImage.asset.url} alt={props.post.title} />
      <h3>{props.post.title}</h3>
    </article>
  );
}
