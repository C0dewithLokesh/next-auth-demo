"use client";
import { useSession } from "next-auth/react";
import AppBar from "./components/AppBar";

export default function Home() {
  const session = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppBar />
      client: {JSON.stringify(session)}
    </main>
  );
}
