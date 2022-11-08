import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import {Outlet, useNavigate} from "react-router-dom";
function isLogged() {
    return false;
}


function HomePage() {

    const items = [
        {
            label:'Produtos',
            icon:'pi pi-box',
            url: '/products'
        },
    ];


    return (
        <div>
            <Menubar model={items} className="mx-4 mt-4"
                     end={
                         <div>
                             <Button icon="pi pi-shopping-cart" className="p-button-icon p-button-text p-button-rounded"/>
                             <Button icon="pi pi-power-off" className="p-button-icon p-button-outlined p-button-rounded p-button-danger mx-2"/>
                         </div>
                     }
            />
            <div className="m-4">
                <Outlet />
            </div>
        </div>

    );
}
export default HomePage;
