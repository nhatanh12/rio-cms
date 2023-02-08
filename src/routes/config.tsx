import React, {FC} from 'react';
import {Route, RouteProps} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import {useIntl} from 'react-intl';

export interface WrapperRouteProps {
    /** authorization？ */
    auth?: boolean;
    children?: React.ReactNode;
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({auth, children}) => {
    const {formatMessage} = useIntl();

    if (auth) {
        return <PrivateRoute>{children}</PrivateRoute>;
    }
    return <>{children}</>;
};

export default WrapperRouteComponent;
