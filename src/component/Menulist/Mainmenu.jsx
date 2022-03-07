import { Grid } from "@mui/material"
import { useState } from "react";
import OverView from "../overview/OverView";
import FilterOptions from "./FilterOptions";
import MenuList from "./MenuList";
import Menuoptions from "./Menuoptions";
import Cart from "../cart/Cart"
import { pizzaStore } from "../../CentralStore/CentralStore"


const MainMenu = () => {
	const [page, onUpdatingPage] = useState("one");
	const [option, onUpdatingOptions] = useState("All")
	//const [ItemList, onUpdatingItemList] = useState(pizzaStore.getState().CentralReducer.Items)
	const currentPage = (value) => {
		onUpdatingPage(value);
	}
	const onChangingItemList = (value) => {
		onUpdatingOptions(value);
	}

	return (
		<Grid container direction="row" sx = {{
			width: "70%",
			justifyContent: "center"
			
		}}>
			{page === "two" && <> 
			<Grid item xs={12}>
				<FilterOptions curPageData={page} currentPage = {currentPage}/>
			</Grid>
			<Grid item xs={3}>
				<Menuoptions onChangingItemList={onChangingItemList} option={option}/>
			</Grid>
			<Grid item xs={9}>
				<MenuList value={option} />
			</Grid>
			</>}
			{page === "one" && <>
			<Grid item xs={12}>
				<FilterOptions curPageData = {page} currentPage = {currentPage}/>
			</Grid>
			<Grid item xs={12}>
				<OverView />
			</Grid>
			</>}
			{page === "three" && <>
			<Grid item xs={12}>
				<FilterOptions curPageData = {page} currentPage = {currentPage}/>
			</Grid>
			<Grid item xs={12}>
				<Cart />
			</Grid>
			</>}
		</Grid>
	)
}

export default MainMenu;