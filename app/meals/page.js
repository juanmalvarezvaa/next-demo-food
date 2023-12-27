import { Suspense } from "react";
import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { getAllMeals } from "../../lib/meals";

import styles from "./page.module.css";

export const metadata = {
  title: "All the meals",
  description: "A list of all the meals available from our community",
};

// Since it's and async function, nextjs will wait for the promise to resolve and use Suspense to render the loading component
async function Meals() {
  const meals = await getAllMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
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
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
