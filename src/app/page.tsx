import Link from "next/link";

export default function Home() {
  const text = encodeURIComponent(`Hello!`);
  const phone = encodeURIComponent(`+385 91 161 4291`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="text-4xl">Warp Code ltd</div>
      <a href="whatsapp://send?text=Bepis" className="text-4xl">
        Test 1
      </a>
      <a href={`https://wa.me/${phone}?text=${text}`} className="text-4xl">
        Test 2
      </a>
    </main>
  );
}
