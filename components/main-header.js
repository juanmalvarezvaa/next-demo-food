import Link from "next/link";
import Image from "next/image";

import styles from "./main-header.module.css";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="Next Demo Food!" priority />
        Next Demo Food App
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Food Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
