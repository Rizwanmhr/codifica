import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from "react-google-recaptcha";
import { CALENDLY_URL } from "../Components/utils";

function Contactpopup({showPopup , setShowPopup}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    help: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "first_name" || name === "last_name") {
      sanitizedValue = value.replace(/[^a-zA-Z]/g, "");
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: sanitizedValue,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [calendlyopen, setcalendlyopen] = useState(false);

  const recaptchaSiteKey = "6Ld3hbAoAAAAAP-kYa_41NIrQ3KMihpo4yUc3Pj4";

  useEffect(() => {
    // Check if "thankyou" is present in the URL
    const isThankYouInUrl = location.hash.includes("thankyou");

    // Update state based on the condition
    setShowThankYou(isThankYouInUrl);
  }, [location]);

  // for calendly
     useEffect(() => {
       if (calendlyopen) {
         setcalendlyopen(false);
         const script = document.createElement("script");
         script.src = "https://assets.calendly.com/assets/external/widget.js";
         script.async = true;

         script.onload = () => {
           if (window.Calendly) {
             window.Calendly.initPopupWidget({ url: CALENDLY_URL });
           }
         };
         document.body.appendChild(script);
         return () => {
           document.body.removeChild(script);
         };
       }
     }, [calendlyopen]);

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
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          setLoading(false); // Set loading state to false after response

          if (xhr.status === 200) {
            setcalendlyopen(true)
            // console.log("Success:", xhr.responseText);
            var formElements = form.querySelector(".form-elements");
            setShowThankYou(true);
            navigate("#thankyou");
            setFormData({
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
              company: "",
              website: "",
              help: "",
            });
            setShowPopup(false);
            toast.success("Submitted. We'll get back to you soon.");
            form.reset();
          } else {
            // Display a user-friendly error message to the user
            // You can customize this based on your application's requirements
            alert("There was an error submitting the form. Please try again.");
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
  return (
    <div>
      <div>
        <Toaster />
      </div>
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed overflow-hidden inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`transition-all min-w-[70%] max-md:mx-2 duration-300 bg-white p-6 rounded-lg`}
          >
            <div className="max-h-[80vh] overflow-y-auto scrollbar whitespace-nowrap">
              <form
                className="gform pure-form pure-form-stacked w-full"
                id="form"
                onSubmit={handleFormSubmit}
                method="POST"
                data-email="info@codibot.ai , Murphy@codifica.ai"
                // data-email="abdullahkh1144@gmail.com"
                action="https://script.google.com/macros/s/AKfycbzv2eVQ3hbVYG2HV07IbhRg-qHjK1TXQy9JaUB77jxlZ4mxSZv5fIKK8UxPCe9FodTolQ/exec"
              >
                <p className="mt-5 mb-8 text-[2rem] font-bold">Contact Form</p>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7 text-[1.12rem]">
                  <div className="space-y-3">
                    <p>First Name</p>
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
                    <p>Last Name</p>
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
                    <p>Work Email</p>
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
                    <p>Phone Number</p>
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
                    <p>Company</p>
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
                    <p>Website</p>
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
                  <p>How may We help you?</p>
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
                <div className="space-y-3 mt-5">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contactpopup
