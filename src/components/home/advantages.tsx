import { DollarSign, HardHat, RefreshCw } from 'lucide-react'

export function Advantages() {
  return (
    <section className="mt-8 bg-[#0DAB74] p-20">
      <div className="mx-auto max-w-[1200px] rounded-4xl bg-white p-10">
        <h2 className="text-3xl font-semibold">O Que Nos Torna Diferentes?</h2>
        <p className="mt-3 text-xs text-slate-600">
          We believe in building long-lasting relationship with our customer
          <br />
          and always treat them with respect and professionalism
        </p>

        <div className="mt-10 flex flex-col items-start gap-20 md:flex-row">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-green-600 md:mx-0">
              <HardHat fontWeight="bold" color="#fff" size={30} />
            </div>
            <strong className="text-base">Engenheiros Qualificados</strong>
            <span className="text-xs text-slate-600">
              Nossos encanadores são totalmente qualificados, altamente
              experientes e segurados, proporcionando a você total tranquilidade
            </span>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-green-600 md:mx-0">
              <RefreshCw fontWeight="bold" color="#fff" size={30} />
            </div>
            <strong>Atendimento 24h</strong>
            <span className="text-xs text-slate-600">
              Entre em contato conosco a qualquer momento, nossos engenheiros de
              encanamento qualificados responderão rapidamente para fornecer a
              ajuda de que você precisa
            </span>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-green-600 md:mx-0">
              <DollarSign fontWeight="bold" color="#fff" size={30} />
            </div>
            <strong>Preços Competitivos</strong>
            <span className="text-xs text-slate-600">
              Estamos comprometidos em igualar os preços definidos pelos nossos
              concorrentes para quaisquer serviços e instalações de encanamento
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
