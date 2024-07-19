import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [umber, setNumber] = useState(10);
  //bileşenin ekrana basılma olayıı izle
  useEffect(() => {
    //her saniye bir fonskiyon çalıştırmak
    setInterval(() => {
      //   setNumber(number - 1);
      // setNumber((prev) => prev - 1);
      setNumber((prev) => (prev !== 0 ? prev - 1 : 0));
    }, 1000);
  }, []);

  const handleClick = () => {
    // fonskiyon çalıştığı anda ki number değeri
    setNumber(number + 1); // 11
    setNumber(number + 1); // 11
    setNumber(number + 1); // 11

    //sorunun çözümü
    //usestate döndürdüğü stter methodunun 2. kullanımı
    //setter method eğer ki parametre olarak bir fonk.tanımlarsak o fonk. kod satırı çalıştığı anda ki en son state deger neyse onuparametre alır. ve fonksiyonun return ettiği değere state yeni değeri olur.bu yöntemi state bi döngü içerisinde veya interval ile sürekli güncellerken kullannabiliriz.ayrıca alt bileşen prop olarak statin değerini göndermeden en son değere erişmemizi
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <h1 style={{ fontSize: "90px", textAlign: "center" }}>10</h1>

      <button onClick={handleClick} className="btn btn-primary">
        Arttır
      </button>
    </div>
  );
};

export default CountDown;
