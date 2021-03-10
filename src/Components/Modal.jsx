import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal({ show, handleClosePopUp, rowData }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const handleClose = () => {
        handleClosePopUp(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div style={{ display: 'flex' }}>
                <img style={{ marginRight: "1%" }} src={rowData.image_url} alt="gameIcon" />
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

        </div >
    );

    return (
        <div>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
