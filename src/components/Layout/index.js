import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import './index.scss';
const Layout= ()=>{
    return(
        <div className='App'>
            <SideBar/>

            <div className='page'>
                <span className='tags top-tags'>
                &lt;Ho Chi Minh&gt;
                </span>
                <Outlet/>
                <span className='tags bottom-tags'>
                    &lt;Chicago&gt;
                    <br/>

                </span>
            </div>
            </div>
    )
}
export default Layout;