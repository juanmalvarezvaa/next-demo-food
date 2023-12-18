"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./image-slideshow.module.css";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A deliciious Burger" },
  { image: curryImg, alt: "A deliciious Curry" },
  { image: dumplingsImg, alt: "A deliciious Dumplings" },
  { image: macncheeseImg, alt: "A deliciious Mac and Cheese" },
  { image: pizzaImg, alt: "A deliciious Pizza" },
  { image: schnitzelImg, alt: "A deliciious Schnitzel" },
  { image: tomatoSaladImg, alt: "A deliciious Tomato Salad" },
];

export default function ImageSlideshow() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((currentImgIndex) =>
        currentImgIndex === images.length - 1 ? 0 : currentImgIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={currentImgIndex === index ? styles.active : ""}
        />
      ))}
    </div>
  );
}
