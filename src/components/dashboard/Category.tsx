import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { notify } from "../../utils/notify";
import { createCategory } from "../../api/category";

export const Category = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBook = async (data: any) => {
    try {
      const response = await createCategory(data);
      notify({
        content: `${response.firstName} added successfully`,
        type: "success",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="border border-divider">
      <CardHeader>
        <h1 className="text-3xl font-bold capitalize">Category</h1>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={handleSubmit(handleBook)}
          className="flex flex-col gap-4"
        >
          <Input
            {...register("name", { required: true })}
            type="text"
            label="name"
            variant="bordered"
            color={errors.name ? "danger" : "default"}
            errorMessage={errors.name && "Please enter a valid name"}
          />
          <Button color="primary" type="submit">
            Add
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
