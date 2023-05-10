import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import classes from "./PackageCard.module.scss";

type Props = {
  packageInfo: any;
};

export default function PackageCard(props: Props) {
  return (
    <React.Fragment>
      <motion.div className={classes.packageBody}>
        <Image
          src={props.packageInfo.image_Url}
          unoptimized={true}
          alt={props.packageInfo.name}
          width={100}
          height={100}
        />
        <h1>{props.packageInfo.name}</h1>
        <h2>{props.packageInfo.time}</h2>
        <Link href="/contact">
          <motion.div className={classes.button}>Enquire</motion.div>
        </Link>
        <p>{props.packageInfo.description}</p>

        <div className={classes.locationBody}>
          <div className={classes.title}>
            <h2>Locations Covered</h2>
            <Image
              src={`/location-pin.png`}
              unoptimized={true}
              alt={props.packageInfo.name}
              width={30}
              height={40}
            />
          </div>
          <h1>Noteworth Points</h1>
          <p>{props.packageInfo.highlight}</p>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
