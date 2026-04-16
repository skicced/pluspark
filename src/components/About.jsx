import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

/* 🔹 STAT COMPONENT */
function Stat({ end, label, suffix = "+" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const countRef = useRef(null);

  const { start } = useCountUp({
    ref: countRef,
    end,
    duration: 2,
  });

  useEffect(() => {
    if (inView) start();
  }, [inView]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg hover:scale-105 transition"
    >
      <h3 className="text-5xl font-bold text-emerald-500">
        <span ref={countRef} />
        {suffix}
      </h3>
      <p className="text-gray-500 mt-3">{label}</p>
    </div>
  );
}

/* 🔹 MAIN ABOUT PAGE */
export default function AboutPage() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Intelligens parkolási rendszerek több mint{" "}
            <span className="text-emerald-500">25 év</span> tapasztalattal
          </h1>

          <p className="mt-6 text-gray-600">
            A Signelit Plus Kft. parkolórendszerek tervezésével, kivitelezésével
            és üzemeltetésével foglalkozik. Megoldásainkat szállodák,
            lakóparkok, irodaházak és ipari létesítmények igényeire szabjuk.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition">
              Ajánlatkérés
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Kapcsolat
            </button>
          </div>
        </div>

        {/* 🔥 STATS */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <Stat end={25} label="év tapasztalat" />
          <Stat end={120} label="megvalósított projekt" />
          <Stat end={1000} label="elégedett ügyfél" />
        </div>

        {/* 🔥 SERVICES */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-center">
            Szolgáltatásaink
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Tervezés és kivitelezés</h3>
              <p className="text-gray-600 mt-2">
                Teljes parkolási rendszer kiépítése az igényekhez igazítva.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Rendszámfelismerés</h3>
              <p className="text-gray-600 mt-2">
                Automatikus be- és kiléptetés manuális beavatkozás nélkül.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Jogosultságkezelés</h3>
              <p className="text-gray-600 mt-2">
                Vendégek és dolgozók kezelése egy rendszerben.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Fizetési megoldások</h3>
              <p className="text-gray-600 mt-2">
                Automaták és digitális fizetés integrálása.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Üzemeltetés és szerviz</h3>
              <p className="text-gray-600 mt-2">
                Karbantartás és folyamatos működés biztosítása.
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 VALUE PROPOSITION */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold">
              Automatizált, átlátható parkolás
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Kevesebb adminisztráció</li>
              <li>✔ Gyorsabb beléptetés</li>
              <li>✔ Stabil működés</li>
              <li>✔ Kis és nagy parkolókhoz is</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl h-64 flex items-center justify-center">
            <span className="text-gray-500">
              (ide jöhet kép vagy illusztráció)
            </span>
          </div>
        </div>

        {/* 🔥 HOW IT WORKS */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold">Hogyan működik?</h2>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
            <span>🚗 Érkezés</span>
            <span>→</span>
            <span>📷 Azonosítás</span>
            <span>→</span>
            <span>⚙️ Feldolgozás</span>
            <span>→</span>
            <span>🚧 Sorompó</span>
            <span>→</span>
            <span>💳 Fizetés</span>
          </div>
        </div>

        {/* 🔥 TARGET */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-center">
            Kinek ajánljuk?
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              🏨 Szállodák
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              🏘 Lakóparkok
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              🏢 Irodaházak
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">🛒 Áruházak</div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              🏭 Ipari területek
            </div>
          </div>
        </div>

        {/* 🔥 CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold">Kérjen egyedi ajánlatot</h2>

          <p className="text-gray-600 mt-4">
            Díjmentes helyszíni felméréssel segítünk megtalálni a legjobb
            megoldást.
          </p>

          <button className="mt-6 bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition">
            Ajánlatkérés
          </button>
        </div>
      </div>
    </section>
  );
}
