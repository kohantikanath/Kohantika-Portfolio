// import "./Contact.css"

// function Contact() {
//     return (
//       <div className="form" id="contact">
//         <div className="f-left">
//           <div className="f-text">
//             <span>Get in touch</span>
//             <span>Contact me</span>
//           </div>
//         </div>
//         <div className="f-right">
//           <form>
//             <input
//               type="text"
//               name="user_name"
//               placeholder="Name"
//               className="user"
//             />
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Email"
//               className="user"
//             />
//             <textarea
//               name="message"
//               placeholder="Message"
//               className="user"
//               id="txtarea"
//             />
//             <input type="submit" value="Send" className="button" />
//           </form>
//         </div>
//         <div className="blur3"></div>
//         <div className="blur4"></div>
//       </div>
//     );
// }

// export default Contact;
import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gyuvdoge",
        "template_3c1x1zo",
        e.target,
        "Us7xKtO9lMa1W5RRY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="form" id="contact">
      <div className="f-left">
        <div className="f-text">
          <span>Get in touch</span>
          <span>Contact me</span>
        </div>
      </div>
      <div className="f-right">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="user"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="user"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="user"
            id="txtarea"
          />
          <input type="submit" value="Send" className="button" />
        </form>
      </div>
      <div className="blur3"></div>
      <div className="blur4"></div>
    </div>
  );
}

export default Contact;
