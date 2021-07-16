import * as React from 'react';
import {useEffect, useState} from "react";
import {checkSession} from "../../utilities/authentication";
import {RootDispatcher} from "../../store/root-redux";
import {useDispatch, useSelector} from "react-redux";
import {InitialState} from "../../store/root-reducer";
import {Auth0Error, Auth0UserProfile} from "auth0-js";
import LoadSpinner from "../atoms/load-spinner.atom";


interface StateProps {
    user: Auth0UserProfile | undefined
    error: Auth0Error | undefined
}

interface Props {
}

const ProfilePage: React.FC<Props> = (props) => {

    return <div>Profile</div>
}


export default ProfilePage;
