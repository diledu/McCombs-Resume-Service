import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Settings() {
  return (
    <div className="p-4">
      <Typography variant="h2" color="blue-gray" className="mb-4">
        Settings
      </Typography>
      <div className="grid grid-cols-1 gap-6">
        {/* Add your settings fields/components here */}
        <Typography variant="paragraph">
          Settings content goes here.
        </Typography>
      </div>
    </div>
  );
}
