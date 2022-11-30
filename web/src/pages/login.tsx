import * as Separator from '@radix-ui/react-separator'
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { FacebookLogo, GoogleLogo, X } from 'phosphor-react'
import { FormEvent, useEffect, useState } from 'react'
import { Button } from '~/components/Atoms/Button'
import { InputLogin } from '~/components/Atoms/InputLogin'
import { Header } from '~/components/Molecules/Header'
import UseAuth from '~/hooks/useAuth'

export default function Login() {
  const { signInWithProvider, loginWithEmailAndPassword } = UseAuth()
  const { token } = parseCookies()
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    if (token !== '') {
      router.push('/')
    }
  }, [token, router])

  function loginUser(event: FormEvent) {
    event.preventDefault()

    loginWithEmailAndPassword(email, password)
  }

  return (
    <>
      <Header />

      <div className=" flex flex-col items-center mt-20 lg:h-[480px]">
        <div className="bg-zinc-800 relative w-full py-8 px-5 lg:w-[634px] lg:rounded-lg lg:pt-16 lg:pb-9 lg:px-8">
          <X size={24} className="absolute top-5 right-5 cursor-pointer" />
          <div className="flex flex-col h-full">
            <div className="flex h-full flex-col lg:flex-row">
              <section className="w-full">
                <h1 className="mt-5 mb-6 font-medium text-2xl text-zinc-100 lg:mb-5">
                  Entre com suas redes sociais
                </h1>
                <div>
                  <button
                    onClick={() => signInWithProvider(facebookProvider)}
                    className="w-full h-10 rounded-lg text-xs font-medium p-2 flex items-center bg-[#3b5998] hover:bg-[#8b9dc3] transition-colors justify-start mb-4"
                  >
                    <FacebookLogo size={24} weight="bold" className="mr-5" />
                    <p className="mr-15 font-medium flex-grow">
                      Entrar com Facebook
                    </p>
                  </button>

                  <button
                    className="w-full h-10 rounded-lg text-xs font-medium p-2 flex items-center bg-white hover:bg-slate-200 transition-colors justify-start mb-4"
                    onClick={() => signInWithProvider(googleProvider)}
                  >
                    <GoogleLogo
                      size={24}
                      weight="bold"
                      className="mr-5 text-zinc-600"
                    />
                    <p className="mr-15 font-medium flex-grow text-zinc-600">
                      Entrar com Google
                    </p>
                  </button>
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
                <form onSubmit={(event) => loginUser(event)}>
                  <InputLogin
                    text="E-mail"
                    onChange={(event) => setEmail(event.target.value)}
                    id="E-mail"
                  />
                  <InputLogin
                    type="password"
                    text="Senha"
                    onChange={(event) => setPassword(event.target.value)}
                    id="Senha"
                  />
                  <Button type="submit" lgwidth="lg:w-auto">
                    Entrar
                  </Button>
                </form>
              </section>
            </div>
            <p className="text-center text-zinc-100 mt-8">
              Não tem uma conta?
              <Link href="/cadastrar">
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
