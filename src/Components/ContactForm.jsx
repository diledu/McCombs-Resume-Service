import React, { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally, reset form data after submission
    setFormData({
      email: "",
      phone: "",
      name: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        label="Email"
        placeholder="Enter your email"
        outline
        size="regular"
        className="mb-4"
      />
      <Input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        label="Phone"
        placeholder="Enter your phone number"
        outline
        size="regular"
        className="mb-4"
      />
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        label="Name"
        placeholder="Enter your name"
        outline
        size="regular"
        className="mb-4"
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        label="Message"
        outline
        size="regular"
        className="mb-4"
      />
      <Button type="submit" ripple="light" size="regular">
        Send Message
      </Button>
    </form>
  );
}
