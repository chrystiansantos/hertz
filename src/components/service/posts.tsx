import { Service } from 'contentlayer/generated'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
interface PostsProps {
  services: Service[]
}

export function Posts({ services }: PostsProps) {
  return (
    <div className="my-32 grid grid-cols-3 gap-y-10">
      {services.map((post) => (
        <div key={post._id}>
          <div>
            <Image
              priority={false}
              className="h-[200px] w-[300px] rounded-2xl object-fill"
              src={post.serviceImage}
              width={300}
              height={200}
              alt=""
            />
          </div>
          <div className="mt-1 flex max-w-[300px] flex-col gap-1.5">
            <strong>{post.title}</strong>
            <p className="text-xs text-slate-600">{post.subTitle}</p>
            <Link
              href={`/service/${post.slug}`}
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
