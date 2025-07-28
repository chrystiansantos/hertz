import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function LastPost() {
  return (
    <div className="mt-28 flex items-center gap-32">
      <div className="rounded-xl p-4 shadow-lg inset-shadow-sm shadow-[#2d4a8149]">
        <Image
          className="h-[400px] w-[400px] rounded-xl"
          src="/post-example.png"
          width={400}
          height={400}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <h1 className="text-5xl font-semibold">
          Unlocking Efficiency: The Power Of A Modern POS System
        </h1>
        <p className="font-medium text-slate-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          dolorem sed quasi voluptates repudiandae, perferendis eum! Quod,
          reiciendis. Aperiam quibusdam earum neque magnam quas officia
          voluptatibus suscipit iste quidem numquam?
        </p>
        <Link
          href="/service/123"
          className="flex items-center gap-2 font-semibold text-[#2D4B81]"
        >
          Leia mais <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
