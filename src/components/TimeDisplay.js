const TimeDisplay = (props) => {
  // Total Hours in a week

  const { totalTimeSpent, totalTimeWasted } = props;

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="alert alert-info fw-bold">
          Total Hours In a Week: {24 * 7} hrs
        </div>
      </div>

      <div className="col">
        <div className="alert alert-success fw-bold">
          Total Hours Spent: {totalTimeSpent} hrs
        </div>
      </div>

      <div className="col">
        <div className="alert alert-danger fw-bold">
          You could have saved: {totalTimeWasted} hrs
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;
