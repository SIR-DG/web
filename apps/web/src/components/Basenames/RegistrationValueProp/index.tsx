'use client';

import faceScan from './assets/faceScan.svg';
import currencies from './assets/currencies.svg';
import sofort from './assets/sofort.svg';
import globe from './assets/globeWhite.webm';
import classNames from 'classnames';
import ImageAdaptive from 'apps/web/src/components/ImageAdaptive';
import { StaticImageData } from 'next/image';

type ValuePropProps = {
    title: string;
    description: string;
    image: StaticImageData;
    color: string;
};

const valueClass = classNames(
    'relative px-2 py-2',
  );

function ValueProp({ title, description, image, color }: ValuePropProps) {
    return (
        <div className="rounded-xl flex items-center bg-gray-5 py-2 px-2 space-x-2 shadow-md border border-palette-line/20 bg-opacity-80">
            {/* bg-[#0052FF],blue --- bg-[#22AD73],green --- bg-[#8A55E9], purple */}
            <div className={`bg-[${color}] rounded-2xl px-6 py-3`}>
                <ImageAdaptive src={image} alt={title} width={74} height={74} className='flex items-center justify-center' />
            </div>
            <div className='px-6'>
                <h3 className="text-xl mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
      );
}

export default function RegistrationValueProp() { 
    return (
        <section className="flex flex-col items-center max-w-5xl mx-auto pt-24 px-4 md:px-12">
            <h1 className='text-left z-20 text-[##0A0B0D] text-pretty pl:2 md:text-center text-palette-foreground text-5xl sm:text-6xl'>
                Get so much more on <br /> Base with your profile
            </h1>
            <div className='relative z-10 pt-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 row-auto gap-4 md:gap-y-12'>
                    <div className={classNames(valueClass, 'sm:col-start-2')}>
                        <ValueProp title='Establish your identity' description='Be a part of our vibrant Base community with your own unique identity.' image={faceScan as StaticImageData} color='#0052FF' />
                    </div>
                    <div className={classNames(valueClass,  'row-start-2 md:translate-x-20')}>
                        <ValueProp title='Easy Payments' description='Use your human-readable address to send payments with ease.' image={currencies as StaticImageData} color='#22AD73' />
                    </div>
                    <div className={classNames(valueClass, 'row-start-3 sm:col-start-2')}>
                        <ValueProp title='Trusted Communities' description='Find Based builders easier. Connect, work together, or get mentorship.' image={sofort as StaticImageData} color='#8A55E9' />
                    </div>
                </div>
                <div className="absolute -z-10 top-8 w-full h-full sm:w-2/3 sm:translate-x-1/4">
                    <video autoPlay className="w-full h-full motion-reduce:hidden scale-[1.05] object-fit sm:scale-[1.35]" loop muted playsInline>
                            <source src={globe} type="video/webm" />
                        </video>
                </div>
            </div>
        </section>
    )
}