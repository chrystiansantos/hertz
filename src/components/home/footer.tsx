export function Footer() {
  return (
    <footer className="bg-[#0DAB74] px-5 py-10 text-center">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-2.5 text-2xl font-bold text-white">
          Serviços Elétricos Profissionais
        </div>

        <div className="mb-5 text-slate-50">
          Instalações, manutenções e soluções em elétrica residencial e
          comercial.
        </div>

        <div className="footer-links">
          <a
            href="#servicos"
            className="mx-2.5 text-sm text-white transition-colors duration-300 hover:text-blue-900"
          >
            Serviços
          </a>
          <a
            href="#orcamento"
            className="mx-2.5 text-sm text-white transition-colors duration-300 hover:text-blue-900"
          >
            Solicite um Orçamento
          </a>
        </div>

        <div className="mt-5 text-sm text-white">
          &copy; 2025 Eletricista Pro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
