import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteCategory } from "../../store/categories/actions";
import Product from "../../components/product/Product";
import { selectProducts } from "../../store/products/selectors";

import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  Button,
  Card,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    minWidth: 275,
    marginTop: 22,
    marginBottom: 12,
    padding: 20,
  },
  table: {
    minWidth: 650,
  },
}));

export default function Category(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(selectProducts);

  const onDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
  };

  const filteredProductsByCategoryId = products.filter(
    (product) => product.categoryId === props.id
  );

  return (
    <Card className={classes.root}>
      <Typography variant="h6">{props.name}</Typography>
      <span>
        <Link
          to={`/inventory/${id}/${props.id}/newProduct`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            style={{ margin: 20, backgroundColor: props.color }}
          >
            Add new product
          </Button>
        </Link>
      </span>
      <span>
        {" "}
        <Button
          style={{ marginLeft: 500 }}
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => onDeleteCategory(props.id)}
        >
          DELETE Category
        </Button>
      </span>

      <TableContainer>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          style={{ background: `${props.color}` }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Add to cart</TableCell>
              <TableCell align="center">Product name</TableCell>
              <TableCell align="center">Store</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Unit</TableCell>
              <TableCell align="center">minus</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">add</TableCell>
              <TableCell align="center">Delete product</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      {filteredProductsByCategoryId.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            store={product.store}
            price={product.priceInEuro}
            unit={product.unit}
            lastBought={product.lastBought}
            quantity={product.quantity}
          />
        );
      })}
    </Card>
  );
}
