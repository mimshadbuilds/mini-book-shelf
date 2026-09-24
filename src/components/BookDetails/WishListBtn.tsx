'use client'

import { BooksContext } from "@/Context/BookContext";
import { IBook } from "@/types/books";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: {book: IBook}) => {
    const { wishList, setWishList } = useContext(BooksContext)
    const handleWishList = () => {
        setWishList([...wishList, book])

    toast.success(`${book.bookName} added to Wishlist.`);   
    }
    return (
        <div>
            <button onClick={() => handleWishList()}
                className="rounded-md bg-[#55b8d2] px-5 py-2 text-[9px] font-semibold text-white transition-colors hover:bg-[#45aac5]">
                Wishlist
            </button>
        </div>
    );
};

export default WishListButton;