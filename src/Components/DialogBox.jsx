import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';


const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function DialogBox({ show, handleClosePopUp, rowData }) {
    const handleClose = () => {
        handleClosePopUp(false);
    };
    return (
        <div>
            <Dialog onClose={handleClose} open={show}>
                <DialogContent >
                    <div style={{ display: 'flex' }}>
                        <img style={{ marginRight: "2%" }} src={rowData.image_url} alt="gameIcon" />
                        <span style={{ alignSelf: "flex-end" }}>
                            <span>{rowData.region}</span>
                            <div>{rowData.name}</div>
                        </span>
                    </div>
                    <h1>Pricing</h1>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>1 Week- 1 Month</span>
                            <span>6 Months</span>
                            <span>1 Year</span>
                        </span>
                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>$100.00</span>
                            <span>$400.00</span>
                            <span>$900.00</span>
                        </span>
                    </div>
                </DialogContent>
                <DialogActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        autoFocus onClick={handleClosePopUp} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
