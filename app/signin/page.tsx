"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  return (
    <>
      <div onClick={async () => await signIn("google")}>Log In with google</div>
      <div onClick={async () => await signIn("github")}>Log In with Github</div>
      <div className="flex flex-col">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button onClick={async () => await signIn("credentials", formData)}>
          Submit
        </button>
      </div>
    </>
  );
};

export default SignIn;
