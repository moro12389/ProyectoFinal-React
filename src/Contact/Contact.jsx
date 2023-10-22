
import './Contact.css';
import '../index.css';
const Contact = () => {
    return(
        <div className=" mx-auto p-1  bg-[url('./assets/wave.svg')] p-4 bg-no-repeat bg-cover">
            <h2 className='headings pl-12 py-3 text-center'>Contacts</h2>
            <div className="flex items-center  ">
                <div className="w-1/2 flex-col">
                    <h3 className="headings">Delivery</h3>
                        <p>+54923232323322</p>
                   
                    <h3 className="headings">Direccion</h3>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-orange-500 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className='pl-2'>Mi casa, 63, 93, hola</p>
                    </div>
                    <h3 className="headings">Horarios de atencion:</h3>
                    <div className='flex z-10 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-orange-500 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div className="w-1/2 items-center flex min-h-[100vh]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5789.516149584768!2d-55.89288733418452!3d-27.36513095255854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1697731124301!5m2!1ses!2sar" className="w-full z-10 rounded-md h-[70vh]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}

export { Contact }