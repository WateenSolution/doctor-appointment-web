import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AddUserComp, AppHeading } from "../../components";
import {
  addUserAction,
  getAllSitesAction,
  getOrgAction,
  getOrganizationalSitesAction,
} from "../../redux/actions";

import { networkText } from "../../utilities";
import Box from "@mui/material/Box";
import { get } from "../../service";

const AddUser = ({ navigation }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(null);
  const { sites } = useSelector((state) => state?.sites);
  const { organizations } = useSelector((state) => state?.inductions);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  useEffect(() => {
    getAllSites();
    getAllOrganizations();
  }, []);

  const getAllSites = () => {
    if (navigator.onLine) {
      const requestBody = {
        values: null,
        onSuccess: (res) => {},
        onFailure: () => {},
      };
      dispatch(getAllSitesAction(requestBody));
    } else {
      toast.error(networkText);
    }
  };

  const getAllOrganizations = () => {
    if (navigator.onLine) {
      const requestBody = {
        values: null,
        onSuccess: (res) => {},
        onFailure: () => {},
      };
      dispatch(getOrgAction(requestBody));
    } else {
      toast.error(networkText);
    }
  };

  const getOrganizationalSites = (Organization) => {
    if (navigator.onLine) {
      const requestBody = {
        organization: Organization,
      };

      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          if (res) {
          }
        },
        onFailure: (error) => {},
      };

      dispatch(getOrganizationalSitesAction(body));
    } else {
      toast.error(networkText);
    }
  };

  const onSubmit = async (values) => {
    if (navigator.onLine) {
      const requestBody = {
        email: values?.email,
        username: values?.username,
        password: values?.password,
        organization_name: values?.siteName,
        role_name: values?.role,
        stations: rowSelectionModel || null,
      };

      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          if (res) {
            navigate("/user");
          }
        },
        onFailure: (error) => {},
      };

      dispatch(addUserAction(body));
    } else {
      toast.error(networkText);
    }
  };

  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Col>
        <AppHeading title={"User Management"} />

        <Row className="rowCard" gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <AddUserComp
              onSubmit={(values) => {
                onSubmit(values);
              }}
              sites={sites && sites?.map((entry) => entry.station_name)}
              allSites={sites}
              getOrganizationalSites={getOrganizationalSites}
              organizations={
                organizations && organizations?.map((entry) => entry.name)
              }
              setSelectedRows={(item) => setRowSelectionModel(item)}
              selectedRows={rowSelectionModel}
            />
          </Col>
        </Row>
      </Col>
    </Box>
  );
};

export default AddUser;
