-- Inserción de datos en la tabla 'item'
INSERT INTO item (destinationAddress, postalCode, destinationName, senderName, itemWeight, company, price)
VALUES
  ('Avenida de la avenidad 1', 15012, 'Rodolfo', 'Rufina', 0.1, 'Correos', 0),
  ('Calle callecilla 11', 16012, 'Rufino', 'Rodolfa', 0.2, 'Correos', 2),
  ('Calle de la prima', 20012, 'Antonio', 'Antonia', 3, 'Seur', 30),
  ('Calle montaña', 21012, 'Juani', 'Juan', 8, 'Seur', 123),
  ('Avenida calle', 10012, 'Juancho', 'Antonio', 11, 'INVENT', 148);

-- Inserción de datos en la tabla 'logisticsCompany'
INSERT INTO logistics_company (name, areaCode, image)
VALUES
  ('Correos', 15, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU'),
  ('Correos', 16, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU'),
  ('Correos', 17, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU'),
  ('Correos', 18, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU'),
  ('Correos', 19, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU'),
  ('Seur', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU'),
  ('Seur', 21, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU'),
  ('Seur', 22, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU'),
  ('Seur', 23, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU'),
  ('Seur', 24, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU'),
  ('Seur', 25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU');

-- Inserción de datos en la tabla 'packageType'
INSERT INTO package_type (typeName, minWeight, maxWeight, form)
VALUES
  ('Paquete ultra ligero', 0, 0.1, 'kg * 5'),
  ('Paquete ligero', 0.1, 0.3, 'kg * 5 + 1'),
  ('Paquete estándar', 0.3, 5, 'kg * 10'),
  ('Paquete pesado', 5, 10, 'kg * 5 + kg + 75');

-- Inserción de datos en la tabla 'user'
INSERT INTO user (name, email, password, role)
VALUES
  ('Antonio', 'superadmin@test.es', 123456, 'superadmin'),
  ('Juan', 'admin@test.es', 123456, 'admin'),
  ('Antonio', 'user@test.es', 123456, 'user'),
  ('Prueba', 'test@test.es', 123456, 'user');
