import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Form from './Form';
import UploadLogo from './images/canette-fanta.png'


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    marginTop: '12%',
    marginLeft: '32%',
    height: 300,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
    <Form/>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        <img className="canette" src={UploadLogo} alt="" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        {body}
      </Modal>
    </div>
  );
}
