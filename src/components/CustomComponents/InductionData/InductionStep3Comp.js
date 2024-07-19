import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddExpectedTable,
  AddFormTable,
  CommonCard,
  NoDataFound,
} from "../../../components";
import {
  ViewInductionColumns,
  ViewInductionExpectedColumns,
} from "../../../utilities";
export const InductionStep3Comp = ({
  stepper,
  setStepper,
  data,
  handleClickStep,
  setFieldValue,
  id,
}) => {
  const [openRowId, setOpenRowId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePreviousClick = () => {
    if (stepper > 0) {
      setStepper(stepper - 1);
      handleClickStep(stepper - 1);
    }
  };

  const handleIconClick = (event, rowId) => {
    event.stopPropagation();
    setOpenRowId(rowId);
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch(null);
  const { mpptData } = useSelector((state) => state?.inductions);
  const { expectedData } = useSelector((state) => state?.inductions);

  const [expectedPower, setExpectedPower] = useState([]);

  useEffect(() => {
    const simpleArray = expectedData?.expected_power.reduce(
      (acc, obj, index) => {
        acc.id = index + 1;
        acc[obj.name.toLowerCase()] = obj.value;
        return acc;
      },
      {}
    );

    setExpectedPower([simpleArray]);
  }, [expectedData?.expected_power]);

  return (
    <CommonCard secButtonTitle={"Previous"} secOnClick={handlePreviousClick}>
      <div>
        {mpptData && mpptData?.length > 0 ? (
          <AddFormTable
            // mT={mT}
            title={"MPPT Report"}
            columns={ViewInductionColumns}
            rows={mpptData}
          />
        ) : (
          <NoDataFound />
        )}
        <AddExpectedTable
          mT={"32px"}
          title={"Annual Report"}
          columns={ViewInductionExpectedColumns}
          rows={expectedPower}
        />
      </div>
    </CommonCard>
  );
};
