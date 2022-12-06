import { useState } from 'react'
import UseAuth from '~/hooks/useAuth'
import { VehicleData } from '~/pages/vender-carro/fotos'
import { InputLogin } from '../Atoms/InputLogin'

interface SendEmailProps {
  vehicle: VehicleData | undefined
}

export function SendEmail({ vehicle }: SendEmailProps) {
  const { user } = UseAuth()
  const [name, setName] = useState<string | undefined>(user?.name)
  const [message, setMessage] = useState<string>(
    'Olá, tenho interesse no veículo. Por favor entre em contato.',
  )
  const [phone, setPhone] = useState<string>('')

  async function sendEmail() {}

  return (
    <div className="w-full p-4 h-fit border border-zinc-500 border-solid rounded-lg lg:w-[442px] bg-zinc-800">
      <div className="flex flex-col justify-center mt-4 text-left">
        <strong className="text-4xl font-medium tracking-tighter text-brand-primary">
          R$ {vehicle?.price}
        </strong>
        <strong className="mt-3 mb-2 text-xs text-zinc-300">
          Envie uma mensagem para o vendedor
        </strong>

        <form onSubmit={sendEmail}>
          <InputLogin
            text="Nome*"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <InputLogin
            text="Telefone*"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <div className="mb-5">
            <div className="relative rounded-lg h-20 mt-3 ">
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full py-3 pr-11 pl-4 rounded-lg border-2 border-zinc-400 bg-zinc-800 overflow-y-hidden h-20 text-sm"
                maxLength={1000}
              />
              <label
                htmlFor="Mensagem"
                className="absolute left-3 top-[-6px] px-2 text-zinc-400 text-xs bg-zinc-800"
              >
                Mensagem*
              </label>
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="w-full h-14 px-2 rounded-lg text-center mt-4 bg-brand-primary disabled:opacity-5"
        >
          Enviar Mensagem
        </button>
      </div>
    </div>
  )
}
