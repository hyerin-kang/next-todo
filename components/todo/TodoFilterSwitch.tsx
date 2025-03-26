"use client";
import React, { useId } from "react";
import { Switch } from "../ui/switch";
import { useTodoFilterStore } from "@/store/useTodoFilterStore";
import { Label } from "../ui/label";

const TodoFilterSwitch = () => {
  const switchId = useId();
  const { filter, setFilter } = useTodoFilterStore();

  const onCheckedChange = (checked: boolean) => {
    setFilter(checked ? "completed" : "all");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={switchId}
        checked={filter === "completed"}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={switchId}>Completed</Label>
    </div>
  );
};

export default TodoFilterSwitch;
