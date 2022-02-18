import React,{ useState} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

const  Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    

    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media}  image={product.image.url} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name.length > 15 ? product.name.slice(0,12)+'...' :  product.name }
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_code}
                    </Typography>                    
                </div>
                <Typography dangerouslySetInnerHTML={{ __html:product.description}} variant="body2" color='textSecondary' />
                        {/* dangerouslySetInnerHTML: lấy api nhưng dữ liệu bị render ra html nên sử dụng cái cái này */}                    
            </CardContent>
            <CardActions disableSpacing  className={classes.cardActions}>
                <IconButton aria-label="add to cart" onClick={() =>onAddToCart(product.id, 1) }>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
