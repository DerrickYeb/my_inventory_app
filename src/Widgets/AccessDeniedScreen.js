import DeniedImg from '../images/denied.svg';

export default function AccessDeniedScreen() {
    return <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img src={DeniedImg} className="absolute h-full w-full object-cover" alt=""/>
        <div className="inset-0 bg-black opacity-25 absolute">
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <div className="w-full font-mono flex flex-col items-center relative z-10">
                <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                    Access denied. It seems you don't have some rights. Please contact the administrator.
                </h1>
                <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                    401
                </p>
            </div>
        </div>
    </div>

}