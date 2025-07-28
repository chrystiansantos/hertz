import {
  Advantages,
  Feedbacks,
  Hero,
  ServiceDescription,
  Services,
  TrustworthyCompany,
} from '@/components/home'

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <ServiceDescription />
      <TrustworthyCompany />
      <Advantages />
      <Feedbacks />
    </div>
  )
}
