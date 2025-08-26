using BookStore.core.Abstractions;
using BookStore.core.Modal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;




namespace BookStore.Application.Services
{
    public class BooksService : IBooksService
    {
        private readonly IBookRepository _bookRepository;

        public BooksService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task<List<Book>> GetAllBooks()
        {
            return await _bookRepository.Get();
        }

        public async Task<Guid> Create(Book book)
        {
            return await _bookRepository.Create(book);
        }

        public async Task<Guid> Update(Guid id, string title, string desctiption, decimal price)
        {
            return await _bookRepository.Update(id, title, desctiption, price);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _bookRepository.Delete(id);
        }
    }
}
