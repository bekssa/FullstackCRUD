"use client"
import '@ant-design/v5-patch-for-react-19';
import { Button } from "antd";
import Books from "../components/Books";
import { useEffect, useState } from "react";
import { BookRequest, createBook, deleteBook, getAllBooks, updateBook } from "../services/Book";
import Title from 'antd/es/typography/Title';
import { CreateUpdateBook, Mode } from '../components/CreateUpdateBook';

export default function BooksPage() {
  const defaultValues = 
{
    title: "",
    description: "",
    price: 1,
  } as Book
  const [values,setValues] = useState<Book>(defaultValues);
  const [books,setBooks] = useState<Book[]>([]);
  const [loading,setLoading] = useState(true);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [mode,setMode] = useState(Mode.Create); 

useEffect(() => {
      const getBooks = async () => {
        const books = await getAllBooks();
        setLoading(false);
        setBooks(books);
      };

      getBooks();
    }, [ ]);

  const handleCreateBook = async (request:BookRequest) => {
    await createBook(request);
    closeModal();

    const books = await getAllBooks();

    setBooks(books);
  }

  const handleUpdateBook = async (id:number, request:BookRequest) => {
    await updateBook(id,request);
    closeModal();

    const books = await getAllBooks();

    setBooks(books);
  };

  const handleDeleteBook = async (id:number) => {
    await deleteBook(id);
    closeModal();
    const books = await getAllBooks();

    setBooks(books);
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setValues(defaultValues);
    setIsModalOpen(false);

  }
    
  const openEditModal = (book:Book) => {
    setMode(Mode.Edit);
    setValues(book);
    setIsModalOpen(true);
  }

  return (
    <div>
        <Button
          type="primary"
          style={{marginTop: "30px"}}
          size="large"
          onClick={openModal}
        >
            Кітап қосу
        </Button>

          <CreateUpdateBook 
              mode={mode} 
              values={values} 
              isModalOpen={isModalOpen} 
              handelCreate={handleCreateBook} 
              handleUpdate={handleUpdateBook} 
              handleCancel={closeModal}
          />

        {loading 
        ? 
        (<Title>Жүктелуде...</Title>)
        :
        (<Books books={books} handleOpen={openEditModal} handleDelete={handleDeleteBook}/>
        )}
    </div>
  );
}