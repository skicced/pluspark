export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* 🔥 BRAND */}
        <div>
          <h3 className="text-white text-xl font-semibold">ParkPlus</h3>
          <p className="mt-4 text-gray-400">
            Intelligens parkolási rendszerek tervezése, kivitelezése és
            üzemeltetése több mint 25 év tapasztalattal.
          </p>
        </div>

        {/* 🔥 NAV */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigáció</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Főoldal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Rólunk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Szolgáltatások
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Referenciák
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Kapcsolat
              </a>
            </li>
          </ul>
        </div>

        {/* 🔥 SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Szolgáltatások</h4>
          <ul className="space-y-2">
            <li>Parkolórendszer tervezés</li>
            <li>Rendszámfelismerés</li>
            <li>Beléptető rendszerek</li>
            <li>Fizetési megoldások</li>
            <li>Üzemeltetés és szerviz</li>
          </ul>
        </div>

        {/* 🔥 CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Kapcsolat</h4>

          <div className="space-y-3 text-gray-400">
            <div>📞 +36 70 396 5215</div>
            <div>✉️ info@pluspark.hu</div>
            <div>📍 Magyarország</div>
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ParkPlus. Minden jog fenntartva.
      </div>
    </footer>
  );
}
