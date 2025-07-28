import Image from 'next/image'

export function Hero() {
  return (
    <div className="mx-auto mt-8 flex max-w-[1200px] items-center justify-center gap-16 px-16">
      <div className="flex max-w-[400px] flex-col gap-5">
        <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-medium text-green-600">
          Empresa Profissional de Serviços de Encanamento
        </span>
        <h1 className="text-3xl font-bold">
          Serviços de Encanamento Confiáveis e de Qualidade
        </h1>
        <p className="text-xs text-slate-600">
          Oferecemos serviços de encanamento de alta qualidade para atender às
          suas necessidades. Prestamos serviços confiáveis e com qualidade para
          nossos clientes.
        </p>
        <div className="flex gap-2">
          <button className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-medium text-white">
            Começar Agora
          </button>

          <button className="rounded-full bg-green-700 px-4 py-1 text-sm font-medium text-white">
            Ver Serviços
          </button>
        </div>
      </div>
      <div>
        <Image src={'/hero.png'} width={400} height={400} alt="" />
      </div>
    </div>
  )
}
