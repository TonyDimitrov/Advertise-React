function Create() {
    return (
        <div className="container">
          <h2>Създайте обява</h2>
           
            <form action="action_page.php">

            <label htmlFor="category">Тип на обявата</label>
            <select id="category" name="category">
                <option value="1">Продава</option>
                <option value="3">Отдава под наем</option>
            </select> 
        
            <label htmlFor="title">Заглавие на обявата</label>
            <input type="text" id="title" name="title" placeholder="Продава непреходен тристаен..."/>

            <label htmlFor="description">Описание</label>
            <textarea id="description" name="description"
                    rows="3" cols="20" placeholder="Обзаведен непреходен тристаен..."></textarea>
  
            <label htmlFor="address">Адрес</label>
            <input type="text" id="address" name="address" placeholder=""/>
        
            <label htmlFor="town">Град</label>
            <input type="text" id="town" name="town" placeholder=""/>

            <label htmlFor="country">Държава</label>
            <input type="text" id="country" name="country" placeholder=""/>

            <label htmlFor="price">Цена</label>
            <input type="number" max="1000000" id="price" name="price" placeholder=""/>

            <label htmlFor="deposit">Депозит</label>
            <input type="number" max="100000" id="deposit" name="deposit" placeholder=""/>

            <label htmlFor="image">Снимка</label>
            <input type="file" id="image" name="image" placeholder=""/>

            <input type="submit" value="Submit"/>
        
            </form> 
      </div>
    );
  }
  
  export default Create;

//   public Category Category { get; set; }

//   public string Title { get; set; }

//   public DateTime ExpirationDate { get; set; }

//   public string ContactPerson { get; set; }

//   public string ContactPhone { get; set; }

//   public string ContactEmail { get; set; }


// public string Description { get; set; }

// public double Price { get; set; }

// public double? Deposit { get; set; }

// public string Lease { get; set; }

// public double DiscountedPrice { get; set; }

// public string Location { get; set; }

// public string Country { get; set; }

// public string Town { get; set; }