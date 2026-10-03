import './Star.css'

const Star = ({ percentage }) => {
    return (
        <div class="star-rating" style={{
            "--fill": `${percentage * 100}%`
        }}>
            <span class="star-empty">★</span>
            <span class="star-filled">★</span>
        </div>
    );
}

export default Star;

//  style={`--fill: ${percentage * 100}%;`}