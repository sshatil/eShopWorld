import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // minWidth: 320,
    borderRadius: '10px',
    boxShadow: '0px 0px 14px lightGray',
  },
  media: {
    height: 180,
  },
  btn: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const ProductItem = ({ product }) => {
  const { title, description, price, _id } = product;
  const classes = useStyles();
  return (
    // <div>
    //   <img src={product.images.url} alt="" />
    // </div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.images.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.btn}>
        <Button size="small" color="primary">
          <Link to="/">Buy</Link>
        </Button>
        <Button size="small" color="primary">
          <Link to={`details/${_id}`}>View</Link>
        </Button>
      </div>
    </Card>
  );
};

export default ProductItem;
