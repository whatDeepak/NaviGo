"use client";
import React from "react";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { HoverBorderGradient } from "./hover-border-gradient";
import { PlaceholderInput } from "./PlaceholderInput";
import { NewChat } from "./NewChat";
import { Button } from "./button";
import MagicButton from "../MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BoxComponent() {
  const placeholders = [
    "Which airlines have the best accessibility options?",
    "How can I find gender-neutral restrooms near me?",
    "Are there any LGBTQ+ friendly hotels in New York?",
    "What are the best cities for gender non-conforming travelers?",
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
          <span>Find gender-neutral restrooms near me</span>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-lg w-[400px]"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-[400px]"
        >
          <span>Find me the best flight for New Delhi</span>
        </HoverBorderGradient>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center mt-20 w-[600px]">
          <PlaceholderInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
