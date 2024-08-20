Bu index.js dosyasında, bir Discord botu geliştirdim ve bunu Express.js ile birleştirdim. Öncelikle, .env dosyamdaki değişkenleri yüklemek için dotenv kütüphanesini kullandım. Bu, botumun Discord token gibi hassas bilgilerini güvenli bir şekilde yönetmemi sağlıyor.

Daha sonra, Express.js kullanarak basit bir HTTP sunucusu kurdum. Bu sunucu, 3000 portundan gelen istekleri dinliyor ve ana dizine gelen GET isteklerine "calisiyor" cevabını veriyor. Bu kısım, botun çalışıp çalışmadığını kontrol etmemi kolaylaştırıyor.

Discord botu tarafında ise, IntentsBitField kullanarak botuma hangi izinlere sahip olacağını belirttim. Botum, sunuculardaki mesajları dinleyebiliyor, kullanıcıların sesli kanallardaki durumlarını izleyebiliyor ve sunucuların genel durumunu görebiliyor.

Bot, ready olayını yakaladığında belirttiğim kanalda bir mesaj gönderiyor. Ayrıca, botun durumunu "✅" simgesiyle ayarladım, böylece botun aktif olduğunu görsel olarak da gösterebiliyorum.

Mesajları ele almak için messageCreate olayını dinledim. Eğer bir kullanıcı "selam" veya "nasılsın" diye mesaj yazarsa, bot otomatik olarak uygun bir yanıt veriyor. Botumun, kullanıcıların mesajlarına verdiği bu tepkilerle daha interaktif olmasını sağladım.

Son olarak, botu Discord API'ye bağlamak için .env dosyamdaki TOKEN değişkenini kullandım. Bu sayede botum, Discord sunucularında çalışmaya başladı.

