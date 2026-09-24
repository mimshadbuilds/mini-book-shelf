import Image from 'next/image';
import banner from '@/assets/hero-banner.png' 

const Banner = () => {
    return (
        <section className="overflow-hidden py-16 bg-neutral-100">
            <div className='relative grid grid-cols-2 items-center gap-10 bg-slate-200 shadow-md rounded-3xl p-12 max-w-[1240px] mx-auto border border-neutral-100'>
                <div className='space-y-6 z-10 pl-20'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight'>
                        Books to freshen up <br /> <span className='text-[#00c187]'>your bookshelf</span>
                    </h2>
                    
                    <button className='group flex items-center gap-4 px-8 py-4 bg-slate-950/90 text-white rounded-xl shadow-md backdrop-blur-sm hover:bg-[#00c187] transition duration-300'>
                        <svg className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        View The List
                    </button>
                </div>
                
                <div className='relative flex justify-center'>
                    <Image src={banner}
                        alt="A curated book selection on a polished shelf"
                        className="h-116 w-full max-w-[500px] object-contain"
                        priority />
                </div>
            </div>
        </section>
    );
};

export default Banner;