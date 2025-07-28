import { CookingPot, ShowerHead, Wrench } from 'lucide-react'

export function Services() {
  return (
    <section className="mt-10 bg-green-50/70">
      <div className="mx-auto max-w-[1200px] p-20">
        <h2 className="text-3xl font-medium">Nossos serviços de encanamento</h2>
        <div className="mt-8 flex items-start justify-between gap-8">
          <div className="flex flex-col rounded-xl bg-white p-4 shadow-lg shadow-slate-300">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-green-600">
              <Wrench fontWeight="bold" color="#fff" size={30} />
            </div>
            <strong className="mt-2 font-medium">
              Reparo e Substituição de Torneiras
            </strong>
            <span className="mt-3 font-normal text-slate-500">
              Corrija seus vazamentos hoje mesmo. Cuidamos dos seus problemas
              com torneiras de forma rápida, limpa e com qualidade.
            </span>
          </div>
          <div className="flex flex-col rounded-xl bg-white p-4 shadow-lg shadow-slate-300">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-green-600">
              <ShowerHead fontWeight="bold" color="#fff" size={30} />
            </div>
            <strong className="mt-2 font-medium">
              Vazamentos em Vasos e Chuveiros
            </strong>
            <span className="mt-3 font-normal text-slate-500">
              Se você tem vazamentos em banheiros ou chuveiros, estamos sempre
              prontos para ajudar.Atendimento 24 horas para qualquer tipo de
              vazamento.
            </span>
          </div>
          <div className="flex flex-col rounded-xl bg-white p-4 shadow-lg shadow-slate-300">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-green-600">
              <CookingPot fontWeight="bold" color="#fff" size={30} />
            </div>
            <strong className="mt-2 font-medium">Instalações de Cozinha</strong>
            <span className="mt-3 font-normal text-slate-500">
              Somos especializados em instalações de cozinha e banheiro com a
              melhor qualidade e preços acessíveis.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
