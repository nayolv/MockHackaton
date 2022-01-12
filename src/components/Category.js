import React, { useState } from "react";
/* import { Header } from './Header'
import { Header } from './Header' */
import "./AdmCategory.scss";

function CategoryPage({ recovery }) {
    function backCategories(e) {
        e.preventDefault();
        window.location.href = "./allCategories";
      }
  /* const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
          setCategories((cats) => [inputValue, ...cats]);
          setInputValue("");
        }
      };*/
  return (
    <>
      {recovery ? (
        <div className="divCategories">
          <h1>CATEGORY</h1>
          <button  className= "btnCategory" onClick={backCategories}>
                <img src="https://i.ibb.co/pvDKWpc/150519-1.png" alt="150519-1" border="0" />Back to categories list</button> 
          <div className="categories">
          <input className ="categoryName" type="text" placeholder='category name'></input>
                <div className = "folderCategory">
                <input className ="categoryImage"type ="text" placeholder='category image'></input> 
                <img className= "imgFolder" src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> 
                </div>
                <input className ="description" type ="text" placeholder='description'></input>
          </div>
          <div className="buttons">
          <button className='btnSave'> Save </button>
            <button className='btnDelete'> Delete </button>
          </div>
        </div>
      ) : (
        <div className="divCategories">
                    <h1>CATEGORY</h1>
          <button  className= "btnCategory" onClick={backCategories}>
                <img src="https://i.ibb.co/pvDKWpc/150519-1.png" alt="150519-1" border="0" />Back to categories list</button> 
          <div className="categories">
          <input className ="categoryName" type="text" placeholder='category name'></input>
                <div className = "folderCategory">
                <input className ="categoryImage"type ="text" placeholder='category image'></input> 
                <img className= "imgFolder" src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> 
                </div>
                <input className ="description" type ="text" placeholder='description'></input>
          </div>
          <div className="buttons">
          <button className='btnSave'> Save </button>
            <button className='btnDelete'> Delete </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryPage;
