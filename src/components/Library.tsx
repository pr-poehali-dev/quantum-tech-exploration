import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const categories = [
  {
    icon: "Brain",
    title: "Психологическая самопомощь",
    desc: "Управление стрессом, нормализация сна, адаптация к мирной жизни — практические материалы без лишней терминологии.",
    count: "12 статей",
  },
  {
    icon: "Scale",
    title: "Юридическая поддержка",
    desc: "Льготы, социальные гарантии, пошаговые инструкции по оформлению выплат и пособий для ветеранов.",
    count: "8 разделов",
  },
  {
    icon: "HeartHandshake",
    title: "Социальная интеграция",
    desc: "Как найти работу, выстроить новые социальные связи и снова почувствовать себя частью общества.",
    count: "10 материалов",
  },
  {
    icon: "Phone",
    title: "Горячие линии и контакты",
    desc: "Проверенные организации, куда можно обратиться за помощью — психологической, юридической, медицинской.",
    count: "Всегда доступно",
  },
]

export function Library() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="library" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Библиотека знаний
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Поддержка
                <span className="italic"> без лишних слов</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Раздел для военнослужащих и ветеранов. Полезные материалы, помогающие справляться
                с трудностями адаптации — просто, понятно, без давления.
              </p>
              <div
                className={`p-6 border-l-2 border-terracotta bg-sand/50 transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Все материалы написаны понятным языком. Вы можете читать анонимно — без регистрации
                  и без необходимости обращаться за помощью напрямую.
                </p>
              </div>
            </div>
          </div>

          {/* Right - cards */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {categories.map((cat, index) => (
                <div
                  key={cat.title}
                  className={`group flex gap-6 p-8 border border-border hover:border-sage hover:bg-card transition-all duration-500 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 120}ms` }}
                >
                  <div className="text-sage flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={cat.icon as "Brain"} size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-xl md:text-2xl text-foreground">{cat.title}</h3>
                      <span className="text-xs tracking-widest uppercase text-muted-foreground whitespace-nowrap mt-1">
                        {cat.count}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
