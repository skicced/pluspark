import { useState } from "react";

/* 🔹 DATA */
const projects = [
  {
    title: "Novotel Budapest City",
    image: "/src/assets/Ref/Ref1.jpg",
    description: "Szállodai parkolórendszer teljes automatizálással.",
    logo: "/src/assets/Logo/novotel.png",
  },
  {
    title: "Erzsébet tér parkoló",
    image: "/src/assets/Ref/Ref2.jpg",
    description: "Belvárosi parkoló rendszámfelismeréssel.",
    logo: "/logos/erzsebet.png",
  },
  {
    title: "Kányavári sziget parkoló",
    image: "/src/assets/Ref/Ref3.jpg",
    description: "Kültéri parkoló sorompós beléptetéssel.",
  },
  {
    title: "Hatvani Albert Schweitzer Kórház",
    image: "/src/assets/Ref/Ref4.png",
    description: "Kórházi parkoló komplex kezelése.",
    logo: "/logos/hatvan.png",
  },
  {
    title: "Praktiker Mester utca",
    image: "/src/assets/Ref/Ref5.jpg",
    description: "Áruházi parkoló integrált fizetéssel.",
  },
  {
    title: "Trófea Újbuda",
    image: "/src/assets/Ref/Ref6.jpg",
    description: "Éttermek parkolási rendszere.",
    logo: "/logos/trofea.png",
  },
];

/* 🔹 MAIN COMPONENT */
export default function References() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Referenciáink</h2>
          <p className="text-gray-600 mt-4">
            Megvalósított projektjeink különböző iparágakból
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(project)}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                {/* TITLE */}
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 MODAL */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              {/* IMAGE */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-80 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                {selected.logo && (
                  <img src={selected.logo} alt="" className="h-10 mb-4" />
                )}

                <h3 className="text-2xl font-semibold">{selected.title}</h3>

                <p className="text-gray-600 mt-3">{selected.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
