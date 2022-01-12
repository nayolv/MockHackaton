import React, { useState } from "react";
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
import CategoryPage from "./Category";

function AllCategories() {
  const { category } = useCategory();
  const [recovery, setRecovery] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
  });
  const [conditionalRender, setConditionalRender] = useState(true);

  function admCategory(e) {
    e.preventDefault();
    window.location.href = "./category";
  }

  return (
    <>
      {conditionalRender ? (
        <>
        <div className="search">
            <button className="add-category" onClick={admCategory}>
              <img src={add} alt="logo-img" className="add" /> Add new category</button>
        <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search products"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
        </div>            
            <div className="grid-categories">
              {category &&
                category.map((card) => (
                  <div key={card.id} className="Card">
                    <img
                      src={card.url}
                      alt="img-Category"
                      className="img-card"
                    />
                    <section className='crud-btns'>
                    <img
                      src={edit}
                      alt="logo-img"
                      className="edit"
                      onClick={(e) => {
                        e.preventDefault();
                        setConditionalRender(false);
                        setRecovery({
                          id: card.id,
                          name: card.name,
                          description: card.description,
                          url: card.url,
                        });
                      }}
                    />
                    <img src={trash} alt="logo-img" className="delete" />
                    </section>
                  </div>
                ))}
            </div>
        </>
      ) : (
        <CategoryPage recovery={recovery} />
      )}

    </>
  );
}

export default AllCategories;
