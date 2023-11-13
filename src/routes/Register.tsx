import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  CardBody,
  Input,
  ButtonGroup,
  Divider,
} from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { notify } from "../utils/notify";
import { authRegister } from "../api/auth";
import {
  PiEye,
  PiEyeClosed,
  PiFacebookLogo,
  PiGoogleLogo,
  PiTwitterLogo,
} from "react-icons/pi";

export const Register = () => {
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
      await authRegister(data);
      notify({
        content: `Welcome ${data.username}, now you can login!`,
        type: "success",
      });
      navigate("/login");
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
          className="h-full w-full object-cover"
          alt="Card background"
          src="https://images.unsplash.com/photo-1578301978162-7aae4d755744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWMlMjBhcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        />
      </div>
      <Card
        isBlurred
        isFooterBlurred
        className="m-1 border border-divider p-5 lg:w-1/2"
      >
        <CardHeader>
          <h3 className="text-3xl font-bold">
            <span className="font-thin text-content4">#</span> Register
          </h3>
        </CardHeader>
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
        <Divider />
        <CardBody>
          <form
            className="flex h-full flex-col  justify-between gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <Input
                {...register("firstname", { required: true, minLength: 5 })}
                type="text"
                label="firstname"
                variant="bordered"
                color={errors.firstname ? "danger" : "primary"}
                errorMessage={errors.firstname && "Please enter a valid name"}
              />
              <Input
                {...register("lastname", { required: true, minLength: 5 })}
                type="text"
                label="Lastname"
                variant="bordered"
                color={errors.lastname ? "danger" : "primary"}
                errorMessage={
                  errors.lastname && "Please enter a valid lastname"
                }
              />
              <Input
                {...register("email", { required: true })}
                type="email"
                label="Email"
                variant="bordered"
                color={errors.email ? "danger" : "primary"}
                errorMessage={errors.email && "Please enter a valid email"}
              />
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
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
            </div>
            <Button color="primary" type="submit">
              Register
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
