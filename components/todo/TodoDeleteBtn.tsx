"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useDeleteTodoMutation } from "@/query/useTodoMutation";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import { Trash2 } from "lucide-react";

interface TodoDeleteBtnProps {
  id: string;
}
const TodoDeleteBtn = ({ id }: TodoDeleteBtnProps) => {
  const { mutate: deleteTodo } = useDeleteTodoMutation();

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="icon">
            <Trash2 />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription className="hidden"></AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={() => {
                deleteTodo(id);
              }}
            >
              삭제
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TodoDeleteBtn;
