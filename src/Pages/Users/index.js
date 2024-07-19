import { Col } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContainer, AppHeading, UserTable } from "../../components";
import {
  deleteUserAction,
  getAllUsersAction,
  updateAlramStatusAction,
} from "../../redux/actions";
import { networkText, userColumns } from "../../utilities";
import Box from "@mui/material/Box";

const Users = ({ navigation }) => {
  const dispatch = useDispatch(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { users, alarmsLoad } = useSelector((state) => state?.users);
  const params = new URLSearchParams(location.search);
  const type = location?.state?.type || null;

  useEffect(() => {
    getData();
  }, []);

  // Get Alarm List
  const getData = async () => {
    if (navigator.onLine) {
      const body = {
        onSuccess: async (res) => {},
        onFailure: (res) => {},
      };

      dispatch(getAllUsersAction(body));
    } else {
      toast.error(networkText);
    }
  };

  const updateStatus = async (id, action) => {
    if (navigator.onLine) {
      const requestBody = {
        alarm_id: id,
        action: action,
      };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {},
        onFailure: (error) => {},
      };

      dispatch(updateAlramStatusAction(body));
    } else {
      toast.error(networkText);
    }
  };

  const deleteUser = async (userId) => {
    if (navigator.onLine) {
      const requestBody = {
        user_id: userId,
      };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          if (res) {
            toast.success("User deleted successfully!!");
          }
        },
        onFailure: (error) => {},
      };

      dispatch(deleteUserAction(body));
    } else {
      toast.error(networkText);
    }
  };
  return (
    <AppContainer loading={alarmsLoad}>
      <Box sx={{ p: 3, width: "100%" }}>
        <Col className="alarmCon">
          <AppHeading
            title={"Users"}
            buttonTitle={"Add User"}
            showButton={true}
            onClick={() => {
              navigate("/add-user");
            }}
          />
          {users && (
            <UserTable
              search_key={type == "all" ? null : type}
              rows={users}
              columns={userColumns}
              handleAction={(id, action) => updateStatus(id, action)}
              editData={(data) => {
                navigate("/update-user", { state: { data } });
              }}
              handleDelete={(userId) => deleteUser(userId)}
            />
          )}
        </Col>
      </Box>
    </AppContainer>
  );
};

export default Users;
