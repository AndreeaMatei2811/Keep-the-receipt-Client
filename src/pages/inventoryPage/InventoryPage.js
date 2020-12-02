import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import { selectProducts } from "../../store/products/selectors";
import Category from "../../components/category/Category";
import { fetchProducts } from "../../store/products/actions";
import { selectUser } from "../../store/user/selectors";
import {
  Typography,
  TextField,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function InventoryPage() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#2e7c31",
        dark: "#004f04",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#bf360c",
        dark: "#ba000d",
        contrastText: "#fff",
      },
    },
  });

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);

  const { id } = useSelector(selectUser);
  const [searchedProduct, set_searchedProduct] = useState("");
  console.log("searched", searchedProduct);

  useEffect(() => {
    dispatch(fetchCategories(id));
    dispatch(fetchProducts(id));
  }, [dispatch, id]);

  const findProduct = products.find(
    (product) => searchedProduct === product.name
  );

  // console.log("find", findProduct);
  // console.log("products", products);
  // console.log(id);
  // console.log("do I get the categories?", categories);

  return (
    <div>
      <Typography variant="h6" style={{ margin: 20 }}>
        Inventory
      </Typography>

      <div>
        <MuiThemeProvider theme={theme}>
          {" "}
          <Link
            to={`/inventory/${id}/newCategory`}
            style={{ textDecoration: "none" }}
          >
            <Button color="primary" variant="contained" style={{ margin: 20 }}>
              Add new category
            </Button>
          </Link>
        </MuiThemeProvider>
      </div>
      <Card>
        <div style={{ width: 300, marginLeft: 20 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={products.map((product) => product.name)}
            onChange={(event, newValue) => {
              set_searchedProduct(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search product"
                margin="normal"
                // InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </div>

        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product name</TableCell>
                <TableCell align="center">Store</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Unit</TableCell>
                <TableCell align="center">Quantity</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>

        <div>
          {findProduct ? (
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{findProduct.name}</TableCell>
                    <TableCell align="center">{findProduct.store}</TableCell>
                    <TableCell align="center">
                      {findProduct.priceInEuro}
                    </TableCell>
                    <TableCell align="center">{findProduct.unit}</TableCell>
                    <TableCell align="center">{findProduct.quantity}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div></div>
          )}
        </div>
      </Card>

      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            id={category.id}
            name={category.name}
            color={category.color}
            products={category.products}
          />
        );
      })}
    </div>
  );
}
