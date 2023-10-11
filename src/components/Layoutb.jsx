function Layoutb({children}){
    return(
        <div className={`flex flex-col justify-normal items-center space-y-3 pt-20`}>
        <a href="https://www.linkedin.com/in/valeria-peredo-rodr%C3%ADguez-771765141/" className=" text-slate-600 hover:text-black hover:font-semibold text-sm ">CV</a>
        <a href="https://independent.academia.edu/ValeriaPeredo" className=" text-slate-600 hover:text-black hover:font-semibold text-sm">ACADEMIA.EDU</a>
        <div className="flex space-x-5 items-center justify-center pb-10">
            {children}
        </div>
      </div>
    )
}

export default Layoutb