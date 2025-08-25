using BookStore.core.Modal;
using BookStore.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.DataAccess.Repositories
{
    public class BookRepository
    {
        private readonly BookStoreDBContext _context;

        public BookRepository(BookStoreDBContext context)
        {
            _context = context;
        }

        public async Task<List<Book>> Get()
        {
            var bookEntities = await _context.Books
                .AsNoTracking()
                .ToListAsync();

            var books = bookEntities.Select(b => Book.Create(b.Id, b.Title, b.Description, b.Price).Book).ToList();

            return books;
        }

        public async Task<Guid> Create(Book book)
        {
            var bookEntity = new BookEntity
            {
                Id = book.Id,
                Title = book.Title,
                Description = book.Description,
                Price = book.Price,
            };

            await _context.AddAsync(bookEntity);
            await _context.SaveChangesAsync();

            return bookEntity.Id;
        }

        public Task<Guid> Update(Book book, string title, string desctiption, decimal price) 
        {
            
        }
    }
}
