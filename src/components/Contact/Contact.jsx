import React, { useState, useRef, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// Styles
import "./contact.css";

// Email Js
import emailjs from "@emailjs/browser";

// image
import shakeImage from "../../images/shake.svg";
import { ContactData } from "../../ContactMeData";
// Components
import { MyHeading } from "../Heading/Heading";
import Button from "../Button/Button";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ContactLink } from "./contactLink";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const INITIAL_VALUES = { email: "", message: "", name: "" };
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);
  const toggleNotification = (notificationMessage) => {
    setNotification(notificationMessage);
    setTimeout(() => {
      setNotification(false);
    }, 7000);
  };
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  // Email-js
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .send("service_umridqi", "template_8jcr003", values, "yv8odGIkO8jpyoaqP")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toggleNotification("Thanks, I will reply ASAP :)");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      )
      .catch(() => {
        toggleNotification(
          "Failed To send Email, Please reach out through LinkedIn"
        );
      });
  };
  // Email-js

  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    sendEmail();
    setLoading(false);
    clearForm();
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact" name="contact" id="contact">
      <MyHeading text="Contact 📲" style={{ marginBottom: "3rem" }} />

      <Flex
        alignItems={"center"}
        gap="30px"
        mb={"100px"}
        flexWrap="wrap"
        justifyContent={"center"}
      >
        {ContactData &&
          ContactData?.map((element, index) => {
            return (
              <ContactLink
                key={index}
                link={element.link}
                name={element.name}
                logo={element.logo}
              />
            );
          })}
      </Flex>

      <div className="content">
        <div className="left">
          <img src={shakeImage} alt="shake hands" />
        </div>
        <div
          className="right"
          data-aos="fade-up"
          // data-aos-anchor-placement="bottom-center"
          data-aos-duration="3000"
        >
          <form onSubmit={handleSubmit} ref={form}  >
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <textarea
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <Button
              text={loading ? "Sending..." : "Send"}
              loading={loading}
              type="submit" 
            />
            {notification && (
              <span style={{ color: "green", marginTop: "1rem" }}>
                {notification}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
