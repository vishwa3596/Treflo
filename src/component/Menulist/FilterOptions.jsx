import { Badge, Box } from "@mui/material"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ShoppingBagOutlined } from "@mui/icons-material";
import { pizzaStore } from "../../CentralStore/CentralStore"
import { useState } from "react";

const FilterOptions = ({curPageData, currentPage}) => {
	const [cartSize, onUpdatingCartSize] = useState(pizzaStore.getState().CentralReducer.order.length);
	console.log(curPageData);
	pizzaStore.subscribe(() => {
		let response = pizzaStore.getState();
		let cart = response.CentralReducer.order
		onUpdatingCartSize(cart.length);
		//onUpdatingPage(curPageData);
	})
	const handleChange = (event, newValue) => {
		currentPage(newValue);
	};
	return (
		<Box sx={{
			display: "flex",
			flexDirection: "row",
			justifyContent: "start"
		}}>
			<Tabs
				value={curPageData}
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="secondary tabs example"
				sx={{
					borderBottom: 1,
					width: "100%",
					borderColor: "divider"
				}}
			>
			<Tab value="one" label="Overview" sx={{
				textTransform: "none",
				fontFamily: "Roboto",
				fontSize: "1rem"
			}}/>
			<Tab value="two" label="Order Online" sx={{
				textTransform: "none",
				fontFamily: "Roboto",
				fontSize: "1rem"
			}}/>
			<Tab value="three" icon={<ShoppingBagOutlined/>} 
			label = {<Badge badgeContent={cartSize} color="secondary"></Badge>} 
			iconPosition="bottom"/>
			</Tabs>
		</Box>
	)
}

export default FilterOptions;