"use server";
import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";
export const createATask = async (formData) => {
  "use server";
  // const name = formData.get("name");
  // const title = formData.get("title");
  // const description = formData.get("description");
  // const priority = formData.get("priority");
  // const status = formData.get("status");
  // const assignedTo = formData.get("assignedTo");

  // const newTask = { title, description, priority, status, assignedTo, name };

  const newTask = Object.fromEntries(formData.entries());

  console.log("task form", newTask);
  const res = await postTask(newTask);
  if (res.success) {
    revalidatePath("/tasks");
  }
};

export const newTaskAction = async (formData) => {
  const newTaskPage = Object.fromEntries(formData.entries());

  console.log("task form", newTaskPage);
  const res = await postTask(newTaskPage);
  if (res.success) {
    revalidatePath("/tasks");
    redirect("/tasks");
  }
  return res;
};
