import './Star.css'

const Star = ({ percentage }) => {
    return (
        <div className="star-rating" aria-hidden="true" style={{
            "--fill": `${percentage * 100}%`
        }}>
            <span className="star-empty">★</span>
            <span className="star-filled">★</span>
        </div>
    );
}

export default Star;

//  style={`--fill: ${percentage * 100}%;`}