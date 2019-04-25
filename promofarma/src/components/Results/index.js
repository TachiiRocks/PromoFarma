import React , {Component} from 'react'
import items from '../../data'
import logic from '../../logic';
import './index.css'


class Results extends Component {    

    state = {list : [],flag: false,listPrice: [],actualPrices: 0} 


    handleItems = (item,list,listPrice) => {
        const {state:{flag}} = this
        try{
            logic.toogleItems(item,list,listPrice)
                flag === true ? this.setState({flag: false}) : this.setState({flag: true})
        }catch{
            console.error('error')
        }
    }

    sumlistPrice = (listPrice,actualPrices) => {
        for(var i = 0;i<listPrice.length;i++){
            actualPrices = actualPrices + listPrice[i]
        }

        actualPrices = actualPrices.toFixed(2).replace('.' , ',')
        return actualPrices
    }

    changeElements(price){
        const newPrice = price.toFixed(2).replace('.' , ',')
        return newPrice
    }

    render() { 
        const {handleItems,sumlistPrice,changeElements, state:{list,listPrice,actualPrices}} = this
        console.log(list)
        return (
            <section className="home">
                <div>
                    {items.map(item => (
                        <div className="home__products" >
                            <div className="home__products-name">
                                <p className="home__products-name-paragraph">{item.name}</p>
                            </div>
                            <div className="home__products-carting">
                                <div className="home__products-price">
                                    <p className={!(list.includes(item)) ? 
                                        "home__products-price--add" :
                                        "home__products-price--noadd"  }  
                                        ><strong>{changeElements(item.price) + ' €'}</strong></p>
                                </div>
                                <div className="home__products-car">
                                    <div className={!(list.includes(item)) ? 
                                        "home__products-car--add" :
                                        "home__products-car--noadd"  }  
                                        onClick={e => handleItems(item,list,listPrice)}>
                                        <img className="home__products-car-img" src="/images/add-to-cart.png" alt="hola" />   
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) 
                    )}
                </div>
                    <div className="home__cart">
                        <div className="home__cart-trolley">
                            <p className="home__cart-trolley-paragraph">MI CESTA:</p>
                        </div>
                     
                        {list.map(item => (
                            <div className="home__cart-products">
                                <div className="home__cart-products-img">
                                    <img className="home__cart-products-img-image" src={item.img} />
                                </div>
                                <div className="home__cart-products-name">
                                    <p>{item.name}</p>   
                                </div>
                                <div className="home__cart-products-price">
                                    <p><strong>{changeElements(item.price)} € </strong></p>
                                </div>
                            </div>
                        ))}
                        <div className="home__cart-total">
                            <div className="home__cart-total-products">
                                <p><strong>TOTAL</strong> ({list.length} {list.length === 1 ? 'Producto' : 'Productos'})</p>
                            </div>
                            <div className="home__cart-total-price">
                                <p><strong>{sumlistPrice(listPrice,actualPrices)} € </strong></p>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Results