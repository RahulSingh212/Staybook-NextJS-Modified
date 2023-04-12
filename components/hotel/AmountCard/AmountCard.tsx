import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import moment from "moment";
import { addDays } from "date-fns";

type Props = {
    checkIn: Date | null;
    checkOut: Date | null;
};

export default function AmountCard(props: Props) {
    return (<React.Fragment>
        <motion.div>
            
        </motion.div>
    </React.Fragment>)
}
