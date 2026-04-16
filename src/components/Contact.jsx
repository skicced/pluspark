export default function Contact() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* 🔥 LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold">Vegye fel velünk a kapcsolatot</h2>

          <p className="text-gray-600 mt-4">
            Kérjen díjmentes helyszíni felmérést és egyedi ajánlatot parkolási
            rendszerére.
          </p>

          {/* ✔ LIST */}
          <ul className="mt-8 space-y-4 text-gray-700">
            <li>✔ 25+ év szakmai tapasztalat</li>
            <li>✔ Automatizált rendszámfelismerés</li>
            <li>✔ Teljes körű kivitelezés</li>
            <li>✔ Gyors telepítés és támogatás</li>
          </ul>

          {/* 🔥 CONTACT INFO */}
          <div className="mt-10 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span>📞</span>
              <span>+36 70 396 5215</span>
            </div>

            <div className="flex items-center gap-3">
              <span>✉️</span>
              <span>info@pluspark.hu</span>
            </div>

            <div className="flex items-center gap-3">
              <span>📍</span>
              <span>Országosan elérhetőek vagyunk</span>
            </div>
          </div>

          {/* 🔥 EXTRA CTA */}
          <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-700">
              Kapcsolatfelvétel mindössze <strong>1 perc</strong> – kollégáink
              rövid időn belül visszahívják.
            </p>
          </div>
        </div>

        {/* 🔥 RIGHT SIDE (FORM) */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-600">Név *</label>
              <input
                type="text"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Telefonszám</label>
              <input
                type="text"
                placeholder="+36..."
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email *</label>
              <input
                type="email"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Üzenet</label>
              <textarea
                rows="5"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* 🔥 BUTTON */}
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition"
            >
              Ajánlatkérés
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
