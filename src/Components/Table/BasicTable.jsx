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
import { useEffect } from 'react';
import { useState } from 'react';
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

export default function BasicTable({ data }) {
  const classes = useStyles();
  const [arrData, setArrData] = useState(data)
  useEffect(() => {
    const dir = process.env.PUBLIC_URL + `/Dashboard/Row Copy `
    setArrData(arrData.map((el, i) => {
      el.image_url = dir + `${i + 1}-Row/Thumb/Bitmap.png`;
      el.price_img_url = dir + `${i + 1}-Row/Group 4/Price.png`;
      el.actions_images_url = [{ path: dir + `${i + 1}-Row/Group 3/file.png`, name: Constants.CSV }, {
        path: dir + `${i + 1}-Row/Group 2/statistics-report.png`, name: Constants.REPORT
      }, {
        path: dir + `${i + 1}-Row/Group/calendar.png`,
        name: Constants.SCHEDULE_AGAIN
      }];
      return el;
    }))
  }, [arrData])
  const handleIconClick = (e, index, obj) => {
    console.log(e, index, obj);
    /*  if(obj.name===Constants.SCHEDULE_AGAIN){
       console.log(obj.name);
     } */

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
          {arrData.map((row, rowIndx) => {
            const timeObj = getFormattedDate(row.createdOn);
            return <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <div>{timeObj.campaign_date}</div>
                <div>{timeObj.timeDiffString}</div>
              </TableCell>
              <TableCell align="left"><img alt="game_icon" src={row["image_url"]}></img></TableCell>
              <TableCell align="left">
                <img
                  alt="price_icon"
                  src={row["price_img_url"]}
                  className={"margin-right"}
                  onClick={(e) => handleIconClick(e, row)}
                />
                {Constants.VIEW_PRICING}
              </TableCell>
              {row["actions_images_url"] &&
                <TableCell align="left">
                  <ImagesGroupCell rowIndex={rowIndx} pathAndNameArr={row["actions_images_url"]} />
                </TableCell>
              }
            </TableRow>
          }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}