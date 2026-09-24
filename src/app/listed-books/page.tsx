'use client'
import ReadBooksCard from '@/components/ListedBooks/ReadBooksTab';
import WishListCard from '@/components/ListedBooks/WishListTab';
import { BooksContext } from '@/Context/BookContext';
import { IBook } from '@/types/books';
import { useContext } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext);
    // console.log(readBooks)
    return (
        <div className='overflow-hidden w-full md:max-w-310 mx-auto my-8'>
            <h2 className='text-2xl md:text-4xl font-bold text-slate-950 bg-slate-100 my-4 p-16 rounded-3xl text-center'>Listed Books</h2>
        <div className='text-center my-4'>
            <button className='btn btn-success text-sm text-white px-4 py-3'>Sort By <FiChevronDown size={22} />
</button>
        </div>
        <div className="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})` }/>
            <div className="tab-content bg-base-100 border-base-300 p-6">
                {readBooks.map((book: IBook) => {
                    return <ReadBooksCard key={book.bookId} book={book} />
                })}
            </div>

            <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishList.length})`} defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">
                {wishList.map((book: IBook) => {
                    return <WishListCard key={book.bookId} book={book} />
                })
                }
            </div>
        </div>    
        </div>

    );
};

export default ListedBooks;