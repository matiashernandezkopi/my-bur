import { Link } from "react-router-dom";
import { menus } from "../data/menus";

function MenuList() {
    const menuIngredientsToCode = (codes: number[]) => {
        return codes.join("-");
    };
    return (
        <section className="space-y-6">
            <h2 className="text-3xl font-extrabold">
                Signature Burgers
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {menus.map((menu) => (
                    <article
                        key={menu.id}
                        className="group rounded-2xl border bg-white shadow-sm transition hover:shadow-lg"
                    >
                        <div className="h-44 overflow-hidden rounded-t-2xl">
                            <img
                                src={menu.image}
                                alt={menu.name}
                                className="h-full w-full object-cover transition group-hover:scale-105"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl font-bold">{menu.name}</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                {menu.description}
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-lg font-bold text-yellow-500">
                                    ${menu.price.toFixed(2)}
                                </span>

                                <Link
                                    to={`/burMaker/${menuIngredientsToCode(
                                        menu.ingredients
                                    )}`}
                                    className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
                                >
                                    Customize
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default MenuList;
