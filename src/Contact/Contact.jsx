import React from 'react';

const Contact = () => {
    return(
        <div className="container mx-auto">
            <h2 className='text-center'>Contacts</h2>
            <div className="flex justify-center text-center">
                <div className="flex-initial w-50 ...">
                    <h2>Delivery</h2>
                    <h2>Direccion</h2>
                    <h2>Horarios de atencion:</h2>
                </div>
                <div className="flex-initial w-500 ...">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5789.516149584768!2d-55.89288733418452!3d-27.36513095255854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1697731124301!5m2!1ses!2sar"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}

export { Contact }