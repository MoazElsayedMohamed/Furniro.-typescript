import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import FormRow from "../components/login/FormRow";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { onCLS, onINP, onLCP } from "web-vitals";

interface SumbitData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "password must be 8 or more characters")
    .required("password is required"),
});

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SumbitData>({
    resolver: yupResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    onCLS((metric) => console.log(metric.value));
    onINP((metric) => console.log(metric.value));
    onLCP((metric) => console.log(metric.value));
  }, []);

  const onSubmit: SubmitHandler<SumbitData> = async (data) => {
    const { email, password } = data;
    try {
      const response = await fetch(`http://localhost:1337/api/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      const result = await response.json();

      const jwt = result.jwt;
      const user = result.user;
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
      <div className="relative">
        <img
          src="/hero.jpeg"
          alt="hero-img"
          className="w-full max-tablet:h-[40rem]"
        />
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-md absolute top-6 py-20 px-10 max-bgScreen:py-16 w-1/2 max-mdScreen:py-12 max-tablet:py-10 max-smTablet:w-3/4 max-phone:w-[85%] max-phone2:px-4">
            <form
              className="mb-32 max-bgScreen:mb-24 max-mdScreen:mb-16 max-tablet:mb-12 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-3xl text-[#333333] mb-12 max-bgScreen:mb-8 max-mdScreen:text-2xl max-phone2:text-xl">
                Sign in
              </h1>
              <FormRow
                id="identifier"
                type="text"
                label="Email or username"
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                showPassword={false}
                placeholder="test@test.com"
                inputName="email"
                minLength={0}
                register={register}
              />
              {errors.email && (
                <p className="text-red-500 mb-2">{errors.email.message}</p>
              )}
              <FormRow
                id="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                onClick={handleClick}
                showPassword={showPassword}
                inputName="password"
                placeholder="password"
                minLength={0}
                register={register}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <div className="mt-8 max-phone2:mt-3">
                <Button size="lg">sign in</Button>
              </div>
              <div className="flex justify-between mt-4 font-normal text-[#333333] max-mdTabelt:text-sm max-phone2:text-xs">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
                <Link to="#">Need Help?</Link>
              </div>
            </form>
            <p className=" text-[#666666] max-mdScreen:text-sm max-phone2:text-xs">
              Don&apos;t have an account?
              <span>
                <Link className="underline text-black" to="/register">
                  Sign up
                </Link>
              </span>
            </p>
            <p className=" text-[#666666] mt-2 max-mdScreen:text-sm max-phone2:text-xs">
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot.
              <Link className="text-black" to="#">
                Learn more.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
