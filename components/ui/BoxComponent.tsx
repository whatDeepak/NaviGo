"use client";
import React from "react";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Input } from "./Input";

export function BoxComponent() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      <div className="flex flex-col justify-center text-center space-y-8 mt-20 px-2">
        <HoverBorderGradient
          containerClassName="rounded-lg w-[400px]"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-[400px]"
        >
          <span>Find me a Place to stay for queer people</span>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-lg w-[400px]"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-[400px]"
        >
          <span>Find me a Place to stay for queer people</span>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-lg w-[400px]"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-[400px]"
        >
          <span>Find me a Place to stay for queer people</span>
        </HoverBorderGradient>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center px-2 mt-20 w-[600px]">
          <Input
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
