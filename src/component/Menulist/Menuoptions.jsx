import { Stack, Tab, Tabs} from "@mui/material"
import { useState } from "react";

const Menuoptions = ({onChangingItemList, option}) => {
	const handleChange = (event, newValue) => {
		onChangingItemList(newValue);
	}
	return (
		<Stack spacing={2} sx={{
			padding: "10px"
		}}>
			 <Tabs
				orientation="vertical"
				variant="scrollable"
				value={option}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				textColor="secondary"
				indicatorColor="secondary"
				sx={{ borderRight: 1, borderColor: 'divider' }}
      		>
				 <Tab value="All" label="All" sx={{
					textTransform: "none",
					fontFamily: "Roboto",
					fontSize: "1rem"
				}}/>
				 <Tab value="Veg" label="Veg" sx={{
					textTransform: "none",
					fontFamily: "Roboto",
					fontSize: "1rem",
					textAlign: "left"
				}}/>
				<Tab value="NonVeg" label="Non-Veg" sx={{
					textTransform: "none",
					fontFamily: "Roboto",
					fontSize: "1rem"
				}}/>
				<Tab value="IP" label="Low Price" sx={{
					textTransform: "none",
					fontFamily: "Roboto",
					fontSize: "1rem"
				}}/>
				<Tab value="IR" label="High Rating" sx={{
					textTransform: "none",
					fontFamily: "Roboto",
					fontSize: "1rem"
				}}/>
			</Tabs>
		</Stack>
	)
}

export default Menuoptions;