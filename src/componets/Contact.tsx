import ContactForm from "./ContactForm";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
const Contact: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Get in touch</h2>

      <div className="flex space-x-4 mb-8">
        <a
          className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-bunker-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          href="https://github.com/diazlisbeh"
          target="_blank"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <img src={github} />
          </span>
        </a>
        <a
          className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-bunker-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          href="https://www.linkedin.com/in/diazlisbeh/"
          target="_blank"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <img src={linkedin} />
          </span>
        </a>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
