import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';


export default function SearchBar({ onSubmit }) { 
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const image = form.elements.image.value;

        if (image.trim() === '') {
          toast('Please enter search term!');
            return;    
        }
        onSubmit(image);
        form.reset();
    };
    return (
    <header className={css.header}>
         <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.input}
                    type="text"
                    placeholder="Search images and photos"
                    name='image'
    />
        <button className={css.button} type="submit">Search</button>
     </form>
</header>

    );
};
