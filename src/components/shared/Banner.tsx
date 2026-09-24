import Image from 'next/image';
import banner from '@/assets/hero-banner.png' 
import { IoBookOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <section className="overflow-hidden py-16 bg-neutral-100">
            <div className='relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-slate-200 shadow-md rounded-3xl p-12 max-w-[1240px] mx-auto border border-neutral-100'>
                <div className='space-y-6 z-10 md:pl-20 text-center md:text-left'>
                    <h2 className='text-2xl md:text-5xl font-extrabold text-neutral-900 leading-tight'>
                        Books to freshen up <br /> <span className='text-[#00c187]'>your bookshelf</span>
                    </h2>
                    
                    <button className='group flex items-center justify-center gap-2 px-4 md:px-8 py-2 md:py-4 bg-slate-950/90 text-white rounded-xl shadow-md backdrop-blur-sm hover:bg-[#00c187] transition duration-300 mx-auto md:mx-0'>
                    <IoBookOutline className='pt-[0.8px]' /> View The List 
                    </button>
                </div>
                
                <div className='relative flex justify-center'>
                    <Image src={banner}
                        alt="A curated book selection on a polished shelf"
                        className="h-116 w-full max-w-[490px] object-contain"
                        priority />
                </div>
            </div>
        </section>
    );
};

export default Banner;