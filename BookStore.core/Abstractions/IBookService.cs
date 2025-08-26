using BookStore.core.Modal;

namespace BookStore.core.Abstractions;

public interface IBooksService
{
    Task<Guid> Create(Book book);
    Task<Guid> Delete(Guid id);
    Task<List<Book>> GetAllBooks();
    Task<Guid> Update(Guid id, string title, string desctiption, decimal price);
}