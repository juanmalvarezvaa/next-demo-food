"use client";

import { useRef } from "react";
import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  
  function handlePickImageClick() {
    imageInputRef.current.click();
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickImageClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
