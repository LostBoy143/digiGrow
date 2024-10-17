/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const change = (e) => {
    e.target.name === "name"
      ? setName(e.target.value)
      : setEmail(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    console.log("submitted");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
        className=" bg-slate-500 shadow-black shadow-2xl rounded-xl flex-col gap-2 ml-80 pr-12 pl-12 pt-3 mt-6 mb-16 min-h-72  w-1/2  flex justif-center items-center"
      >
        <h1 className="text-center font-bold text-white">
          Form Handling
        </h1>
        <p className="text-center text-white">
          with prevent default and two way binding
        </p>
        <input
          className="w-full h-12 p-2 outline-none  rounded-full text-black"
          type="text"
          name="name"
          value={name}
          onChange={(e) => change(e)}
          placeholder="Enter your name "
        />
        <input
          className="w-full h-12 p-2  outline-none rounded-full text-black"
          type="text"
          name="mail"
          value={email}
          onChange={(e) => change(e)}
          placeholder="Enter your email "
        />
        <button
          type="submit"
          className="bg-emerald-400 hover:bg-emerald-600 text-white w-1/3 rounded-full h-12"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
