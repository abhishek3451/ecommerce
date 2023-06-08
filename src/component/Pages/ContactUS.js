import React, { useState } from "react";
import "./ContactUs.css";
const ContactUS = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { firstname, lastname, phone, email, address, message } = userData;
    try {
      if (firstname && lastname && phone && message && address) {
        const res = fetch(
          "https://ecommerce-8fcee-default-rtdb.firebaseio.com/userDataRecord.json",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname,
              lastname,
              phone,
              email,
              address,
              message,
            }),
          }
        );
        if (res) {
          setUserData({
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            address: "",
            message: "",
          });
          alert("Data stored");
        }
      } else {
        alert("Please fill the data");
      }
    } catch {
      console.log("error");
    }
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h2>
                    Connect With Our <br /> Sales Team.
                  </h2>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                </div>

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstname"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstname}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastname"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastname}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="number"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                          // }
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input className="form-check-input" type="checkbox" />
                      <label
                        // className="form-check-label"
                        className="main-hero-para"
                      >
                        I agree that the SpeedySnag may contact me at the email
                        address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn-style"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUS;
