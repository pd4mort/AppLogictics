import { Item } from 'src/items/entities/item.entity';
import { LogisticsCompany } from 'src/logistics-companies/entities/logistics-company.entity';
import { PackageType } from 'src/package-type/entities/package-type.entity';
import { User } from 'src/users/entities/user.entity';
import { createConnection } from 'typeorm';

async function seed() {
  const connection = await createConnection();

  try {
    const item = new Item();
    item.destinationAddress = 'Avenida de la avenidad 1';
    item.postalCode = 15012;
    item.destinationName = 'Rodolfo';
    item.senderName = 'Rufina';
    item.itemWeight = 0.1;
    item.company = 'Correos';
    item.price = 0;

    const item2 = new Item();
    item2.destinationAddress = 'Calle callecilla 11';
    item2.postalCode = 16012;
    item2.destinationName = 'Rufino';
    item2.senderName = 'Rodolfa';
    item2.itemWeight = 0.2;
    item2.company = 'Correos';
    item2.price = 2;

    const item3 = new Item();
    item3.destinationAddress = 'Calle de la prima';
    item3.postalCode = 20012;
    item3.destinationName = 'Antonio';
    item3.senderName = 'Antonia';
    item3.itemWeight = 3;
    item3.company = 'Seur';
    item3.price = 30;

    const item4 = new Item();
    item4.destinationAddress = 'Calle montaña';
    item4.postalCode = 21012;
    item4.destinationName = 'Juani';
    item4.senderName = 'Juan';
    item4.itemWeight = 8;
    item4.company = 'Seur';
    item4.price = 123;

    const item5 = new Item();
    item5.destinationAddress = 'Avenida calle';
    item5.postalCode = 10012;
    item5.destinationName = 'Juancho';
    item5.senderName = 'Antonio';
    item5.itemWeight = 11;
    item5.company = 'INVENT';
    item5.price = 148;

    await connection.manager.save(item);
    await connection.manager.save(item2);
    await connection.manager.save(item3);
    await connection.manager.save(item4);
    await connection.manager.save(item5);

    const logisticsCompany = new LogisticsCompany();
    logisticsCompany.name = 'Correos';
    logisticsCompany.areaCode = 15;
    logisticsCompany.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU';

    const logisticsCompany2 = new LogisticsCompany();
    logisticsCompany2.name = 'Correos';
    logisticsCompany2.areaCode = 16;
    logisticsCompany2.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU';

    const logisticsCompany3 = new LogisticsCompany();
    logisticsCompany3.name = 'Correos';
    logisticsCompany3.areaCode = 17;
    logisticsCompany3.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU';

    const logisticsCompany4 = new LogisticsCompany();
    logisticsCompany4.name = 'Correos';
    logisticsCompany4.areaCode = 18;
    logisticsCompany4.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU';

    const logisticsCompany5 = new LogisticsCompany();
    logisticsCompany5.name = 'Correos';
    logisticsCompany5.areaCode = 19;
    logisticsCompany5.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYD4hZtVR_BBzeHYwyX3X1Eg-EsHvzt0ppA&usqp=CAU';

    const logisticsCompany6 = new LogisticsCompany();
    logisticsCompany6.name = 'Seur';
    logisticsCompany6.areaCode = 20;
    logisticsCompany6.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU';

    const logisticsCompany7 = new LogisticsCompany();
    logisticsCompany7.name = 'Seur';
    logisticsCompany7.areaCode = 21;
    logisticsCompany7.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU';

    const logisticsCompany8 = new LogisticsCompany();
    logisticsCompany8.name = 'Seur';
    logisticsCompany8.areaCode = 22;
    logisticsCompany8.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU';

    const logisticsCompany9 = new LogisticsCompany();
    logisticsCompany9.name = 'Seur';
    logisticsCompany9.areaCode = 23;
    logisticsCompany9.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU';

    const logisticsCompany10 = new LogisticsCompany();
    logisticsCompany10.name = 'Seur';
    logisticsCompany10.areaCode = 24;
    logisticsCompany10.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU';

    const logisticsCompany11 = new LogisticsCompany();
    logisticsCompany11.name = 'Seur';
    logisticsCompany11.areaCode = 25;
    logisticsCompany11.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzolpit5G8QQGUbD4ZNAzB8BvLi13D548Ww&usqp=CAU';

    await connection.manager.save(logisticsCompany);
    await connection.manager.save(logisticsCompany2);
    await connection.manager.save(logisticsCompany3);
    await connection.manager.save(logisticsCompany4);
    await connection.manager.save(logisticsCompany5);
    await connection.manager.save(logisticsCompany6);
    await connection.manager.save(logisticsCompany7);
    await connection.manager.save(logisticsCompany8);
    await connection.manager.save(logisticsCompany9);
    await connection.manager.save(logisticsCompany10);
    await connection.manager.save(logisticsCompany11);

    const packageType = new PackageType();
    packageType.typeName = 'Paquete ultra ligero';
    packageType.minWeigt = 0;
    packageType.maxWeigt = 0.1;
    packageType.form = 'kg * 5';

    const packageType2 = new PackageType();
    packageType2.typeName = 'Paquete ligero';
    packageType2.minWeigt = 0.1;
    packageType2.maxWeigt = 0.3;
    packageType2.form = 'kg * 5 + 1';

    const packageType3 = new PackageType();
    packageType3.typeName = 'Paquete estándar';
    packageType3.minWeigt = 0.3;
    packageType3.maxWeigt = 5;
    packageType3.form = 'kg * 10';

    const packageType4 = new PackageType();
    packageType4.typeName = 'Paquete pesado';
    packageType4.minWeigt = 5;
    packageType4.maxWeigt = 10;
    packageType4.form = 'kg * 5 + kg + 75';

    await connection.manager.save(packageType);
    await connection.manager.save(packageType2);
    await connection.manager.save(packageType3);
    await connection.manager.save(packageType4);

    const user = new User();
    user.name = 'Antonio';
    user.email = 'superadmin@test.es';
    user.password = '123456';
    user.role = 'superadmin';

    const user2 = new User();
    user2.name = 'Juan';
    user2.email = 'admin@test.es';
    user2.password = '123456';
    user2.role = 'admin';

    const user3 = new User();
    user3.name = 'Antonio';
    user3.email = 'user@test.es';
    user3.password = '123456';
    user3.role = 'user';

    const user4 = new User();
    user4.name = 'Prueba';
    user4.email = 'test@test.es';
    user4.password = '123456';
    user4.role = 'user';

    await connection.manager.save(user);
    await connection.manager.save(user2);
    await connection.manager.save(user3);
    await connection.manager.save(user4);

  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    await connection.close();
  }
}

seed();
