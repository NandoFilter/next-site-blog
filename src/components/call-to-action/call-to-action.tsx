import { Button } from "../ui/button"
import { ArrowRightIcon, StoreIcon } from "lucide-react"
import Link from "next/link"

export const CallToAction = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full ">
            <StoreIcon className="text-cyan-100" />
          </div>

          <h2 className="font-sans text-heading-xl text-balance text-gray-100">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button className="rounded-full mt-6" asChild>
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
