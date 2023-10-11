function Tarjeta({imagen, titulo, url, texto}) {
    return(
        <a href={url}>
        <div className="w-[80vw] lg:w-[23vw] rounded-lg hover:shadow-lg hover:bg-rose-100 transition">
          <img className="w-full rounded-lg" src={imagen}/>
          <div className="px-6 py-4 flex flex-col items-left justify-start text-left">
            <div className="text-lg text-black font-semibold">{titulo}</div>
            <div className="text-sm pt-2 text-slate-600">{texto}</div>
          </div>
        </div>
      </a>
    )
}

export default Tarjeta