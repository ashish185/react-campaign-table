import React, {  useState } from 'react';
import { connect } from 'react-redux';
import { Constants } from '../string-constants';
/* import Calendar from 'react-calendar';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';

import DatePicker from './DatePicker';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core'; */
function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

function ImagesGroupCell({pathAndNameArr,rowIndex}){
    const [showCalender, setShowCalender] = useState(false)
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleIconClic2 = (e, index, obj) => {
      console.log(index, obj);
       if(obj.name===Constants.SCHEDULE_AGAIN){
         console.log(obj.name,rowIndex);
         setShowCalender(true);
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
                {/* {showCalender &&
                  <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                />} */}
            <span>
              {obj.name}
            </span>
          </div>
        )
        }
      </span>
    )
  }

export default connect(
    mapStateToProps,mapDispatchToProps
)(ImagesGroupCell);