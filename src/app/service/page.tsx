import { LastPost, Posts } from '@/components/service'
import { allServices } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default async function Services() {
  const servicesList = allServices.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  const lastService = servicesList[0]
  const services = servicesList.slice(1)

  return (
    <div className="mx-auto mt-8 max-w-[1200px] px-16">
      <LastPost service={lastService} />
      <Posts services={services} />
    </div>
  )
}
