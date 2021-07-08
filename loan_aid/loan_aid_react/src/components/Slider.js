import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import { InputAdornment, FormControl, OutlinedInput } from '@material-ui/core';

export default function MoneySlider(props) {
    const [value, setValue] = React.useState(0);
    const [inputValue, setInputValue] = React.useState(props.min);

    const calcPercentage = (val) => {
        return Math.round(props.max * (val / 100))
    }

    const getPercentage = (val) => {
        return Math.round((val / props.max) * 100)
    }

    const handleSliderChange = (event, newValue) => {
        setInputValue(calcPercentage(newValue))
        setValue(newValue)
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : getPercentage(event.target.value));
        setInputValue(event.target.value === '' ? '' : event.target.value)
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <Box mt={4}>
            <Typography id="input-slider" variant="body1" gutterBottom>{props.text}</Typography>
            <Grid container spacing={5} alignItems="center">
                <Grid item xs>
                    <Slider aria-labelledby="input-slider"
                        marks={props.marks}
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}

                    />
                </Grid>
                <Grid item>
                    <FormControl variant="outlined" style={{ maxWidth: '120px', minWidth: '120px' }}>
                        <OutlinedInput
                            id="currency"
                            endAdornment={<InputAdornment position="end">{props.currency}</InputAdornment>}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                value: inputValue,
                                min: props.min,
                                max: props.max,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                            style={{ maxHeight: '2.5rem' }}
                            labelWidth={0}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
}
