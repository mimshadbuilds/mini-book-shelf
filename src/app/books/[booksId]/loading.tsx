const Loading = () => {
    return (
        <main className="mx-auto max-w-[1240px] px-4 py-8">
            <article className="mx-auto grid w-full max-w-[1170px] overflow-hidden rounded-xl border border-[#e5e5e5] bg-white md:grid-cols-2">
                <div className="flex min-h-[360px] items-center justify-center bg-[#f7f7f7] p-8 md:min-h-[500px] md:p-10">
                <div className="h-[300px] w-[220px] animate-pulse rounded-md bg-[#e5e5e5]" />
                </div>

                <div className="flex flex-col p-6 md:p-7">
                <div className="h-7 w-3/4 animate-pulse rounded bg-[#e5e5e5]" />

                <div className="mt-3 h-3 w-32 animate-pulse rounded bg-[#eeeeee]" />

                <div className="my-3 border-t border-[#e5e5e5]" />

                <div className="space-y-2">
                    <div className="h-3 w-full animate-pulse rounded bg-[#eeeeee]" />
                    <div className="h-3 w-full animate-pulse rounded bg-[#eeeeee]" />
                    <div className="h-3 w-5/6 animate-pulse rounded bg-[#eeeeee]" />
                    <div className="h-3 w-4/5 animate-pulse rounded bg-[#eeeeee]" />
                </div>

                <div className="mt-4 flex items-center gap-2">
                    <div className="h-5 w-8 animate-pulse rounded bg-[#eeeeee]" />
                    <div className="h-6 w-20 animate-pulse rounded-full bg-[#e5e5e5]" />
                    <div className="h-6 w-16 animate-pulse rounded-full bg-[#e5e5e5]" />
                </div>

                <div className="my-3 border-t border-[#e5e5e5]" />

                <div className="space-y-3">
                    <div className="h-3 w-3/4 animate-pulse rounded bg-[#eeeeee]" />
                    <div className="h-3 w-4/5 animate-pulse rounded bg-[#eeeeee]" />
                    <div className="h-3 w-3/4 animate-pulse rounded bg-[#eeeeee]" />
                    <div className="h-3 w-1/3 animate-pulse rounded bg-[#eeeeee]" />
                </div>

                <div className="mt-5 flex gap-2">
                    <div className="h-8 w-16 animate-pulse rounded-md bg-[#e5e5e5]" />
                    <div className="h-8 w-20 animate-pulse rounded-md bg-[#e5e5e5]" />
                </div>
                </div>
            </article>
        </main>
    );
};

export default Loading;