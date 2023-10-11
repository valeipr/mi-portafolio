function Layout({titulo, children, espacioy, paddingt}){
    return(
    <div className={`w-[100%] flex flex-col lg:justify-normal justify-center items-center ${espacioy} ${paddingt} text-center`}>
        <h1 className="text-2xl lg:text-4xl font-semibold">{titulo}</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-7 space-y-4 items-center justify-center pt-6 pl-[2%] lg:pl-0">
        {children}
        </div>
    </div>
    )
}

export default Layout