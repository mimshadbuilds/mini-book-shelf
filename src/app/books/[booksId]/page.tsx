import BookDetailsCard from '@/components/BookDetails/BookDetailsCard';
import { getBooks } from '@/lib/booksapi';
import { IBook } from '@/types/books';
import { notFound } from 'next/navigation';

interface IBookDetailsProp {
    params: {
        booksId: number
    }
}
const BookDetailsPage = async ({params}: IBookDetailsProp) => {
    
    const { booksId } = await params;
    const allBooks = await getBooks();
    // console.log(allBooks)
    const book = allBooks.find((books: IBook) => books.bookId === Number(booksId))
    // console.log(books)
    if(!book){
        notFound();
    }
    return (
        <main className='max-w-[1240px] mx-auto my-12'>
            <BookDetailsCard book={book} />
        </main>
    );
};

export default BookDetailsPage;