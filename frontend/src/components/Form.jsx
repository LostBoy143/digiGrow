/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const change = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "mail") {
      setEmail(e.target.value);
    } else {
      setMsg(e.target.value);
    }
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMsg("");
    console.log("submitted");
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandle(e);
      }}
      className="  mt-[25%] border-[1px] border-zinc-100  bg-black rounded-3xl bg-opacity-10 backdrop-blur-2xl flex-col gap-2 w-[80%] h-[90%]   flex items-center justify-evenly py-6 px-6"
    >
      <h1 className="w-full flex justify-start md:text-3xl text-[106px] font-bold text-white">
        Contact Us
      </h1>

      <input
        className="w-full h-[10%] p-2  bg-transparent border-[1px] border-white outline-none  rounded-lg text-white"
        type="text"
        name="name"
        value={name}
        onChange={(e) => change(e)}
        placeholder="Name"
      />
      <input
        className="w-full h-[10%] p-2 bg-transparent border-[1px] border-white  outline-none rounded-lg text-white"
        type="text"
        name="mail"
        value={email}
        onChange={(e) => change(e)}
        placeholder="Email"
      />
      <textarea
        className="w-full h-[30%] p-2 bg-transparent border-[1px] border-white  outline-none rounded-lg text-white"
        type="text"
        name="msg"
        value={msg}
        onChange={(e) => change(e)}
        placeholder="Message"
      />

      <Button />
    </form>
  );
};

export default Form;
