"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdFolder } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Envoie l'email avec EmailJS
    emailjs
      .send(
        "service_la7ma1o",
        "template_rfdvx2u",
        formData,
        "wpWb_IHFyUQYcRXow"
      )
      .then((response) => {
        console.log(
          "Email envoyé avec succès!",
          response.status,
          response.text
        );
        setSuccessMessage("Message envoyé avec succès !");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log("Échec de l'envoi de l'email.", error);
        setErrorMessage("Une erreur est survenue, veuillez réessayer.");
        setSuccessMessage("");
      });

    // Réinitialiser le formulaire
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="contact min-h-screen w-screen flex flex-col items-center"
    >
      <h2 className="font-title text-center p-10">Mon contact</h2>
      <div className="w-full max-w-15xl flex flex-col gap-10 items-center">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <FaGithub size={30} />
            <a
              href="https://github.com/luciemtro"
              aria-label="Voir mon GitHub"
              className="metallic-text"
            >
              Mon Github
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin size={30} />
            <a
              className="metallic-text"
              href="https://www.linkedin.com/in/lucie-monteiro/"
              aria-label="Voir mon LinkedIn"
            >
              Mon LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MdFolder size={30} />
            <a
              className="metallic-text"
              href="https://github.com/luciemtro/new-portefolio"
              aria-label="Voir le code source du portfolio sur GitHub"
            >
              Code source du portfolio sur GitHub
            </a>
          </li>
        </ul>
        <form
          onSubmit={handleSubmit}
          className="contact-form flex flex-col gap-5"
        >
          <div className=" flex flex-col gap-2">
            <label htmlFor="name" className="bullet">
              Nom :
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className=" h-10 font-basic champs"
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="bullet">
              Email :
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className=" h-10 font-basic champs"
              onChange={handleChange}
              placeholder="Votre email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="bullet">
              Message :
            </label>
            <textarea
              rows={10}
              name="message"
              value={formData.message}
              className=" champs"
              style={{ resize: "none" }}
              onChange={handleChange}
              placeholder="Votre message"
              required
            />
          </div>
          <button
            type="submit"
            className="font-basic button puce--violet scale uppercase"
          >
            Envoyer
          </button>
        </form>
      </div>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </section>
  );
}
