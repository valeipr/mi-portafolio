function Hero() {
    return(
        <div>
        <div className="flex flex-col lg:flex-row items-center justify-center h-screen lg:space-x-36 mx-auto">
        <div className="flex flex-col space-y-4 lg:w-[35%] w-[75%]"> 
          <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-left">Hola, extraño 👽.</h1>
          <p className="text-bg lg:text-xl text-center lg:text-left">Hola, soy Valeria. Soy antropóloga, pero me me encanta trabajar con datos, diseñar apps y programar. Me gusta el trabajo colaborativo y combinar las ciencias sociales con la tecnología.</p>
          <div className="flex space-x-3 items-center justify-center pt-3">
            <a href="https://github.com/valeipr"> <img src="/github.png" width="30px"/></a>
            <a href="mailto:valeria@labtecnosocial.org?"><img src="/correo-electronico.png" width="30px"/></a>
            <a href="https://twitter.com/ValeriaPeredo6"><img src="/gorjeo.png" width="30px"/></a>
          </div>
        </div>

        <div className="pt-5">
          <img src="/IMG_4051.JPG" className="rounded-t-full shadow-lg lg:w-[23vw] w-[70vw] pt-3"/>
        </div>
      </div>
      </div>
    )
}

export default Hero