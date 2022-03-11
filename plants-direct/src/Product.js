import { Image } from "./Image"

export const Product = (props) => {
  const {
      name,
      images,
      description,
      features,
      stockLevel
  } = props.product
  
  return (
      <article className="product">
          <h3>{name}</h3>
          <ul>
          {
            images.map((image) => {
              return (
                <li key={image.imageId}>
                  <Image image={image} stockLevel={stockLevel} />
                </li>
              )
            })
          }
          </ul>
          <p>
              {description}
          </p>
          <ul>
              {
                features.map((feature) => {
                  return <li>{feature}</li>
                })
              }
          </ul>
          <p>{stockLevel > 0 ? `Only ${stockLevel} left in stock!!!` : "OUT OF STOCK"}</p>
          <p>&pound;6.99</p>
          <div className="promo-blocks__actions">
              <a className="button--anchor">
              Full Details
              </a>        
              <button>
              Add to cart
              </button>
          </div>            
      </article>
  )
}