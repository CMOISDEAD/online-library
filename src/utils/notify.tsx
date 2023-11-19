import { toast } from "react-hot-toast";

interface Props {
  content: string;
  type?: "error" | "success";
}

const style = {
  color: "#fff",
  background: "#060606",
  border: "1px solid",
  borderColor: "#262626",
  borderRadius: "10px",
};

export const promiseNotify = (promise: Promise<any>, messages: any) => {
  return toast.promise(promise, messages, { style });
};

export const notify = ({ content, type }: Props) => {
  if (type === "error") {
    return toast.error(content, {
      style,
    });
  } else if (type === "success") {
    return toast.success(content, {
      style,
    });
  }
  return toast(content, {
    style,
  });
};
