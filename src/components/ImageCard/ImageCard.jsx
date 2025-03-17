import css from './ImageCard.module.css'

export default function ImageCard({ src, alt,likes }) {
    return (
       <div>
            <img src={src} alt={alt} />
       </div> 
    )
}