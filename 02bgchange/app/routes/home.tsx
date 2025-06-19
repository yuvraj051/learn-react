import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [color, setcolor] = useState("bg-black-700");
  return (
    <div className={"h-[100vh] w-full " + color}>
      <h1 className="bg-blend-exclusion text-orange-700">welcome</h1>

      <div
        className="w-full p-3 flex justify-evenly fixed bottom-11
      "
      >
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-red-700"
          onClick={() => setcolor("bg-red-700")}
        >
          red
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-blue-700"
          onClick={() => setcolor("bg-blue-700")}
        >
          blue
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-green-700"
          onClick={() => setcolor("bg-green-700")}
        >
          green
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-pink-700"
          onClick={() => setcolor("bg-pink-700")}
        >
          pink
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-yellow-700"
          onClick={() => setcolor("bg-yellow-700")}
        >
          yellow
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-gray-700"
          onClick={() => setcolor("bg-gray-700")}
        >
          gray
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-black"
          onClick={() => setcolor("bg-black")}
        >
          black
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-fuchsia-600"
          onClick={() => setcolor("bg-fuchsia-600")}
        >
          fuchsia
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-stone-600"
          onClick={() => setcolor("bg-stone-600")}
        >
          stone
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-orange-700"
          onClick={() => setcolor("bg-orange-700")}
        >
          orange
        </button>
        <button
          type="button"
          className="px-3 py-0.5 rounded border-2 bg-cyan-700"
          onClick={() => setcolor("bg-cyan-700")}
        >
          cyan
        </button>
      </div>
    </div>
  );
}
