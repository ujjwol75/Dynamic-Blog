import React from 'react'
import Nabbar from './Nabbar'
import useGetHook from '../../customHooks/useGetHook'

const NabbarComponent = () => {


  //get navigations list
  const {isLoading, data:navigationListData} = useGetHook({
    queryKey: "navigationListData",
    url: "/custom/navigation-menu"
  });

  return (
    <>
      <Nabbar navigationListData={navigationListData}/>
    </>
  )
}

export default NabbarComponent