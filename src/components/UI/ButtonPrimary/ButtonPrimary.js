import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core';

const ButtonPrimary = withStyles((theme) => ({
    root: {
        fontFamily: 'inherit',
        fontWeight: 300,
        fontSize: '1.3rem',
        letterSpacing: '0.05rem',
        color: "#ffffff",
        backgroundColor: "rgb(243, 47, 80)",
        '&:hover': {
            backgroundColor: "rgb(185, 32, 58)"
        }
    }
}))(Button);

export default ButtonPrimary;