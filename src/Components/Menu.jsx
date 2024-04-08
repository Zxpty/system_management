import { Sidebar } from "flowbite-react";
import {
    HiChartPie,

    HiOutlineMinusSm,
    HiOutlinePlusSm,
} from "react-icons/hi";
import { FaAddressCard, FaCalendarAlt, FaUserTie, FaUserCheck, FaChartBar } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { MdHandshake } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
export default function Menu() {
    return (
        <Sidebar className="h-screen">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item icon={HiChartPie}>
                        <Link to='/' >Dashboard</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={FaAddressCard}>
                        <Link to='/asistencia' >Asistencia</Link>
                    </Sidebar.Item>
                    <Sidebar.Collapse
                        icon={FaCalendarAlt}
                        label="Registro Asistencía"
                        renderChevronIcon={(theme, open) => {
                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                        }}
                    >
                        <Sidebar.Item href="#">Asistencía Clase</Sidebar.Item>
                        <Sidebar.Item href="#">Asistencía Matriculados</Sidebar.Item>
                        <Sidebar.Item href="#">Tipo Rutina</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse
                        icon={MdHandshake}
                        label="Suscripciones"
                        renderChevronIcon={(theme, open) => {
                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                        }}
                    >
                        <Link to='/matricula' >
                            <Sidebar.Item>
                                Matricula
                            </Sidebar.Item>
                        </Link>
                        <Link to='/membresia' >
                            <Sidebar.Item>
                                Membresia
                            </Sidebar.Item>
                        </Link>
                        <Link to='/servicio' >
                            <Sidebar.Item>
                                Servicio
                            </Sidebar.Item>
                        </Link>
                        <Link to='/rutina' >
                            <Sidebar.Item>
                                Rutina
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse
                        icon={FaUserTie}
                        label="Operario"
                        renderChevronIcon={(theme, open) => {
                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                        }}
                    >
                        <Sidebar.Item href="#">Asistencía Operario</Sidebar.Item>
                        <Sidebar.Item href="#">Operario</Sidebar.Item>
                        <Sidebar.Item href="#">Turno</Sidebar.Item>
                        <Sidebar.Item href="#">Cargo</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={FaUsers}>
                        Cliente
                    </Sidebar.Item>
                    <Sidebar.Collapse
                        icon={FaUserCheck}
                        label="Usuarios"
                        renderChevronIcon={(theme, open) => {
                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                        }}
                    >
                        <Sidebar.Item href="#">Usuario</Sidebar.Item>
                        <Sidebar.Item href="#">Roles</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse
                        icon={FaChartBar}
                        label="Reportes"
                        renderChevronIcon={(theme, open) => {
                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                        }}
                    >
                        <Sidebar.Item href="#">Registro Ingresos</Sidebar.Item>
                        <Sidebar.Item href="#">Caja Usuario</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={IoSettings}>
                        Configuración
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}