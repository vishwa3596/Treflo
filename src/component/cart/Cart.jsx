import { Grid, Typography, Modal, Box, CardMedia } from "@mui/material";
import { useState } from "react";
import { pizzaStore } from "../../CentralStore/CentralStore";
import CartItem from "./CartItem";
import { grey } from "@mui/material/colors"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

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

const Cart = () => {
	const [open, setOpen] = useState(true);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);
	const [cartData, onUpdatingCartData] = useState(pizzaStore.getState().CentralReducer.order)
	return(
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
      	>
        	<Box sx={style}>
          	<Typography id="modal-modal-title" variant="h6" component="h2">
            		Cart
          	</Typography>
			{cartData.length === 0 && <Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Cart Feels Light
				  </Typography>}
			{cartData.length > 0 && cartData.map((e,index) => 
			
			<Grid container direction="row" justifyContent="center" alignContent="center" sx={{
				paddingLeft: "10px",
				paddingTop: "10px",
				width: "100%",
				marginBottom: "25px"
			}}>
				<Grid item xs={2} >
					<CardMedia component="img" 
						sx={{width: "100%", height: "100%", borderRadius: "5px"}} 
						image={e.image}
						alt="img"
					/>
				</Grid>
				<Grid item xs={10}>
					<Grid container direction="row" sx={{
						paddingLeft: "10px"
					}}>
						<Grid item xs={7}>
							<Typography component="div" sx={{
								fontFamily: "Roboto",
								fontSize: "1.2rem"
							}}>
								{e.name}
							</Typography>
						</Grid>
						<Grid item>
						<CurrencyRupeeIcon 
							sx={{
								height: 15,
								width: 15,
								color: grey[600]
							}}/>
						</Grid>
						<Grid item xs={4}>
							<Typography 
							color="text.secondary"
							sx={{
								fontFamily: "Roboto",
							}}>
								{e.price}
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography 
								color="text.secondary"
								sx={{
									fontFamily: "Roboto",
								}}>
								Quantity - {e.qnty}
							</Typography>
						</Grid>
						<Grid item>
							<CurrencyRupeeIcon 
								sx={{
									height: 15,
									width: 15,
									color: grey[600]
								}}/>
						</Grid>
						<Grid item xs={5}>
							<Typography 
								color="text.secondary"
								sx={{
									fontFamily: "Roboto",
								}}>
								Total - {e.total}
							</Typography>
						</Grid>
						{e.toppings.map((e, index) => <>
							
						
						</>)}
					</Grid>
				</Grid>
			</Grid>
			)}
        	</Box>
      </Modal>
	)
}

export default Cart;