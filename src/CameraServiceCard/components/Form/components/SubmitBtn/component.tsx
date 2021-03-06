import React from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export function CameraFormSubmitBtn(): JSX.Element {

    return <>
        <Box mt={2}>
            <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
            >Submit</Button>
        </Box>
    </>
}
