-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2024 at 07:02 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restorant`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adminID` int(11) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `billing`
--

CREATE TABLE `billing` (
  `orderID` int(11) NOT NULL,
  `paymentID` int(11) NOT NULL,
  `payAmount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `bookingID` int(11) NOT NULL,
  `customerID` int(11) NOT NULL,
  `dateOfBooking` datetime NOT NULL,
  `numberPartyMembers` int(11) NOT NULL,
  `tableNum` int(11) NOT NULL,
  `timeBooked` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerID` int(11) NOT NULL,
  `customerName` varchar(100) NOT NULL,
  `phoneNumber` int(11) DEFAULT NULL,
  `emailAddress` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `menuID` int(11) NOT NULL,
  `menuDescription` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menuitem`
--

CREATE TABLE `menuitem` (
  `menuItemID` int(11) NOT NULL,
  `menuitemDescription` varchar(100) DEFAULT NULL,
  `menuItemPrice` int(11) DEFAULT NULL,
  `menuID` int(11) NOT NULL,
  `orderMenuItemID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderID` int(11) NOT NULL,
  `orderTimeDate` datetime DEFAULT NULL,
  `tableNum` int(11) DEFAULT NULL,
  `orderMenuItemID` int(11) NOT NULL,
  `customerID` int(11) NOT NULL,
  `paymentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ordermenuitem`
--

CREATE TABLE `ordermenuitem` (
  `orderMenuItemID` int(11) NOT NULL,
  `orderMenuItemQuantity` int(11) DEFAULT NULL,
  `menuItemID` int(11) DEFAULT NULL,
  `orderID` int(11) DEFAULT NULL,
  `orderMenuItemComments` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tableseating`
--

CREATE TABLE `tableseating` (
  `tableNum` int(11) NOT NULL,
  `tableseats` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminID`);

--
-- Indexes for table `billing`
--
ALTER TABLE `billing`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`bookingID`),
  ADD KEY `customer_booking` (`customerID`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerID`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menuID`);

--
-- Indexes for table `menuitem`
--
ALTER TABLE `menuitem`
  ADD PRIMARY KEY (`menuItemID`),
  ADD KEY `detail_menu` (`menuID`),
  ADD KEY `detail_order` (`orderMenuItemID`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `table_detail` (`tableNum`),
  ADD KEY `order_menu_detail` (`orderMenuItemID`),
  ADD KEY `payment_detail` (`paymentID`),
  ADD KEY `customer_detail` (`customerID`);

--
-- Indexes for table `ordermenuitem`
--
ALTER TABLE `ordermenuitem`
  ADD PRIMARY KEY (`orderMenuItemID`);

--
-- Indexes for table `tableseating`
--
ALTER TABLE `tableseating`
  ADD PRIMARY KEY (`tableNum`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `customer_booking` FOREIGN KEY (`customerID`) REFERENCES `customer` (`customerID`);

--
-- Constraints for table `menuitem`
--
ALTER TABLE `menuitem`
  ADD CONSTRAINT `detail_menu` FOREIGN KEY (`menuID`) REFERENCES `menu` (`menuID`),
  ADD CONSTRAINT `detail_order` FOREIGN KEY (`orderMenuItemID`) REFERENCES `ordermenuitem` (`orderMenuItemID`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `customer_detail` FOREIGN KEY (`customerID`) REFERENCES `customer` (`customerID`),
  ADD CONSTRAINT `order_menu_detail` FOREIGN KEY (`orderMenuItemID`) REFERENCES `ordermenuitem` (`orderMenuItemID`),
  ADD CONSTRAINT `payment_detail` FOREIGN KEY (`paymentID`) REFERENCES `billing` (`orderID`),
  ADD CONSTRAINT `table_detail` FOREIGN KEY (`tableNum`) REFERENCES `tableseating` (`tableNum`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
