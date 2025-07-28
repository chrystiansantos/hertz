import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Posts() {
  const posts = new Array(6).fill(8).map((_, i) => i)

  return (
    <div className="my-32 grid grid-cols-3 gap-y-10">
      {posts.map((post) => (
        <div key={post}>
          <div>
            <Image
              priority={false}
              className="rounded-2xl"
              src="/post-example.png"
              width={300}
              height={300}
              alt=""
            />
          </div>
          <div className="mt-1 flex max-w-[300px] flex-col gap-1.5">
            <strong>
              Beyond transaction: Unlocking the Full Potential of Your POS
              Sys...
            </strong>
            <p className="text-xs text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              ratione quae, laborum est tempore fugiat praesentium delectus odio
            </p>
            <Link
              href="/service/123"
              className="flex items-center gap-2 text-sm font-semibold text-[#2D4B81]"
            >
              Leia mais <ArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
