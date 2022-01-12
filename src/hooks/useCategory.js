import { useEffect, useState } from "react";
import { dataApi } from "../data/dataApi";

export const useCategory = () => {
  const [category, setCategory] = useState([]);
  const [recovery, setRecovery] = useState('allCategories');

  const handleCategory = (typeCategory) => {
    setRecovery(typeCategory);
  };

/*   const getRecoveryData = (e, data) =>{
    e.preventDefault();
    setRecovery(data);
  } */

  const getCategory = async () => {
    const resp = await dataApi.get("http://localhost:5000/categories");
    setCategory(resp.data);
    console.log(category);
  };

  useEffect(() => {
    getCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    category,
    getCategory,
    recovery,
    handleCategory
  };
};
