"use client";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const paragraphs = [
    "Bienvenue sur mon portfolio ! 👩‍💻 Je suis développeuse web passionnée, en reconversion après un parcours de vie intense qui m’a forgée. Aujourd’hui, je transforme ma résilience en code, et mes idées en projets concrets.",
    "J’adore créer des expériences web complètes, du front-end au back-end, avec une affinité particulière pour Next.js que j’utilise comme base pour la plupart de mes projets. J’aime donner vie aux interfaces, structurer les données, et bâtir des applications qui ont du sens.",
    "Polyvalente, curieuse et toujours en train d’apprendre, je me plonge aussi bien dans le design que dans l’architecture d’une base de données. Je cherche à rejoindre une équipe bienveillante, motivée, où je pourrai évoluer, apporter mes idées et coder avec cœur.",
    "Si vous recherchez une développeuse impliquée, créative, et qui met autant d’énergie dans ses lignes de code que dans l’humain derrière l’écran, je serais ravie d’échanger avec vous ! ",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // Observe pour détecter si la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Lance l'animation seulement si elle a été déclenchée
  useEffect(() => {
    if (hasStarted && paragraphIndex < paragraphs.length) {
      if (charIndex < paragraphs[paragraphIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + paragraphs[paragraphIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, 30);

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDisplayedText((prev) => prev + "\n\n");
          setParagraphIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
      }
    }
  }, [charIndex, paragraphIndex, paragraphs, hasStarted]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className=" w-screen lg:min-h-screen max-h-fit"
      aria-labelledby="about-title"
    >
      <h1 id="about-title" className="font-title text-center p-10">
        À propos de moi
      </h1>

      <div className="relative text-neonGreen p-8 shadow-lg w-[90%] mx-auto border border-neonGreen/50 container-text-container-about">
        <div className="absolute inset-0 neon-border animate-glitch"></div>
        <article className="text-lg font-mono text-gray-300 leading-relaxed">
          <p className="typing-effect font-basic">{displayedText}</p>
        </article>
      </div>
    </section>
  );
}
