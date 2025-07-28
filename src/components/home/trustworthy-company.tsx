import { BadgeCheck, Handshake } from 'lucide-react'
import Image from 'next/image'

export function TrustworthyCompany() {
  return (
    <section className="mx-auto mt-8 flex max-w-[1200px] items-center gap-6 bg-white px-10">
      <Image
        src="/plumbing.png"
        width={300}
        height={300}
        alt=""
        className="h-[500px] w-[200px] flex-1"
      />
      <div className="flex flex-1 flex-col gap-2">
        <h2 className="text-2xl font-medium">Uma Empresa de Confiança</h2>
        <p className="text-sm text-slate-600">
          Nossos especialistas estão disponíveis 24 horas por dia para resolver
          qualquer vazamento. Prestamos serviços profissionais em imóveis
          comerciais e residenciais.
        </p>
        <div className="m-2 rounded-3xl border border-slate-200 p-4">
          <div className="flex gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#0DAB74]">
              <BadgeCheck size={32} color="#fff" />
            </div>
            <div className="flex flex-1 flex-col">
              <strong className="font-semibold">Satisfação Garantida</strong>
              <span className="text-xs text-slate-600">
                Nossa equipe altamente profissional garante a melhoria no
                sistema hidráulico.
              </span>
            </div>
          </div>

          <div className="mx-6 my-4 h-0.5 bg-slate-200"></div>
          <div className="flex gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#0DAB74]">
              <Handshake size={32} color="#fff" />
            </div>
            <div className="flex flex-1 flex-col">
              <strong className="font-semibold">Confiável e Seguro</strong>
              <span className="text-xs text-slate-600">
                Garantimos a qualidade dos nossos serviços e resolvemos os
                problemas de forma eficaz.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
