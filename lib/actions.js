"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

// This is a server-only function. A 'Server Action'. Should use ASYNC function
// This function is called from action on a form. Replace the event.preventDefault, etc of a common Front component.
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Validations
  if (
    isInvalidText(meal.title || isInvalidText(meal.summary)) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input",
    };
  }

  await saveMeal(meal);
  // This will recache the page /meals. Next generates statics pages when running "npm run build" for prod, which gives a better performance..
  // but will brake pages that need to be updated in real time, like this one.
  // Add 2nd parameter -> , "layout") to revalidate the nested pages too.
  revalidatePath("/meals");
  redirect("/meals");
}
