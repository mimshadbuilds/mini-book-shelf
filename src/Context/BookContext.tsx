'use client'

import { IBook } from '@/types/books';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface BookProviderProps {
    children: ReactNode;
}

interface IBookContext {
    readBooks: IBook[];
    setReadBooks: Dispatch<SetStateAction<IBook[]>>;
    wishList: IBook[];
    setWishList: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBookContext>({
    readBooks: [],
    setReadBooks: ()=> {},
    wishList: [],
    setWishList: () => {}
});

const BooksProvider = ({ children }: BookProviderProps) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishList, setWishList] = useState<IBook[]>([])
    
    const sharedData = {
        readBooks, 
        setReadBooks, 
        wishList, 
        setWishList
    }
    return (
        <BooksContext.Provider value={sharedData}>
            { children }
        </BooksContext.Provider>
    );
};

export default BooksProvider;