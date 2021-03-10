import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Constants } from '../string-constants';
import 'react-calendar/dist/Calendar.css';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Popover from '@material-ui/core/Popover';
import { DateTimePicker } from "@material-ui/pickers";
import { UPDATE_TIMESTAMP } from '../Store/actions-constants';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTimeStamp: (timestamp) => dispatch({
      type: UPDATE_TIMESTAMP,
      payload: timestamp
    })
  };
}

function ImagesGroupCell({ tabIndex, rowIndex, rowData, updateTimeStamp }) {
  const [showCalender, setShowCalender] = useState(false)
  const [selectedDate, setSelectedDate] = React.useState(new Date(rowData.createdOn));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleIconClic2 = (e) => {
    setAnchorEl(e.currentTarget);
    setShowCalender(true);
  }
  function handleBlur(e) {
    const intialDate = rowData.createdOn;
    const changedTimestamp = selectedDate.getTime();
    if (intialDate !== changedTimestamp) {
      const rowInformation = {
        rowIndex: rowIndex,
        timeStamp: changedTimestamp,
        tabIndex: tabIndex
      }
      updateTimeStamp(rowInformation);
    }
    setShowCalender(false)
  }
  const calenderComp = () => {
    return <Popover
      anchorEl={anchorEl}
      open
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      onClose={() => handleBlur()}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          variant="static"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </Popover>
  }

  return (
    <span className={"images-group"}>
      <ImageWithName
        name={"CSV"}
        src="Dashboard/Row Copy 1-Row/Group 3/file.png"
        alt="file_icon"
      />
      <ImageWithName
        name={"Report"}
        src="Dashboard/Row Copy 1-Row/Group 2/statistics-report.png"
        alt="report_icon" />
      <ImageWithName
        name={Constants.SCHEDULE_AGAIN}
        src="Dashboard/Row Copy 1-Row/Group/calendar.png"
        alt="calendar_icon"
        handleIconClick={handleIconClic2}
      />
      {showCalender && calenderComp()}
    </span >
  )
}
const ImageWithName = ({ src, alt, name, handleIconClick = null }) => {
  const handleClick = (e) => {
    handleIconClick && handleIconClick(e)
  }
  return (
    <div className="image-with-label" >
      <img src={src}
        onClick={(e) => handleClick(e)}
        alt={alt}
        className={"margin-right"} />
      <span>
        {name}
      </span>
    </div>
  )
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ImagesGroupCell);

/*
return (
    pathAndNameArr && <span className={"images-group"}>
      {pathAndNameArr.map((obj, index) => {
        let image;
        if (obj.name === Constants.SCHEDULE_AGAIN) {
          image =
          <React.Fragment>
            {showCalender && calenderComp()}
            <img
            onClick={(e) => handleIconClic2(e, index, obj)}
            className={"margin-right"}
            src={obj.path}
            alt={'csv_report_scheduleagain'}
            onBlur={handleBlur}
          />
          </React.Fragment>
        }
        else {
          image = <img
            onClick={(e) => handleIconClic2(e, index, obj)}
            className={"margin-right"}
            src={obj.path}
            alt={'csv_report_scheduleagain'}
          />
        }

        return <div key={obj.path} className="image-with-label" >
          {image}
          <span>
            {obj.name}
          </span>
        </div>
      }

      )
      }

    </span>
  )
   */