export function Footer() {
  return (
    <footer>
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-white text-sm py-3 text-center transition"
      >
        Back to top
      </button>

      {/* Links */}
      <div className="bg-[#232f3e] text-white py-10">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-base mb-3">Get to Know Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">About DreamCart</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press Releases</a></li>
              <li><a href="#" className="hover:underline">DreamCart AI</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3">Make Money with Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Sell on DreamCart</a></li>
              <li><a href="#" className="hover:underline">Affiliate Program</a></li>
              <li><a href="#" className="hover:underline">Advertise Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3">Let Us Help You</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Your Account</a></li>
              <li><a href="#" className="hover:underline">Returns Centre</a></li>
              <li><a href="#" className="hover:underline">Customer Service</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3">DreamCart AI</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">How It Works</a></li>
              <li><a href="#" className="hover:underline">Aspiration Paths</a></li>
              <li><a href="#" className="hover:underline">Trending Dreams</a></li>
              <li><a href="#" className="hover:underline">Powered by Valkey</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#131921] text-white py-4 text-center">
        <span className="text-xl font-bold">
          <span className="text-white">dream</span>
          <span className="text-[#ff9900]">cart</span>
          <span className="text-[10px] text-gray-400 ml-0.5">.ai</span>
        </span>
        <p className="text-xs text-gray-400 mt-2">© 2026 DreamCart AI. Powered by Valkey.</p>
      </div>
    </footer>
  );
}
