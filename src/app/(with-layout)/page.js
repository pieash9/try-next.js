import image1 from "@/assets/tree.jpg";

import Image from "next/image";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      Home
      <Image src={image1} alt="" placeholder="blur" width={600} height={300} />
      <Image
        src="/flower.jpg"
        blurDataURL="data:image/webp;base64,UklGRvACAABXRUJQVlA4WAoAAAAgAAAAvgAAdgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggAgEAANALAJ0BKr8AdwA+7XawVSmnJCMgavEwHYlnbuABdfZW8Y/QCFa75lqXY7Le0ddnE3bMC6MImA8XCBYKMQMyHw2kVdSffciLhB+Rd9glMWjs+BJoNXtX6ouINQnZI9Ow26xTrnJG6QAA/u/GP3Q7YHeVnwJac3pYqKbR+87AQjokvTrXK7+vdkPss2skV7RHnLNCsHKqGJjQUX/rBuXSWrTuoeFO7v/iVwIpb2LNwi25iDIyY9YJu6bvBq6WUsJdGKKYjUGnKT5tZlz2VrQ89OpNzuWM6UqXKLNsQVyAJB4qOEkdwLFgAWf8eCkaeBB9uZG5MuA+tACSL2C/4kKBEAAAAA=="
        alt=""
        placeholder="blur"
        width={600}
        height={300}
      />
      <Image
        src="https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg?w=2000"
        alt=""
        width={600}
        height={400}
      />
    </div>
  );
};

export default DashboardPage;
