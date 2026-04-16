export default function LogoCarousel() {
  const logos = [
    "/Ref/Logo/novotel.png",
    "/Ref/Logo/starpark.png",
    "/Ref/Logo/hatvani.png",
    "/Ref/Logo/trofea.png",
    "/Ref/Logo/praktiker.png",
  ];

  const looped = [...logos, ...logos];

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔥 TITLE */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Akik már minket választottak
          </h2>
          <p className="text-gray-500 mt-3">
            Partnereink és ügyfeleink különböző iparágakból
          </p>
        </div>

        {/* 🔥 CAROUSEL WRAPPER */}
        <div className="relative mt-12">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* 🔥 TRACK */}
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-16 items-center">
            {looped.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[120px]"
              >
                <img
                  src={logo}
                  alt="partner logo"
                  className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
