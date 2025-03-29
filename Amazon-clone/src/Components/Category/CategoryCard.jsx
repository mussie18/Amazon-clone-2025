import styles from "./category.module.css";

const CategoryCard = ({ data }) => {
  return (
    <div className={styles.category}>
      <a href={data.name}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
};

export default CategoryCard;
