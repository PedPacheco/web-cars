import { FormEvent, useState } from 'react'
import UseAuth from '~/hooks/useAuth'
import { User } from '~/pages/veiculo/[userId]/[id]'
import { VehicleData } from '~/pages/vender-carro/fotos'
import { emailService } from '~/services/email.service'
import { ToastService } from '~/services/toast.service'
import { InputLogin } from '../Atoms/InputLogin'
import { Loading } from '../Atoms/Loading'

interface SendEmailProps {
  vehicle: VehicleData | undefined
  vehicleOwner: User
}

export function SendEmail({ vehicle, vehicleOwner }: SendEmailProps) {
  const { user } = UseAuth()
  const [name, setName] = useState<string | undefined>('')
  const [message, setMessage] = useState<string>(
    'Olá, tenho interesse no veículo. Por favor entre em contato.',
  )
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState<string>('')

  async function sendEmail(event: FormEvent) {
    console.log('entrei')
    event.preventDefault()

    try {
      setLoading(true)
      await emailService.sendEmail({
        fromEmailUser: user?.email,
        toEmailUser: vehicleOwner.email,
        fromName: name,
        toName: vehicleOwner.name,
        phone,
        message,
      })

      setLoading(false)
      ToastService.success('Sua mensagem foi enviada para o dono do veículo')
    } catch (error: any) {
      setLoading(false)
      ToastService.error(error.response.data)
    }
  }

  return (
    <div className="w-full p-4 h-fit border border-zinc-500 border-solid rounded-lg lg:w-[442px] bg-zinc-800">
      <div className="flex flex-col justify-center mt-4 text-left">
        <strong className="text-4xl font-medium tracking-tighter text-brand-primary">
          R$ {Number(vehicle?.price).toFixed(2)}
        </strong>
        <strong className="mt-3 mb-2 text-xs text-zinc-300">
          Envie uma mensagem para o vendedor
        </strong>

        <form onSubmit={(event) => sendEmail(event)}>
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
          <button
            type="submit"
            disabled={!!(!name || !phone || !message)}
            className="w-full h-14 px-2 rounded-lg flex justify-center items-center text-center mt-4 bg-brand-primary enabled:hover:bg-brand-hover transition-colors disabled:opacity-70 disabled:transition-none"
          >
            {loading ? <Loading /> : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </div>
  )
}
