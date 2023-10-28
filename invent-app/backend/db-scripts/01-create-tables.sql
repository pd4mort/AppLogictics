-- Creación de la tabla 'item'
CREATE TABLE item (
  id INT AUTO_INCREMENT PRIMARY KEY,
  destinationAddress VARCHAR(255),
  postalCode INT,
  destinationName VARCHAR(255),
  senderName VARCHAR(255),
  itemWeight DECIMAL(5, 2),
  company VARCHAR(255),
  price DECIMAL(10, 2)
);

-- Creación de la tabla 'logisticsCompany'
CREATE TABLE logistics_company (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  areaCode INT,
  image VARCHAR(255)
);

-- Creación de la tabla 'packageType'
CREATE TABLE package_type (
  id INT AUTO_INCREMENT PRIMARY KEY,
  typeName VARCHAR(255),
  minWeight DECIMAL(5, 2),
  maxWeight DECIMAL(5, 2),
  form VARCHAR(255)
);

-- Creación de la tabla 'user'
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password INT,
  role VARCHAR(255)
);