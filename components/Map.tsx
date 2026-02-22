"use client";

export default function Map() {
  const yandexMapUrl =
    "https://yandex.ru/map-widget/v1/?ll=37.6173%2C55.7558&z=16";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-96 bg-gray-200 flex items-center justify-center relative">
        <iframe
          src={yandexMapUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="absolute inset-0"
          title="Карта офиса"
        />
      </div>
    </div>
  );
}
