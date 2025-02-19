const Car = require("../models/CarSchema");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");

const bucket_name = process.env.BUCKET_NAME;
const bucket_region = process.env.BUCKET_REGION;
const bucket_access_key = process.env.BUCKET_ACCESS_KEY;
const bucket_secret = process.env.BUCKET_SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: bucket_access_key,
    secretAccessKey: bucket_secret,
  },
  region: bucket_region,
});

const getAll = async (req, res) => {
  try {
    console.log("user catalog get");
    const filter = {}; // Простой фильтр для получения всех машин
    let cars = await Car.find(filter); // Получаем все машины из базы данных

    cars = cars.map((car) => ({
      ...car.toObject(),
      imageUrls: [], // Массив для URL изображений
    }));

    console.log(cars);

    const carsImages = []; // Хранилище для изображений
    let carIndex = 0;

    // Пройдемся по каждому автомобилю и добавим изображения
    for (const car of cars) {
      carsImages[car._id] = [];
      const imageNameList = car.images; // Получаем список имен изображений

      // Для каждого изображения получаем ссылку через S3
      for (const imageName of imageNameList) {
        const getObjectParams = {
          Bucket: bucket_name,
          Key: imageName,
        };

        try {
          const command = new GetObjectCommand(getObjectParams);
          const url = await getSignedUrl(s3, command, { expiresIn: 150 });
          carsImages[car._id].push({ url, imageName });
        } catch (error) {
          console.error("Error getting signed URL:", error);
        }
      }

      cars[carIndex]["imageUrls"] = carsImages[car._id];
      carIndex++;
    }

    console.log(cars);

    res.json({
      cars, // Отправляем список автомобилей с изображениями
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
};
