import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const courses = [
  {
    id: "history",
    icon: "BookOpen",
    label: "История России",
    color: "text-sage",
    title: "Интерактивные уроки истории",
    description:
      "Ключевые события отечественной истории, великие сражения и выдающиеся полководцы — в формате, сочетающем текст с визуальными элементами.",
    tags: ["Уроки", "Тесты", "Рейтинги"],
    accent: "",
  },
  {
    id: "army",
    icon: "Shield",
    label: "Армия России",
    color: "text-terracotta",
    title: "Современные рода войск",
    description:
      "Военная техника, условия службы и возможности для тех, кто выбирает военную карьеру. Узнайте, как устроена армия сегодня.",
    tags: ["Рода войск", "Техника", "Карьера"],
    accent: "",
  },
  {
    id: "heroes",
    icon: "Star",
    label: "Герои Отечества",
    color: "text-sage",
    title: "Люди, вдохновляющие поколения",
    description:
      "Биографии героев прошлого и настоящего. Онлайн-встречи с ветеранами — школьники могут задать вопросы живым свидетелям истории.",
    tags: ["Биографии", "Встречи", "Подвиги"],
    accent: "",
  },
  {
    id: "yunarmia",
    icon: "Flame",
    label: "Юнармия",
    color: "text-[#CC0000]",
    title: "Юнармия — движение сильных",
    description:
      "Специальный раздел для участников Юнармии: программы подготовки, история движения, конкурсы и возможности для юнармейцев на платформе «Бумеранг».",
    tags: ["Юнармейцы", "Конкурсы", "Подготовка"],
    accent: "yunarmia",
  },
]

const gamification = [
  { icon: "Trophy", title: "Баллы за уроки", desc: "Получайте очки за каждый пройденный урок и тест" },
  { icon: "BarChart2", title: "Рейтинги", desc: "Соревнуйтесь с другими участниками своего класса и школы" },
  { icon: "Award", title: "Значки достижений", desc: "Коллекционируйте награды за особые успехи" },
  { icon: "Users", title: "Для педагогов", desc: "Регистрируйте классы, назначайте задания, отслеживайте прогресс" },
]

export function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("history")
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

  const active = courses.find((c) => c.id === activeTab)!

  return (
    <section ref={sectionRef} id="education" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Образовательный сайт
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Изучай историю
              <span className="italic"> с интересом</span>
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Четыре раздела для школьников, студентов и юнармейцев — интерактивный формат, геймификация
              и живое общение с ветеранами.
            </p>
          </div>
        </div>

        {/* Tab navigation */}
        <div
          className={`flex flex-wrap gap-2 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {courses.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                c.accent === "yunarmia"
                  ? activeTab === c.id
                    ? "text-white border-0"
                    : "bg-background text-[#CC0000] hover:text-[#CC0000]/80 border border-[#CC0000]/40"
                  : activeTab === c.id
                  ? "bg-sage text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border"
              }`}
              style={c.accent === "yunarmia" && activeTab === c.id
                ? { background: "linear-gradient(90deg, #CC0000 0%, #1B5E20 50%, #1A3A6B 100%)" }
                : {}}
            >
              <Icon name={c.icon as "BookOpen"} size={16} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className={`p-10 lg:p-14 border relative overflow-hidden ${
            active.accent === "yunarmia"
              ? "border-0 text-white"
              : "bg-background border-border"
          }`}
            style={active.accent === "yunarmia"
              ? { background: "linear-gradient(135deg, #CC0000 0%, #1B5E20 50%, #1A3A6B 100%)" }
              : {}}
          >
            {active.accent === "yunarmia" && (
              <div className="absolute inset-0 bg-black/20" />
            )}
            <div className={`mb-6 relative z-10 ${active.accent === "yunarmia" ? "text-white" : active.color}`}>
              <Icon name={active.icon as "BookOpen"} size={40} />
            </div>
            <h3 className={`font-serif text-3xl md:text-4xl mb-4 relative z-10 ${active.accent === "yunarmia" ? "text-white" : "text-foreground"}`}>{active.title}</h3>
            <p className={`leading-relaxed mb-8 relative z-10 ${active.accent === "yunarmia" ? "text-white/80" : "text-muted-foreground"}`}>{active.description}</p>
            <div className="flex flex-wrap gap-2 relative z-10">
              {active.tags.map((tag) => (
                <span key={tag} className={`px-4 py-1.5 text-xs tracking-widest uppercase border ${active.accent === "yunarmia" ? "border-white/40 text-white" : "border-border text-muted-foreground"}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Gamification preview */}
          <div className="grid grid-cols-2 gap-px bg-border">
            {gamification.map((item, i) => (
              <div
                key={item.title}
                className="bg-background p-6 lg:p-8 hover:bg-card transition-colors duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-sage mb-3">
                  <Icon name={item.icon as "Trophy"} size={24} />
                </div>
                <p className="font-serif text-lg text-foreground mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
          >
            Подключить школу
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}