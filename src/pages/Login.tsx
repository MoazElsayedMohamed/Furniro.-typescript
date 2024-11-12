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
      <div>
        <img
          src="/hero.jpeg"
          alt="hero-img"
          className="relative sm:max-xl:h-[120vh]"
        />
        <div className="bg-white rounded-xl shadow-md py-16 px-24 absolute left-1/3 top-1/4 w-1/3 sm:max-xl:px-8 sm:max-xl:py-8 sm:max-lg:w-5/6 lg:max-sm-tablet:w-4/6 sm-tablet:max-xl:w-3/6 xl:max-2xl:w-1/2 sm-tablet:max-xl:left-[25%] lg:max-xl:left-[20%] sm:max-lg:left-[10%] sm:max-2xl:top-[15%] xl:max-2xl:left-[25%] ">
          <form
            className="mb-32 sm:max-xl:mb-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-5xl mb-12 sm:max-xl:text-3xl">Sign in</h1>

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
              <p className="text-red-500 text-xl mb-2">
                {errors.email.message}
              </p>
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
              <p className="text-red-500 text-xl">{errors.password.message}</p>
            )}
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
