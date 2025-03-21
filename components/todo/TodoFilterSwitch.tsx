"use client";
import { Label } from "@radix-ui/react-label";
import React, { useId } from "react";
import { Switch } from "../ui/switch";

const TodoFilterSwitch = () => {
  const switchId = useId();
  return (
    <div className="flex items-center space-x-2">
      <Switch id={switchId} />
      <Label htmlFor={switchId}>Completed</Label>
    </div>
  );
};

export default TodoFilterSwitch;
