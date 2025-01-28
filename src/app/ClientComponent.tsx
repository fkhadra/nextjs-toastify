"use client";

import { toast } from "react-toastify";

export function ClientComponent() {
  return <button onClick={() => toast("HELLO")}>Notify</button>;
}
