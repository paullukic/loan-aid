import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function LeftCardResult(props) {
    return (
        <div style={{padding: '10px 0 6px 0'}}>
            <Typography component="h1" variant="body2" align="center">
                {props.text}
            </Typography>
            <Typography component="h1" variant="h4" align="center" style={{color:'black'}}>
                {props.value}
            </Typography>
            <hr style={{height:'1px', borderWidth:'0 !important', color:'rgba(0, 0, 0, 0.35)',backgroundColor:'rgba(0, 0, 0, 0.35)'}}/>
        </div>
    )
}
