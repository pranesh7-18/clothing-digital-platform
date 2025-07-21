import './Products.css'
const Product = ({imgSrc,brand,name,price}) => {
    return (
        <div className="pro">
            <img src={imgSrc} />
            <div className="des">
                <span>{brand}</span>
                <h5>{name}</h5>
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h4><i className="fa-solid fa-tag"></i>${price}</h4>
            </div>
            <a href="#"><i className="fa-solid fa-shopping-cart cart"></i></a>
        </div>
    )
}


const Products = ({heading,title,des,imgLinks}) => {
    const demoBackendRespone = new Array(imgLinks.length);
    for(let i=0;i<imgLinks.length;i++){
        demoBackendRespone[i] = {id: i,imgSrc:imgLinks[i],brand:'Adidas',name:'Cartoon Astronaut T-Shirts',price:79.99}
    }
    let content=null
    if(heading) content=(<><h2>{title}</h2><p>{des}</p></>)
    return (
        <section className="products section-p1">
            {content}
            <div className="pro-container">
                {demoBackendRespone.map(({id,imgSrc,name,brand,price},index)=>{
                    return(
                        <Product key={id} imgSrc={imgSrc} name={name} brand={brand} price={price}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Products