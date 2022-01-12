import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from "../Styles.js/search";
import add from "../assets/add.png";
import edit from "../assets/edit.png";
import trash from "../assets/trash.png";
import { useCategory } from "../hooks/useCategory";
import Category from "./Category";

function AllCategories() {
  const { category, recovery, handleCategory } = useCategory();

  function addCategories(e) {
    e.preventDefault();
    window.location.href = "./category";
  }
  /* function editCategory(e, datitos) {
    e.preventDefault();
    console.log(datitos)
    // window.location.href = "./category";

  } */
  return (
    <>
    {recovery === 'Category' ? (
        <Category />
    ) : (
        <><div>
                      <button onClick={addCategories} className="add-category">
                          <img src={add} alt="logo-img" className="add" /> Add new category
                      </button>
                      <Search>
                          <SearchIconWrapper>
                              <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                              placeholder="Search products"
                              inputProps={{ "aria-label": "search" }} />
                      </Search>
                  </div><div>
                          {category &&
                              category.map((card) => (
                                  <div key={card.id} className="Card">
                                      <img src={card.url} alt="img-Category" className="img-card" />
                                      <>
                                          <img
                                              onClick={() => {
                                                  handleCategory("Category");
                                              } }
                                              src={edit}
                                              alt="logo-img"
                                              className="edit" />
                                          <img
                                              src={trash}
                                              alt="logo-img"
                                              className="delete" />
                                      </>
                                  </div>
                              ))}
                      </div></>
    )}
      
    </>
  );
}

export default AllCategories;
