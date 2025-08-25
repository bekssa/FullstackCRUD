using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.core.Modal
{
    public class Book
    {
        public const int MAX_TITLE_LENGTH = 250;

        private Book(Guid id,string title,string desctription, int price) {
            Id = id;
            Title = title;
            Description = desctription;
            Price = price;
        }
        public Guid Id { get; }
        public string Title { get; } = string.Empty;
        public string Description { get; } = string.Empty ;
        public int Price { get; }

        public static (Book Book, string Error) Create(Guid id, string title, string description, int price)
        {
            var book = new Book(id,title,description,price);
            
            var error = string.Empty;

            if(string.IsNullOrEmpty(title) || title.Length > MAX_TITLE_LENGTH)
            {
                error = "Title can not be empty or longer than 250 symbols";
            }

            return (book,error);
        }

    }
}
