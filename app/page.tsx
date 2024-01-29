import { trending_data } from "@/data/trending";

export default function Home() {
  return (
    <main className="bg-[#013894]">
      <section className="max-w-7xl mx-auto p-6 pl-10">
        <h2 className="font-bold text-4xl text-white">Find your Next Stay.</h2>
        <h3 className="text-white py-5 text-lg">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>
      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        {/*searchForm*/}
      </section>
      <section className="mx-auto max-w-7xl p-6 mt-10 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold"> Trending destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>
        <div className="overflow-x-scroll space-x-4 py-5 flex">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                src={item.src}
                alt=""
                className="w-80 h-72 object-cover rounded-lg pb-2"
              />
              <div>
                <p className="font-bold">{item.title}</p>
                <p>{item.location}</p>
                <p className="font-light text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
