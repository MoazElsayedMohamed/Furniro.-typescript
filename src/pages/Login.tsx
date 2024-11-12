import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import React, { useState } from "react";
import FormRow from "../components/login/FormRow";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }
  interface SumbitEvent {
    (e: React.FormEvent<HTMLFormElement>): void;
  }

  const handleSubmit: SumbitEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:1337/api/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      const data = await response.json();

      const jwt = data.jwt;
      const user = data.user;
      localStorage.setItem("token", jwt);
      localStorage.setItem("username", user.username);

      if (response.ok) {
        toast.success("login successfully");
        window.location.replace("/");
      } else {
        toast.error("login failed. Please check email and password again");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div>
        <img
          src="/hero.jpeg"
          alt="hero-img"
          className="relative sm:max-xl:h-[120vh]"
        />
        <div className="bg-white rounded-xl shadow-md py-16 px-24 absolute left-1/3 top-1/4 w-1/3 sm:max-xl:px-8 sm:max-xl:py-8 sm:max-lg:w-5/6 lg:max-sm-tablet:w-4/6 sm-tablet:max-xl:w-3/6 xl:max-2xl:w-1/2 sm-tablet:max-xl:left-[25%] lg:max-xl:left-[20%] sm:max-lg:left-[10%] sm:max-2xl:top-[15%] xl:max-2xl:left-[25%] ">
          <form className="mb-32 sm:max-xl:mb-16" onSubmit={handleSubmit}>
            <h1 className="text-5xl mb-12 sm:max-xl:text-3xl">Sign in</h1>

            <FormRow
              id="identifier"
              type="text"
              label="Email or username"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <FormRow
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              onClick={handleClick}
              showPassword={showPassword}
              required={true}
              minLength={8}
              placeholder={""}
              inputName={""}
            />
            <div className="mt-8">
              <Button size="lg">sign in</Button>
            </div>
            <div className="flex justify-between mt-4 text-xl">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <Link to="#">Need Help?</Link>
            </div>
          </form>
          <p className="text-xl text-gray-400">
            Don&apos;t have an account?
            <Link className="underline text-black font-semibold" to="/register">
              Sign up
            </Link>
          </p>
          <p className="text-xl text-gray-400 mt-4">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
            <Link className="text-black font-semibold" to="#">
              Learn more.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
