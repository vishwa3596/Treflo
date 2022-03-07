import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { pizzaStore } from "../../CentralStore/CentralStore"
import MenuItems from "./MenuItems"

const MenuList = ({value}) => {
	//const [ItemList, onUpdatingItemList] = useState([])
	let ItemList=[];
	
	if(value === "All"){
		ItemList = (pizzaStore.getState().CentralReducer.Items)
	}
	if(value === "Veg"){
		ItemList = (pizzaStore.getState().CentralReducer.VegItems);
	}
	if(value === "NonVeg"){
		ItemList = (pizzaStore.getState().CentralReducer.NonVegItems);
	}
	if(value === "IP") {
		ItemList = (pizzaStore.getState().CentralReducer.IncreasingPrice);
	}
	if(value === "IR"){
		ItemList = (pizzaStore.getState().CentralReducer.IncreasingRating);
	}
	

	return (
		<Box sx={{ 
			padding: "10px" 
		}}>
			{ItemList.length > 0 ? ItemList.map((e, index) => <MenuItems key={index} value={e} />):<></>}
		</Box>
	)
}

export default MenuList;