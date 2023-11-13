import { useEffect, useState } from "react";
import moment from "moment";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import { getBilling } from "../../api/billing";
import useLibraryStore from "../../store/store";

export const BillingHistory = () => {
  const user = useLibraryStore((state) => state.user);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getBilling(user.id);
      setHistory(data);
    })();
  }, []);

  return (
    <Card className="w-1/4">
      <CardHeader className="text-xl font-bold">Billing History</CardHeader>
      <CardBody>
        {history.length ? (
          history.map((item: any, i: number) => (
            <div key={i}>
              <div>
                <div className="flex content-center items-center gap-2">
                  <Chip
                    color="success"
                    className="mr-3"
                    variant="dot"
                    size="sm"
                  >
                    Active
                  </Chip>
                  <p className="font-bold">{item.books.length} Books</p>
                  <p className="text-xs italic text-gray-500">
                    {moment(item.createdAt).fromNow()}
                  </p>
                </div>
                <Button
                  className="mt-3 justify-between"
                  variant="bordered"
                  size="sm"
                  fullWidth
                >
                  Details
                </Button>
              </div>
              <Divider className="my-3" />
            </div>
          ))
        ) : (
          <div className="mt-5">
            <p className="text-lg text-gray-500">
              You have no billing history yet :(
            </p>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
