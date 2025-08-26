using BookStore.core.Abstractions;
using BookStore.core.Modal;
using FullstackCRUD.Contracts;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace FullstackCRUD.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class BookController: ControllerBase
    {
        private readonly IBooksService _booksService;

        public BookController(IBooksService booksService)
        {
            _booksService = booksService;
        }

        [HttpGet]
        public async Task<ActionResult<List<BookResponse>>> GetBooks()
        {
            var books = await _booksService.GetAllBooks();

            var response = books.Select(book => new BookResponse(
                book.Id,
                book.Title,
                book.Description,
                book.Price));

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateBook([FromBody] BookRequest request)
        {
            var (book, error) = Book.Create(
                Guid.NewGuid(),
                request.title,
                request.description,
                (int)request.price);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var bookId = await _booksService.Create(book);

            return Ok(bookId);
        }

        [HttpPut("{id:guid}")]

        public async Task<ActionResult<Guid>> UpdateBook(Guid id, [FromBody] BookRequest request)
        {
            var bookId = await _booksService.Update(id, request.title, request.description, request.price);
            return Ok(bookId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteBook(Guid id)
        {
            var bookId = await _booksService.Delete(id);
            return Ok(bookId);
        }

    }
}
