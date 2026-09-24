const BooksCardSkeleton = () => {
    return (
        <article className="w-full max-w-[342px] mx-auto rounded-md border border-[#e5e5e5] bg-white p-3">
            <div className="flex h-52 w-full items-center justify-center rounded-lg bg-[#f5f5f5] animate-pulse">
                <div className="h-[160px] w-[105px] rounded-md bg-[#e5e5e5]" />
            </div>

            <div className="pt-3">
                <div className="mb-2 flex gap-1.5">
                <div className="h-[18px] w-[48px] rounded-full bg-[#e5e5e5] animate-pulse" />
                <div className="h-[18px] w-[58px] rounded-full bg-[#e5e5e5] animate-pulse" />
                </div>

                <div className="h-4 w-3/4 rounded bg-[#e5e5e5] animate-pulse" />

                <div className="mt-1 h-3 w-1/2 rounded bg-[#eeeeee] animate-pulse" />

                <div className="my-2.5 border-t border-dashed border-base-300" />

                <div className="flex items-center justify-between">
                <div className="h-3 w-12 rounded bg-[#e5e5e5] animate-pulse" />

                <div className="flex items-center gap-1">
                    <div className="h-3 w-7 rounded bg-[#e5e5e5] animate-pulse" />
                    <div className="h-3 w-3 rounded-full bg-[#e5e5e5] animate-pulse" />
                </div>
                </div>
            </div>
        </article>
    );
};

export default BooksCardSkeleton;