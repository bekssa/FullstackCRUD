"use client"

import { Button } from "antd/es/radio";
import Books from "../components/Books";
import { useEffect, useState } from "react";
import { getAllBooks } from "../services/Book";
import { get } from "http";

export default function BooksPage() {
  const [books,setBooks] = useState<Book[]>([]);
  const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {
      const getBooks = async () => {
        const books = await getAllBooks();
        setLoading(false);
        setBooks(books);
      };

      getBooks();
    }, [ ]);

  return (
    <div>
        <Button>
            Кітап қосу
        </Button>
        <Books books={books}></Books>
    </div>
  );
}