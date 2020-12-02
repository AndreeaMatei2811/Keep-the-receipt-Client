import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import Alert from "@material-ui/lab//Alert";
import { clearMessage } from "../../store/appState/actions";
import Snackbar from "@material-ui/core/Snackbar";

export default function MessageBox() {
  const message = useSelector(selectMessage);

  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    // <Snackbar autoHideDuration={6000}>
    <Alert
      style={{ marginTop: 20 }}
      severity="info"
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      <strong> {message.text}</strong>
    </Alert>
    // </Snackbar>

    // <Alert
    //   show={showMessage}
    //   variant={message.variant}
    //   dismissible={message.dismissable}
    //   onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    // >
    //   {message.text}
    // </Alert>
  );
}
