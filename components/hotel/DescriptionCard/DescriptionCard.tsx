import React from "react";
import { motion, motionValue } from "framer-motion";

type Props = {
  hotelDescriptionsList: any[];
};

export default function DescriptionCard(props: Props) {
  const stringSplitter = (value: string, splitter: string) => {
    if (!value.includes("-")) {
      let first = "";
      let rem = value;
      return { first, rem };
    }
    const [first, ...rest] = value.split("-");
    const rem = rest.join("-");

    return { first, rem };
  };

  return (
    <React.Fragment>
      <motion.div className={`relative w-full mb-4`}>
        <motion.div className={``}>
          {props.hotelDescriptionsList.map(
            (value: any, index: any) =>
              (
                <motion.div key={String(index)} className={`pb-1 text-justify`}>
                  <p className={`text-2xl font-bold`}>
                    {stringSplitter(value, " - ").first.length > 0 ? `${stringSplitter(value, " - ").first} - ` : ""}
                  </p>
                  <p className={`font-mono text-xl`}>
                    {stringSplitter(value, " - ").rem}
                  </p>
                </motion.div>
              )
          )}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
