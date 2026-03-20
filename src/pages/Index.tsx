import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Philosophy } from "@/components/Philosophy"
import { Education } from "@/components/Education"
import { Library } from "@/components/Library"
import { Projects } from "@/components/Projects"
import { Process } from "@/components/Process"
import { Testimonial } from "@/components/Testimonial"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Education />
      <Library />
      <Projects />
      <Process />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
