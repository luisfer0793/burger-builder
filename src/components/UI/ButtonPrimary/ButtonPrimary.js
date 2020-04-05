import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core';

const ButtonPrimary = withStyles((theme) => ({
    root: {
        fontFamily: 'inherit',
        fontWeight: 300,
        fontSize: '1.3rem',
        letterSpacing: '0.05rem',
        color: "#17A2B8",
        border: '.1rem solid #17A2B8',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: "#17A2B8",
            color: '#ffffff'
        },
        '&:disabled': {
            border: 'none'
        }
    }
}))(Button);

export default ButtonPrimary;