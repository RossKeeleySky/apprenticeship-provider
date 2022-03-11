import { useState } from "react"

export const Image = props => {
  const [title, setTitle] = useState('');
  const [heart, setHeart] = useState(false);
  const [inStock, setInStock] = useState(props.stockLevel > 0);
  const overlayStyles = {
    position: 'absolute',
    bottom: '0.5rem',
    left: '0.5rem',
    fontSize: '2rem',
    "text-decoration": inStock ? "" : "line-through",
    color: inStock ? "" : "grey"
  }

  const showTitle = () => {
    setTitle(props.image.title);
  };

  const hideTitle = () => {
    setTitle("");
  }
  return (
    <figure 
      style={{position: 'relative'}} 
      onClick={() => setHeart(!heart)}
      onMouseEnter={showTitle}
      onMouseLeave={hideTitle}
    >
    <img src={props.image.imageSrc} alt={props.image.title} />
    <figcaption style={overlayStyles}>{heart ? '❤️' : ''} {title}</figcaption>
    </figure>
  )
}