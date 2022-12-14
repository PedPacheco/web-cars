import Link from 'next/link'
import { X } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '~/components/Atoms/Button'
import { InputLogin } from '~/components/Atoms/InputLogin'
import { Loading } from '~/components/Atoms/Loading'
import { Header } from '~/components/Molecules/Header'
import UseAuth from '~/hooks/useAuth'

export default function Register() {
  const [photoUrl, setPhotoUrl] = useState('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [cep, setCep] = useState<string>('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const { registerWithEmailAndPassword, loading } = UseAuth()

  function registerUser(event: FormEvent) {
    event.preventDefault()

    if (checkPassword !== password) {
      return console.error('senhas diferentes')
    }

    registerWithEmailAndPassword(name, email, password, cep, phone, photoUrl)
  }

  async function uploadImage(file: File) {
    const formData = new FormData()
    formData.append('file', file as Blob)
    formData.append('upload_preset', 'web-cars')
    formData.append('cloud_name', 'dnaqaaqun')

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dnaqaaqun/image/upload',
        {
          method: 'POST',
          body: formData,
        },
      )

      const data = await res.json()
      setPhotoUrl(data.url)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Header />

      {loading ? (
        <div className="w-full h-[80vh] relative my-auto">
          <Loading />
        </div>
      ) : (
        <div className=" flex flex-col items-center mt-8 lg:h-[480px]">
          <div className="bg-zinc-800 relative w-full py-8 px-5 lg:w-[634px] lg:rounded-lg lg:pt-16 lg:pb-9 lg:px-8">
            <X size={24} className="absolute top-5 right-5 cursor-pointer" />
            <div className="flex flex-col h-full">
              <div className="flex h-full flex-col lg:flex-row">
                <section className="w-full">
                  <h1 className="mt-5 mb-6 font-medium text-2xl text-zinc-100 lg:mb-5">
                    Crie uma conta com seu E-mail
                  </h1>
                  <form onSubmit={(event) => registerUser(event)}>
                    <InputLogin
                      type="file"
                      text="Imagem de perfil"
                      onChange={(event) => {
                        const file = (event.target as HTMLInputElement)
                          .files![0]
                        if (!file) {
                          return
                        }
                        uploadImage(file)
                      }}
                    />
                    <InputLogin
                      text="Nome completo"
                      onChange={(event) => setName(event.target.value)}
                    />
                    <InputLogin
                      text="E-mail"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <InputLogin
                      type="tel"
                      text="Telefone"
                      onChange={(event) => setPhone(event.target.value)}
                    />
                    <InputLogin
                      text="Cep"
                      onChange={(event) => setCep(event.target.value)}
                    />
                    <InputLogin
                      text="Senha"
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                    />
                    <InputLogin
                      type="password"
                      text="Confirmar senha"
                      onChange={(event) => setCheckPassword(event.target.value)}
                    />
                    <Button type="submit" lgwidth="lg:w-auto">
                      Criar conta
                    </Button>
                  </form>
                </section>
              </div>
              <p className="text-center text-zinc-100 mt-8">
                J?? tem uma conta?
                <Link href="/login">
                  <a className="ml-1 font-bold text-brand-primary hover:text-brand-hover transition-colors">
                    Entrar
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
