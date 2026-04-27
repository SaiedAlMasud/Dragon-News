import LeftSideBar from "@/components/homepage/LeftSideBar";
import Image from "next/image";
async function getCatagories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}
export default async function Home() {
  const catagories = await getCatagories();
  return (
    <div className="grid grid-cols-4 gap-10">
      <LeftSideBar catagories={catagories} activeId={"01"}/>
      <div className="font-Bold text-3xl bg-green-300 col-span-2 text-center">
        All News
      </div>
      <div className="font-Bold text-3xl bg-green-300">
        All Social Links
      </div>
    </div>
  );
}
