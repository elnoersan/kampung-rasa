
import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    ScaleIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export function SidebarWithLogo({ handleTabChange }) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const handleClickPesanan = () => {
        handleTabChange("pesanan");
    };

    const handleClickGrafikPenjualan = () => {
        handleTabChange("grafikPenjualan");
    };

    const handleClickDashboard = (tab) => {
        handleTabChange("dashboardData");
    }

    const handleClickProfile = (tab) => {
        handleTabChange("profile");
    }

    return (
        <Card className="sidebar h-screen w-72 rounded-none" style={{ boxShadow: 'none' }}>
            <div className="mb-2 flex items-center gap-4 p-4">
                <img src="/assets/logo.png" alt="brand" className="h-20 w-24 mx-auto" />
            </div>
            <List>
                <Accordion
                    open={open === 1}
                >
                    <ListItem className="p-0" selected={open === 1} onClick={handleClickDashboard}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                </Accordion>



                <ListItem onClick={handleClickPesanan}>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Pesanan Masuk
                </ListItem>

                <ListItem onClick={handleClickGrafikPenjualan}>
                    <ListItemPrefix>
                        {/* <ShoppingBagIcon className="h-5 w-5" /> */}
                        <ScaleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Grafik Penjualan
                </ListItem>
                <ListItem onClick={handleClickProfile}>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profil
                </ListItem>
                {/* <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem> */}
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to='/home'>Keluar </Link>
                </ListItem>
            </List>
        </Card>
    );
}
