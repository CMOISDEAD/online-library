import { Kbd } from "@nextui-org/react";

export const SearchBar = () => {
  return (
    <>
      <p className="text-xs italic text-gray-500">
        Press{" "}
        <span className="not-italic">
          <Kbd keys={["command"]}>k</Kbd>
        </span>{" "}
        to open search bar
      </p>
      {/* <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        startContent={<PiHandEye className="text-xl" />}
        placeholder="Type to search..."
        type="search"
        size="sm"
      /> */}
    </>
  );
};
