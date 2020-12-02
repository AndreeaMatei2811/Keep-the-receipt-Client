import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import { selectProducts } from "../../store/products/selectors";
import Category from "../../components/category/Category";
import { fetchProducts } from "../../store/products/actions";
import { selectUser } from "../../store/user/selectors";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { Formik, Field } from "formik";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// import { Autocomplete } from "formik-material-ui-lab";

import Button from "@material-ui/core/Button";

export default function InventoryPage() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  // console.log("products", products);
  const { id } = useSelector(selectUser);
  const [searchedProduct, set_searchedProduct] = useState("");
  console.log("searched", searchedProduct);

  // console.log(id);
  // console.log("do I get the categories?", categories);

  useEffect(() => {
    dispatch(fetchCategories(id));
    dispatch(fetchProducts(id));
  }, [dispatch, id]);

  const findProduct = products.find(
    (product) => searchedProduct === product.name
  );
  console.log("find", findProduct);

  return (
    <div>
      <Typography color="primary" variant="h6" style={{ margin: 20 }}>
        Inventory
      </Typography>

      <div>
        {" "}
        <Link
          to={`/inventory/${id}/newCategory`}
          style={{ textDecoration: "none" }}
        >
          <Button color="primary" variant="contained" style={{ margin: 20 }}>
            Add new category
          </Button>
        </Link>
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
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </div>

        <TableContainer
        // component={Paper}
        >
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
            <TableContainer
            // component={Paper}
            >
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
