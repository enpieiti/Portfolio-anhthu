import React, { useRef } from "react";
import ContactInfoCard from "../components/ContactInfoCard";
import { ABOUT_ME } from "../utils/data";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("SERVICE_ID", import.meta.env.VITE_SERVICE_ID);
    console.log("TEMPLATE_ID", import.meta.env.VITE_TEMPLATE_ID);
    console.log("PUBLIC_KEY", import.meta.env.VITE_PUBLIC_KEY);
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>

          <p className="text-sm text-center mt-4 leading-6"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoLocation />} text={ABOUT_ME.address} />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>

          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">Contact Form</h5>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <input type="text" name="name" placeholder="Name" id="" className="input-box" autoComplete="off" />
              <input type="text" name="email" placeholder="Email" id="" className="input-box" autoComplete="off" />
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                id=""
                rows={3}
                className="input-box"
                autoComplete="off"
              />
              <button className="action-btn btn-scale-aim">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
