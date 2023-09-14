export const Banner = () => {
  return (
    <div className="relative mb-4 mt-2 hidden h-32 w-full content-center items-center justify-center rounded-md bg-base-300 md:flex">
      <img
        src="../src/assets/logo.png"
        alt="library-logo.png"
        className="absolute"
      />
    </div>
  );
};
