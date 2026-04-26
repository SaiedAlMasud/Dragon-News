import Image from "next/image";
async function getCatagories(){
  const res = await fetch ("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}
export default async function Home() {
  const catagories = await getCatagories();
  return (
    <div className="grid grid-cols-4 gap-10">
      <div className="bg-gray-100 p-5">
        <h1 className="font-Bold text-3xl">All Catagories</h1>
        <ul className="font-semibold text-2xl text-center my-5 flex flex-col gap-5 text-gray-500">
          {
          catagories.news_category.map(category => {
            return <li key={category.category_id} className="rounded-md bg-gray-300"> {category.category_name} </li>
          })
        }
        </ul>
      </div>
      <div className="font-Bold text-3xl bg-green-300 col-span-2 text-center">
        All News
      </div>
      <div className="font-Bold text-3xl bg-green-300">
        All Social Links
      </div>
    </div>
  );
}
