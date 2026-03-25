"use client";

import { useState } from "react";

export default function PukeCounter() {
  const [pukedCount, setPukedCount] = useState(0);

  return (
    <div className="bg-blue-200 p-5 rounded border border-blue-300 mt-5 flex items-center justify-between">
      <p className="font-medium">
        If you like me, you can{" "}
        <button
          type="button"
          className="px-2 py-0.5 rounded bg-blue-500 text-white "
          onClick={() => setPukedCount(pukedCount + 1)}
        >
          puke me
        </button>{" "}
        here!
      </p>
      <span className="font-semibold">Puked count: {pukedCount}</span>
    </div>
  );
}
