import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy">
      <div
        className={`grid md:grid-cols-2 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Левый блок — Патриотическое воспитание */}
        <div className="relative h-[420px] md:h-[520px] overflow-hidden group">
          <img
            src="https://cdn.poehali.dev/projects/9e91488a-c15a-4424-a376-d7440e2033f3/bucket/0020ba1d-0adb-4863-994c-4af90bf03069.png"
            alt="Юнармия на параде"
            className="absolute inset-0 w-full h-full object-cover object-left scale-105 group-hover:scale-100 transition-transform duration-700"
            style={{ objectPosition: "0% 50%" }}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-16">
            <p className="text-white/70 italic text-sm mb-4 tracking-wide">Интерактивная платформа для обучения</p>
            <h2 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl uppercase leading-tight mb-8"
              style={{ color: "#FF6B8A", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
              Патриотическое<br />воспитание молодёжи
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-[#4FC3F7]" />
              <a
                href="#education"
                className="px-7 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-foreground transition-all duration-300"
              >
                Перейти на платформу
              </a>
            </div>
          </div>
        </div>

        {/* Правый блок — Поддержка военнослужащих */}
        <div className="relative h-[420px] md:h-[520px] overflow-hidden group">
          <img
            src="https://cdn.poehali.dev/projects/9e91488a-c15a-4424-a376-d7440e2033f3/bucket/0020ba1d-0adb-4863-994c-4af90bf03069.png"
            alt="Военнослужащий"
            className="absolute inset-0 w-full h-full object-cover object-right scale-105 group-hover:scale-100 transition-transform duration-700"
            style={{ objectPosition: "100% 50%" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-16">
            <p className="text-white/70 italic text-sm mb-4 tracking-wide">Мобильное приложение</p>
            <h2 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl uppercase leading-tight mb-8"
              style={{ color: "#FFF9C4", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
              Поддержка<br />военнослужащих
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-[#4FC3F7]" />
              <a
                href="#library"
                className="px-7 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-foreground transition-all duration-300"
              >
                Узнать больше
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}