import { useState } from "react";
// --- React Router Integration ---
// Import hooks for SPA navigation (no page reloads)
import { Link, useNavigate } from "react-router-dom";

// --- Icon for the search bar ---
const SearchIcon = () => (
  <svg
    className="w-5 h-5 text-slate-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const PageNotFound = () => {
  const [q, setQ] = useState("");
  // --- React Router Integration ---
  // Get the navigation function from React Router
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const target = q.trim() ? `/search?q=${encodeURIComponent(q.trim())}` : "/";
    
    // --- React Router Integration ---
    // Use navigate() for an instant, client-side route change
    navigate(target);
  }

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-4"
      aria-labelledby="pnf-title"
    >
      <div className="max-w-4xl w-full grid md:grid-cols-2 items-center gap-8 md:gap-16">
        
        {/* --- Visual Block (Modern "404" Graphic) --- */}
        <div className="flex items-center justify-center md:justify-end order-1 md:order-2">
          <span className="text-[12rem] lg:text-[16rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-60 leading-none">
            404
          </span>
        </div>

        {/* --- Content Block --- */}
        <div className="w-full max-w-md mx-auto md:mx-0 order-2 md:order-1">
          <h1
            id="pnf-title"
            className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3"
          >
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have
            been moved, deleted, or you might have mistyped the URL.
          </p>

          {/* --- Search Form (with Icon) --- */}
          <form
            onSubmit={handleSubmit}
            role="search"
            aria-label="Search the site"
            className="mb-6"
          >
            <label htmlFor="pnf-q" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                id="pnf-q"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Try searching the site..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>
          </form>

          {/* --- Action Links (using <Link>) --- */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {/* --- React Router Integration (Primary Action) --- */}
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold text-center shadow-lg hover:shadow-indigo-300 hover:scale-[1.02] transition-all duration-200"
            >
              Take me home
            </Link>
            {/* External links (mailto, http) still use <a> tags */}
            <a
              href="mailto:support@example.com?subject=Broken%20link%20report"
              className="text-slate-600 font-medium hover:text-indigo-600 transition-colors"
            >
              Report a problem
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default PageNotFound;