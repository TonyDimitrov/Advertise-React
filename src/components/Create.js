import { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import { Redirect, useLocation } from 'react-router'
import { postProperties } from "../services/postService" 

function Create() {

const [submitted, setSubmitted] = useState(false);
const [imageInputList, setImageImput] = useState([1]);
const sendData = (e) => {
    e.preventDefault();


let formData = new FormData(e.currentTarget);

    postProperties(undefined, formData)
    .then(response => {
        setSubmitted(true)
        });    
}

const handleAddClick = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let lastElement = imageInputList.slice(-1);
  setImageImput([...imageInputList, ++lastElement]);
};

const handleRemoveClick = (e, index) => {

  e.preventDefault();
  e.stopPropagation();

  var list = [...imageInputList];
  list.splice(index, 1);
  console.log(index);
  console.log(list);

  setImageImput(list);
};

if (submitted) {
    return <Redirect push to={{
      pathname: '/properties'
    }}
    />
  }  

    return (
        <div className="container">
          <h2>Създайте обява</h2>
           
            <form method="post" encType="multipart/form-data" onSubmit={sendData}>

            <label htmlFor="category">Тип на обявата</label>
            <select id="category" name="category">
                <option value="1">Продава</option>
                <option value="3">Отдава под наем</option>
            </select> 
        
            <label htmlFor="title">Заглавие на обявата</label>
            <input type="text" required id="title" name="title" placeholder="Продава непреходен тристаен..."/>

            <label htmlFor="description">Описание</label>
            <textarea id="description" name="description"
                    rows="3" cols="20" placeholder="Обзаведен непреходен тристаен..."></textarea>
  
            <label htmlFor="location">Адрес</label>
            <input type="text" id="location" name="location" placeholder=""/>
        
            <label htmlFor="town">Град</label>
            <input type="text" id="town" name="town" placeholder=""/>

            <label htmlFor="country">Държава</label>
            <input type="text" id="country" name="country" placeholder=""/>

            <label htmlFor="price">Цена</label>
            <input type="number" min="1" max="1000000" id="price" name="price" placeholder=""/>

            <div hidden>
              <label htmlFor="deposit">Депозит</label>
              <input type="number" max="100000" id="deposit" name="deposit" placeholder=""/>
            </div>

            <label htmlFor="contactPerson">Лице за контакт</label>
            <input type="text"  id="contactPerson" name="contactPerson" placeholder=""/>

            <label htmlFor="contactPhone">Телефон</label>
            <input type="text"  id="contactPhone" name="contactPhone" placeholder=""/>

            <label htmlFor="contactEmail">Имейл</label>
            <input type="text"  id="contactEmail" name="contactEmail" placeholder=""/>
            {
              imageInputList.map((val, i) => {
                 return (
                  <div  key={val}>          
                    <label htmlFor={`image-${val}`}>Снимка</label>
                    <br/>            
                    <input type="file" className="image" id={`image-${val}`} name="images" placeholder=""/>
                    <button className="delete-image" onClick={(e) => handleRemoveClick(e, i)}>Изтрий</button>
                  </div> 
              )})
            }
         
            <div>
               <input type="submit" className="add-image" onClick={handleAddClick} value="+Снимка"/>
            </div> 
            <input type="submit" value="Създай обява"/>
        
            </form> 
      </div>
    );
  }
  
  export default Create;

  // public string ContactPerson { get; set; }

  // //[MaxLength(ValidationConstants.AdContactPhoneMaxLen)]
  // //[MinLength(ValidationConstants.AdContactPhoneMinLen)]
  // public string ContactPhone { get; set; }

  // //[EmailAddress]
  // public string ContactEmail { get; set; }