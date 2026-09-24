import { FaRegStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { IBook } from "@/types/books";

interface IBookCardProps {
  book: IBook;
}

const BooksCard = ({ book }: IBookCardProps) => {
  return (
    <Link href={`/books/${book.bookId}`} className="block">
      <article className="w-full max-w-[342px] mx-auto rounded-md border border-[#e5e5e5] bg-white p-3 transition-colors duration-200 hover:border-base-content/20">
        <div className="flex h-52 w-full items-center justify-center rounded-lg bg-[#f5f5f5]">
          <Image
            src={book.image}
            alt={book.bookName}
            width={120}
            height={150}
            className="h-[160px] w-auto object-contain"
          />
        </div>

        <div className="pt-3">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {book.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-medium leading-none text-green-600">
                {tag}
              </span>
            ))}
          </div>
            <h2 className="line-clamp-1 font-serif text-sm font-semibold leading-4 text-base-content">
              {book.bookName}
            </h2>
            <p className="mt-1 text-[10px] leading-3 text-base-content/70">
              By : {book.author}
            </p>

          <div className="my-2.5 border-t border-dashed border-base-300" />
          <div className="flex items-center justify-between text-[9px] leading-3 text-base-content/80">
            <span>{book.category}</span>

            <div className="flex items-center gap-1">
              <span className="text-amber-500">{book.rating.toFixed(2)}</span>
              <FaRegStar className="text-[11px] text-amber-500" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BooksCard;