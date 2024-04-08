import {
    Button,
    Navbar,
    NavbarBrand,
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem
} from "flowbite-react";

import aquiles from "../assets/aquiles.png"
export default function Header() {
    return (
        <>
            <Navbar fluid className="bg-gray-50 mb-2 rounded p-4">
                <NavbarBrand>
                    <img src={aquiles} className="mr-3 h-16 w-16 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900 dark:text-white">Gym Aquiles</span>
                </NavbarBrand>
                <div className="flex flex-row md:order-2 gap-4">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">Matias Arevalo</span>
                        </DropdownHeader>
                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownItem>Configuración</DropdownItem>
                        <DropdownItem>Ganancias</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem>Cerrar Sesión</DropdownItem>
                    </Dropdown>
                    <Button color="failure">Cerrar Sessión</Button>
                </div>
            </Navbar>




        </>

    );
}
