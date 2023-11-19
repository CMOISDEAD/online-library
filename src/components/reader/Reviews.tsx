import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
  Tooltip,
  User,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { createReview, getReviews } from "../../api/Reviews";
import { NavLink, useParams } from "react-router-dom";
import useLibraryStore from "../../store/store";
import { RxThickArrowDown, RxThickArrowUp } from "react-icons/rx";
import { notify } from "../../utils/notify";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const user = useLibraryStore((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (!id) return;
      const data = await getReviews(id);
      setReviews(data);
    })();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const body = e.target[1].value;
    const data = await createReview({
      title,
      body,
      rating: 5,
      bookId: id,
      userId: user.id,
    });
    setReviews(data);
    notify({
      content: "Your review has been created",
      type: "success",
    });
  };

  return (
    <div className="mt-5 flex flex-col gap-4 px-5 py-2">
      <h2 className="text-3xl font-bold">Comments</h2>
      <Card>
        <CardHeader>
          <h3 className="text-xl">Leave a review</h3>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Header of Review" />
            <Textarea placeholder="Write your review here" />
            <Button fullWidth type="submit" color="primary">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
      <div className="grid-flow-rows grid grid-cols-3 gap-4">
        {reviews.length ? (
          reviews.map((review: any, i: number) => (
            <Card key={i} shadow="lg">
              <CardBody className="flex flex-row gap-4">
                <Tooltip content={review.user.username}>
                  <NavLink to={`/profile/${review.user.id}`}>
                    <User
                      name=""
                      avatarProps={{
                        src: review.user.photo,
                        size: "lg",
                        isBordered: true,
                        color: "success",
                      }}
                      className="cursor-pointer"
                    />
                  </NavLink>
                </Tooltip>
                <div className="flex flex-col content-start items-start justify-start">
                  <h3 className="text-lg font-bold">{review.title}</h3>
                  <p>{review.body}</p>
                </div>
              </CardBody>
              <CardFooter className="flex gap-4 px-5 pb-4">
                <Button size="sm" color="danger">
                  50 <RxThickArrowDown />
                </Button>
                <Button size="sm" color="success">
                  10 <RxThickArrowUp />
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No reviews</p>
        )}
      </div>
    </div>
  );
};
