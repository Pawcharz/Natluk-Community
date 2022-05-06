// SCSS
import "./Fallback.scss"

const Fallback = () => {
    return (
        <div className="fallback">
            <img className="fallback__image" src="/images/loading-1.gif"/>
            <h5 className="fallback__text">loading...</h5>
        </div>
    )
}

export default Fallback;