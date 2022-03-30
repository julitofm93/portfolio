import "./product.css"
const Product = ({img,link,data,title,repo}) => {
    return(
      <div class="portfolio__item">
      <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
      <picture>
        <source type="image/jpeg" srcset={img} />
        <img class="portfolio__img" alt="portfolio item" />
      </picture>
      <div class="portfolio__description">
        <h3 class="portfolio__description--title">{title}</h3>
        <p class="portfolio__description--text">
         {data}
        </p>
        <div class="buttons__container">
          <a
            class="button"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-globe-americas"></i> Demo
          </a>
          <a
            class="button"
            href= {repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i> Repository
          </a>
        </div>
      </div>
    </div>
    )
}

export default Product

/* <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank">
                <img src={img} alt="" className="p-img" />
            </a>
        </div> */