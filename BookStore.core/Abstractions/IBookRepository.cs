using BookStore.core.Modal;

namespace BookStore.core.Abstractions
{
    public interface IBookRepository
    {
        Task<Guid> Create(Book book);
        Task<Guid> Delete(Guid id);
        Task<List<Book>> Get();
        Task<Guid> Update(Guid id, string title, string desctiption, decimal price);
    }
}