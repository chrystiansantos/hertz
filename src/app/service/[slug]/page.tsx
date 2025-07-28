import Image from 'next/image'

type ServiceProps = {
  params: Promise<{ slug: string }>
}

export default async function Service({ params }: ServiceProps) {
  const { slug } = await params
  console.log(slug)

  return (
    <div>
      <div className="mx-auto mt-16 flex max-w-[1200px] flex-col items-center justify-center gap-4 px-16">
        <h1 className="text-5xl text-black">Rehabilitas Services</h1>
        <p className="text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          inventore saepe expedita doloribus deserunt voluptates voluptatum sunt
        </p>
      </div>
      <div className="mx-12 mt-6">
        <Image
          className="h-[600px] w-full rounded-2xl object-cover"
          src="/service-image.png"
          width={600}
          height={600}
          alt=""
        />
      </div>
      <div className="m-12 flex justify-end">
        <div className="flex max-w-[900px] flex-col gap-4 text-sm leading-5 text-slate-800">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nisi
            dolorem ab odit. Molestias in, rerum officia alias aperiam ducimus?
            Dolores, voluptates eos! Omnis consequuntur, dolorem soluta culpa
            consectetur temporibus! Eaque ipsa, optio aspernatur odit fuga
            quidem eum, illo reprehenderit mollitia, ullam molestiae quaerat
            aliquid dicta! Numquam id temporibus eligendi dolorum esse, aliquid
            fugiat! Itaque illo doloremque repellat quaerat cum! Tempore,
            commodi in esse corporis ad quidem expedita est dolore asperiores
            blanditiis molestiae odio laborum provident fuga, itaque alias
            praesentium accusamus velit quaerat fugiat vero et.
          </p>
          <p>
            Ipsam id ab a? Placeat commodi in deserunt rerum nobis, non sint
            eaque. Vel ex in ratione repellat quasi quidem esse eveniet, ab,
            officia aliquam dolorem at nobis totam harum nostrum? Iure, debitis
            sapiente. Autem, excepturi deleniti! Deleniti nobis quas ipsam
            soluta sint odit officiis accusantium cupiditate fuga distinctio
            odio modi harum, sit magnam labore laudantium dolor? Adipisci
            cupiditate temporibus error eligendi saepe vero? Est fugiat itaque
            sit saepe et deserunt blanditiis placeat quasi necessitatibus,
            sapiente, architecto vero. Facere quod cupiditate velit vitae
            tenetur beatae soluta, incidunt cumque recusandae nemo, excepturi,
            expedita animi fugit! Ex molestias quo sapiente velit pariatur
            consequatur, maiores illum ipsa magnam facilis dolorum corrupti
            eveniet id tenetur aliquid iure laboriosam atque blanditiis beatae.
            Vitae, laborum cum illo pariatur quo expedita! Saepe similique odit
            debitis praesentium perferendis itaque! Porro error quod a ipsam
            exercitationem, veritatis expedita sequi, dignissimos rerum fuga
            vero suscipit doloribus. Culpa atque incidunt unde maxime est, amet
            dolores?
          </p>
          <p>
            Sapiente esse ducimus voluptates soluta dolorem eum fugit odio dolor
            temporibus! Enim temporibus vitae magni explicabo animi qui quia?
            Ipsam enim ducimus debitis id, cupiditate sint dolorem numquam
            repellendus perferendis! Nulla, laudantium, aliquid eos et
            perferendis earum, mollitia enim voluptatibus tenetur odit soluta
            magni? Debitis recusandae ipsum nulla at, deserunt velit voluptatem
            iste placeat ipsa distinctio adipisci autem aliquam dolore?
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Image
              className="flex-1 rounded-4xl object-contain"
              src="/service-image.png"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="flex-1 rounded-4xl object-contain"
              src="/service-image.png"
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
