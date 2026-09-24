'use client'
import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { BooksContext } from '@/Context/BookContext';
import { IBook } from '@/types/books';
import { useContext, useState } from 'react';


const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext);
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year" | "">('')
    // console.log(readBooks)

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if(sortBy === 'rating'){
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }else if(sortBy === 'pages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }else if(sortBy === 'year'){
            sortedBooks.sort((a, b) => b.yearOfPublishing - b.yearOfPublishing);
        }
        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist = sortBooks(wishList);

    return (
        <div className='overflow-hidden w-full md:max-w-310 mx-auto my-8'>
            <h2 className='text-2xl md:text-4xl font-bold text-slate-950 bg-slate-100 my-4 p-16 rounded-3xl text-center'>Listed Books</h2>

        <div className='text-center my-4'>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year" | "")} className="select select-bordered select-sm bg-green-500 text-white font-semibold w-auto max-w-xs mx-auto">
                <option value="" disabled selected>Sort By</option>
                <option value={'rating'}>Rating</option>
                <option value={'pages'}>Number of pages</option>
                <option value={'year'}>Publisher year</option>
            </select>
        </div>

        <div className="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})` }/>
            <div className="tab-content bg-base-100 border-base-300 p-6">
                {
                    sortedReadBooks.length > 0 ? (
                    sortedReadBooks.map((book: IBook) => {
                    return <ListedBooksCard key={book.bookId} book={book} />
                })
                ) : 
                (
                    <p>No books found!</p>
                )}
            </div>

            <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishList.length})`} defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">
                {
                    sortedWishlist.length > 0 ? (
                    sortedWishlist.map((book: IBook) => {
                    return <ListedBooksCard key={book.bookId} book={book} />
                })
                ) : 
                (
                    <p>No wishlist found!</p>
                )}
            </div>
        </div>    
        </div>

    );
};

export default ListedBooks;