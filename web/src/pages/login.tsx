import * as Separator from '@radix-ui/react-separator'
import Link from 'next/link'
import { FacebookLogo, GoogleLogo, X } from 'phosphor-react'
import { Button } from '~/components/Button'
import { Header } from '~/components/Header'
import { Input } from '~/components/Input'
import { SocialNetworkButton } from '~/components/SocialNetworkButton'

export default function Login() {
  return (
    <>
      <Header />

      <div className=" flex flex-col items-center lg:mt-40  lg:h-[480px]">
        <div className="bg-zinc-800 relative w-full py-8 px-5 lg:w-[634px] lg:rounded-lg lg:pt-16 lg:pb-9 lg:px-8">
          <X size={24} className="absolute top-5 right-5 cursor-pointer" />
          <div className="flex flex-col h-full">
            <div className="flex h-full flex-col lg:flex-row">
              <section className="w-full">
                <h1 className="mt-5 mb-6 font-medium text-2xl text-zinc-100 lg:mb-5">
                  Entre com suas redes sociais
                </h1>
                <div>
                  <SocialNetworkButton
                    logo={<FacebookLogo size={24} className="mr-5" />}
                    text="Entrar com Facebook"
                    bgColor="bg-[#3b5998]"
                    bgColorHover="hover:bg-[#8b9dc3]"
                  />

                  <SocialNetworkButton
                    logo={
                      <GoogleLogo size={24} className="mr-5 text-zinc-600" />
                    }
                    text="Entrar com Google"
                    bgColor="bg-white"
                    bgColorHover="hover:bg-slate-200"
                    textColor="text-zinc-600"
                  />

                  <SocialNetworkButton
                    logo={<GoogleLogo size={24} className="mr-5 text-white" />}
                    text="Entrar com Apple"
                    bgColor="bg-neutral-900"
                    bgColorHover="hover:bg-neutral-700"
                    textColor="text-white"
                  />
                </div>
              </section>
              <Separator.Root className="relative my-4 border border-solid border-zinc-700 lg:mx-8">
                <p className="absolute left-1/2 top-[-12px] lg:top-1/2 lg:left-[-20px] bg-zinc-800 px-2">
                  OU
                </p>
              </Separator.Root>
              <section className="w-full">
                <h1 className="mt-5 mb-6 font-medium text-2xl text-zinc-100 lg:mb-5">
                  Digite sua senha e e-mail
                </h1>
                <form>
                  <Input text="E-mail" />
                  <Input text="Senha" />
                  <Button type="submit" text="Entrar" lgWidth="lg:w-auto" />
                </form>
              </section>
            </div>
            <p className="text-center text-zinc-100 mt-8">
              Não tem uma conta?
              <Link href="/register">
                <a className="ml-1 font-bold text-brand-primary hover:text-brand-hover transition-colors">
                  Crie a sua
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
