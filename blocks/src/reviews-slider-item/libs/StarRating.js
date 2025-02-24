 export default function StarRating( props ){

    const rating = props.rating ?? 0;

    return (
        <div className="star-rating">
            { Array.from({ length: 5 } , ( _, index )=>{

                if( index+1 <= rating )
                    return <i key={index} className="star">★</i>
                else if ( rating === index+0.5 )    //index+1 === rating+0.5
                    return <i key={index} className="star">⯪</i>
                else{
                    return <i key={index} className="star">☆</i>
                }
            }) }
        </div>
    )

}