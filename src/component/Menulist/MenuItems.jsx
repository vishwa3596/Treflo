import { Button, CardMedia, Grid, Typography, Box, Divider } from "@mui/material";
import Rating from '@mui/material/Rating';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { grey } from "@mui/material/colors"
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { pizzaStore } from "../../CentralStore/CentralStore";
import ButtonGroup from '@mui/material/ButtonGroup';

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

const MenuItems = ({value}) => {
	const [open, setOpen] = useState(false);
	const [pizzaSize, setValue] = useState('');
	const [toppings, onChoosingToppings] = useState([])
	const [pizzaQnty, onUpdatingPizzaQnty] = useState(0);
	//console.log(value);
	const handleChange = (event) => {
	  setValue(event.target.value);
	};

	const handleToppings = (event) => {
		if (value.toppings[0].isRadio === true) {
			onChoosingToppings(event.target.value);
		}
		else {
			let curToppingList = [...toppings]
			let idx = curToppingList.indexOf(event.target.value);
			if(idx !== -1) {
				curToppingList.splice(idx, 1);
			}else {
				curToppingList = [...curToppingList, event.target.value]
			}
			onChoosingToppings(curToppingList);
		}
		
	}

	const incrementingPizzaQnty = () => {
		onUpdatingPizzaQnty(prevState => prevState+1);
	}

	const decrementingPizzaQnty = () => {
		onUpdatingPizzaQnty(prevState => prevState-1);
	}

	const onPlacingOrder = () => {
		
		const order = {
			"name": value.name,
			"size": pizzaSize,
			"qnty": pizzaQnty,
			"toppings": toppings,
			"price": value.price,
			"total": parseInt(pizzaQnty)*parseInt(value.price),
			"image": value.img_url
		}

		console.log(order);
		pizzaStore.dispatch({type: "appendToOrderList", payload: order})
		setValue('');
		onUpdatingPizzaQnty(0);
		onChoosingToppings([]);
		handleClose();
	}

	const onAddingItem = () => {
		setOpen(true);
	}
	const handleClose = () => setOpen(false);
	return (
		
		<Grid container direction="row" sx={{
			paddingLeft: "10px",
			paddingTop: "10px",
			width: "100%",
			marginBottom: "25px"
		}}>
			
			<Grid item xs={2} >
				<CardMedia component="img" 
					sx={{width: "100%", height: "100%", borderRadius: "5px"}} 
					image={value.img_url}
					alt="img"
				/>
			</Grid>
			<Grid item xs={10} sx={{
				paddingLeft: "10px"
			}}>
				<Grid container direction="row" >
					<Grid item xs={10}>
						<Typography component="div" sx={{
							fontFamily: "Roboto",
							fontSize: "1.2rem"
						}}>
							{value.name}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Button variant="contained" onClick={onAddingItem}>
							Add
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Rating 
						precision={0.1}
						name="size-small" 
						defaultValue={value.rating} 
						size="small" />
					</Grid>
					<Grid item>
						<CurrencyRupeeIcon 
						sx={{
							height: 15,
							width: 15,
							color: grey[600]
						}}/>
					</Grid>
					<Grid item xs={11}>
						<Typography 
						color="text.secondary"
						sx={{
							fontFamily: "Roboto",
						}}>
							{value.price}
						</Typography>
					</Grid>
					<Grid item xs={10}>
						<Typography component="div" color="text.secondary" sx={{
							fontFamily: "Roboto"
						}}>
							{value.description}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
      		>
			<Box sx={style}>
				<Grid container direction="row" justifyContent="space-evenly" alignContent="center">
					<Grid item xs={12}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
						{value.name}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<FormLabel id="demo-controlled-radio-buttons-group">Size</FormLabel>
							<RadioGroup
								aria-labelledby="demo-controlled-radio-buttons-group"
								name="controlled-radio-buttons-group"
								value={pizzaSize}
								onChange={handleChange}
							>
								{value.size[0].items.map((e, index) => <FormControlLabel 
								key = {index}
								value={e.size} 
								control={<Radio />} label={e.size} />)}
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
					<FormControl>
							<FormLabel id="demo-controlled-radio-buttons-group">Toppings</FormLabel>
							{value.toppings[0].isRadio === true ? <RadioGroup
								aria-labelledby="demo-controlled-radio-buttons-group"
								name="controlled-radio-buttons-group"
								value={toppings}
								onChange={handleToppings}
							>
								{value.toppings[0].items.map((e,index) => <FormControlLabel 
									key={index}
									value={e.name} 
									control={<Radio />} 
									label={e.name} 
								/>)}
							</RadioGroup>: <FormGroup onChange={handleToppings}> 
								{value.toppings[0].items.map((e, index) => 
								<FormControlLabel 
									key={index} 
									control={<Checkbox />} 
									label={e.name}
									value={e.name}
								/>)}
    							</FormGroup>}
						</FormControl>
					</Grid>
					<Grid item xs={8}>
						<ButtonGroup size="small" aria-label="small outlined button group">
						<Button onClick={incrementingPizzaQnty}>+</Button>
						{pizzaQnty > 0 && <Button disabled>{pizzaQnty}</Button>}
						{pizzaQnty > 0 && <Button onClick={decrementingPizzaQnty}>-</Button>}
      					</ButtonGroup>
					</Grid>
					<Grid item xs={4}>
						<Button onClick={onPlacingOrder} variant="contained">Order</Button>
					</Grid>
				</Grid>
			</Box>
      		</Modal>
		</Grid>
	)
}

export default MenuItems;