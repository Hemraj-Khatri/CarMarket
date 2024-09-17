import React, { useState } from "react";
import { useContactUserMutation } from "../Slices/userApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [contactUser, { isLoading }] = useContactUserMutation();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await contactUser({ name, email, phone, message }).unwrap();
      toast.success(resp.Message);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      navigate("/sendMessage");
    } catch (error) {
      toast.error(error.data);
    }
  };

  return (
    <div className="md:my-10 text-center md:px-30 px-5">
      <h1 className="font-semibold text-4xl py-5">
        ANY QUESTIONS? CONTACT US NOW!
      </h1>

      <p className="md:px-40 py-5">
        Car Market is the automotive classifieds website in Nepal. If you have
        any questions or issues regarding our website, or if you want to
        advertise on Car Market Place, please contact us here.
      </p>

      <div>
        <form onSubmit={onSubmitHandler}>
          <div className="py-2">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-100 rounded-sm px-2 py-2 md:w-[30%] w-full"
              aria-label="Name"
            />
          </div>
          <div className="py-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-100 rounded-sm px-2 py-2 md:w-[30%] w-full"
              aria-label="Email"
            />
          </div>
          <div className="py-2">
            <input
              type="number"
              placeholder="Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-slate-100 rounded-sm px-2 py-2 md:w-[30%] w-full"
              aria-label="Phone"
            />
          </div>
          <div className="py-2 mb-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-slate-100 rounded-sm px-2 py-2 md:w-[30%] w-full"
              rows={5}
              placeholder="Write your message"
              aria-label="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-slate-100 rounded-full px-2 py-3 border border-green-800 md:w-[30%] w-full hover:bg-green-500 transition-all duration-500 hover:text-white font-semibold text-2xl"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
