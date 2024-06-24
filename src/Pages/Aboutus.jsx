import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";
import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { stagging } from '../Components/utils';
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const libraries = ['places']; // Include the Places library for search functionality

const mapContainerStyle = {
    width: '400px',
    height: '400px',
};

const zoom = 10;


function Aboutus() {
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
    // -----------------------------------------------Gmap----------------------------------------------
    const apiKey = import.meta.env.VITE_GOOGLE_KEY // State variable for API key
    const [markers, setMarkers] = useState([]); // Array for marker data
    const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(null); // State for info window
    
 const recaptchaSiteKey = "6Ld3hbAoAAAAAP-kYa_41NIrQ3KMihpo4yUc3Pj4";

    useEffect(() => {
        // Sample data for markers (replace with your actual data)
        const sampleMarkers = [
            {
                position: { lat: 40.7128, lng: -74.0059 }, // Replace with your desired location
                title: 'Marker 1',
                content: 'This is the content for Marker 1.',
            },
            {
                position: { lat: 40.7484, lng: -73.9857 }, // Replace with your desired location
                title: 'Marker 2',
                content: 'This is the content for Marker 2.',
            },
        ];
        setMarkers(sampleMarkers);
    }, []);

    const handleLoad = (map) => {
        // Access the map instance (optional)
        console.log(map);
    };

    const handleMarkerClick = (markerIndex) => {
        setIsInfoWindowOpen(markerIndex); // Open info window for clicked marker
    };

    const handleMapClick = () => {
        if (isInfoWindowOpen !== null) {
            setIsInfoWindowOpen(null); // Close info window on map click
        }
    };

    const handleInfoWindowClose = () => {
        setIsInfoWindowOpen(null); // Close info window on close button click
    };

    if (!apiKey) {
        return <div>Loading Google Maps...</div>;
    }
    // ----------------------------------------------------End gmap ---------------------------------------
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
        // scrollToSection('overview')
    }, [])

    return (
      <>
        <div>
          <Toaster />
        </div>
        <section className="overflow-x-hidden">
          <section id="overview" className="mt-20 max-lg:mt-16 pb-5 ">
            {/* {showPopup && (
              <div className="fixed px-2 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div
                  onClick={() => setShowPopup(false)}
                  className="absolute inset-0"
                ></div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white p-6 rounded-lg min-w-[30%] flex flex-col justify-center items-center z-50"
                >
                  <div className="flex justify-between items-center w-full">
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
                  <p className="mt-4 text-gray-700 text-center">
                    We've received your message, one of our representatives will
                    get back to you shortly
                  </p>
                  <div className="mt-6 flex justify-end w-full">
                    <button
                      className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer"
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )} */}
            <div className="max-lg:px-4 max-w-[67.5rem] m-auto">
              <div className="lg:flex items-start gap-16 max-xl:gap-10">
                <p className="max-xl:w-[270%] lg:text-[3rem] max-md:text-[2rem] max-lg:w-full max-lg:mb-5 max-lg:text-[3rem] w-[90%] text-[3rem] xl:leading-[3.5rem] leading-[2.9rem] max-lg:leading-9">
                  Optimize Business Interactions with{" "}
                  <span className="text-[#33B87C] font-bold">Codifica</span>
                </p>
                <p className="xl:w-[200%] text-lg">
                  Codifica Inc. is US based organization where we're leading the
                  way in using advanced AI technology to revolutionize
                  industries and boost businesses. We're committed to creating
                  easy-to-use systems that harness the power of ethical AI,
                  changing how we communicate and providing invaluable help
                  <br />
                  <br />
                  We're constantly pushing the limits in AI, machine learning,
                  and automation, creating tools that make our clients more
                  efficient. for a proactive team that keeps your business ahead
                  of the competition. are designed to enhance profitability,
                  customer satisfaction, and staff productivity significantly.
                </p>
              </div>
              <div className="mt-24 max-lg:mt-14 flex justify-center items-center">
                <img
                  src={`${stagging}/assets/aboutimgnew.png`}
                  className="max-lg:h-[11rem]"
                  alt=""
                />
              </div>
              <div className="flex items-start gap-[7.8rem] max-lg:flex-col-reverse mt-32 max-lg:mt-0">
                <img
                  src={`${stagging}/assets/aboutsec (1).png`}
                  className="xl:w-[33rem] w-[24rem] max-lg:w-full max-lg:mt-10"
                  alt=""
                />
                <div className="xl:w-[50%] w-[47%] max-xl:mt-5  max-lg:w-full">
                  <p className="xl:text-[2.2rem] w-[90%] text-[1.8rem] mb-5">
                    Codifica
                    <br />
                    <span className="font-bold text-[#366CFF]">
                      {" "}
                      Mission & Vision{" "}
                    </span>
                  </p>
                  <p>
                    {" "}
                    At Codifica, we are dedicated to revolutionizing industries
                    and enriching lives worldwide. We lead the charge in
                    developing innovative technology that enhances daily
                    experiences and drives global advancement. Join us on this
                    thrilling journey toward a future brimming with endless
                    possibilities.
                    <br />
                    <br />
                    <strong>Vision</strong>
                    <br />
                    <br />
                    <strong>Codifica:</strong> Pioneering Ethical AI Solutions.
                    We empower organizations with intelligent assistants that
                    streamline communication, enhance operational efficiency,
                    and facilitate data-driven decision-making.
                    <br />
                    <br />
                    Codifica fosters a future where responsible AI drives
                    innovation and profitability across all industries.
                  </p>
                </div>
              </div>
              <div className="lg:flex items-start justify-between mt-32 max-lg:mt-10">
                <div className="xl:w-[50%] w-[47%] mt-16 max-xl:mt-5 xl:mr-32 max-lg:w-full">
                  <p className="xl:text-[2.2rem] w-[90%] text-[1.8rem] mb-5">
                    Codifica
                    <br />
                    <span className="font-bold text-[#33B87C]">
                      Customer Centric
                    </span>
                  </p>
                  <p>
                    Codifica core purpose is to improve customer’s profitability
                    by automating their process, quick response to customer
                    inquiries, resource waste management, and improving decision
                    making abilities. AI is poised to radically transform the
                    future, particularly how businesses operate and interact
                    with customers by providing following products;
                  </p>
                  <ul className="list-disc pl-6 pt-3">
                    <li>Codi Service Assistant</li>
                    <li>Codi Corporate Training Assistant</li>
                    <li>Codi telephony Assistant</li>
                    <li>Codi Web Agent</li>
                    <li>Codi Education Assistant</li>
                    <li>Codi Travel Assistant</li>
                  </ul>
                </div>
                <img
                  src={`${stagging}/assets/aboutsec (2).png`}
                  className="xl:w-[33rem] w-[24rem] max-lg:w-full max-lg:mt-10"
                  alt=""
                />
              </div>

              <hr className="bg-slate-700 w-full h-[0.1em] mt-20" />

              {/* <div className='flex justify-between my-5'>
        <p className='text-2xl max-xl:text-xl font-bold'>Our Locations </p>
        <div className='flex gap-5 text-base max-xl:text-sm font-bold'>
            <button className=''>Pakistan</button>
            <button className='text-slate-400'>United States</button>
        </div>
    </div> */}
            </div>

            {/* <div className='text-3xl'>
        <LoadScript
            googleMapsApiKey={apiKey}
            libraries={libraries}
        >
            <GoogleMap
                mapContainerStyle={{width:"100%" , height: "25rem"}}
                zoom={zoom}
                center={markers.length > 0 ? markers[0].position : { lat: 0, lng: 0 }}
                onClick={handleMapClick} // Add map click handler
                onLoad={handleLoad}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index} // Add a unique key for each marker
                        position={marker.position}
                        title={marker.title}
                        onClick={() => handleMarkerClick(index)}
                    >
                        {isInfoWindowOpen === index && ( // Conditional rendering for info window
                            <InfoWindow onCloseClick={handleInfoWindowClose}>
                                <div>
                                    <h2>{marker.title}</h2>
                                    <p>{marker.content}</p>
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    </div> */}
            <div></div>
            <div className="bg-[#263238] lg:grid grid-cols-2">
              <p className=""></p>
              <p className="text-[2rem] p-7 font-bold text-white">Contact Us</p>
            </div>
            <section className="mb-10 bg-[#33B87C] text-white">
              <div className="flex justify-center py-10 pb-12 max-lg:px-4 max-w-[67.5rem] m-auto">
                <div className="w-[50%] -translate-y-44 max-xl:-translate-y-40 relative max-lg:hidden">
                  <img
                    src={`${stagging}/assets/aboutimg4.png`}
                    className="w-[85%] absolute max-xl:h-[85%] h-[93%] object-cover"
                    alt=""
                  />
                </div>
                <form
                  className="gform pure-form pure-form-stacked w-[55%] max-lg:w-full text-black"
                  id="form"
                  onSubmit={handleFormSubmit}
                  method="POST"
                  data-email="info@codibot.ai , Murphy@codifica.ai"
                  // data-email="abdullahkh1144@gmail.com"
                  action="https://script.google.com/macros/s/AKfycbzv2eVQ3hbVYG2HV07IbhRg-qHjK1TXQy9JaUB77jxlZ4mxSZv5fIKK8UxPCe9FodTolQ/exec"
                >
                  <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7">
                    <div className="space-y-3">
                      <p className="text-[1.12rem] text-white">First Name</p>
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
                      <p className="text-[1.12rem] text-white">Last Name</p>
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
                      <p className="text-[1.12rem] text-white">Work Email</p>
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
                      <p className="text-[1.12rem] text-white">Phone Number</p>
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
                      <p className="text-[1.12rem] text-white">Company</p>
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
                      <p className="text-[1.12rem] text-white">Website</p>
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
                    <p className="text-[1.12rem] text-white">
                      How may We help you?
                    </p>
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
            </section>
          </section>
        </section>
      </>
    );
}

export default Aboutus
