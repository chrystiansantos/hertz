import { Service } from 'contentlayer/generated'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface LastPostProps {
  service: Service
}

export function LastPost({ service }: LastPostProps) {
  return (
    <div className="mt-28 flex items-center gap-32">
      <div className="rounded-xl p-4 shadow-lg inset-shadow-sm shadow-[#2d4a8149]">
        <Image
          className="h-[400px] w-[400px] rounded-xl"
          src={service.serviceImage}
          width={400}
          height={400}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <h1 className="text-5xl font-semibold">{service.title}</h1>
        <p className="font-medium text-slate-600">{service.subTitle}</p>
        <Link
          href={`/service/${service.slug}`}
          className="flex items-center gap-2 font-semibold text-[#2D4B81]"
        >
          Leia mais <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
