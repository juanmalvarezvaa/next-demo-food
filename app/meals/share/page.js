"use client";

import { useFormState } from "react-dom";
import styles from "./page.module.css";

import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function MealsSharePage() {
  // Hook by react to control the state of a Form. fn -> The one called by the Form. initialState -> The initial state of the Form (to handle errors).
  // https://react.dev/reference/react-dom/hooks/useFormState
  // const [state, formAction] = useFormState(fn, initialState);
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite recipe!</span>
        </h1>
        <p>Fill the form below to share your favorite recipe with the world!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Your Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
