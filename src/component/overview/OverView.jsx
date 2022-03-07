import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const OverView = () => {
	return (
		<Box>
			<Typography variant="h3" color="text.secondary" sx={{
				fontWeight: 600
			}}>
				LUCALI
			</Typography>
			<Typography variant="h6" color="text.secondary" sx={{
				fontFamily:"Roboto"
			}}>Offer Napolis Style Pizza at an afforable cost</Typography>
		</Box>
	)
}

export default OverView;