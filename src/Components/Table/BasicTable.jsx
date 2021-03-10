import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Constants } from '../../string-constants.js';
import "../../Components/Table/basic-table.css";
import { getFormattedDate } from '../../utility-functions.js';
import ImagesGroupCell from '../ImagesGroupCell.jsx';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const CellImages = ({ pathAndNameArr, rowIndex }) => {
  const handleIconClic2 = (e, index, obj) => {
    console.log(index, obj);
    if (obj.name === Constants.SCHEDULE_AGAIN) {
      console.log(obj.name, rowIndex);
    }

  }
  return (
    pathAndNameArr && <span className={"images-group"}>
      {pathAndNameArr.map((obj, index) =>
        <div key={obj.path} className="image-with-label" >
          <img
            onClick={(e) => handleIconClic2(e, index, obj)}
            className={"margin-right"}
            src={obj.path}
            alt={'csv_report_scheduleagain'}
          />
          <span>
            {obj.name}
          </span>
        </div>
      )
      }
    </span>
  )
}

export default function BasicTable({ data, tabIndex }) {
  const classes = useStyles();

  const handleIconClick = (e, index, obj) => {
    console.log(e, index, obj);
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{Constants.DATE}</TableCell>
            <TableCell align="left">{Constants.CAMPAIGN}</TableCell>
            <TableCell align="left">{Constants.VIEW}</TableCell>
            <TableCell align="left">{Constants.ACTIONS}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndx) => {
            const timeObj = getFormattedDate(row.createdOn);
            return <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <div>{timeObj.campaign_date}</div>
                <div>{timeObj.timeDiffString}</div>
              </TableCell>
              <TableCell align="left">
                <img alt="game_icon" src={row["image_url"]} />
              </TableCell>
              <TableCell align="left">
                <img
                  alt="price_icon"
                  src={"Dashboard/Row Copy 1-Row/Group 4/Price.png"}
                  className={"margin-right"}
                  onClick={(e) => handleIconClick(e, row)}
                />
                {Constants.VIEW_PRICING}
              </TableCell>
              <TableCell align="left">
                <ImagesGroupCell
                  tabIndex={tabIndex}
                  rowIndex={rowIndx}
                  rowData={row}
                />
              </TableCell>
            </TableRow>
          }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}