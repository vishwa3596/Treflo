import { Box } from "@mui/system"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pizzaStore } from "../../CentralStore/CentralStore";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import pizza1 from "../../../src/pizza1.jpg"
import pizza2 from "../../../src/pizza2.jpg"
import pizza3 from "../../../src/pizza3.jpg"
import pizza4 from "../../../src/pizza4.jpg"
import pizza5 from "../../../src/pizza5.jpg"
import { Grid, Typography } from "@mui/material";
import Heading from "./Heading";
const imageList = [
	{
		img: pizza1,
		title: "pizza1",
		rows: 2,
		cols: 2,
	},
	{
		img: pizza2,
		title: "pizza2",
	},
	{
		img: pizza3,
		title: "pizza3"
	},
	{
		img: pizza4,
		tittle: "pizza4",
		cols: 2
	},
	{
		img: pizza5,
		title: 'Hats',
		rows: 1.6,
		cols: 4,
	},
]

function srcset(image, size, rows = 1, cols = 1) {
	return {
	  src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
	  srcSet: `${image}?w=${size * cols}&h=${
	    size * rows
	  }&fit=crop&auto=format&dpr=2 2x`,
	};
}

const Header = () => {
	return (
		<Grid container direction="row" justifyContent="center">
			<ImageList
				sx={{ width: 700, height: 450 }}
				variant="quilted"
				cols={4}
				rowHeight={121}
    			>
			{imageList.map((item) => (
				<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
				<img
					{...srcset(item.img, 121, item.rows, item.cols)}
					alt={item.title}
					loading="lazy"
				/>
				</ImageListItem>
			))}
    			</ImageList>
			    <Heading />
		</Grid>
	)
}

export default Header;