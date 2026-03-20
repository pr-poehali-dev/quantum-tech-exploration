import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const projectTypes = [
  {
    number: "01",
    icon: "GraduationCap",
    title: "Наставнические проекты",
    description:
      "Ветераны проводят уроки мужества, делятся опытом, помогают школьникам в исследовательских работах. Живое знание передаётся из рук в руки.",
    tag: "Ветераны + школьники",
  },
  {
    number: "02",
    icon: "HandHeart",
    title: "Волонтёрские проекты",
    description:
      "Школьники участвуют в бытовой помощи, поздравляют ветеранов с праздниками, благоустраивают памятники и мемориалы.",
    tag: "Молодёжь + ветераны",
  },
  {
    number: "03",
    icon: "CalendarDays",
    title: "Мероприятия",
    description:
      "Встречи поколений, концерты, спортивные соревнования — форматы, где ветераны и молодёжь общаются в неформальной обстановке.",
    tag: "Все участники",
  },
]

const upcoming = [
  { date: "15 апр", title: "Урок мужества «Дорогами Победы»", city: "Москва", spots: "12 мест" },
  { date: "22 апр", title: "Волонтёрский день у памятника", city: "Санкт-Петербург", spots: "20 мест" },
  { date: "9 мая", title: "Встреча поколений — День Победы", city: "Вся Россия", spots: "Открыто" },
]

export function Projects() {
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
    <section ref={sectionRef} id="projects" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Социальные проекты
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance mx-auto max-w-3xl transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            От слов —
            <span className="italic"> к реальным делам</span>
          </h2>
        </div>

        {/* Project types */}
        <div className="space-y-0 mb-24">
          {projectTypes.map((p, index) => (
            <div
              key={p.number}
              className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                <div className="lg:col-span-1">
                  <span className="font-serif text-4xl lg:text-5xl text-stone/40 group-hover:text-sage transition-colors duration-500">
                    {p.number}
                  </span>
                </div>
                <div className="lg:col-span-1 text-sage group-hover:scale-110 transition-transform duration-300">
                  <Icon name={p.icon as "GraduationCap"} size={32} />
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <span className="inline-block px-4 py-2 text-xs tracking-widest uppercase border border-border text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Ближайшие мероприятия</p>
            <a href="#contact" className="text-xs tracking-widest uppercase text-sage hover:text-sage/70 transition-colors flex items-center gap-2">
              Все мероприятия <Icon name="ArrowRight" size={14} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {upcoming.map((event) => (
              <div key={event.title} className="bg-background p-8 hover:bg-card transition-colors duration-300 group cursor-pointer">
                <p className="font-serif text-3xl text-sage mb-4">{event.date}</p>
                <h4 className="font-serif text-lg text-foreground mb-2 leading-snug">{event.title}</h4>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-muted-foreground">{event.city}</span>
                  <span className="text-xs tracking-widest uppercase text-terracotta">{event.spots}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
