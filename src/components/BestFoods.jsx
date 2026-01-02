import "./BestFoods.css"
import image from "./biriyani.jpeg"
import pizza from "./pizza.jpg"
import chicken from "./chicken.jpg"

function BestFoods() {
    return(
        <div className="bigBox">
            <h1 className="head">Our Best Sellers</h1>
            <br></br>
            <div className="smallBox">
                <div className="box1">
                  <img src={pizza} className="img1"></img>
                  <h3>Pizza</h3>
                </div>
                <div className="box2">
                   <img src={image} className="img2"></img>
                   <h3>Biriyani</h3>
                </div>
                <div className="box3">
                   <img src={chicken} className="img3"></img>
                   <h3>Fried Chicken</h3>
            </div>
        </div>
        </div>
    );

}

export default BestFoods;