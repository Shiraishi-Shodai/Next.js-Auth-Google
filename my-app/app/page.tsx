import Image from "next/image";
import styles from "./page.module.css";
import { getUserSession } from "@/lib/session"; 

export default async function Home() {
  const user = await getUserSession();
  return (
    <main className="">
      {JSON.stringify(user)}
    </main>
  );
}
