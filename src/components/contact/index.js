import React from "react";

const Contact = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <section id="contact" className="max-width">
      <h2>Get In Touch</h2>
      <p>
        I am actively seeking remote opportunities. If my projects and/or
        skillset speak to you, don't hesitiate to reach out!
      </p>
      <button
        style={{ borderColor: "var(--action-color)", marginBottom: "3rem" }}
      >
        <Mailto
          email="daniellerosekendall@gmail.com"
          subject="Hello from your SWE profile"
          body=""
        >
          Send a Message
        </Mailto>
      </button>
    </section>
  );
};

export default Contact;
