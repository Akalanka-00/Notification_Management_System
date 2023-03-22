import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import AdminNotification from './Components/AdminNotification/AdminNotification';
// import DeveloperNotification from './Components/DeveloperNotification/DeveloperNotification';
import CustomerNotification from './Components/CustomerNotification/CustomerNotification';
import NotificationPanel from './Components/NotificationPanel/NotificationPanel';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path = "/" exact element = {<Header/>}></Route>
        <Route path = "/admin" exact element = {<AdminNotification/>}></Route>
        <Route path = "/customer" exact element={<CustomerNotification/>}></Route>
        {/* <Route path = "/developer" exact element = {<DeveloperNotification/>}></Route> */}

        <Route path = "/customer/notifications" exact element = {<NotificationPanel isDev={false}/>}></Route>
        <Route path = "/developer/notifications" exact element = {<NotificationPanel isDev={true}/>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
