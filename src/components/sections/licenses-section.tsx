import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const licenses = [
  {
    title: "Свидетельство СРО",
    issuer: "Саморегулируемая организация проектировщиков",
    number: "СРО П-042-007804583852-1357",
    direction: "left",
  },
  {
    title: "Свидетельство СРО",
    issuer: "Саморегулируемая организация строителей",
    number: "СРО-С-287-15092017-1269",
    direction: "left",
  },
  {
    title: "Сертификат ISO 9001",
    issuer: "Система менеджмента качества",
    number: "ISO 9001:2015",
    direction: "right",
  },
]

export function LicensesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Лицензии
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Сертификаты и допуски</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {licenses.map((item, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
              }
              return "translate-x-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group flex items-start gap-4 border border-foreground/10 p-6 transition-all duration-700 hover:border-foreground/25 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  <Icon name="Award" size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-sans text-lg font-light text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mb-2 text-sm text-foreground/70">{item.issuer}</p>
                  <p className="font-mono text-xs text-foreground/40">{item.number}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}