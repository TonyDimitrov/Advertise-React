import { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import { Redirect, useLocation } from 'react-router'
import { postProperties } from "../services/postService" 

function Create() {

const [submitted, setSubmitted] = useState(false);

const sendData = (e) => {
    e.preventDefault();


let formData = new FormData(e.currentTarget);

    postProperties(undefined, formData)
    .then(response => {
        console.log('label 1');
        console.log(response);
        setSubmitted(true)
        });    
}

if (submitted) {
    return <Redirect push to={{
      pathname: '/properties'
    }}
    />
  }  

    return (
        <div className="container">
          <h2>Създайте обява</h2>
           
            <form method="post" enctype="multipart/form-data" onSubmit={sendData}>

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
            <input type="file" id="image" name="images" placeholder=""/>

            <label htmlFor="image">Снимка</label>
            <input type="file" id="image" name="images" placeholder=""/>

            <input type="submit" value="Създай обява"/>
        
            </form> 
      </div>
    );
  }
  
  export default Create;