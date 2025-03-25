export default function Cv() {
  return (
    <section id="cv" className="w-screen flex flex-col items-center ">
      <h2 className="font-title text-2xl text-center p-10">
        Mon Curriculum Vitae
      </h2>
      <div className="flex items-center justify-center  min-h-[50vh]">
        <a
          href="https://github.com/luciemtro/portefolio/raw/main/app/components/cvluciemonteiro.pdf"
          download="cvluciemonteiro.pdf"
        >
          <button className="cybr-btn">
            Download
            <span aria-hidden>_</span>
            <span aria-hidden className="cybr-btn__glitch">
              Download
            </span>
            <span aria-hidden className="cybr-btn__tag"></span>
          </button>
        </a>
      </div>
    </section>
  );
}
