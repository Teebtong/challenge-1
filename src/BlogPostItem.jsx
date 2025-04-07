import { Link } from "react-router-dom";
import styles from './BlogPostItem.module.css';

const BlogPostItem = ({ title, url, summary, date }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  
  return (
    <div className={styles.blogPostItem}> 
      <Link 
        to={url} 
        className={styles.title}
        style={{ textDecoration: 'none', color: '#333' }}
        onMouseOver={(e) => e.target.style.color = '#007bff'}
        onMouseOut={(e) => e.target.style.color = '#333'}
      >
        <h2>{title}</h2>
      </Link> 
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p> 
    </div> 
  );
};

export default BlogPostItem; 