interface Props{
    title: string;
    price: number;
}


export const Cardtitle = ({title,price}: Props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <p className="card__title">{title}</p>
            <p className="card__price">{price}</p>
        </div>
    );

};