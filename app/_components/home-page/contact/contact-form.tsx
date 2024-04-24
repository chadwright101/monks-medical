"use client";

import { useState, useRef, useEffect } from "react";

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
  const ref = useRef(null);

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
          <div className="grid gap-10">
            <p className="italic">
              Your email has been sent, we will be in touch soon.
            </p>
            <Button
              form
              onClick={() => setShowEmailSubmitted(false)}
              backgroundColor="black"
            >
              Go back
            </Button>
          </div>
        </>
      ) : (
        <section
          className={`bg-brown px-7 -mx-7 py-10 min-[800px]:m-0 min-[800px]:p-7 min-[800px]:rounded-xl ${cssClasses}`}
        >
          <form
            ref={ref}
            action={async (formData) => {
              await sendEmail(formData);
              if (ref.current) {
                (ref.current as HTMLFormElement).reset();
              }
              setShowEmailSubmitted(true);
            }}
            className="flex flex-col gap-8"
          >
            <input type="hidden" name="_honey" className="hidden" />
            <label htmlFor="name" className="flex flex-col gap-2">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full name"
              />
            </label>
            <label htmlFor="name" className="flex flex-col gap-2">
              Phone:
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="Phone number"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-2">
              Email:
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Email address"
              />
            </label>
            <label htmlFor="message" className="flex flex-col gap-2">
              Message:
              <textarea
                id="message"
                required
                rows={5}
                name="message"
                placeholder="Type your message here..."
              ></textarea>
            </label>
            <Button
              form
              type="submit"
              backgroundColor="black"
              cssClasses={classNames("", {
                "opacity-50 desktopSmall:cursor-not-allowed":
                  !validateRecaptcha,
              })}
              disabled={!validateRecaptcha}
            >
              Submit
            </Button>
            <Recaptcha onChange={handleRecaptchaChange} />
          </form>
        </section>
      )}
    </div>
  );
};

export default ContactForm;
