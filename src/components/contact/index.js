import React from "react";

const Contact = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <section id="contact">
      <h3>Get In Touch</h3>
      <p>
        I am actively seeking remote opportunities. If my projects and/or
        skillset speak to you, don't hesitiate to reach out!
      </p>
      <button>
        <Mailto
          email="foo@bar.baz"
          subject="Hello & Welcome"
          body="Hello world!"
        >
          Send a Message
        </Mailto>
      </button>
    </section>
  );
};

export default Contact;
