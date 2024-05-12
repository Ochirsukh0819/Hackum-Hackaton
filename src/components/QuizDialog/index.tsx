"use client";
import { Button } from "@/components/ui/button";
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
import Quiz from "../Quiz";

export function QuizDialog() {
  return (
    <section className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">QUIZ өгөх</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px] ">
          <DialogHeader className="p-2">
            <DialogTitle>QUIZ</DialogTitle>
          </DialogHeader>

          <Quiz />
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
