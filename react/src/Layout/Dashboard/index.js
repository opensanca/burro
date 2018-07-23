import React from 'react';
import PropTypes from 'prop-types';
import { HeaderLayout } from '../Header';

export const DashboardLayout = ({
  children, logo, buttons, headerComponent,
}) => (
  <div>
    <HeaderLayout logo={logo} buttons={buttons}>
      { headerComponent }
    </HeaderLayout>
    <div className="dashboard-content">{ children }</div>
  </div>
);

DashboardLayout.propTypes = {
  ...HeaderLayout.propTypes,
  headerComponent: HeaderLayout.propTypes.children,
  children: PropTypes.node,
};

DashboardLayout.defaultProps = {
  ...HeaderLayout.defaultProps,
  headerComponent: HeaderLayout.defaultProps.children,
  children: null,
};

export default DashboardLayout;
