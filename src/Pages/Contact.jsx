import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  return (
    <>
      <h1 className="contact-text-main">Feel free to Contact</h1>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <FontAwesomeIcon icon={faLocation} className="icon" />
              <div className="topic">Address</div>
              <div className="text-one">Gulberg 3, ST# 009-A</div>
              <div className="text-two">New Town, Lahore cantt</div>
            </div>
            <div className="phone details">
              <FontAwesomeIcon icon={faPhone} shake className="icon" />
              <div className="topic">Phone</div>
              <div className="text-one">+92-3123727129</div>
              <div className="text-two">+91-2323655001</div>
            </div>
            <div className="email details">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <div className="topic">Email</div>
              <div className="text-one">hamidrehman019@gmail.com</div>
              <div className="text-two">KnowledgeStream@hotmail.com</div>
            </div>
          </div>

          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>

            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Write your message"></textarea>
              </div>
              <div className="button">
                <input
                  type="button"
                  value="Send Now"
                  onClick={() =>
                    console.log("Your Information is Stored Successfull.")
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
