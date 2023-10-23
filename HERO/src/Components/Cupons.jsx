
import './Cupons'
import React, { useState, useEffect } from 'react';
import cupon from '/ticket.svg'; // Asegúrate de que la ruta sea correcta

const Cupons = () => {
    const [data, setData] = useState({ owner: '' });

    useEffect(() => {
        fetch('Json/Data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('no se conecto');
                }
                return response.json();
            })
            .then(data => {
                setData(data['data'][0]);
            })

            .catch(error => console.error('Error no se pudo obtener:', error)); // Manejo de errores en caso de falla en la solicitud
    }, []);

    const [svgContent, setSvgContent]=useState(
        `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <g style="" transform="matrix(1.885431, 0, 0, 1.691267, -238.790928, -176.881655)">
          <path style="stroke: rgb(0, 0, 0); stroke-opacity: 0; transform-origin: 261.778px 171.614px; fill: rgb(235, 105, 23);" d="M 261.306 230.697 L 385.028 229.75 L 379.96 224.886 L 385.164 221.967 L 380.266 220.192 L 385.232 217.555 L 380.563 214.781 L 385.221 211.834 L 380.416 209.496 L 385.31 206.822 L 380.565 204.532 L 385.297 201.189 L 380.77 198.606 L 385.187 195.588 L 381.039 193.39 L 385.309 191.218 C 385.309 191.218 383.467 190.835 380.857 189.09 C 378.37 187.428 376.872 184.329 376.872 184.329 L 375.587 180.857 L 374.98 178.212 L 374.503 175.34 L 374.234 171.599 L 374.275 168.239 L 374.792 164.675 L 375.502 161.691 L 376.633 158.3 L 378.45 154.968 L 380.813 152.26 L 382.377 151.312 L 384.918 150.536 L 379.499 148.644 L 384.609 145.989 L 379.496 142.918 L 384.721 140.53 L 379.539 137.944 L 384.818 134.748 L 379.713 131.503 L 384.946 128.453 L 379.767 125.215 L 384.95 121.654 L 379.064 118.324 L 384.322 113.298 L 261.616 113.484" transform="matrix(-1, 0, 0, -1, -0.000016, 0.000013)"/>
          <path style="stroke: rgb(0, 0, 0); stroke-opacity: 0; transform-origin: 260.548px 171.089px; fill: rgb(235, 105, 23);" d="M 260.725 229.747 L 383.798 229.225 L 378.73 224.361 L 383.934 221.442 L 379.036 219.667 L 384.002 217.03 L 379.333 214.256 L 383.991 211.309 L 379.186 208.971 L 384.08 206.297 L 379.335 204.007 L 384.067 200.664 L 379.54 198.081 L 383.957 195.063 L 379.809 192.865 L 384.079 190.693 C 384.079 190.693 382.237 190.31 379.627 188.565 C 377.14 186.903 375.642 183.804 375.642 183.804 L 374.357 180.332 L 373.75 177.687 L 373.273 174.815 L 373.004 171.074 L 373.045 167.714 L 373.562 164.15 L 374.272 161.166 L 375.403 157.775 L 377.22 154.443 L 379.583 151.735 L 381.147 150.787 L 383.688 150.011 L 378.269 148.119 L 383.379 145.464 L 378.266 142.393 L 383.491 140.005 L 378.309 137.419 L 383.588 134.223 L 378.483 130.978 L 383.716 127.928 L 378.537 124.69 L 383.72 121.129 L 377.834 117.799 L 383.092 112.773 L 261.306 112.538"/>
        </g>
      </svg>`
    )


    const changeColor = (newColor) => {
        const colorToChange = 'rgb(235, 105, 23)';
        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(svgContent, (err, result) => {
          if (!err) {
            const changeColorRecursive = (obj) => {
              for (const prop in obj) {
                if (typeof obj[prop] === 'object') {
                  changeColorRecursive(obj[prop]);
                } else {
                  if (prop === '_text' && obj[prop] === colorToChange) {
                    obj[prop] = newColor;
                  }
                }
              }
            };
      
            changeColorRecursive(result);
      
            const builder = new xml2js.Builder();
            const newSvgContent = builder.buildObject(result);
            console.log(newSvgContent)
            // Actualiza la variable de estado con el nuevo SVG
            setSvgContent(newSvgContent);
          }
        });
      };

    

        
        


    return (
        <>
            <div className='2xl:p-4'>
                back to <strong>Home</strong>
            </div>
            <div>
                <h1 className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-4xl font-lobster'>
                    Welcome to {data.owner}
                </h1>
                <div className='bg-gray-600 2xl:p-[1em] 2xl:justify-center 2xl:items-center 2xl:rounded-2xl 2xl:my-[2em]'>
                    <div className='2xl:flex 2xl:flex-row 2xl:justify-center space-x-[1em]'>
                        <div className='bg-red-600 2xl:h-[15em] 2xl:w-[30vw] 2xl:rounded-lg'>

                        </div>

                        <div className='bg-green-600 2xl:h-[15em] 2xl:w-[30vw] 2xl:rounded-lg'>

                        </div>
                    </div>
                </div>

                <h1 className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-4xl font-lobster'>
                    Yours coupons
                </h1>

                <div className='2xl:grid 2xl:grid-cols-2 2xl:gap-4 2xl:justify-center 2xl:items-center bg-gray-400 2xl:p-[1em] 2xl:px-[19.5%]'>

                    <div className='bg-green-600 2xl:h-[12em] 2xl:w-[30vw] 2xl:rounded-lg'>
                        {/* {changeColor('gray')} */}
                        <div 
                        dangerouslySetInnerHTML={{ __html: svgContent }} 
                        className='h-full w-full bg-cover bg-no-repeat bg-scale[2]'
                        ></div> 
                    </div>

                    <div className='bg-green-100 2xl:h-[12em] 2xl:w-[30vw] 2xl:rounded-lg'></div>
                    <div className='bg-green-900 2xl:h-[12em] 2xl:w-[30vw] 2xl:rounded-lg'></div>
                    <div className='bg-green-300 2xl:h-[12em] 2xl:w-[30vw] 2xl:rounded-lg'></div>


                </div>


            </div>
        </>

    )
}

export { Cupons }