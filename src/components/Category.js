import React, { useState } from "react";
/* import { Header } from './Header'
import { Header } from './Header' */
import "./AdmCategory.scss";


function CategoryPage({ recovery, defaultData, editUser }) {
  
function backCategories(e) {
        e.preventDefault();
        window.location.href = "./allCategories";
      }
  return (
    <>
      {recovery ? (
        <div className="divCategories">
            <section className="top">
          <button  className= "btnCategory" onClick={backCategories}>
                <img src="https://i.ibb.co/pvDKWpc/150519-1.png" alt="150519-1" border="0" />Back to categories list</button> 
          <h1>{recovery.name}</h1>
            </section>
          <div className="categories">

            <input
              className="categoryName"
              name="name"
              type="text"
              defaultValue={recovery.name}
              onChange={(e)=>defaultData(e)}
            >
              {/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}
            </input>
                <div className = "folderCategory">
            <input name="url" className="categoryImage" type="text" defaultValue={recovery.url}
              onChange={defaultData}></input>
              <img className= "imgFolder" src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> 
                </div>

            <input name="description" className="description" type="text" defaultValue={recovery.description}
              onChange={defaultData}></input>
          </div>
          <div className="buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                editUser(recovery.id);
                window.location.href = "./allCategories"
              }}
            >
              Save
            </button>
            <button> Delete </button>
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
