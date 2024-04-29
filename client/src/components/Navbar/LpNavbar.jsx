import React from "react";

import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { LocModal } from "../Modal/LocModal";
import { TakeWayModal } from "../Modal/TakeWayModal";

const navListMenuItems = [
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
    },
    {
        title: "About Us",
        description: "Meet and learn about our dedication",
        icon: UserGroupIcon,
    },
    {
        title: "Blog",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
    },
    {
        title: "Services",
        description: "Learn how we can help you achieve your goals.",
        icon: SunIcon,
    },
    {
        title: "Support",
        description: "Reach out to us for assistance or inquiries",
        icon: GlobeAmericasIcon,
    },
    {
        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
    },
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: RectangleGroupIcon,
    },
    {
        title: "Special Offers",
        description: "Explore limited-time deals and bundles",
        icon: TagIcon,
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Resources
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900 hover:border border-gray-900 rounded-none hover:bg-[#fbfbe9]">ABOUT</ListItem>
            </Typography>
            {/* <NavListMenu /> */}
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900 hover:border border-gray-900 rounded-none hover:bg-[#fbfbe9]">
                    RESERVATION
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900 hover:border border-gray-900 rounded-none hover:bg-[#fbfbe9]">
                    MENU
                </ListItem>
            </Typography>
        </List>
    );
}

export function NavbarLandingPage() {
    const [showLocation, setShowLocation] = React.useState(false);
    const [showTakeWay, setShowTakeWay] = React.useState(false);
    const [openNav, setOpenNav] = React.useState(false);



    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const handleOpenLocation = () => {
        setShowLocation(true);
    }

    const handleOpenTakeWay = () => {
        setShowTakeWay(true);
    }




    return (
        <div className="navbar ">
            <Navbar className="mx-auto px-4 py-4 shadow-none border-none" style={{ position: 'sticky', top: 0, background: 'none', backdropFilter: 'none' }}>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <img src="/assets/Logo.png" alt="" className=" w-28 h-20" />
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <div className="hidden gap-2 lg:flex">

                        <ul className="flex gap-1">
                            <li><a href="#" className="px-3 py-2 font-medium text-gray-900 text-sm hover:border  border-gray-900 bg-none transition duration-200" onClick={handleOpenTakeWay}>TAKE WAY</a></li>
                            <li><a href="#" className="px-3 py-2 font-medium text-gray-900 text-sm hover:border  border-gray-900 bg-none transition duration-200" onClick={handleOpenLocation}>LOCATION</a></li>
                        </ul>
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>

                {/* Mobile version */}
                <Collapse open={openNav}>
                    <NavList />
                    <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                        <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white">Location</button>
                    </div>
                </Collapse>
                {/* <Collapse open={openNav}>
                    <NavList />
                    <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                        <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white">Takeway</button>
                    </div>
                </Collapse> */}
            </Navbar>
            {showLocation && <LocModal setShowLocation={setShowLocation} />}
            {showTakeWay && <TakeWayModal setShowTakeWay={setShowTakeWay} />}
        </div>

    );
}

export default NavbarLandingPage;


