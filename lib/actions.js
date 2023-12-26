"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// This is a server-only function. A 'Server Action'. Should use ASYNC function

// This function is called from action on a form. Replace the event.preventDefault, etc of a common Front component.
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);

  redirect("/meals");
}
