import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

export default function MealItem({ title, mealId, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          {/*// dynamic images, uploaded by users, stored in DB. */}
          {/*We need to know images original size.. with width+height, or fill*/}
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${mealId}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
