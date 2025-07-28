import { LastPost, Posts } from '@/components/service'

export default function Services() {
  return (
    <div className="mx-auto mt-8 max-w-[1200px] px-16">
      <LastPost />
      <Posts />
    </div>
  )
}
