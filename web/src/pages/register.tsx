import Link from 'next/link'
import { X } from 'phosphor-react'
import { Button } from '~/components/Button'
import { Header } from '~/components/Header'
import { Input } from '~/components/Input'

export default function Register() {
  return (
    <>
      <Header />

      <div className=" flex flex-col items-center mt-20  lg:h-[480px]">
        <div className="bg-zinc-800 relative w-full py-8 px-5 lg:w-[634px] lg:rounded-lg lg:pt-16 lg:pb-9 lg:px-8">
          <X size={24} className="absolute top-5 right-5 cursor-pointer" />
          <div className="flex flex-col h-full">
            <div className="flex h-full flex-col lg:flex-row">
              <section className="w-full">
                <h1 className="mt-5 mb-6 font-medium text-2xl text-zinc-100 lg:mb-5">
                  Crie uma conta com seu E-mail
                </h1>
                <form>
                  <Input text="Nome completo" />
                  <Input text="E-mail" />
                  <Input text="Senha" />
                  <Input text="Confirmar senha" />
                  <Button
                    type="submit"
                    text="Criar conta"
                    lgWidth="lg:w-auto"
                  />
                </form>
              </section>
            </div>
            <p className="text-center text-zinc-100 mt-8">
              Já tem uma conta?
              <Link href="/login">
                <a className="ml-1 font-bold text-brand-primary hover:text-brand-hover transition-colors">
                  Entrar
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
