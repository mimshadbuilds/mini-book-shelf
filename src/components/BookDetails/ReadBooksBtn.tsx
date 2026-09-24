'use client'

import { BooksContext } from "@/Context/BookContext";
import { IBook } from "@/types/books";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadBooksButton = ({ book }: {book: IBook}) => {
    const { readBooks, setReadBooks } = useContext(BooksContext)
    const handleReadBook = () => {
        setReadBooks([...readBooks, book])

        toast.success(`${book.bookName} added to Read Books.`);
    }
    return (
        <div>
            <button onClick={() => handleReadBook()} className="rounded-md border border-[#dcdcdc] bg-white px-5 py-2 text-[9px] font-semibold text-[#333] transition-colors hover:bg-[#f5f5f5]">
            Read
            </button>
        </div>
    );
};

export default ReadBooksButton;