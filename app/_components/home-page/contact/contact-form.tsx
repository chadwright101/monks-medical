"use client";

import { useState, useEffect } from "react";

import classNames from "classnames";
import Button from "@/app/_components/button";
import Recaptcha from "@/app/_lib/Recaptcha";
import { sendEmail } from "@/app/_actions/actions";

interface Props {
  cssClasses?: string;
}

const ContactForm = ({ cssClasses }: Props) => {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("email-submitted");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: any) => {
    const elapsedTime = new Date().getTime() - submissionStartTime;
    if (elapsedTime < 3000) {
      console.error("Form submitted too quickly. Possible bot activity.");
      return;
    } else {
      setValidateRecaptcha(!!value);
    }
  };

  return (
    <div>
      {!showEmailSubmitted && (
        <p className="mb-5 italic min-[800px]:text-left">
          Please fill out the form below and we will be in touch ASAP...
        </p>
      )}
      {showEmailSubmitted ? (
        <>
          <div id="email-submitted"></div>
          <p className="italic">
            Your email has been sent, we will be in touch soon.
          </p>
        </>
      ) : (
        <section
          className={`bg-brown px-7 -mx-7 py-10 min-[800px]:m-0 min-[800px]:p-7 min-[800px]:rounded-xl ${cssClasses}`}
        >
          <form
            action={async (formData) => {
              await sendEmail(formData);
              setShowEmailSubmitted(true);
            }}
            className="flex flex-col gap-8"
          >
            <input type="hidden" name="_honey" className="hidden" />
            <label htmlFor="fullName" className="flex flex-col gap-2">
              Name:
              <input
                type="text"
                id="fullName"
                name="name"
                required
                placeholder="Full name"
                autoComplete="name"
              />
            </label>
            <label htmlFor="phoneNumber" className="flex flex-col gap-2">
              Phone:
              <input
                type="number"
                id="phoneNumber"
                name="tel"
                placeholder="Phone number"
                autoComplete="tel"
              />
            </label>
            <label htmlFor="emailAddress" className="flex flex-col gap-2">
              Email:
              <input
                type="email"
                id="emailAddress"
                name="email"
                required
                placeholder="Email address"
                autoComplete="email"
              />
            </label>
            <label htmlFor="userMessage" className="flex flex-col gap-2">
              Message:
              <textarea
                id="userMessage"
                required
                rows={5}
                name="message"
                placeholder="Type your message here..."
              ></textarea>
            </label>
            {/* ... */}
          </form>
        </section>
      )}
    </div>
  );
};

export default ContactForm;
