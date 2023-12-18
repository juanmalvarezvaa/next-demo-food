import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Starting...</h1>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Meals Share</Link>
      </p>
      <p>
        <Link href="/meals/123">Meals 123</Link>
      </p>
    </main>
  );
}
