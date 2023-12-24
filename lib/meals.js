import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // throw new Error("Something went wrong");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // return db.prepare("SELECT * FROM meals WHERE slug = " + slug); // This is vulnerable to SQL injection
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
