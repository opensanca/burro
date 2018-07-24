import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../Card';
import { Grid, Row, Column } from '../../Grid';
import { Input } from '../../Input';
import { Button } from '../../Button';

export const LoginLayout = ({
  user, userOnChange, userLabel,
  pass, passOnChange, passLabel,
  buttonChildren, onSubmit,
}) => (
  <Grid hero className="login-screen" alignItems="center">
    <Row justifyContent="center">
      <Column md={6}>
        <Card block>
          <Input
            id="user"
            value={user}
            onChange={userOnChange}
            label={userLabel}
          />
          <Input
            id="pass"
            type="password"
            value={pass}
            onChange={passOnChange}
            label={passLabel}
          />
          <Button block onClick={onSubmit}>{buttonChildren}</Button>
        </Card>
      </Column>
    </Row>
  </Grid>
);

LoginLayout.propTypes = {
  user: PropTypes.string.isRequired,
  userOnChange: PropTypes.func.isRequired,
  userLabel: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  passOnChange: PropTypes.func.isRequired,
  passLabel: PropTypes.string.isRequired,
  buttonChildren: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginLayout;
