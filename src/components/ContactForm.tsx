import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    id: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = { name: "", id: "", email: "", message: "" };
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.id) newErrors.id = "ID is required";
    else if (!/^\d{2}-\d{5}-\d{1}$/.test(formData.id))
      newErrors.id = "ID must be in the format **-*****-*";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.status === 200) {
        setStatus("Email sent successfully");
        setFormData({ name: "", id: "", email: "", message: "" });
      } else {
        setStatus("Error sending email");
      }
    } catch (error) {
      setStatus("Error sending email");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="pt-10 md:pt-20 lg:h-screen ">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 md:h-screen">
          <div className="text-2xl text-blue-600 ml-96 mb-4 ">
            <p className="p-4">
              Contact Us{" "}
              <hr className="w-36  border-2 border-blue-600 rounded-xl " />
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
              <p className="mt-2 text-center text-blue-700 font-semibold text-xl pb-4">
                Submit inquiries or feedback here
                <hr className="w-96 ml-8 border-2 border-blue-600 rounded-xl " />
              </p>
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="ID"
                  className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.id && (
                  <p className="text-red-500 text-sm">{errors.id}</p>
                )}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </form>
              {status && (
                <p
                  className={`mt-4 text-center font-bold ${
                    status.includes("Error") ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
