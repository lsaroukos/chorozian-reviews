<?php
/**
 * Star rating template
 * 
 * @param float $rating
 */
?>


<div className="star-rating">

<?php 
    for ($index = 0; $index < 5; $index++) {
        if ($index + 1 <= $rating) {
            echo '<i class="star">★</i>';
        } elseif ($rating === $index + 0.5) {
            echo '<i class="star">⯪</i>';
        } else {
            echo '<i class="star">☆</i>';
        }
    }
?>

</div>