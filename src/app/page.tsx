import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://horeca-seo.vercel.app"),
  keywords: ["supply partners", "horeca", "restaurants", "bars", "hotels"],
  title: "Supply Partners",
  description: "Ваш деловой партнер",
};

export default function Home() {
  redirect("/ru");
}
