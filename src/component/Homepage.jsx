import { Grid } from "@mui/material"
import MainHeader from "./header/index"
import MainMenu from "./Menulist/Mainmenu"
import axios from "axios"
import { useEffect} from "react"
import {useState} from "react"
import { pizzaStore } from "../CentralStore/CentralStore"
function sortByKey(array, key) {
	return array.sort(function(a, b)
	{
		var x = parseInt(a[key]); var y = parseInt(b[key]);
		return x-y;
	});
}
const Homepage = () => {
	useEffect(() => {
		async function getItemList() {
			const response = await axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
			console.log(response);
			let isVegItems = response.data.filter((e) => e.isVeg === true)
			let isNonVegItems = response.data.filter((e) => e.isVeg === false);
			let increasingPrice = sortByKey(response.data, 'price');
			let sortByRating = sortByKey(response.data, 'rating')
			pizzaStore.dispatch({type: "appendItemToList", payload: response.data});
			pizzaStore.dispatch({type: "appendToVegList", payload: isVegItems})
			pizzaStore.dispatch({type: "appendToNonVegItems", payload: isNonVegItems})
			pizzaStore.dispatch({type: "appendToIncreasingPrice", payload: increasingPrice})
			pizzaStore.dispatch({type: "appendToIncreasingRating", payload: sortByRating})
		}
		getItemList();
	},[])
	const [isOrderPlaced, onUpdatingOrder] = useState([]);
	return (
		<Grid container direction="row" justify="center" sx={{
			height: "100vh",
		}}>
			<Grid item xs={12}>
				<Grid container direction="row" justifyContent="center">
					<MainHeader />	
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Grid container direction="row" justifyContent="center">
					<MainMenu />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Homepage;