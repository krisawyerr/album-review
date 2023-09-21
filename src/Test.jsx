export default function Test(props) {
    let rating = props.item.rating

    let ratingcolor 
    
    if (rating === 'bad') {
        ratingcolor = "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
    } else if (rating === 'mid') {
        ratingcolor = "https://htmlcolorcodes.com/assets/images/colors/yellow-color-solid-background-1920x1080.png"
    } else if (rating === 'good') {
        ratingcolor = "https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png"
    } else if (rating === 'GodTier') {
        ratingcolor = "https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"
    } else {
        ratingcolor = "https://htmlcolorcodes.com/assets/images/colors/white-color-solid-background-1920x1080.png"
    }


    return (
        <div className="songGrids">
            <div className="songGrid">
                    <div>
                        <img src={props.item.img} height={200} className="songImg"/>
                    </div>
                    <div className="songGridStats">
                        <p><span>Title:</span> {props.item.title}</p>
                        <p><span>Artist:</span> {props.item.artist}</p>
                        <p><span>Tracklist:</span> {props.item.track}</p>
                        <p><span>Time:</span> {props.item.time}</p>
                    </div>
                    <div className="songGridRating">
                        <p className="wordRating">Rating:</p>
                        <img src={ratingcolor} alt=""  height={157} width={157} className="ratingBox"/>
                    </div>
            </div>
        </div>
    )
}