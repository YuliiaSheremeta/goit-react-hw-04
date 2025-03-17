import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ items }) {
    return (
        <ul className={css.list}>
            {items.map((item) => (
                <li key={item.id}>
                    <ImageCard src={item.urls.small} alt={item.description} likes={item.likes} />
                </li>
            ))}
	
       </ul>
    );
};