export function HomeSearchBox() {
  return (
    <section className="my-5 py-16">
      <form className="w-full px-4 md:max-w-3xl lg:max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[80%] w-full px-4 text-center lg:max-w-full">
            <p className="py-4 mb-6 text-3xl font-light text-zinc-100 md:mb-0 md:text-5xl">
              BUSQUE AGORA <span className="font-bold">SEU CARRO</span>
            </p>
          </div>
          <div className="max-w-[80%] w-full px-4 pb-3">
            <label className="mb-2 inline-block">Marca:</label>
            <select className="w-full h-10 py-[0.375rem] px-3 rounded text-base text-zinc-400 ">
              <option value="">Marca</option>
            </select>
          </div>
          <div className="max-w-[80%] w-full px-4 pb-3">
            <label className="mb-2 inline-block">Modelo:</label>
            <select className="w-full h-10 py-[0.375rem] px-3 rounded text-base text-zinc-400">
              <option value="">Modelo</option>
            </select>
          </div>

          <div className="max-w-[80%] w-full grid grid-cols-2 ">
            <div className="w-full px-4 pb-3 ">
              <label className="mb-2 inline-block">Preço de:</label>
              <select className="w-full h-10 py-[0.375rem] px-1 rounded text-base text-zinc-400">
                <option value="">De:</option>
              </select>
            </div>
            <div className="w-full px-4 pb-3 ">
              <label className="mb-2 inline-block">Preço até:</label>
              <select className="w-full h-10 py-[0.375rem] px-1 rounded text-base text-zinc-400">
                <option value="">Até:</option>
              </select>
            </div>
          </div>

          <div className="max-w-[80%] w-full px-4">
            <button className="w-full bg-[#8257E5] rounded leading-tight px-3 py-[0.375rem] cursor-pointer font-bold hover:bg-[#996DFF] transition-colors">
              Buscar
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
