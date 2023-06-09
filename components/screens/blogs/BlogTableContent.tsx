import React from "react";

import classes from "./BlogTableContent.module.scss";

type Props = {
  blog: any;
};

export default function BlogTableContent(props: Props) {
  return (
    <React.Fragment>
      <div>
        <div className={classes.topicHeading}>{props.blog.heading}</div>
        <div className={classes.topicDesc}>{props.blog.allContent}</div>
      </div>
    </React.Fragment>
  );
}
