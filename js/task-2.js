//**Объяви функцию getShippingMessage, которая ожидает три параметра, значения которых будут задаваться при ее вызове: - country - первый параметр, строка, содержащая страну доставки - price - второй параметр, число, содержащее общую стоимость товара - deliveryFee - третий параметр, число, содержащее стоимость доставки товара Дополни код функции так, чтобы она возвращала строку с сообщением о доставке товара в страну пользователя: "Shipping to <country> will cost <totalPrice> credits", где: - <country> - это страны доставки - <totalPrice> - это общая стоимость заказа, включающая стоимость товара и его доставки */
function getShippingMessage(country, price, deliveryFee) {
  return `"Shipping to ${country} will cost ${price + deliveryFee} credits"`;
}
getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
