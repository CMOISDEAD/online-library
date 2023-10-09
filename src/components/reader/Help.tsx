import { PiQuestion } from "react-icons/pi";
import {
  Tooltip,
  Button,
  Listbox,
  ListboxItem,
  Kbd,
  Card,
} from "@nextui-org/react";

export const Help = () => {
  return (
    <Card isBlurred radius="md" className="border border-divider">
      <Tooltip
        className="max-w-[260px] bg-background"
        radius="none"
        content={
          <Listbox
            aria-label="Actions"
            onAction={(key) => alert(key)}
            className="w-full rounded-md border border-divider py-5"
            variant="flat"
          >
            <ListboxItem key="zoom-in">
              <p>
                <Kbd keys={["command"]}>+</Kbd> Zoom in
              </p>
            </ListboxItem>
            <ListboxItem key="zoom-out">
              <p>
                <Kbd keys={["command"]}>-</Kbd> Zoom out
              </p>
            </ListboxItem>
            <ListboxItem key="next-page">
              <p>
                <Kbd keys={["command", "right"]} /> Next page
              </p>
            </ListboxItem>
            <ListboxItem key="prev-page">
              <p>
                <Kbd keys={["command", "left"]} /> Previous page
              </p>
            </ListboxItem>
          </Listbox>
        }
      >
        <Button variant="light">
          <PiQuestion />
        </Button>
      </Tooltip>
    </Card>
  );
};
