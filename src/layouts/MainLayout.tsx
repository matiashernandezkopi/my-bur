import { Link, Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black showing shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center text-3xl font-extrabold tracking-tight"
          >
            <span className="text-yellow-400">Bur</span>
            <span className="text-white">Maker</span>
          </Link>

          {/* NAV LINKS */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/ingredients"
              className={({ isActive }) =>
                `relative font-medium uppercase tracking-wide transition-all
                ${isActive
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
                }`
              }
            >
              Ingredients
              <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-yellow-400 transition-transform origin-left group-hover:scale-x-100" />
            </NavLink>

            <NavLink
              to="/burMaker/1-1"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 font-semibold transition-all
                ${isActive
                  ? "bg-yellow-400 text-black"
                  : "bg-yellow-400 text-black hover:bg-yellow-500"
                }`
              }
            >
              Build Your Burger
            </NavLink>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
