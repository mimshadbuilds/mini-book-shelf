import { getBooks } from "@/lib/booksapi";
import BooksCard from "../shared/BooksCard";

const FeaturedBooks = async () => {
    const booksData = await getBooks();

    return (
    <section className="max-w-[1240px] mx-auto w-full px-4 py-8">
        <div className="mb-8 text-center">
            <h1 className="font-serif text-2xl font-bold sm:text-3xl">
            Explore Books
            </h1>

            <p className="mt-2 text-base-content/60">
            Discover books from different genres and authors.
            </p>
        </div>

        <div className="grid grid-cols-1 max-w-[1140px] justify-center mx-auto gap-4 sm:grid-cols-2 md:grid-cols-3">
            {booksData.map((book) => (
            <BooksCard key={book.bookId} book={book} />
            ))}
        </div>
        </section>
    );
};

export default FeaturedBooks;