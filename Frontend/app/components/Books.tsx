import '@ant-design/v5-patch-for-react-19';
import Card from "antd/es/card/Card";
import { Cardtitle } from "./Cardtitle";
import { Button } from "antd/es/radio";

interface Props{
    books: Book[]     
}

export default function Books({books}: Props) {
  return (
    <div className="Books">
        {books.map((book: Book) => (
            <Card
                key={book.id}
                title = {<Cardtitle title={book.title} price={book.price }/>}
                bordered={false}
            >
                <p className="card__description">{book.description}</p>
                <div className="card__buttons">
                    <Button>
                        Edit
                    </Button>
                    <Button>
                        Delete 
                    </Button>
                </div>
            </Card>
        ))}
    </div>
);
}