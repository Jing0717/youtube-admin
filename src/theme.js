import { createTheme } from '@mui/styles';
import { adaptV4Theme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";

export const theme = createTheme(adaptV4Theme({
    palette: {
        primary: {
            main: grey[50]
        },
    },
    myButton: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black",
    }
}))