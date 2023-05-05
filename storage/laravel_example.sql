-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 05, 2023 at 03:15 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_example`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `banner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`data`)),
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'slider',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `banner`, `data`, `status`, `type`, `created_at`, `updated_at`) VALUES
(1, 'banner-bg.jpg', '{\"title\":\"Beauty  products\",\"description\":\"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam\",\"link\":\"#\"}', 1, 'slider', NULL, NULL),
(2, 'banner2.jpg', '{\"title\":\"Best of home decoration\",\"description\":\"Best of home decoration amet consectetur adipisicing elit. Aperiam\",\"link\":\"#\"}', 1, 'slider', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Clothing & Apparel', 1, 'HXelRZbpm8WfNq7UesU3zRyAg1XA4CxtSomqTFLH.jpg', '2023-04-27 02:08:20', '2023-05-03 06:24:20'),
(2, 'Footwear & Shoes', 1, 'hWdyMGih37bnoijAtyfONIkPsJA8FciQtTcqt4Lp.jpg', '2023-04-27 02:09:40', '2023-05-03 06:24:10'),
(3, 'Electronics & Gadgets', 1, '56DBMT2DjKJ2MDgAUuAe5qje7Es4fu07dZoQywA1.jpg', '2023-04-27 02:10:44', '2023-05-03 06:23:55'),
(4, 'Games & Toys', 1, 'njpPpVfPBtSF6EomrWSuUEf1QvWKT19ydA9sthA9.jpg', '2023-04-27 02:13:48', '2023-05-03 06:23:39'),
(5, 'Veterinary & Pet Items', 1, 'y5yzhintDARtSLiqgHmpQgiRdaADlbgN6vXRKYgn.jpg', '2023-04-27 02:16:24', '2023-05-03 06:23:05'),
(6, 'Stationery', 1, 'xB6l4keIbnTubpdR0SBVAdZhwxjdHlO3UAEQfyJ6.jpg', '2023-04-27 02:17:05', '2023-05-03 06:19:54'),
(7, 'Hand & Power Tools', 1, 'MXpecwdggDQmKasbKdJ3VcqRe4XIXu6kWABX7yb4.jpg', '2023-04-27 02:19:46', '2023-05-03 06:19:24'),
(8, 'Tupperware', 1, 'VlwEMEl3IuABjLW9rqDO7X3L03cb0FOx67gt0vQc.jpg', '2023-04-27 02:20:53', '2023-05-03 06:18:29'),
(9, 'Furniture', 1, '9cnu55p92PRwHYogj5qN8q4BpQJ9y3jX99JYhRO4.jpg', '2023-04-27 02:21:16', '2023-05-03 06:18:07'),
(10, 'Sports Products', 1, 'jZ1YHwX5HEoJrdSmvugmRWrA2xKJwruQRw53f5hA.jpg', '2023-04-27 02:22:18', '2023-05-03 06:17:54'),
(11, 'Mobile', 1, '2d2eNNWwjvb64MYtSdWpo9KiG5rx4ejwzqkiTxUv.jpg', '2023-04-27 02:23:14', '2023-05-03 06:17:29'),
(12, 'Headphone', 1, '2q6ozFpsFOWXRlpn5NgomjFYrf0hQTMgroyM1E0V.jpg', '2023-04-27 02:24:39', '2023-05-03 06:17:01'),
(13, 'Laptop', 1, 'G4LrxsUb4gCQf6Zbd2Eg5ZYiQVGfewcSyQIbbgk9.jpg', '2023-04-27 02:25:27', '2023-05-03 06:16:50'),
(15, 'Smart Wearables', 1, 'snwx47pJ4Mb8aAul6Wop8C3IqeogoiZaYq33S8If.jpg', '2023-05-02 06:06:53', '2023-05-03 06:16:07');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_04_12_105753_create_posts_table', 1),
(8, '2023_04_20_123220_create_categories_table', 2),
(9, '2023_04_24_055403_add_fields_to_users_table', 3),
(11, '2023_04_24_115345_create_products_table', 4),
(13, '2023_05_02_115422_create_banners_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `quantity` int(11) DEFAULT 0,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1 COMMENT 'active, inactive',
  `variants` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`variants`)),
  `attributes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`attributes`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `description`, `price`, `category_id`, `user_id`, `thumbnail`, `images`, `is_featured`, `quantity`, `sku`, `status`, `variants`, `attributes`, `created_at`, `updated_at`) VALUES
(1, 'APPLE iPhone 13', NULL, '<p>iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.<br>&nbsp;</p><figure class=\"table\"><table><tbody><tr><td>In The Box</td><td><ul><li>iPhone, USB-C to Lightning Cable, Documentation</li></ul></td></tr><tr><td>Model Number</td><td><ul><li>MLPF3HN/A</li></ul></td></tr><tr><td>Model Name</td><td><ul><li>iPhone 13</li></ul></td></tr><tr><td>Color</td><td><ul><li>Midnight</li></ul></td></tr><tr><td>Browse Type</td><td><ul><li>Smartphones</li></ul></td></tr><tr><td>SIM Type</td><td><ul><li>Dual Sim</li></ul></td></tr><tr><td>Hybrid Sim Slot</td><td><ul><li>No</li></ul></td></tr><tr><td>Touchscreen</td><td><ul><li>Yes</li></ul></td></tr><tr><td>OTG Compatible</td><td><ul><li>No</li></ul></td></tr><tr><td>Quick Charging</td><td><ul><li>Yes</li></ul></td></tr><tr><td>Sound Enhancements</td><td><ul><li>Dolby Digital (AC‑3), Dolby Digital Plus (E‑AC‑3), Dolby Atmos and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX and AAX+), Spatial Audio Playback</li></ul></td></tr></tbody></table></figure>', '61999.00', 11, 1, 'PHmqYAtwCAwUlxW0fkZDgBDvUXnVTydaDrG0oSd3.webp', '[\"HWIExyFQS9EJTKxm95mX4FRgkda76FYxCf9GWBLl.webp\",\"8ySHSPWaKpYKPuJcJ8jOENfsfOwrYPWXe0Va4fVK.webp\",\"LU5FayclHWKJHsL0yD3BBGAB2OxxxYpVC08GF7sd.webp\",\"Rfqp4vAfFj4SVMZUpqlMi7yUjidzQZYJpXIu8reN.webp\"]', 0, 100, NULL, 1, NULL, '[{\"key\":\"color\",\"value\":\"red\"},{\"key\":\"color\",\"value\":\"black\"},{\"key\":\"color\",\"value\":\"darkgreen\"},{\"key\":\"storage\",\"value\":\"128\"},{\"key\":\"storage\",\"value\":\"256\"},{\"key\":\"storage\",\"value\":\"512\"}]', '2023-04-27 03:14:58', '2023-04-28 04:44:12'),
(2, 'OnePlus Nord 2T 5G', NULL, '<p><br>Combining powerful performance with a user-friendly experience, the OnePlus Nord 2T 5G Smartphone is a must-have. It boasts up to 16.33 cm (6.43) AMOLED display with a resolution of up to 1080x2400p, ensuring sharp and clear images. In addition, the screen supports HDR10+ and has a refresh rate of up to 90 Hz, providing an immersive viewing experience. Furthermore, the high-performance camera setup of the smartphone allows for capturing stunning selfies, and it supports 1080p video recording at up to 30 fps.<br><br>General</p><figure class=\"table\"><table><tbody><tr><td>In The Box</td><td><ul><li>Mobile, Adapter, Phone Case, SIM Tray Ejector, USB Cable</li></ul></td></tr><tr><td>Model Number</td><td><ul><li>CPH2401/N</li></ul></td></tr><tr><td>Model Name</td><td><ul><li>Nord 2T 5G</li></ul></td></tr><tr><td>Color</td><td><ul><li>Gray Shadow</li></ul></td></tr><tr><td>Browse Type</td><td><ul><li>Smartphones</li></ul></td></tr><tr><td>SIM Type</td><td><ul><li>Dual Sim</li></ul></td></tr><tr><td>Hybrid Sim Slot</td><td><ul><li>Yes</li></ul></td></tr><tr><td>Touchscreen</td><td><ul><li>Yes</li></ul></td></tr><tr><td>OTG Compatible</td><td><ul><li>Yes</li></ul></td></tr></tbody></table></figure><p>&nbsp;</p><p>Display Features</p><figure class=\"table\"><table><tbody><tr><td>Display Size</td><td><ul><li>17.02 cm (6.7 inch)</li></ul></td></tr><tr><td>Resolution</td><td><ul><li>2400 x 1080 Pixels</li></ul></td></tr></tbody></table></figure><p>Os &amp; Processor Features</p><figure class=\"table\"><table><tbody><tr><td>Operating System</td><td><ul><li>Android 13</li></ul></td></tr><tr><td>Processor Core</td><td><ul><li>Octa Core</li></ul></td></tr><tr><td>Primary Clock Speed</td><td><ul><li>2.4 GHz</li></ul></td></tr></tbody></table></figure><p>Memory &amp; Storage Features</p><figure class=\"table\"><table><tbody><tr><td>Internal Storage</td><td><ul><li>128 GB</li></ul></td></tr><tr><td>RAM</td><td><ul><li>8 GB</li></ul></td></tr><tr><td>Memory Card Slot Type</td><td><ul><li>Dedicated Slot</li></ul></td></tr></tbody></table></figure>', '28500.00', 11, 1, 'XRJPdGwzZASrpzLKe043n4ro5kkS5ynLJj2CZQCC.webp', '[\"Pf05jKmhdnCRukOtpXcxZNkvqMEK6doQDCCPESOZ.webp\",\"cUvPIw7wzoWe24VeineglVPCYSo8JIJTSy4wvRIB.webp\",\"qma6xUlDtD7wfYnyhjTU7YI89i9QXyo8zazVheZd.webp\"]', 0, 100, NULL, 1, NULL, '[{\"key\":\"color\",\"value\":\"gray\"},{\"key\":\"color\",\"value\":\"black\"},{\"key\":\"storage\",\"value\":\"128\"},{\"key\":\"storage\",\"value\":\"256\"}]', '2023-04-27 03:24:29', '2023-04-28 05:43:04'),
(3, 'Men Printed Hooded Neck White, Black T-Shirt', NULL, '<p>Product Details</p><p>&nbsp;</p><p>Type</p><p>Hooded Neck</p><p>Sleeve</p><p>Full Sleeve</p><p>Fit</p><p>Slim</p><p>Fabric</p><p>Cotton Blend</p><p>Sales Package</p><p>1 Men\'s Cotton Blend Tshirt</p><p>Pack of</p><p>1</p><p>Style Code</p><p>JC22-HD-FS-NAVY-JMC-PCKT</p><p>Neck Type</p><p>Hooded Neck</p><p>Ideal For</p><p>Men</p><p>Size</p><p>L</p><p>Pattern</p><p>Printed</p><p>Suitable For</p><p>Western Wear</p><p>Reversible</p><p>No</p><p>Fabric Care</p><p>Gentle Machine Wash</p><p>Give your casual outfit an uber-cool update with this Cotton Blend T-Shirt from Jump Cuts, to head out for a soiree in style. Minimally fashionable and super rich in comfort, this 100% Cotton Blend T-Shirt can be worn perfectly with beige chinos and a pair of sneakers</p>', '699.00', 1, 1, 'x5n4BDR1WOy2XNOG4fJ3TINLE0g5lffzNNL7ohUE.webp', '[\"KITyKfJqe45jT7RRV5lTsthuopEIVfZxuT1RUamR.webp\",\"89gQP2pcijjMpo0U4w5mWYycc8MjqQosgzsNBT90.webp\",\"ZmwgQ4flpP0qVfHmtmgi2OGMiwRbVqgOOFuPlMse.webp\",\"BlrBneDKOZGkFLAOCB9UeWRsoIdY7TMjjxWXKi3m.webp\"]', 0, 100, NULL, 1, NULL, '[{\"key\":\"color\",\"value\":\"yellow\"},{\"key\":\"color\",\"value\":\"green\"},{\"key\":\"color\",\"value\":\"black\"},{\"key\":\"size\",\"value\":\"l\"},{\"key\":\"size\",\"value\":\"xl\"},{\"key\":\"size\",\"value\":\"xxl\"}]', '2023-04-27 03:27:49', '2023-04-28 05:43:03'),
(4, 'BOSCH GSB 10 RE Kit Power & Hand Tool Kit', NULL, '<p><br>Features: - Forward/reverse rotation - Electronic control for exact pilot drilling - Rotating brush plate for constant power in reverse and forward rotation - Higher dynamic load rated ball bearing for long life - Ergonomic handle for comfortable use Specifications: - Rated power input 500 W - No-load speed 0 - 2600 rpm - Power output 250 W - Weight without cable 1.5 kg - Drill spindle connecting thread 3/8\'\' – 24 UNF - Chuck capacity 1 - 10 mm - Impact rate at no-load speed 0 - 41600 bpm - Drilling dia. in concrete 10 mm - Drilling dia. in wood 20 mm - Drilling dia. in steel 8 mm Contents: - Plastic carry case - 1pc - Drill bit - masonry - 5 pcs - 4,5,6,8,10mm - Drill bit - metal - 5 pcs - 2,3,4,5,6mm - Drill bit - wood - 4 pcs - 4,5,6,8mm - Claw hammer with rubber grip- 1pc - Screw driver bit set - 10 pcs - PH1,PH2,PZ1,PZ2,S4,S6,H4,H5,T20,T25 - Screw driver adaptor magnetic - 1pc - to fit above bits with the machine - Sockets - 7pcs - 4,5,6,7,8,9,10mm - Nut driver adaptor 1/4inch - 1 pc - to fit above sockets with the machine - Measuring tape 3m - 1pc - Combination pliers 6inch -1pc - Adjustable wrench - 6inch 1pc - Adjustable knife - 1inch - 1pc - Screws - 3mm - 10pcs, 4mm - 10pcs, 5mm -10pcs - Fischer Nylon Fixings - 4mm - 10pcs, 6mm - 10pcs, 8mm - 10pcs - Sprit level - 3 directional - 1pc - Keyed chuck - 1pc</p>', '10000.00', 7, 1, 'oYpkAVEdRqRp4zwejXsadJU05N3qiBW30Z2Klztw.webp', '[\"RSZUTz1cdsEpQIAk5FghYHOOnS9hPH7JTYtNukNC.webp\",\"tfGuDDPRf1gXhOcLU7aiDOhxGSgOeaDJvO5ErCym.webp\",\"lvIExwmQ5D1AgoHDVDnNiJBlKis8ENfHj1l3WLxK.webp\",\"ukHKQNvHaAPRXgyhEVWgXaMk5NkJBb9c5IK0SgmK.webp\"]', 0, 50, NULL, 1, NULL, NULL, '2023-04-27 03:30:17', '2023-04-27 03:30:17'),
(5, 'PUMA Sass Running Shoes For Men', NULL, '<p>Crafted with fine technology and futuristic design, PUMA shoe is surely here to uplift your style and track games. Kick off on street and field in this shoe from the worlds leading and much loved sports brand, PUMA.</p><p>&nbsp;</p><p>Product Story: The Puma Jigsaw Running Shoes Is Created To Up Your Track Game. The Features Of This Shoe Are Made By Keeping In Mind The Passionate Running Enthusiast In You. The Mesh Knit Upper Offers The Most Exceptional Comfort And Breathability To Withstand Your Long-Running Hours. The Rubber Outsole Boosts Every Pace To Achieve Your Limitless Track Goals. Details: Fully Mesh Upper Rubber Outsole For Grip Pull Tab On The Tongue For Snug Fit And Easy Step In Puma Formstrip In Contrast Colour On Lateral Sides Puma Wordmark On The Heel Collar</p>', '2500.00', 2, 1, 'FG9O8WO3QElhpNjisS47UffmxD5qCKokVYapsEho.webp', '[\"SYAWNutx8pBUu3kUa5TCi5EgXup9xA7AiTl0gxou.webp\",\"w4trv9FIYaglSF6sZO6aIu6kwXEAbkKiMfAnVzD3.webp\",\"XMw9SwyQnJqcnjfJq4y4cH5AsRmmCX65IDxPMyLE.webp\",\"UDdeMzQ66RWoatahJ9RC8hC7ObTSUsUGNyP3dLth.webp\"]', 0, 200, NULL, 1, NULL, '[{\"key\":\"size\",\"value\":\"7\"},{\"key\":\"size\",\"value\":\"8\"},{\"key\":\"size\",\"value\":\"9\"},{\"key\":\"size\",\"value\":\"10\"},{\"key\":\"color\",\"value\":\"black\"},{\"key\":\"color\",\"value\":\"gray\"}]', '2023-04-27 03:33:52', '2023-04-27 03:34:10'),
(6, 'Digital Print Semi Stitched Lehenga Choli', NULL, '<p><br>Dry Clean only</p><p>COVERED IN WARRANTY:1. Wrong product Delivered. 2. Product not As Description. 3. If Deliver product is Stain, Ruff &amp; Short Length. 4. If Any Type Manufacturing Fault. Not Covered in Warranty 1. Customer Damaged Does Not Acceptable For return Or Replacement. 2. Washable Product does not accept for return. 3. Product Not Accept Return &amp; Replace After return policy is over.</p><p>Color - Lehenga Color : Mroon || Blouse Color : Maroon || Duptta Color : Maroon|| Inner Color : Maroon :: Fabric - Lehenga Fabric : Organza || Blouse Fabric : Net || Duptta Fabric : Net|| Inner Fabric : Satin :: Length - Lehenga Flare : 4(MTR) || Lehenga Length : 42(Inch) ||Lehenga Waist Size : Up to 42(Inch) || Blouse Length : 0.8(MTR) || Duptta Length : 2.2(MTR):: Work &amp; Stitched Type - Lehenga Work : Printed &amp; Jari Sequence Work || Blouse Work : Jari Sequence Work || Duptta Work : Lace Work|| Stitched Type : Semi-Stitched :: Wash Care - Wash Care: Dry clean for the first wash, there after hand wash</p>', '8000.00', 1, 1, 'j6bCNoVENjfiPZJrjNze0qnb0BgqFqxf6vcdpE79.webp', '[\"05nsP7Bu01p4BUcwhFz1K0esaHsqlQCHufyGsda8.webp\",\"fheQZCAQLOTISOd4Nh3Fadfu9oPzNHlvRB6kLxu7.webp\",\"mmjmDyzqlonzwi3v7EVjcEvrrmoI7Oc9icFJAQfV.webp\"]', 0, 500, NULL, 1, NULL, '[{\"key\":\"color\",\"value\":\"maroon\"},{\"key\":\"color\",\"value\":\"blue\"},{\"key\":\"color\",\"value\":\"yellow\"},{\"key\":\"color\",\"value\":\"black\"},{\"key\":\"size\",\"value\":\"free size\"}]', '2023-04-27 03:38:02', '2023-04-27 03:38:02'),
(7, 'KidsBerry  Soft Cushion Baby Sofa', NULL, '<p><br>Delight your little ones this year by presenting them with an adorable soft toy. This soft toy into their bedroom will give them endless hours of fun-filled playtime. Crafted with perfection using the finest materials, this Teddy has striking features. Instill a love for wildlife and introduce your children to the world of animals with this furry little plush toy. Features Non-toxic and soft fabric Soft and Cuddly filling Recommended Age Group - 5 Month + Years Recommended For - Unisex</p>', '5999.00', 4, 1, 'kReMzK57eFYHgzqx25hE0JQ2xdmuHmQokleOHgyH.webp', '[\"wBe1actAn2DED0gBDzpci1ZAGi8bVXffhu2MDH0y.webp\",\"kXrevUYryhxLHTSP2CUAL4PGynC1J4EdsjRV5YJt.webp\",\"LJ9zUyoId4moB2z4fnYUCYaczskA73HrtZAgfxvx.webp\"]', 0, 50, NULL, 1, NULL, '[{\"key\":\"color\",\"value\":\"black\"},{\"key\":\"color\",\"value\":\"red\"}]', '2023-04-27 03:40:05', '2023-04-27 03:40:37'),
(8, 'Thomson 9R PRO 108 cm (43 inch) Ultra HD', NULL, '<p>Powered by Android</p><p>Harness the power of artificial intelligence and experience a customized interface for you. The TV is powered by android for you to enjoy a variety of content. Powered by features such as memory optimization, fast boost, will enhance the speed and accuracy of processing.</p><p>&nbsp;</p><p>General</p><p>&nbsp;</p><figure class=\"table\"><table><tbody><tr><td>In The Box</td><td><ul><li>1N LED TV, 1N REMOTE, 1N MANUAL, 2N BATTERY, 1N WALLMOUNTING</li></ul></td></tr><tr><td>Model Name</td><td><ul><li>43PATH4545BL</li></ul></td></tr><tr><td>Color</td><td><ul><li>Black with Alloy Stand</li></ul></td></tr><tr><td>Display Size</td><td><ul><li>108 cm (43 inch)</li></ul></td></tr><tr><td>Screen Type</td><td><ul><li>LED</li></ul></td></tr><tr><td>HD Technology &amp; Resolution</td><td><ul><li>Ultra HD (4K), 3840 x 2160</li></ul></td></tr><tr><td>Series</td><td><ul><li>9R PRO</li></ul></td></tr><tr><td>Smart Tv</td><td><ul><li>Yes</li></ul></td></tr><tr><td>Motion Sensor</td><td><ul><li>Yes</li></ul></td></tr><tr><td>HDMI</td><td><ul><li>3</li></ul></td></tr><tr><td>USB</td><td><ul><li>2</li></ul></td></tr><tr><td>Wi-Fi Type</td><td><ul><li>Dual Band</li></ul></td></tr><tr><td>Built In Wi-Fi</td><td><ul><li>Yes</li></ul></td></tr><tr><td>Launch Year</td><td><ul><li>2021</li></ul></td></tr><tr><td>Wall Mount Included</td><td><ul><li>Yes</li></ul></td></tr></tbody></table></figure>', '25999.00', 3, 1, 'sNMefLhzOzdujbGrsArqBCNJLQqmX0d5nwwrEnx1.webp', '[\"m9DrF3aTubRnoQS7fkaHhgibqw56REylvqr51AFo.webp\",\"Gm29bREU1bMaiCFCuKOwf7qvNtVRzzdcGwDwXXI5.webp\",\"723elrhX4UmkjYvSUG9YdX395zM8uUP7VimQBH6d.webp\"]', 0, 100, NULL, 1, NULL, '[{\"key\":\"size\",\"value\":\"32\"},{\"key\":\"size\",\"value\":\"42\"},{\"key\":\"size\",\"value\":\"64\"},{\"key\":\"size\",\"value\":\"108\"}]', '2023-04-27 03:45:44', '2023-04-27 03:45:44'),
(9, 'Canon EOS M50 Mark II Mirrorless Camera', NULL, '<p><br>Flex Your Stories.Lightweight and stylish, the EOS M50 Mark II is fun and easy to use with Wi-Fi connectivity for content creators to stay close to your audience at all times. Keep your social media feeds lit with high-quality visual storytelling in 4K and accurate eye and face detection autofocusing.Whatever content you create, set yourself apart from the crowd and give your audience something special. The EOS M50 Mark II gives you more ways to shoot photos, movies and live streams and connect with your followers.,suitable_for-Beginners,processor-DIGIC 8,sensor_type-APS-C CMOS,continuous_shooting_speed-11 fps (in High Continuous shooting)</p>', '79999.00', 3, 1, 'S59MoB4MsMOluvbBT09gUfTdJNZjNsErlp838skM.webp', '[\"DO5COmTYnWjIYyOLFOBZtvaWfrqIh2BWkN4kXRxK.webp\",\"fxpoGsoeGl8nOhfgqqg56OZDymgDpcTplWvGJyoN.webp\",\"PsmpPiA2SO3o6zxifOwHof2bsb0mtGctOn96sqcV.webp\"]', 0, 252, NULL, 1, NULL, NULL, '2023-04-27 03:47:06', '2023-04-28 07:26:58'),
(10, 'Seventh Heaven Milan 3 Seater Sofa,', NULL, '<p><br>Seventh Heaven Sofa is ideal for daily use with premium comfort. Our integrated design, manufacturing and quality control process is singularly focused on providing the most innovative series of styles in the industry with highest quality and finish. Our quality craftsmanship ensures great value for money products. In addition to a core team of experienced furniture industry professionals, Seventh Heaven products also rely on the experience of interior designers to ensure that the designs are leading edge and can be incorporated into high end interiors as core feature pieces or as eclectic complimentary additions to any room.</p>', '36000.00', 9, 1, 'YO24B6umrSnxSa05AmVktFFS1BAOVWYqTJBElLs4.webp', '[\"3ZPqxL0qAMbRiVVIxyr2j2UiOWQTgCJTmwTrgIWL.webp\",\"KsLXqpXmUTsDu6g34nzHcnipPu8O1CjTvqC3IDFU.webp\",\"h7PFMesxuYrwHmwvkrMjtT2jSQYTMf7CL91t9pwc.webp\"]', 0, 100, NULL, 1, NULL, NULL, '2023-04-27 03:48:51', '2023-04-28 07:27:15'),
(11, 'Willow Cricket Bat', NULL, '<p>Specifications</p><p>General</p><figure class=\"table\"><table><tbody><tr><td>Part Number</td><td><ul><li>CEATSC-02</li></ul></td></tr><tr><td>Cover Included</td><td><ul><li>No</li></ul></td></tr><tr><td>Color</td><td><ul><li>Blue</li></ul></td></tr><tr><td>Sport Type</td><td><ul><li>Cricket</li></ul></td></tr></tbody></table></figure><p>Dimensions</p><figure class=\"table\"><table><tbody><tr><td>Width</td><td><ul><li>7 cm</li></ul></td></tr><tr><td>Height</td><td><ul><li>70 cm</li></ul></td></tr><tr><td>Depth</td><td><ul><li>4 cm</li></ul></td></tr></tbody></table></figure>', '1799.00', 10, 1, 'uEIQMnrjDxsRWpkJogW3YCQvMfnj5ciBR35iuUP3.webp', '[\"uQHlUDqQwsMENXYDsYgD5LNvUvPlBMX6CJaY63Fd.webp\",\"DjLtbvcIrz8p0Sbyqi6djUMRmvk7E7D5mBYP8Cw0.webp\"]', 0, 999, NULL, 1, NULL, '[]', '2023-04-27 03:52:08', '2023-04-28 07:49:04'),
(12, 'rvv', NULL, '<p>sfdsfnsnfksdnfssf</p>', '6944.00', 3, 1, 'NcnrYgRYsqLcQc2uV4WK5yCZbgNqydUwUFCPsH9a.webp', NULL, 0, 343, NULL, 1, NULL, NULL, '2023-04-28 07:34:08', '2023-04-28 07:34:08'),
(13, 'rvvv', NULL, '<p>34434434</p>', '3434.00', 3, 1, 'oG2azSF0uFo6ewezMWNhmDAa9DkMKxkkkQuA1NyL.webp', '[]', 0, 34456, NULL, 1, NULL, '[]', '2023-04-28 07:37:05', '2023-04-30 23:17:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_number` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user' COMMENT 'admin,user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `first_name`, `avatar`, `email`, `mobile_number`, `role`, `email_verified_at`, `status`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mr. Admin', 'Admin', 'Mr.', NULL, 'admin@gmail.com', NULL, 'admin', NULL, 1, '$2y$10$9DmbsByw6Sw4UwX13N8zeef6/zN1A305ilJnnSrJZ8d.IB48d50sC', 'wpJ25vEjtiCePkBasNQ5iVjTq4vQsgp1QXnXRHVHJrQhLUDGmBnCUkVARbOV', '2023-04-19 04:05:03', '2023-04-27 00:56:45'),
(55, 'Prof. Giles Volkman', 'Sauer', 'Cynthia', NULL, 'leffler.giovanni@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'FEtzROZaed', '2023-04-24 00:53:17', '2023-04-24 00:53:17'),
(56, 'Elvis Hahn', 'Deckow', 'Hassie', NULL, 'mcarroll@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'lpBeSkVRfK', '2023-04-24 00:53:17', '2023-04-24 00:53:17'),
(57, 'Bert Hartmann', 'Rowe', 'Antonina', NULL, 'dach.raina@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rmfH5f3M7O', '2023-04-24 00:53:17', '2023-04-24 00:53:17'),
(58, 'Arielle Dooley', 'Hessel', 'Marcella', NULL, 'maverick.kessler@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'HQz2za1niQ', '2023-04-24 00:53:17', '2023-04-24 00:53:17'),
(59, 'Logan Vandervort', 'Larson', 'Fred', NULL, 'effie.skiles@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ao883cY4lv', '2023-04-24 00:53:17', '2023-04-24 00:53:17'),
(60, 'Mr. Deion Wolf Jr.', 'Witting', 'Evans', NULL, 'ghayes@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'o7FEKEsGvm', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(61, 'Cristina Ullrich I', 'Willms', 'Bernard', NULL, 'kling.luther@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'FNn123pkiv', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(62, 'Gideon Veum II', 'Windler', 'Roberto', NULL, 'aida94@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'L7Vgn1CiGN', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(63, 'Prof. Hertha Murazik', 'Schroeder', 'Orin', NULL, 'lehner.louvenia@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'SXLMd83VRp', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(64, 'Prof. Jamaal Shields', 'Bartell', 'Rosie', NULL, 'kassulke.candice@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'XpNHq2K26p', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(65, 'Christa Tromp', 'Thiel', 'Myrna', NULL, 'aidan52@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'abPd9sFkMX', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(66, 'Vada Bahringer', 'Kuhic', 'Aliyah', NULL, 'okilback@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '7wS1YmPJCk', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(67, 'Prof. Cecil Koch V', 'Pouros', 'Diana', NULL, 'schmeler.sabina@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'bBtBFog1Ez', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(68, 'Demarcus Murazik', 'Nienow', 'Breanna', NULL, 'price.scot@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'zbxoNnD47t', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(69, 'Zella Zemlak II', 'Abbott', 'Ricardo', NULL, 'darby.carter@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'vmTl8J0xaj', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(70, 'Miss Queen Schumm MD', 'Bogisich', 'Marc', NULL, 'zwisoky@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'SQziGREBy3', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(71, 'Fausto Mohr', 'Nienow', 'Evan', NULL, 'ross22@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'W52Uj8Gymc', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(72, 'Dr. Camron Beer III', 'Reilly', 'Tevin', NULL, 'kaia83@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ACKwc9AE7l', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(73, 'Dr. Ward Schulist', 'Schroeder', 'Liza', NULL, 'lois.bailey@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'DoM21gw3UA', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(74, 'Warren Leannon', 'Kilback', 'Jazmin', NULL, 'ellsworth63@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'oe3BM7CzlL', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(75, 'Dr. Claudia Howell I', 'Nikolaus', 'Merlin', NULL, 'gvolkman@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'feAz25GPuh', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(76, 'Dayne Miller I', 'Will', 'Cathrine', NULL, 'qsteuber@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'sOJQz8XbVf', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(77, 'Tatum Kuhlman', 'Weissnat', 'Arne', NULL, 'abogan@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Z7XxC8KY5z', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(78, 'Faustino Dach', 'Koepp', 'Gracie', NULL, 'emarvin@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'qK3AKI08dn', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(79, 'Edwina Gutmann', 'O\'Reilly', 'Jaden', NULL, 'rodolfo.mccullough@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ZrxI8jDV1v', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(80, 'Chyna Herzog', 'Carter', 'Tremayne', NULL, 'stephanie.prosacco@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Cyt0BDEWT0', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(81, 'Kimberly Wilderman', 'Cremin', 'Elmo', NULL, 'tnikolaus@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '5Sl7EJmzo3', '2023-04-24 00:53:18', '2023-04-24 00:53:18'),
(82, 'Patsy Bailey', 'Dibbert', 'Marcia', NULL, 'franco.gleichner@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'CpxEKXXcrx', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(83, 'Domingo Brekke', 'Boyer', 'Sebastian', NULL, 'alayna12@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'IgS4EgwEuH', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(84, 'Mr. Rasheed Paucek', 'Kulas', 'Justen', NULL, 'salma06@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'tEV8hb5anY', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(85, 'Prof. Eldora Krajcik MD', 'Von', 'Devin', NULL, 'camilla51@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'VwkfReLadP', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(86, 'Millie Purdy', 'Bechtelar', 'Francis', NULL, 'bergstrom.jamison@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'FQmwdH3MHv', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(87, 'Kris Parisian', 'Lueilwitz', 'Teagan', NULL, 'eshields@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '3W4BNx4eOc', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(88, 'Caesar Crooks', 'Schamberger', 'Pierre', NULL, 'juvenal71@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'OfOBhNs35a', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(89, 'Dr. Pascale Predovic I', 'Dooley', 'Luis', NULL, 'cielo02@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ESrcUwWdAy', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(90, 'Maximilian Hammes', 'Wintheiser', 'Zora', NULL, 'jolie71@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'MyM5pdsUme', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(91, 'Evalyn Monahan', 'Goldner', 'Myra', NULL, 'rkihn@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1LsD1T6lIa', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(92, 'Miss Annetta Koch', 'Pacocha', 'Arely', NULL, 'cpollich@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ZiRK0H6SEy', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(93, 'Frankie Hegmann DVM', 'Ernser', 'Aliza', NULL, 'langosh.branson@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'bseYyq92hP', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(94, 'Hanna Schinner PhD', 'Simonis', 'Amos', NULL, 'marquise.block@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'eV2RC8mwqf', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(95, 'Marshall Mertz', 'Cummerata', 'Alia', NULL, 'schoen.marcelle@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'tyVWZEK6ua', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(96, 'Kenny Pouros Jr.', 'Keebler', 'Stella', NULL, 'gruecker@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'YeJhuWlf6w', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(97, 'Trisha Brown', 'Morar', 'Tina', NULL, 'susanna.mayert@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rf2Nrg87yz', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(98, 'Ms. Aryanna Larson', 'Jacobson', 'Michele', NULL, 'acremin@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Y9cvOzceqk', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(99, 'Prof. Rene Lang DVM', 'Nolan', 'Whitney', NULL, 'tgusikowski@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'nx2EGS0wLp', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(100, 'Delphia Cronin', 'Borer', 'Keaton', NULL, 'wilkinson.emmy@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1mJUiZUNVn', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(101, 'Danny Bradtke DVM', 'Crist', 'Destin', NULL, 'noel.wyman@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Citv3Gn2dm', '2023-04-24 00:53:19', '2023-04-24 00:53:19'),
(102, 'Reggie Bins', 'Lubowitz', 'Cielo', NULL, 'darrin.wilderman@example.net', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'uEDxnmLhmj', '2023-04-24 00:53:20', '2023-04-24 00:53:20'),
(103, 'Derrick Oberbrunner', 'Kihn', 'Pascale', NULL, 'mills.davin@example.com', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rOtzxOPphw', '2023-04-24 00:53:20', '2023-04-24 00:53:20'),
(104, 'Jessyca Romaguera', 'Lindgren', 'Nedra', 'X0sXaaujdIpGYaIv7nxar3YlUTZgOjE8DSuSQChu.png', 'bruce.wehner@example.org', NULL, 'user', '2023-04-24 00:53:17', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'kbmGKQPs03', '2023-04-24 00:53:20', '2023-04-24 03:17:00'),
(105, 'john doe', 'doe', 'john', 'D2XAl9TdL4Bd7oYt5gHuoiqTwN9V8oPL1UgsfSz0.png', 'john@due.com', NULL, 'user', NULL, 1, '$2y$10$ackNetu0MT0JO7dQ84pPIu4MHxLrvTy0a69vImrfJNenoOwJJ86eK', NULL, '2023-04-24 00:58:11', '2023-04-24 02:33:14'),
(107, 'Janae Mitchell I', 'Bauch', 'Cleta', NULL, 'wehner.wilford@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ascy0zkyWa', '2023-04-24 03:56:10', '2023-04-24 03:56:10'),
(108, 'Shyann Wilkinson V', 'Jaskolski', 'Stanley', NULL, 'keebler.amara@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'zILJP0oZVC', '2023-04-24 03:56:10', '2023-04-24 03:56:10'),
(109, 'Torrey Hirthe IV', 'Stehr', 'Elna', NULL, 'mmarquardt@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '7ctgkc4wjB', '2023-04-24 03:56:10', '2023-04-24 03:56:10'),
(110, 'Kavon Bartoletti', 'Rempel', 'Ora', NULL, 'stella.okeefe@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'c8RoT8SGOY', '2023-04-24 03:56:10', '2023-04-24 03:56:10'),
(111, 'Mr. Jose Rohan Sr.', 'Greenfelder', 'Rosina', NULL, 'dolores.hodkiewicz@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'BO0Xum8kpB', '2023-04-24 03:56:10', '2023-04-24 03:56:10'),
(112, 'Linnie Anderson V', 'Ankunding', 'Noah', NULL, 'towne.terry@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'wgHu9xO99y', '2023-04-24 03:56:10', '2023-04-24 03:56:10'),
(113, 'Prof. Abby Hickle', 'Jerde', 'Erick', NULL, 'rippin.ollie@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'RpCYkVOJHQ', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(114, 'Marietta Jakubowski', 'Breitenberg', 'Jesse', NULL, 'eli.hoeger@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'F42GqNpNRl', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(115, 'Lon Trantow', 'Ryan', 'Verdie', NULL, 'abshire.stefan@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'SuAT5FuCnI', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(116, 'Jimmie West', 'Funk', 'Duncan', NULL, 'pacocha.arely@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'PTHXVSwC2S', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(117, 'Miss Dianna Muller II', 'Denesik', 'Vergie', NULL, 'idooley@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'hn1skRjkrr', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(118, 'Dr. Ross Lueilwitz', 'VonRueden', 'Georgianna', NULL, 'jacklyn.koch@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'RCQ7ceXKjr', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(119, 'Celine Ankunding', 'Bergnaum', 'Elise', NULL, 'haley.kitty@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '4HkpZyQVwZ', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(120, 'Mr. Carlo Zieme MD', 'Turcotte', 'Tony', NULL, 'elmore02@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'hLe1hVuPiu', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(121, 'Prof. Nathan Ratke Jr.', 'Hickle', 'Eleanore', NULL, 'ike.wiegand@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'y6CYOn4BOt', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(122, 'Parker Lind', 'Hermiston', 'Robert', NULL, 'norval.oreilly@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'yYR4lNkLfR', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(123, 'Dr. Doyle Bogan IV', 'Beer', 'Sabryna', NULL, 'margie.greenfelder@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'XDPi88MmYd', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(124, 'Clare Roberts', 'Fahey', 'Napoleon', NULL, 'kennedy.schimmel@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'kg3x7iBa1l', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(125, 'Kenna Wehner', 'Lesch', 'Curt', NULL, 'dcummings@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ifJwXOJypA', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(126, 'Prof. Kimberly Nienow', 'Dickinson', 'Randy', NULL, 'omorar@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'CRf344jpY1', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(127, 'Dr. Jaycee Haag PhD', 'Witting', 'Jude', NULL, 'kailee45@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'x5nbqIwUfB', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(128, 'Alexandrine Haley', 'Stiedemann', 'Nikita', NULL, 'pollich.bernardo@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'r317Mi858u', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(129, 'Dr. Jerel Paucek DDS', 'Feeney', 'Cedrick', NULL, 'bskiles@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'o6IctoCmOU', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(130, 'Ms. Eldridge Becker', 'Adams', 'Aniyah', NULL, 'leopold.flatley@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'cRMMqqBqdQ', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(131, 'Chelsea Conn', 'Hand', 'Bettye', NULL, 'kling.levi@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ws6yAxriG4', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(132, 'Ruby Altenwerth II', 'Littel', 'Jude', NULL, 'eldora.kunze@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '8MZqZMu123', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(133, 'Verla Russel I', 'Schaden', 'Gunner', NULL, 'heidenreich.evie@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'L1UZt9QYP8', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(134, 'Miss Jayne Rohan', 'Dicki', 'Jocelyn', NULL, 'karl80@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ySQIAfQbQ4', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(135, 'Ms. Ava Stanton', 'Langworth', 'Luigi', NULL, 'fkassulke@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'SD8GYbm0Mf', '2023-04-24 03:56:11', '2023-04-24 03:56:11'),
(136, 'Katrine Jacobs', 'Conroy', 'Linda', NULL, 'swaniawski.marisa@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ZUZ2EjF6gW', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(137, 'Geovany Predovic', 'Lubowitz', 'Jeff', NULL, 'jettie.king@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'X8LLQJLsTn', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(138, 'Mr. Denis Welch Jr.', 'Reilly', 'Pedro', NULL, 'cristobal30@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'pMw6gRYpFe', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(139, 'Prof. Eladio Rodriguez', 'Ortiz', 'Ahmed', NULL, 'ziemann.floy@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'fOpKxFAfII', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(140, 'Dr. Mose Schulist DVM', 'Gerlach', 'Fabiola', NULL, 'blanche92@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'QL0PutmU3R', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(141, 'Judge Heller', 'Rodriguez', 'Juston', NULL, 'cchamplin@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'L6xmyyZh5O', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(142, 'Angus Bosco', 'Corwin', 'Earnest', NULL, 'willa.mcdermott@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'RN3wTOJaef', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(143, 'Dr. Landen Cummerata', 'Graham', 'Keara', NULL, 'astrid.okon@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'jjKqMuHYWr', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(144, 'Junior Jenkins MD', 'Smitham', 'Cristal', NULL, 'ghintz@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Lvd9TH4zqf', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(145, 'Dr. Stephen Halvorson MD', 'Tremblay', 'Toy', NULL, 'berry.grady@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'lGtNQAPsJS', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(146, 'Horace Lueilwitz', 'Gulgowski', 'Alayna', NULL, 'osinski.teresa@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'QBZCoe6wZD', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(147, 'Cornelius Lynch', 'Cruickshank', 'Dewitt', NULL, 'rosalind.gusikowski@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'OKXQDuXW6B', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(148, 'Miss Margarette McCullough', 'Gerhold', 'Raheem', NULL, 'jlebsack@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'BqmM2tqop8', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(149, 'Dr. Bertrand Padberg', 'Halvorson', 'Carmine', NULL, 'ortiz.norbert@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'c8JElmMGbG', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(150, 'Prof. Oda Romaguera II', 'Larkin', 'Myrna', NULL, 'ratke.isaias@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'gT46aXVoma', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(151, 'Prof. Tressa Bauch III', 'Friesen', 'Zakary', NULL, 'kacie.ziemann@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'JgnhKGAOyp', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(152, 'Cleve Sipes', 'Rath', 'Lewis', NULL, 'dolly33@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1ftzKoG1fd', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(153, 'Dr. Titus Kohler V', 'Kihn', 'Viviane', NULL, 'marshall.graham@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'PHTXXnUixe', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(154, 'Nicola Schamberger', 'Dietrich', 'Isom', NULL, 'ankunding.erika@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'edklXFB0jA', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(155, 'Dedrick Cole', 'Gibson', 'Nico', NULL, 'wilfredo.oberbrunner@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'qoWGfSFtTL', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(156, 'Mattie Adams', 'Kiehn', 'Ciara', NULL, 'jovany.ondricka@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'RpYJ6agaud', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(157, 'Althea Orn', 'Kiehn', 'Maude', NULL, 'lwalker@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'KJ6XKzRWyO', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(158, 'Dr. Courtney Prosacco Jr.', 'Powlowski', 'Elmer', NULL, 'sfarrell@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'dNfgL5Nt6u', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(159, 'Stephon Johnston', 'Beatty', 'Eveline', NULL, 'christa29@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'xgA0WRIBAu', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(160, 'Coby Wilkinson', 'Glover', 'Elisha', NULL, 'mayert.markus@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '3hazSMFAbM', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(161, 'Dr. Cleveland Jakubowski', 'Purdy', 'Gabrielle', NULL, 'greenholt.samson@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'eNdxBx3BvD', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(162, 'Dr. Mitchell Wyman PhD', 'Boyer', 'Vilma', NULL, 'sierra15@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'vy7Nu300pX', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(163, 'Mr. Kacey Stroman', 'Adams', 'Tyra', NULL, 'veronica.oreilly@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '7Dq0n21nh4', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(164, 'Torrey Raynor', 'Labadie', 'Margaretta', NULL, 'cemmerich@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rM7NsXRWYO', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(165, 'Dr. Newell Kutch Sr.', 'Crona', 'Amelie', NULL, 'rnitzsche@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'eHrjwjMSgM', '2023-04-24 03:56:12', '2023-04-24 03:56:12'),
(166, 'Raphael D\'Amore', 'Roberts', 'Opal', NULL, 'clara.bailey@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '2P5eZWrvfy', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(167, 'Ismael Braun', 'Metz', 'Raegan', NULL, 'hassan29@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'niMs6lhxNx', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(168, 'Yolanda Pfannerstill', 'Gerlach', 'Breanna', NULL, 'wfunk@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'H0jWIZLtJX', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(169, 'Nicklaus Walker', 'Kertzmann', 'Adan', NULL, 'dolores53@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'anBJlMcXte', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(170, 'Serena Breitenberg', 'Grant', 'Jerad', NULL, 'jakubowski.melyna@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'KitAULuE29', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(171, 'Kristina Howe', 'Labadie', 'Carrie', NULL, 'conn.jammie@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'R4cAB6SBMJ', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(172, 'Abigail Oberbrunner III', 'Miller', 'Ernest', NULL, 'bhoeger@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'jnLgb8mDT5', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(173, 'Mrs. Zoey Wilderman Jr.', 'Emard', 'Perry', NULL, 'gislason.torey@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '7vSTWO2cmB', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(174, 'Kendrick O\'Reilly', 'Kiehn', 'Horace', NULL, 'johnson.hintz@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'DFbVIhNU2v', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(175, 'Dorthy Price I', 'Weissnat', 'Lilian', NULL, 'jcremin@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'sqonkk4kdF', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(176, 'Prof. Eloy Brown', 'Casper', 'Dahlia', NULL, 'icie76@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'AAgjkQnDQY', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(177, 'Ali Fritsch MD', 'Swift', 'Kiley', NULL, 'earnest.will@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'n6w4EmBLbt', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(178, 'Natalia Kuhlman', 'Bosco', 'Jolie', NULL, 'bframi@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Umv5Tm1NQd', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(179, 'Nona Schiller MD', 'Ryan', 'Cecile', NULL, 'sipes.jada@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'GSgvfHhnr0', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(180, 'Ms. Emily Casper', 'Rippin', 'Jamaal', NULL, 'arielle.prohaska@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'xm8NiezeBL', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(181, 'Lilyan Parisian', 'Simonis', 'Harvey', NULL, 'caleb65@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'TUwoNb7fBy', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(182, 'Prof. Dayton Dibbert IV', 'Harvey', 'Cassandra', NULL, 'rgoodwin@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'CJwhLE90LX', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(183, 'Jonathon Satterfield', 'West', 'Harmony', NULL, 'elwyn12@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'gyhtru4xym', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(184, 'Dr. Blake D\'Amore', 'Donnelly', 'Leopold', NULL, 'corkery.else@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'BntS7RRIJv', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(185, 'Mr. Levi Hane', 'Rogahn', 'Maud', NULL, 'skiles.jasen@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'W4m1ycXUrM', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(186, 'Buddy Kshlerin', 'Daugherty', 'Ali', NULL, 'fschmidt@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'cPFZfOzJyJ', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(187, 'Melyna Hettinger', 'Swift', 'Bill', NULL, 'gcorkery@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'mF7qpFTH6K', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(188, 'Prof. Edwardo Wolff', 'Dach', 'Delaney', NULL, 'schamberger.emily@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'oVoABu0IEB', '2023-04-24 03:56:13', '2023-04-24 03:56:13'),
(189, 'Tristian Gutkowski', 'Johns', 'Abraham', NULL, 'guillermo.spencer@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1a6kqUeVle', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(190, 'Miss Amiya Koelpin Jr.', 'Harvey', 'Jamey', NULL, 'ondricka.danielle@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'PhwTN22Sv7', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(191, 'Prof. Laurel Zulauf Sr.', 'Hansen', 'Janelle', NULL, 'bergnaum.clair@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1OXPzWT9nd', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(192, 'Ashly Schaden', 'Harber', 'Billy', NULL, 'hhills@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'HTICuizoSQ', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(193, 'Ms. Marian Langosh V', 'Emard', 'Nelson', NULL, 'juliana64@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '82hMWdnc3v', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(194, 'Marcos Lemke', 'Shanahan', 'Kali', NULL, 'dglover@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'pM1rtDKWQz', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(195, 'Libbie Wolff', 'Feeney', 'Dakota', NULL, 'erdman.marlene@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'SuqiU1LVPv', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(196, 'Victor Wintheiser III', 'Ritchie', 'Gussie', NULL, 'elmer57@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'YatN2lqoy1', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(197, 'Mr. Eino Mitchell', 'Bahringer', 'Noemie', NULL, 'tbogan@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'JXqCCAycSH', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(198, 'Dr. Raphael O\'Kon', 'Crooks', 'Cyril', NULL, 'yost.marietta@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'jS102Huh4m', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(199, 'Prof. Bertha Hayes', 'Wyman', 'Breana', NULL, 'lesch.laney@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'MWdZWujhHY', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(200, 'Name Rosenbaum', 'Frami', 'Federico', NULL, 'izabella18@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'NnxoGhSWfJ', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(201, 'Patrick Pfannerstill', 'Graham', 'Heber', NULL, 'charlene.dare@example.org', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ob61Cr43NP', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(202, 'Avis Graham I', 'Tremblay', 'Hailey', NULL, 'tina.dickens@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'sgwHxO1i72', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(203, 'Sierra Kohler', 'Wiegand', 'Susanna', NULL, 'gregorio.kiehn@example.com', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '8aJIRDhkYM', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(204, 'Nat Muller', 'Grant', 'Dax', NULL, 'bwillms@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'igk68mZ4Yr', '2023-04-24 03:56:14', '2023-04-24 03:56:14'),
(206, 'Ahmad Becker', 'Becker', 'Ahmad', '9ifXyffv8zEI28d8tVZ6S1pp7DMnYVFB1rcdmC4x.png', 'qkeebler@example.net', NULL, 'user', '2023-04-24 03:56:10', 1, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'jTO7nIfCxV', '2023-04-24 03:56:14', '2023-04-27 06:00:55'),
(207, 'rvv rvv', 'rvv', 'rvv', 'x8ZbN4VfVp4jsiDSMtyMVvMzDGkFVAZn47CTDLRS.png', 'sd@gmail.com', NULL, 'user', NULL, 1, '$2y$10$mUewQmrRyPffYA42iFDyD.5qvnP3VhZXrRZ4i7s/UsCPe..ytSjaG', NULL, '2023-04-24 05:59:43', '2023-04-27 07:55:10'),
(210, 'billi elish', 'elish', 'billi', NULL, 'hsdarvy@yopmail.com', NULL, 'user', NULL, 1, '$2y$10$TrJ8oRLoFBvs.VOFte9G.OcZzhbsxmD/b32AggN8/j8cf5Z/EziUO', NULL, '2023-04-27 00:27:37', '2023-04-27 06:00:54'),
(211, 'kan hoffer', 'hoffer', 'kan', NULL, 'admsdssdin@admin.com', NULL, 'user', NULL, 1, '$2y$10$Du2FWY2SCafJddzTjhT6Zed0dmZWk.JARFXCFr3Wpe3OekEFO7u1m', NULL, '2023-04-27 00:28:02', '2023-04-27 06:00:52'),
(212, 'rvv rvv', 'rvv', 'rvv', NULL, 'sdsds@gmail.com', NULL, 'user', NULL, 1, '$2y$10$gbrMEaXhDP7JAtMySRlbvuJ5CtMzlelYcz8BdbTJmqxLhEzdU0ZjS', NULL, '2023-04-27 00:48:08', '2023-04-27 06:00:51'),
(213, 'rvvv rvvv', 'rvvv', 'rvvv', NULL, 'dfdfdffd@yopmail.com', '+919586039477', 'user', NULL, 1, '$2y$10$dimLPBlLj89RcNWS8kVyge4QyRkQNy0TyOfO51pgpMj/YgE2rgZ9K', NULL, '2023-04-27 01:08:54', '2023-04-27 07:30:58'),
(214, 'rvv KEN', 'KEN', 'rvv', 'QmRtx7YE3FvkHmKhNotl3sCtSUfStKk1Qsm7Yj4e.png', 'rdsdv@yopmail.com', '7894568574', 'user', NULL, 1, '$2y$10$1OJ7nZFBL7cFwxcbF9t1JOJLyV30oGUuNAUJ.azU/btIz8bBEQOBC', NULL, '2023-04-27 01:10:53', '2023-04-30 23:25:08'),
(215, 'harvy hob', 'hob', 'harvy', NULL, 'rv@yopmail.com', NULL, 'user', NULL, 1, '$2y$10$JNxGZVVdwjW2sA47k5TCRuudcxVQQJtjxiHK9dMW8HPJdwvwE46.6', NULL, '2023-05-01 01:51:06', '2023-05-01 01:51:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_user_id_foreign` (`user_id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=216;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
