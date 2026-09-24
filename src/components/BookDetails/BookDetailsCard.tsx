import Image from "next/image";
import { IBook } from "@/types/books";
import ReadBooksButton from "./ReadBooksBtn";
import WishListButton from "./WishListBtn";

interface IBookDetailsCardProps {
    book: IBook;
}

const BookDetailsCard = ({ book }: IBookDetailsCardProps) => {
    return (
        <article className="mx-auto grid w-full max-w-[1170px] overflow-hidden rounded-xl border border-[#e5e5e5] bg-white md:grid-cols-2">
            <div className="flex min-h-[360px] items-center justify-center bg-[#f7f7f7] p-8 md:min-h-[500px] md:p-10">
                <div className="relative h-[350px] w-full max-w-[370px]">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        fill
                        priority
                        className="object-contain"/>
                </div>
            </div>

            <div className="flex flex-col p-6 md:p-7">
                <h1 className="font-serif text-lg font-medium leading-tight text-[#171717] md:text-4xl">
                {book.bookName}
                </h1>
                <p className="mt-2 text-lg font-medium text-[#333]">
                By : {book.author}
                </p>

                <div className="my-3 border-t border-[#e5e5e5]" />
                    <p className="text-xs font-normal leading-4 text-[#666]">
                    <span className="font-bold text-[#222]">Review :</span>{" "}
                    {book.review}
                    </p>

                <div className="mt-3 flex items-center gap-2">
                    <span className="mr-1 text-[10px] font-bold text-[#222]">
                    Tag
                    </span>
                    {book.tags.map((tag) => ( 
                        <span
                        key={tag}
                        className="rounded-full px-2.5 py-1 text-[10px] font-medium leading-none text-green-500">
                        #{tag}
                        </span>
                    ))}
                </div>

            <div className="my-3 border-t border-[#e5e5e5]" />
                <div className="space-y-2 text-[9px]">
                    <div className="grid grid-cols-[125px_1fr]">
                        <span className="text-[#777]">Number of Pages:</span>
                        <span className="font-bold text-[#222]">
                        {book.totalPages}
                        </span>
                    </div>

                    <div className="grid grid-cols-[125px_1fr]">
                        <span className="text-[#777]">Publisher:</span>
                        <span className="font-semibold text-[#222]">
                        {book.publisher}
                        </span>
                    </div>

                    <div className="grid grid-cols-[125px_1fr]">
                        <span className="text-[#777]">Year of Publishing:</span>
                        <span className="font-semibold text-[#222]">
                        {book.yearOfPublishing}
                        </span>
                    </div>

                    <div className="grid grid-cols-[125px_1fr]">
                        <span className="text-[#777]">Rating:</span>
                        <span className="font-semibold text-[#ccae01]">
                        {book.rating.toFixed(1)}
                        </span>
                    </div>
                </div>

                <div className="mt-4 flex gap-2">
                    <ReadBooksButton book={book} />
                    <WishListButton book={book} />
                </div>
            </div>
        </article>
    );
};

export default BookDetailsCard;