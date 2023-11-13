import { Tooltip, Chip } from "@nextui-org/react";

export const Achievements = () => {
  const data = [
    {
      title: "Avid Reader",
      description:
        "Read more than 50 books or spend at least 100 hours reading in the application.",
    },
    {
      title: "Bookworm",
      description:
        "Read more than 100 books or spend at least 200 hours reading in the application.",
    },
    {
      title: "Night Owl",
      description:
        "Accumulate at least 20 hours of reading between 10:00 p.m. and 6:00 a.m.",
    },
    {
      title: "Autodidact",
      description: "Complete at least 10 non-fiction or educational books.",
    },
    {
      title: "Literary Traveler",
      description: "Read books set in at least 10 different countries.",
    },
  ];

  return (
    <div className="achievements">
      <h2 className="text-xl font-bold">Achievements</h2>
      <div className="flex gap-4">
        <div className="grid grid-flow-row grid-cols-2 gap-2">
          {data.map(({ title, description }, i: number) => (
            <Tooltip content={description} placement="bottom" key={i}>
              <Chip color="primary" variant="dot" className="cursor-pointer">
                {title}
              </Chip>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};
