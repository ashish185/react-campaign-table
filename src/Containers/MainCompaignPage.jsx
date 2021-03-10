import React from 'react';
import DemoTabs from '../Components/DemoTabs';
import { Constants } from '../string-constants';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setData } from '../Store/actions';

const MainCompaignPage = ({ data, setData }) => {
  useEffect(() => {
    setData(data)
  }, [])
  return (
    <div>
      <h1>{Constants.Manage_Campaigns}</h1>
      <DemoTabs />
    </div>
  );
};
function mapStateToProps(state) {
  return {
    tableData: state.tableData,
    showDeleteModal: state.showDeleteModal,
    showMarkAsUpdateModal: state.showMarkAsUpdateModal,
    formRes: state.formRes
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    setData: (data) => dispatch(setData(data))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainCompaignPage);