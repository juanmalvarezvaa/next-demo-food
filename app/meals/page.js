import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { getAllMeals } from "../../lib/meals";

import styles from "./page.module.css";

export default async function MealsPage() {
  const meals = await getAllMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals created by {}
          <span className={styles.highlight}>YOU</span>!
        </h1>
        <p>
          Choose your favorite recipe and cook it yoursealf! They are easy and
          fun to do!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Add your favorite recipies!</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
