import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col  text-gray-800">
      {/* 🌟 HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-amber-100 rounded-b-3xl shadow-md">
        <h1 className="text-5xl font-extrabold mb-4 text-amber-600">
          Welcome to ShopVerse 🛒
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          A modern E-commerce platform where admins can create, update, and manage products with ease.
          Customers can explore amazing deals and shop effortlessly!
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all"
        >
          Explore Products
        </button>
      </section>

      {/* 🧠 ABOUT SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-600 mb-6">About ShopVerse</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          ShopVerse is a fully functional E-commerce web application designed for both customers and admins. 
          The admin dashboard enables managing product listings—adding, updating, and deleting items—while 
          ensuring users have a smooth and dynamic shopping experience. Future updates will bring features 
          like order tracking, analytics, and user reviews.
        </p>
      </section>

      {/* ⚙️ FEATURES SECTION */}
      <section className="py-16 bg-amber-50 rounded-t-3xl">
        <h2 className="text-3xl font-bold text-center text-amber-600 mb-10">Key Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">🛠 Admin Panel</h3>
            <p className="text-gray-700">
              Create, update, and delete products instantly using the built-in admin dashboard.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">📦 Product Management</h3>
            <p className="text-gray-700">
              Manage a wide range of products efficiently — add categories, images, and pricing.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">🚀 Fast & Secure</h3>
            <p className="text-gray-700">
              Optimized for speed and security with modern React architecture and Redux integration.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">💬 Real-time Updates</h3>
            <p className="text-gray-700">
              Seamless live updates and instant state management using Redux Toolkit.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">📊 Future Analytics</h3>
            <p className="text-gray-700">
              Admins can track sales, manage inventory, and monitor performance metrics (coming soon).
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">🛍 User Shopping Experience</h3>
            <p className="text-gray-700">
              Customers can browse, add to cart, and enjoy a smooth checkout process.
            </p>
          </div>
        </div>
      </section>

      {/* 📞 FOOTER SECTION */}
      <footer className="bg-amber-600 text-white mt-auto py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-3">ShopVerse</h3>
            <p className="text-sm">
              Your one-stop platform to manage and explore the best E-commerce experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">📧 support@shopverse.com</p>
            <p className="text-sm">🏢 New Delhi, India</p>
          </div>
        </div>

        <div className="text-center mt-8 text-sm border-t border-amber-400 pt-4">
          © {new Date().getFullYear()} ShopVerse — All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;