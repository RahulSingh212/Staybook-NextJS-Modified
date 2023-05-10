import React from "react";
import Image from "next/image";
import Head from "next/head";
import classes from "./ContactUs.module.scss";
import { useRouter } from "next/router";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactUs(props: Props) {
  const router = useRouter();
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [sent, isSent] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [msgError, setMsgError] = React.useState<boolean>(false);

  const sendMail = async () => {
    setError(false);
    if (!name || !email) {
      setError(true);
    } else if (!message) {
      setMsgError(true);
    } else {
      setError(false);
      setMsgError(false);
      window.location.href = `mailto:booking@staybook.in?subject='Connect to Staybook'&body=Sender's Name: ${name},\nSender's Email-Id: ${email},\nMessage: ${message}`;
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>StayBook - Contact Us</title>
        <meta
          name="description"
          content="StayBook Booking engine for Hotels enabled with high speed wifi throughout. There are different wifi connections on different floors. The guest can find the wifi passwords on the wifi cards inside of their rooms we have a specialized work station for our guests with high speed cables. Delhi hotels"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className={`w-screen`}>
        <div className={classes.contactUsBody}>
          <Image
            src={`/background.jpg`}
            alt={"Staybook Hotels and Tours"}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
          <div className={`relative flex flex-col ${classes.form}`}>
            <h1>Contact Us</h1>
            <p>
              Do you want to enquire about our pricing, current offers and
              arrangements we can help you with? Give us a call or send in your
              concerns through the form below.
            </p>
            <div
              className={`relative flex flex-col md:flex-row align-middle items-center ${classes.input}`}
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                style={{ marginRight: "1rem" }}
                placeholder="Name *"
                className={`relative w-full`}
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                style={{ marginLeft: "1rem" }}
                placeholder="Email *"
                className={`relative w-full`}
              />
            </div>

            {error && <p className={classes.error}>Enter email and name</p>}

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
            {msgError && <p className={classes.error}>Enter yoru message</p>}
            {!sent ? (
              <div onClick={sendMail} className={classes.button}>
                Submit
              </div>
            ) : (
              <div
                onClick={() => {
                  router.push({ pathname: "/" });
                }}
                className={classes.button}
              >
                Done
              </div>
            )}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
