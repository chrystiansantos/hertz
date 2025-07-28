import { Star } from 'lucide-react'
import Image from 'next/image'

export function Feedbacks() {
  return (
    <section className="bg-green-50/70">
      <div className="mx-auto max-w-[1200px] p-20">
        <h2 className="text-3xl font-medium">O Que Nossos Clientes Dizem</h2>
        <p className="mt-3 text-xs text-slate-600">
          Dê uma olhada nos comentários de clientes satisfeitos para ter uma
          <br />
          ideia da qualidade dos nossos serviços de encanamento.
        </p>

        <div className="mt-8 flex gap-8">
          <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-300">
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <Image
                  className="size-[50px] rounded-2xl"
                  src="/profile.jpeg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="flex flex-col">
                  <strong className="text-sm">Chrystian Santos</strong>
                  <span className="text-xs text-slate-600">Iguatama, MG</span>
                </div>
              </div>
              <div className="flex rounded-full bg-yellow-100/70 p-1 px-2">
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
              </div>
            </header>
            <p className="mt-4 text-xs text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              deserunt iusto, distinctio neque sed a libero sequi natus
              consequatur impedit dolores tempore sapiente fugiat perspiciatis
              nulla soluta temporibus? Labore, officiis?
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-300">
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <Image
                  className="size-[50px] rounded-2xl"
                  src="/profile.jpeg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="flex flex-col">
                  <strong className="text-sm">Chrystian Santos</strong>
                  <span className="text-xs text-slate-600">Iguatama, MG</span>
                </div>
              </div>
              <div className="flex rounded-full bg-yellow-100/70 p-1 px-2">
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
                <Star
                  size={16}
                  className="text-yellow-400"
                  fill="oklch(85.2% 0.199 91.936)"
                />
              </div>
            </header>
            <p className="mt-4 text-xs text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              deserunt iusto, distinctio neque sed a libero sequi natus
              consequatur impedit dolores tempore sapiente fugiat perspiciatis
              nulla soluta temporibus? Labore, officiis?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
