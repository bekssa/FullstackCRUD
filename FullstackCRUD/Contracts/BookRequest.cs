namespace FullstackCRUD.Contracts
{
    public record BookRequest(
        Guid id,
        string title,
        string description,
        decimal price
        );

}
