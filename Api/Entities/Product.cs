namespace Api.Entities
{
    public class Product
    {
        public int Id { get; set; }

        public string Name {get; set; }

        public string Desrcription {get; set; }

        public long Price {get; set; }      // 10000 to represent 100.00 dollars.

        public string Type {get; set; }

        public string Brand {get; set; }

        public int QuantityInStock {get; set; }
    }
}