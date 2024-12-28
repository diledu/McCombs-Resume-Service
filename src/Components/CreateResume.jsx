import React from "react";
import { Typography, Button } from "@material-tailwind/react";

export default function CreateResume({ onCreate, animateOut }) {
  return (
    <div
      className={`flex justify-end items-start p-4 transition-transform duration-500 ${
        animateOut ? "transform -translate-x-full" : ""
      }`}
      style={{ paddingTop: "20px", paddingRight: "10px", zIndex: 1 }}
    >
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        style={{ marginTop: "20px" }}
      >
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="relative p-6 border border-gray-300 rounded-lg shadow-md bg-white w-36 sm:w-40 md:w-44 h-48 sm:h-52 md:h-56 transition-transform transform hover:scale-110 animate-pulse hover:animate-none"
          >
            <Typography
              as="div"
              variant="h1"
              className="mb-4 h-2 w-28 sm:w-32 md:w-36 rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            {[...Array(3)].map((_, idx) => (
              <Typography
                key={idx}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-24 sm:w-28 md:w-32 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            ))}
            {[...Array(2)].map((_, idx) => (
              <Typography
                key={idx}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-20 sm:w-24 md:w-28 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            ))}
            {[...Array(1)].map((_, idx) => (
              <Typography
                key={idx}
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-16 sm:w-20 md:w-24 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            ))}

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
              <Button
                color="lightBlue"
                size="sm"
                className="mb-2"
                onClick={(e) => onCreate(e.currentTarget.getBoundingClientRect())}
              >
                Create
              </Button>
              <Button color="yellow" size="sm" className="mb-2">
                Duplicate
              </Button>
              <Button color="red" size="sm">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
