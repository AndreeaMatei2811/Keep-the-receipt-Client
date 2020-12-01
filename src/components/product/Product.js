import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/products/actions";
import { increaseQuantity } from "../../store/products/actions";
import { decreaseQuantity } from "../../store/products/actions";
import { addProductToShoppingList } from "../../store/shoppingList/actions";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";

import TableRow from "@material-ui/core/TableRow";

// import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Product(props) {
  const classes = useStyles();
  const [quantity, set_quantity] = useState(props.quantity);
  // console.log("what is quantity", quantity);

  const dispatch = useDispatch();

  const onDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  function onPlusProduct(productId) {
    dispatch(increaseQuantity(productId, quantity + 1));
    set_quantity(quantity + 1);
  }

  function onMinusProduct(productId) {
    console.log("quantity", quantity);
    if (quantity > 0) {
      dispatch(decreaseQuantity(productId, quantity - 1));
      set_quantity(quantity - 1);
    } else {
      addToShopping(props.id);
    }
  }

  const addToShopping = (productId) => {
    dispatch(addProductToShoppingList(productId));
  };

  return (
    <div className={classes.root}>
      <div>
        <TableContainer
        // component={Paper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow style={{ background: `${props.color}` }}>
                <TableCell align="center">
                  <IconButton
                    onClick={() => addToShopping(props.id)}
                    color="primary"
                    aria-label="add to shopping cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">{props.name}</TableCell>
                <TableCell align="center">{props.store}</TableCell>
                <TableCell align="center">{props.price}</TableCell>
                <TableCell align="center">{props.unit}</TableCell>

                <TableCell align="center">
                  <IconButton
                    aria-label="add"
                    color="primary"
                    onClick={() => onMinusProduct(props.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  {quantity}{" "}
                  <IconButton
                    aria-label="add"
                    color="primary"
                    onClick={() => onPlusProduct(props.id)}
                  >
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    onClick={() => onDeleteProduct(props.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
