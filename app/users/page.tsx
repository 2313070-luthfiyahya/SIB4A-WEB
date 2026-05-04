export default function Learn () {
    return  (
        <section className="h-screen bg-gray-300 flex flex-col gap-8 p-8 items-center">
             <div className="bg-white p-12 h-105 w-100 rounded-3xl flex flex-col align-super text-black">
                <div className="flex gap-30">
                <p className="text-2xl underline font-light">Client Details</p>
                <img src="/x.svg" alt="x"/>
            </div>
            <div className="flex gap-4">
            <img src="/user.svg" alt="user"/>
            <p className="font-semibold">Cornelius Greenfelder</p>
            </div>
            <div className="flex gap-2 justify-between">
            <div className="bg-green-200 p-3 h-3 w-17 rounded-4xl justify-center items-center">
            <img src="/rosette-discount-check.svg" alt="rosette-discount-check.svg"/>
            </div>
            </div>
            </div>
            
        </section>











    )
}