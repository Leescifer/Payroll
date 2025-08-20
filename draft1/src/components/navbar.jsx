import Avatar from '../images/Group.png'
import Logo from '../images/Logo.png'

const navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto mt-5 px-6 py-4 rounded-full 
    bg-gradient-to-r from-[#5466FE] via-[#A343F7] to-[#F2868B] 
    shadow-lg flex flex-wrap items-center justify-between gap-4">

            <div className="flex-shrink-0">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <div className="flex items-center gap-3">
                <img
                    src={Avatar}
                    alt="User"
                    className="h-10 w-10 rounded-full border-2 border-white shadow"
                />

                <div className="flex flex-col text-white leading-tight">
                    <span className="font-semibold text-base md:text-md">
                        Good day, Leester
                    </span>
                    <span className="text-xs md:text-sm opacity-80">
                        lcruspero@csvnow.com
                    </span>
                </div>
            </div>
        </nav>

    )
}

export default navbar