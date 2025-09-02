import Modal from "antd/es/modal/Modal";
import { BookRequest } from "../services/Book";
import Input from "antd/es/input/Input";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface CreateUpdateBookProps {
    mode: Mode;
    values: Book;
    isModalOpen: boolean;
    handleCancel: () => void;
    handelCreate: (request:BookRequest) => void;
    handleUpdate: (id: number, request: BookRequest) => void;
}

export enum Mode {
    Create,
    Edit
}

export const CreateUpdateBook = ({mode,values,isModalOpen,handleCancel,handelCreate,handleUpdate}:CreateUpdateBookProps) => {

    const [title,setTitle] = useState<string>("");
    const [description,setDescription] = useState<string>("");
    const [price,setPrice] = useState<number>(0);

    const handleOk = async () => {
        const BookRequest = {title,description,price}
        
        mode == Mode.Create ? handelCreate(BookRequest) : handleUpdate(values.id, BookRequest)
    }

    useEffect(() => {
        setTitle(values.title);
        setDescription(values.description);
        setPrice(values.price);
    },[values])

    return (
    <Modal title={mode == Mode.Create ? "Кітап қосу" : "Өңдеу"} 
    open={isModalOpen} 
    onOk={handleOk} 
    onCancel={handleCancel}
    cancelText={"Артқа"} 
    >
        <div className="book__modal">
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Кітап атауы"
            />
            <TextArea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoSize={{minRows:3,maxRows:3}}
                placeholder="Кітап сипаттамасы"
            />
            <Input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Кітап бағасы"
                />
        </div>

    </Modal>
    );
}