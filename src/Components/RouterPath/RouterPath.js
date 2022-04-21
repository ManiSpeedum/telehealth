import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../AppSidebar/SidebarComponents/Home';
import Form from '../AppSidebar/SidebarComponents/FormLayout/Form';
import Table from '../AppSidebar/SidebarComponents/Table';

function RouterPath() {
  return (
    <div className='RouterPath'>
      <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path='/Form' element={<Form/>}></Route>
            <Route exact path='/Table' element={<Table/>}></Route>
        </Routes>
    </div>
  );
};

export default RouterPath;