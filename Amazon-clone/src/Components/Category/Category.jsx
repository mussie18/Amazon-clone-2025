import styles from "./category.module.css";
import CategoryCard from "./CategoryCard";
import categoryData from "./categoryData";

const Category = () => {
  return (
    <div className={styles.category_container}>
      {categoryData?.map((data, i) => (
        <CategoryCard key={i} data={data} />
      ))}
    </div>
  );
};

export default Category;
