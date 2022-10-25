import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex flex-col   md:flex-row max-w-7xl px-10 mx-auto items-center overflow-clip">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="mt-44 md:mt-0 flex flex-col space-y-10">
        <h4 className="text-lg md:text-4xl font-semibold text-center">
          I have got just what you need.
          <br />
          <span className="underline decoration-[#f7ab08]/50">
            Let&apos;s Talk.
          </span>
        </h4>

        <div className="space-y-6 md:space-y-10">
          {/* <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#f7ab08] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+123-456789</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#f7ab08] h-7 w-7 animate-pulse-slow" />
            <p className="text-2xl">123 Developer&apos;s avenue</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#f7ab08] h-7 w-7 animate-pulse" />
            <p className="text-2xl">email-me@gmail.com</p>
          </div> */}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
      >
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="contactInput"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="contactInput"
          />
        </div>

        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="contactInput"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />

        <button
          type="submit"
          className="bg-[#f7ab08] py-5 px-10 rounded-sm text-black font-bold text-lg hover:bg-[#ffb71c] transition-colors duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
