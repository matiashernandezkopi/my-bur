import MenuList from "../components/MenuList";

function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-black px-8 py-16 text-center text-white">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Build Your Perfect Burger
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Choose one of our signature burgers or create your own from scratch.
        </p>
      </section>

      <MenuList />
    </div>
  );
}

export default Home;
