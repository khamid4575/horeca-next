"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const Contacts = () => {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (phoneNumber: any) => {
    const phoneNumberRegex = /^(?:\+?998)?\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const validateEmail = (email: string) => {
    const emailRegex =
      /^([a-zA-Z0-9._%+-]{3,})+@([a-zA-Z0-9.-]{2,})+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, fullname, phoneNumber, message } = formData;

    if (!validatePhoneNumber(phoneNumber) || !validateEmail(email)) {
      Swal.fire({
        title: "Error!",
        text: "Invalid phone number",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const text = `Email: ${email}\nFull Name: ${fullname}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;

    try {
      return;
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-1002159191350",
          text: text,
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: "swal.success",
          text: "swal.successText",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          email: "",
          fullname: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        console.log(response);
        Swal.fire({
          title: "swal.error",
          text: "swal.errorText",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      Swal.fire({
        title: "Error!",
        text: "Error sending message",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <section
      id="contacts"
      className="flex md:flex-row flex-col md:gap-0 gap-10 justify-between items-center lg:w-11/12 pt-24 mb-12"
    >
      <div>
        <h1 className="lg:text-4xl text-3xl font-extrabold">
          {t("navbar.contacts")}.{" "}
          <span className="text-gray-500">{t("contacts.contactUsToday")}</span>
        </h1>
        <form className="md:w-3/4 w-full" onSubmit={handleSubmit}>
          <div className="my-5 group">
            <input
              type="email"
              name="email"
              className="block p-1.5 w-full lg:text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contacts.email")}
            />
          </div>
          <div className="mb-5 group">
            <input
              type="text"
              name="fullname"
              className="block p-1.5 w-full lg:text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              value={formData.fullname}
              onChange={handleChange}
              placeholder={t("contacts.FIO")}
            />
          </div>
          <div className="mb-5 group">
            <input
              type="text"
              name="phoneNumber"
              className="block p-1.5 w-full lg:text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder={t("contacts.phone")}
            />
          </div>
          <div className="mb-5 group">
            <textarea
              name="message"
              className="block p-1.5 rounded-lg w-full lg:text-lg text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contacts.yourRequest")}
            />
          </div>
          <Button variant="secondary" size={"default"}>
            <p className="text-lg font-extrabold">{t("contacts.send")}</p>
          </Button>
        </form>
      </div>
      <div className="font-medium lg:text-xl">
        <h1 className="lg:text-3xl text-2xl font-bold">
          {t("contacts.address")}
        </h1>
        <p className="my-5">{t("contacts.locattion")}</p>
        <p>+998 (71) 888-88-88</p>
        <p className="my-5">order@supplypartners.uz</p>
        <h1 className="lg:text-3xl text-2xl font-bold">
          {t("contacts.workOur")}
        </h1>
        <p className="mt-5">{t("contacts.mondayToFriday")}</p>
      </div>
    </section>
  );
};

export default Contacts;
