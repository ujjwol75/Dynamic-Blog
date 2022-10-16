import React, {useState} from 'react';

const UseCommonStateHook = (props) => {
  const [openAddPopup, setOpenAddPopup] = useState(false);
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [addSuccessSnackBar, setAddSuccessSnackBar] = useState(false);
  const [errorSnackBar, setErrorSnackBar,] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''})
  const [removeSuccessSnackBar, setRemoveSuccessSnackBar] = useState(false)
  const [updateSuccessSnackBar, setUpdateSuccessSnackBar] = useState(false)
  return {
    openAddPopup, setOpenAddPopup,
    openEditPopup, setOpenEditPopup,
    addSuccessSnackBar, setAddSuccessSnackBar,
    errorSnackBar, setErrorSnackBar,
    confirmDialog, setConfirmDialog,
    removeSuccessSnackBar, setRemoveSuccessSnackBar,
    updateSuccessSnackBar, setUpdateSuccessSnackBar
  };
};

export default UseCommonStateHook;