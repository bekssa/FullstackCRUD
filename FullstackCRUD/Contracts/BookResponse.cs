namespace FullstackCRUD.Contracts
{
    public record BookResponse(
        Guid id,
        string title,
        string description,
        decimal price
        );
}
