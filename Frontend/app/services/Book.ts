export interface BookRequest{
    title: string;
    description: string;   
    price: number;
}

export const getAllBooks = async () => {
    const res = await fetch("http://localhost:5148/Book");
    return res.json();
}

export const createBook = async (book: BookRequest) => {
    const res = await fetch("http://localhost:5148/Book", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });
}

export const updateBook = async (id: number, book: BookRequest) => {
    const res = await fetch("http://localhost:5148/Book/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
}

export const deleteBook = async (id: number) => {
    const res = await fetch("http://localhost:5148/Book/" + id, {
        method: "DELETE"
    })

}