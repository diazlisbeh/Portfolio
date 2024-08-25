import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Alert from "./Alert";
interface FormData {
  name: string;
  email: string;
  message: string;
}
const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async () => {
    setLoading(true);
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        {
          to_name: import.meta.env.VITE_EMAIL,
          from_name: formData.name,
          message: `${formData.message} my email is ${formData.email}`,
          reply_to: "example@exampe.com",
        },
      );
      console.log(res);
      setLoading(false);
      setshowAlert(true);
      setTimeout(() => {
        setshowAlert(false);
      }, 5000);
    } catch (e) {
      alert("Ha ocurrido un error al enviar");

      console.error(e);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    // Inicializa EmailJS con tu User ID
    emailjs.init(import.meta.env.VITE_USERID);
  }, []);
  return (
    <div className="md:w-3/6 sm:w-full">
      <form>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your Name
          </label>
          <input
            id="name"
            className="bg-transparent border border-bunker-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Smith"
            required
            onChange={handleChange}
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Your Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="email"
            id="email"
            className="bg-transparent border border-bunker-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            required
            onChange={handleChange}
          />
        </div>
        <label className="block mb-2 mt-5 text-sm font-medium text-gray-900 ">
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-bunker-50 bg-transparent rounded-lg border border-bunker-100 focus:ring-blue-500 focus:border-blue-500 "
          required
          onChange={handleChange}
        ></textarea>
        <button
          disabled={loading}
          type="button"
          className="disabled:opacity-50 text-white bg-bunker-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5  focus:outline-none"
          onClick={sendEmail}
        >
          Send
        </button>
      </form>
      {showAlert && <Alert />}
    </div>
  );
};
export default ContactForm;
