import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UserInfo from "../src/components/UserInfo";
import UserEditForm from "../src/components/UserEditForm";
import { getUserInfo } from "../src/actions/profileActions";
import { logout } from "../src/actions/authActions";
import "../src/styles/pages/profile.scss";
import Button from "@material-ui/core/Button";

import { useRouter } from "next/router"

const Profile = props => {

  const router = useRouter()

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    let { token } = props;
    props.getUserInfo(token);
  }, []);

  //*************************************
  useEffect(() => {
    setUserInfo(props.data);
  }, [props.data]);

  //*************************************
  useEffect(() => {
    if (!props.isAuthenticated)
      router.push('/')
  }, [props.isAuthenticated]);

  //*************************************
  const [showForm, setShowForm] = useState(false);

  const handleSetEditForm = () => {
    setShowForm(true);
  };

  const handleUnsetEditForm = () => {
    setShowForm(false);
  };

  //*************************************
  const handleLogoutClick = () => {
    props.logout();
    router.push('/')
  };

  //*************************************
  return (
    <div className="profile">
      <div className="row no-gutters justify-content-center">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="profile-body">
            {!showForm ? (
              <UserInfo setEditForm={handleSetEditForm} data={userInfo} />
            ) : (
                <UserEditForm
                  unsetEditForm={handleUnsetEditForm}
                  data={userInfo}
                />
              )}
          </div>
        </div>

        <div className="col-4">
          <div className="logout-button">
            <Button
              variant="outlined"
              color="primary"
              className="button"
              onClick={handleLogoutClick}
            >
              خروج
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.profile.data,
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getUserInfo, logout })(Profile);
