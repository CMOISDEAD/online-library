import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { notify } from "../../utils/notify";
import { saveAuthor } from "../../api/author";

export const Authors = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBook = async (data: any) => {
    try {
      const response = await saveAuthor(data);
      notify({
        content: `${response.firstName} added successfully`,
        type: "success",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card isBlurred className="border border-divider">
      <CardHeader>
        <h1 className="text-3xl font-bold capitalize">Authors</h1>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={handleSubmit(handleBook)}
          className="flex flex-col gap-4"
        >
          <Input
            {...register("firstName", { required: true })}
            type="text"
            label="First Name"
            variant="bordered"
            color={errors.firstName ? "danger" : "default"}
            errorMessage={errors.firstName && "Please enter a valid name"}
          />
          <Input
            {...register("lastName", { required: true })}
            type="text"
            label="First Name"
            variant="bordered"
            color={errors.lastName ? "danger" : "default"}
            errorMessage={errors.lastName && "Please enter a valid name"}
          />
          <Input
            {...register("photo")}
            type="text"
            label="photo"
            variant="bordered"
            color={errors.photo ? "danger" : "default"}
            errorMessage={errors.photo && "Please enter a valid photo url"}
          />
          <Button color="primary" type="submit">
            Add
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
