import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  CardBody,
  Input,
  ButtonGroup,
} from "@nextui-org/react";
import {
  PiEye,
  PiEyeClosed,
  PiFacebookLogo,
  PiGoogleLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { useForm, SubmitHandler } from "react-hook-form";
import useLibraryStore from "../store/store";
import { notify } from "../utils/notify";
import { authLogin } from "../api/auth";

export const Login = () => {
  const [passwordView, setPasswordView] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/");
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const user = await authLogin(data);
      localStorage.setItem("user", JSON.stringify(user));
      useLibraryStore.setState({ user });
      notify({
        content: `Welcome back ${user.username}`,
        type: "success",
      });
      navigate("/");
    } catch (error) {
      notify({
        content: `${error}`,
        type: "error",
      });
    }
  };

  return (
    <div className="flex h-screen w-screen content-center items-center justify-center gap-6">
      <div className="hidden w-3/12 content-center items-center justify-center lg:flex">
        <Image
          isBlurred
          className=" w-full object-cover"
          alt="Card background"
          src="https://nextui.org/images/card-example-6.jpeg"
        />
      </div>
      <Card
        isBlurred
        isFooterBlurred
        className="h-5/6 w-1/2 border border-divider p-5"
      >
        <CardHeader>
          <h3 className="text-3xl font-bold">
            <span className="font-thin text-content4">#</span> Login
          </h3>
        </CardHeader>
        <CardBody>
          <form
            className="flex h-full flex-col  justify-between gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <Input
                {...register("username", { required: true, minLength: 5 })}
                type="text"
                label="Username"
                variant="bordered"
                color={errors.username ? "danger" : "primary"}
                errorMessage={
                  errors.username && "Please enter a valid username"
                }
              />
              <Input
                {...register("password", { required: true, minLength: 8 })}
                type={passwordView ? "text" : "password"}
                label="Password"
                variant="bordered"
                color={errors.password ? "danger" : "primary"}
                errorMessage={
                  errors.password && "Please fill the password field"
                }
                endContent={
                  <Button
                    onPress={() => setPasswordView(!passwordView)}
                    variant="bordered"
                  >
                    {passwordView ? <PiEyeClosed /> : <PiEye />}
                  </Button>
                }
              />
              <p className="text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary">
                  Register
                </Link>
              </p>
              <p className="text-sm">
                Forgot your password?{" "}
                <Link to="/login" className="text-primary">
                  Reset password
                </Link>
              </p>
            </div>
            <Button color="primary" type="submit">
              Login
            </Button>
            <p className="text-center text-tiny text-neutral-500">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary">
                Privacy Policy
              </Link>
            </p>
          </form>
        </CardBody>
        <CardFooter className="flex justify-center overflow-hidden rounded-large shadow-small before:rounded-xl before:bg-white/10">
          <ButtonGroup variant="ghost" color="primary">
            <Button>
              <PiGoogleLogo />
            </Button>
            <Button>
              <PiTwitterLogo />
            </Button>
            <Button>
              <PiFacebookLogo />
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};
