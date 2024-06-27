import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meal page</h1>

      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/meal-1">Meal 1</Link>
      </p>
    </>
  );
}
