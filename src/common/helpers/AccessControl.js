import {permissions} from "./sessionKey";

const checkPermissions = (allowedPermissions) => {
  if (allowedPermissions.length === 0) {
    return true;
  }
  return permissions().some(permission =>
    allowedPermissions.includes(permission['codename'])
  );
};

const AccessControl = ({allowedPermissions, children, renderNoAccess,}) => {
  const permitted = checkPermissions(allowedPermissions);
  if (permitted) {
    return children;
  }
  return renderNoAccess();
};

AccessControl.defaultProps = {
  allowedPermissions: [],
  permissions: [],
  renderNoAccess: () => null,
};

export default AccessControl;
