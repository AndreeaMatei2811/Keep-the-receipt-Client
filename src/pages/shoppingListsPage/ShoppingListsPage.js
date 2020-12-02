import React, { useEffect, useState } from "react";
import { fetchShoppingList } from "../../store/shoppingList/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShoppingListFilteredByStore,
  allStores,
} from "../../store/shoppingList/selectors";
import { selectUser } from "../../store/user/selectors";
import { checkProduct } from "../../store/shoppingList/actions";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default function ShoppingListsPage() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      minWidth: 275,
      marginTop: 22,
      marginBottom: 12,
    },
    table: {
      minWidth: 650,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { id } = useSelector(selectUser);
  // const [filteredByStore, set_filteredByStore] = useState(shoppingList);
  const [storeFilter, setStoreFilter] = useState(null);
  const [shoppingQuantity, set_shoppingQuantity] = useState(1);
  const filteredByStore = useSelector(
    selectShoppingListFilteredByStore(storeFilter)
  );

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(fetchShoppingList(id));
  }, [dispatch, id]);

  // console.log("my shopping list", shoppingList);

  const onChangeSelect = (event) => {
    if (event.target.value === "All") {
      // set_filteredByStore(shoppingList);
      setStoreFilter(null);
    } else {
      // const filteredProducts = shoppingList.filter(
      //   (store) => store.store === event.target.value
      // );
      // set_filteredByStore(filteredProducts);
      setStoreFilter(event.target.value);
    }
  };

  const onCheckProduct = (id) => {
    dispatch(checkProduct(id));
  };

  const uniqueStores = useSelector(allStores);
  // console.log("unique", uniqueStores);
  // console.log("findAllStores", findAllStores);

  const prices = filteredByStore.map((product) => {
    return product.priceInEuro;
  });
  // console.log("prices", prices);
  const totalPrice = prices.reduce((a, b) => a + b, 0);

  return (
    <div>
      <Typography variant="h6" style={{ margin: 20 }}>
        Shopping Lists
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Select Store
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filteredByStore.store}
          onChange={onChangeSelect}
        >
          <option value="All">All stores</option>
          {uniqueStores.map((store) => {
            return <option value={store}>{store}</option>;
          })}
        </Select>
      </FormControl>

      <Card className={classes.root}>
        <TableContainer
        // component={Paper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Check product</TableCell>
                <TableCell align="center">Product name</TableCell>
                <TableCell align="center">Store</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Shopping quantity</TableCell>
              </TableRow>
            </TableHead>
            {filteredByStore.map((product) => {
              return (
                <TableBody key={product.id}>
                  <TableRow>
                    <TableCell align="center">
                      <IconButton
                        aria-label="check"
                        color="primary"
                        onClick={() => onCheckProduct(product.id)}
                      >
                        <CheckBoxIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.store}</TableCell>
                    <TableCell align="center">{product.priceInEuro}</TableCell>
                    <TableCell align="center">
                      <input
                        style={{ width: 40 }}
                        onChange={(event) =>
                          set_shoppingQuantity(
                            event.target.value * product.priceInEuro
                          )
                        }
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
            <TableRow>
              <TableCell align="right">
                Total Price (one of each) {totalPrice}
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}
