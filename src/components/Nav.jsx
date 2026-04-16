import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoMobile from "../assets/logo-bg.png";
import LogoDesktop from "../assets/logo-bg.png";

const navigation = [
  { name: "Kezdőlap", href: "#hero", current: true },
  { name: "Rólunk", href: "#about", current: false },
  { name: "Szolgáltatások", href: "#prices", current: false },
  { name: "Referencia", href: "#barbers", current: false },
  { name: "Kapcsolat", href: "#contact", current: false },
  { name: "Belépés", href: "https://grafex.hu", external: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const sections = navigation
      .filter((item) => item.href.startsWith("#"))
      .map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            setCurrentSection(sectionId);
          }
        });
      },
      { threshold: [0.2] },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-emerald-500 text-sec fixed w-screen z-10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white  focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-center">
            <div className="flex shrink-0 items-center">
              <img
                src={LogoDesktop}
                className="hidden md:block h-8 w-auto"
                alt=""
              />
              <img
                src={LogoMobile}
                className="md:hidden block h-8 w-auto"
                alt=""
              />
            </div>

            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => {
                      if (item.external) {
                        window.open(item.href, "_blank");
                      } else {
                        const el = document.querySelector(item.href);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className={classNames(
                      item.href === `#${currentSection}`
                        ? "bg-black-900 text-sec"
                        : "text-white hover:bg-gray-700 hover:text-white hover:cursor-pointer",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              onClick={(e) => {
                e.preventDefault();
                if (item.external) {
                  window.open(item.href, "_blank");
                } else {
                  const el = document.querySelector(item.href);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className={classNames(
                item.href === `#${currentSection}`
                  ? "bg-black-900 text-sec"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-sm font-medium",
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
