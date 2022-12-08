import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Dialogfp() {
  const [open, setOpen] = React.useState(false);
  const [rstopen, setRestopen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const HandleSubmitEmail = () => {
    setRestopen(true);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        Forgot password?
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your registered Email to reset your password.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <br />
          <br />

          <Button
            className="center"
            variant="contained"
            onClick={HandleSubmitEmail}
          >
            Send OTP
          </Button>
          <br />
          {rstopen && (
            <>
              <TextField
                autoFocus
                margin="dense"
                id="otp"
                label="Enter OTP"
                type="number"
                variant="standard"
              />
              <br />
              <TextField
                margin="dense"
                id="passcode"
                label="Enter new password"
                type="password"
                n
                variant="standard"
              />
              <br />
              <TextField
                margin="dense"
                id="conpasscode"
                label="Confirm password"
                type="password"
                variant="standard"
              />
              <br />
              <br />

              <Button
                className="center"
                variant="contained"
                // onClick={}
              >
                Change password
              </Button>
              <br />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back to Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
