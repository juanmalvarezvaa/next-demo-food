import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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

export async function saveMeal(meal) {
  // For this we installed two packages: slugify (to create the slug) and xss (to sanitize the html input of Instructions)
  meal.slug = slugify(meal.title, { lower: true }); // This will create the slug
  meal.instructions = xss(meal.instructions); // This will sanitize the html input of Instructions

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`; // WARNING This could override other images with the same name. Add random value?

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error)
      throw new Error(
        "Something went wrong while saving the image: " + error.message
      );

    // stream.end();
  });

  meal.image = `/images/${fileName}`; // Without 'public'

  db.prepare(
    "INSERT INTO meals (title, slug, summary, instructions, image, creator, creator_email) VALUES (@title, @slug, @summary, @instructions, @image, @creator, @creator_email)"
  ).run(meal);
}
