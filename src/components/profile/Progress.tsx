import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
} from "@nextui-org/react";

export const Progress = () => {
  return (
    <Card className="h-[240px] w-[240px] border-none bg-gradient-to-br from-primary to-success">
      <CardBody className="items-center justify-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="items-center justify-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          2800 Data points
        </Chip>
      </CardFooter>
    </Card>
  );
};
