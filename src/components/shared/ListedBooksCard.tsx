import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegFileAlt, FaUsers } from "react-icons/fa";
import { IBook } from "@/types/books";

interface ListedBooksCardProps {
    book: IBook;
}

const ListedBooksCard = ({ book }: ListedBooksCardProps) => {
    return (
        <article className="mb-3 flex w-full min-h-[143px] gap-3 rounded-lg border border-[#e5e5e5] bg-white p-3">
            <div className="flex h-[116px] w-[116px] shrink-0 items-center justify-center rounded-lg bg-[#f5f5f5]">
                <Image
                src={book.image}
                alt={book.bookName}
                width={100}
                height={110}
                className="h-[100px] w-auto object-contain"
                />
            </div>

            <div className="min-w-0 flex-1">
                <h2 className="truncate font-serif text-sm font-bold leading-[17px] text-[#171717]">
                {book.bookName}
                </h2>

                <p className="mt-1 text-[10px] leading-[12px] text-[#333]">
                By : {book.author}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[9px] text-[#555]">
                <div className="flex items-center gap-1 font-semibold text-[#222]">
                    <span>Tag</span>
                </div>

                {book.tags.slice(0, 2).map((tag) => (
                    <span
                    key={tag}
                    className="rounded-full bg-green-50 px-2 py-1 text-[8px] font-medium leading-none text-green-600">
                    #{tag}
                    </span>
                ))}

                <div className="flex items-center gap-1">
                    <FaRegCalendarAlt className="text-[9px] text-[#777]" />
                    <span>Year of Publishing: {book.yearOfPublishing}</span>
                </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-[9px] text-[#777]">
                    <div className="flex items-center gap-1">
                        <FaUsers className="text-[10px]" />
                        <span>Publisher: {book.publisher}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaRegFileAlt className="text-[10px]" />
                        <span>Page {book.totalPages}</span>
                    </div>
                </div>

            <div className="my-2 border-t border-[#e5e5e5]" />

                <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[9px] font-medium text-blue-500">
                        Category: {book.category}
                    </span>

                    <span className="rounded-full bg-orange-50 px-3 py-1 text-[9px] font-medium text-orange-400">
                        Rating: {book.rating.toFixed(1)}
                    </span>

                    <Link href={`/books/${book.bookId}`}
                        className="rounded-full bg-green-500 px-3 py-1 text-[9px] font-semibold text-white transition-colors hover:bg-green-600">
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ListedBooksCard;