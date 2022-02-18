import React,{ useState } from 'react';
import { Container, Grid, Box, Typography, Modal, Button  } from '@material-ui/core';
import useStyles from './styles';



function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
     const classes = useStyles(); 
    return (
        <footer className={classes.footer} >         
        <Grid container className={classes.container}>
          <Grid item xs={12}>
          <Typography variant="h6" color="inherit" align='center'>
                NGX Store
            </Typography>           
            <Typography  align='center'>
                Đồ án Cửa hàng TMĐT cho môn CNPM
            </Typography>
            <Typography variant="body1" color="inherit" align='center'>
            <Button onClick={handleOpen}>Chú ý khi thanh toán</Button>
            </Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Chú ý khi thanh toán
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  test payment card: 4242 4242 4242 4242, MM/YY/CVC: 04 / 24 242 42424
                </Typography>
              </Box>
            </Modal>
            </Grid>
        </Grid>
        
        </footer>
    )
}

export default Footer
