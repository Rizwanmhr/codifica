import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import { stagging } from '../Components/utils';
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";

const info = [
    "6000+ Integrations",
    "Automation of repetitive tasks",
    "Advanced features like TTS and ASR."
  ];

  const whycodibot = [
    {
      heading: "At the Forefront of Innovation",
      text: "Codifica's Codi Service Assistant streamlines both inbound and outbound customer service operations. From issue ticketing and tracking to status checks and sales pitches, this versatile chatbot easily handles all aspects of customer support."
    },
    {
      heading: "Custom-Crafted AI",
      text: "The Codi Training Assistant enhances employee development with its customizable training modules. Using advanced text, TTS, and ASR technologies, it delivers personalized training programs that adapt to your team's unique learning needs, ensuring a well-prepared workforce."
    },
    {
      heading: "Focus on Business Impact",
      text: "Whether telephony, SMS, email, or Business WhatsApp API, Codibot ensures your chatbot reaches customers on their preferred channels. Advanced telephony capabilities and WhatsApp integration empower you to handle inbound calls and WhatsApp chats with AI efficiency."
    },
    {
      heading: "Results-Oriented Approach",
      text: "Codifica.Ai offers fully customizable chatbot solutions that cater to your specific business needs. With flexible packages, including message credits and integration options, you can design a chatbot that aligns perfectly with your customer support and employee training requirements."
    },
    {
      heading: "Human Expertise, AI Excellence",
      text: "Our team doesn't just understand AI; they understand business. We combine the expertise of seasoned professionals with cutting-edge AI technology to provide insightful solutions that address your specific challenges."
    }
  ];

function Contactus() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        help: ''
    });
    // const [showPopup, setShowPopup] = useState(false);
      const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let sanitizedValue = value;

      if (name === "first_name" || name === "last_name") {
          sanitizedValue = value.replace(/[^a-zA-Z]/g, ''); 
      }
        setFormData(prevState => ({
            ...prevState,
            [name]: sanitizedValue
        }));
    };

    const [loading, setLoading] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

  const recaptchaSiteKey = "6Ld3hbAoAAAAAP-kYa_41NIrQ3KMihpo4yUc3Pj4";

    useEffect(() => {
        // Check if "thankyou" is present in the URL
        const isThankYouInUrl = location.hash.includes("thankyou");

        // Update state based on the condition
        setShowThankYou(isThankYouInUrl);
    }, [location]);

    function validEmail(email) {
        var re =
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    function getFormData(form) {
        var elements = form.elements;

        var fields = Object.keys(elements)
            .filter(function (k) {
                return elements[k].name !== "honeypot";
            })
            .map(function (k) {
                if (elements[k].name !== undefined) {
                    return elements[k].name;
                } else if (elements[k].length > 0) {
                    return elements[k].item(0).name;
                }
            })
            .filter(function (item, pos, self) {
                return self.indexOf(item) == pos && item;
            });

        var formData = {};
        fields.forEach(function (name) {
            var element = elements[name];
            formData[name] = element.value;
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(", ");
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "Sheet1"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        return formData;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = getFormData(form);
        if (!recaptchaValue) {
           toast.error("please check the captcha");
          return;
        }

        if (data.email && !validEmail(data.email)) {
            // Find the element where you want to display the error message
            var emailField = form.querySelector('input[name="Email"]');
            if (emailField) {
                // Show error message
                emailField.setCustomValidity("Please enter a valid email address");
            }
        } else {
            // Reset custom validity when the email is valid
            var emailField = form.querySelector('input[name="Email"]');
            if (emailField) {
                emailField.setCustomValidity("");
            }

            setLoading(true); // Set loading state to true

            // disableAllButtons(form);
            var url = form.action;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    setLoading(false); // Set loading state to false after response

                    if (xhr.status === 200) {
                        // console.log("Success:", xhr.responseText);
                        var formElements = form.querySelector(".form-elements");
                        setShowThankYou(true);
                        navigate("#thankyou");
                        setFormData({
                            first_name: '',
                            last_name: '',
                            email: '',
                            phone: '',
                            company: '',
                            website: '',
                            help: ''
                        });
                        // setShowPopup(true)
                         toast.success(
                           "Submitted. We'll get back to you soon."
                         );
                        form.reset();
                    } else {
                        // Display a user-friendly error message to the user
                        // You can customize this based on your application's requirements
                        alert(
                            "There was an error submitting the form. Please try again."
                        );
                    }
                }
            };

            var encoded = Object.keys(data)
                .map(function (k) {
                    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
                })
                .join("&");
            xhr.send(encoded);
        }
    }

    // --------------------------------------------------------------------------------
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        scrollToSection('overview')
    }, [])

   
    return (
      <section className="overflow-x-hidden max-w-[67.5rem] m-auto">
        <div>
          <Toaster />
        </div>
        <section id="overview" className="max-lg:px-4 mt-20 max-lg:mt-16">
          {/* {showPopup && (
            <div
              onClick={() => setShowPopup(false)}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`transition-all max-md:mx-2 duration-300 ${
                  showPopup ? "translate-x-0 lg:translate-x-20" : ""
                } bg-white p-6 rounded-lg min-w-[30%]`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    Thank You for Reaching Out!
                  </h3>
                  <button
                    className="hover:text-red-500"
                    onClick={() => setShowPopup(false)}
                  >
                    <FaTimes />
                  </button>
                </div>

                <p className="mt-4 text-gray-700">
                  We've received your message, one of our representative will
                  get back to you shortly
                </p>

                <div className="mt-6 flex justify-end space-x-3">
                  {/* <button
                className="bg-blue-500 text-white px-4 font-semibold py-2 rounded-md hover:bg-red-600"
                onClick={() => setShowPopup(false)}
              >
                No
              </button> */}
          {/* <button
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => setShowPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div> */}
          {/* )}} */}
          <section className="lg:flex justify-center overflow-hidden mb-10">
            <div className="space-y-5 xl:mt-24 mt-16 max-lg:mt-0 w-full overflow-hidden">
              <div className="xl:text-[2.5rem] lg:w-[90%] text-[2.1rem] max-lg:text-[1.7rem] xl:leading-[3.5rem] leading-[2.9rem] max-lg:leading-10">
                Give Your Business <br className="max-lg:hidden" /> The Codifica
                Touch <br className="max-lg:hidden" />
                <span className="font-bold"> Let's Talk! </span>
              </div>
              <p className="xl:text-xl text-base font-normal xl:pb-5 pb-3 w-[90%] text-[#3A3A3A]">
                Boost customer support and streamline employee training with
                custom AI chatbots from Codifica.
              </p>
              {info.map((n) => (
                <div className="flex items-center gap-4 max-lg:gap-3">
                  <img
                    src={`${stagging}/assets/tickcon.png`}
                    className="w-5"
                    alt=""
                  />
                  <p className="text-[1.5rem] text-[#3A3A3A]">{n}</p>
                </div>
              ))}
              <div className="pt-8">
                <p className="font-normal xl:pb-7 pb-2 max-lg:pb-6">
                  Recognised as a Leader by
                </p>
                <div className="flex">
                  <img
                    src={`${stagging}/assets/contactperson (1).png`}
                    className="h-14 w-14 "
                    alt=""
                  />
                  <img
                    src={`${stagging}/assets/contactperson (2).png`}
                    className="h-14 w-14 -translate-x-[1.5rem]"
                    alt=""
                  />
                  <img
                    src={`${stagging}/assets/contactperson (3).png`}
                    className="h-14 w-14 -translate-x-[3rem]"
                    alt=""
                  />
                  <img
                    src={`${stagging}/assets/contactperson (4).png`}
                    className="h-14 w-14 -translate-x-[4.5rem]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <form
              className="gform pure-form pure-form-stacked w-full"
              id="form"
              onSubmit={handleFormSubmit}
              method="POST"
              data-email="info@codibot.ai , Murphy@codifica.ai"
              // data-email="abdullahkh1144@gmail.com"
              action="https://script.google.com/macros/s/AKfycbzv2eVQ3hbVYG2HV07IbhRg-qHjK1TXQy9JaUB77jxlZ4mxSZv5fIKK8UxPCe9FodTolQ/exec"
            >
              <div className="xl:mt-20 mt-12 grid grid-cols-2 max-lg:grid-cols-1 gap-7">
                <div className="space-y-3">
                  <p className="text-[1.12rem]">First Name</p>
                  <input
                    required
                    type="text"
                    className="p-3 w-full border border-slate-500 rounded-md"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-[1.12rem]">Last Name</p>
                  <input
                    required
                    type="text"
                    className="p-3 w-full border border-slate-500 rounded-md"
                    name="last_name"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-[1.12rem]">Work Email</p>
                  <input
                    required
                    type="email"
                    className="p-3 w-full border border-slate-500 rounded-md"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-[1.12rem]">Phone Number</p>
                  <input
                    required
                    type="number"
                    className="p-3 w-full border border-slate-500 rounded-md"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-[1.12rem]">Company</p>
                  <input
                    required
                    type="text"
                    className="p-3 w-full border border-slate-500 rounded-md"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-[1.12rem]">Website</p>
                  <input
                    // required
                    type="url"
                    className="p-3 w-full border border-slate-500 rounded-md"
                    name="website"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-3 mt-5">
                <p className="text-[1.12rem]">How may We help you?</p>
                <textarea
                  required
                  className="p-3 w-full border border-slate-500 rounded-md"
                  name="help"
                  id="help"
                  rows="4"
                  value={formData.help}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-3">
                <ReCAPTCHA
                  sitekey={recaptchaSiteKey}
                  onChange={(value) => setRecaptchaValue(value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-black rounded-2xl px-10 py-3 mt-12 min-w-[12rem]"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </section>

          <hr className="bg-slate-700 w-full h-[0.1em] my-20 max-lg:my-14" />

          <section className="pb-20">
            <div className="space-y-5 xl:mt-24 mt-16 w-full">
              <div className="xl:text-[4rem] w-[90%] text-[2.2rem] max-lg:text-[1.7rem] xl:leading-[3.5rem] leading-[2.9rem]">
                What Sets Codifica.Ai Apart?
              </div>
              <div className="lg:flex items-start justify-between pt-6 gap-20">
                <img
                  src={`${stagging}/assets/contactimg (3).png`}
                  className="xl:w-[33rem] w-[28rem] xl:h-[35rem] h-[43rem] max-lg:h-[30rem]"
                  alt=""
                />
                <div className="xl:w-[50%] w-[43%] max-lg:w-full max-lg:mt-10">
                  {whycodibot.map((n) => (
                    <div className="flex items-start gap-4 mb-3 max-lg:mb-4">
                      <img
                        src={`${stagging}/assets/greentick.png`}
                        className="w-5 mt-1"
                        alt=""
                      />
                      <p>
                        {" "}
                        <span className="font-bold">{n.heading}</span>: {n.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
}

export default Contactus
