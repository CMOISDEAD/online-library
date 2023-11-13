import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  Button,
  Tabs,
  Tab,
  Card,
  CardBody,
  Input,
} from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import useLibraryStore from "../../store/store";
import { notify } from "../../utils/notify";
import { saveBilling } from "../../api/billing";
import { useNavigate } from "react-router";
import { refresh } from "../../utils/refresh";
import { clearShopping } from "../../api/user";

interface Inputs {
  country: string;
  city: string;
  address: string;
}

export const BuyModal = ({ isOpen, onOpenChange }: any) => {
  const user = useLibraryStore((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const country = watch("country");
  const city = watch("city");
  const adress = watch("address");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const request = {
      ...data,
      price: user.car.reduce((acc: any, curr: any) => acc + curr.price, 0),
      books: user.car,
    };
    await saveBilling(user.id, request);
    notify({
      content: "Book bought",
      type: "success",
    });
    await clearShopping(user.id);
    await refresh();
    navigate("/profile");
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Buy Car</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Tabs aria-label="Options">
                  <Tab key="adress" title="adress">
                    <Card>
                      <CardBody className="flex gap-4">
                        <Input
                          label="country"
                          placeholder="Country"
                          {...register("country", { required: true })}
                        />
                        <Input
                          label="city"
                          placeholder="City"
                          {...register("city", { required: true })}
                        />
                        <Input
                          label="adress"
                          placeholder="Address"
                          {...register("address", { required: true })}
                        />
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="payment" title="payment">
                    <Card>
                      <CardBody className="flex gap-4">
                        <Input label="card number" placeholder="1234567890" />
                        <Input label="expiration date" placeholder="MM/YY" />
                        <Input
                          label="cvv"
                          placeholder="123"
                          type="password"
                          minLength={3}
                          maxLength={3}
                        />
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="resume" title="resume">
                    <Card>
                      <CardBody>
                        <div className="my-3">
                          <b>Adress:</b> {adress} <br />
                          <b>Country:</b> {country} <br />
                          <b>City:</b> {city}
                        </div>

                        <div className="my-3">
                          <b>
                            {user.firstname} {user.lastname}
                          </b>
                          , you are buying <b>{user.car.length}</b> books for a
                          total of $
                          <b>
                            {user.car.reduce(
                              (acc: any, curr: any) => acc + curr.price,
                              0,
                            )}
                            .
                          </b>
                        </div>
                        <Button
                          type="submit"
                          variant="shadow"
                          color="success"
                          onPress={onClose}
                        >
                          Buy all
                        </Button>
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
