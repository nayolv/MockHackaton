import React from 'react'
import "./AdmCategory.scss"

function Category() {
    function backCategories(e) {
        e.preventDefault();
        window.location.href = "./allCategories";
      }

    return (
        <>
        <div className = 'divCategories' >
            <h1>CATEGORY</h1>
            <button  className= "btnCategory" onClick={backCategories}>
                <img src="https://i.ibb.co/pvDKWpc/150519-1.png" alt="150519-1" border="0" />Back to categories list</button> 
            <div className ="categories">
                <input className ="categoryName" type="text" placeholder='category name'></input>
                <div className = "folderCategory">
                <input className ="categoryImage"type ="text" placeholder='category image'></input> 
                <img className= "imgFolder" src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> 
                </div>
                <input className ="description" type ="text" placeholder='description'></input>
            </div>
            <div className='buttons'>
            <button className='btnSave'> Save </button>
            <button className='btnDelete'> Delete </button>
            </div>
        </div>
        </>
    )
}

export default Category
