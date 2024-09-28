/**Объяви функцию getElementWidth, которая ожидает три параметра, значения которых будут задаваться при ее вызове: - content- первый параметр, ширина контента - padding - второй параметр, значение горизонтального падинга для каждой из сторон - border - третий параметр, значение толщины бордера для каждой из сторон Значения всех параметров будут строками формата Npx где N - это произвольное число, целое или дробное. Дополни код функции так, чтобы она возвращала число -общую ширину элемента. При расчете общей ширины ориентируйся на то, что значение box-sizing равно border-box. */
function getElementWidth(content, padding, border) {
  const contentWidth = Number.parseFloat(content);
  const paddingWidth = Number.parseFloat(padding);
  const borderWidth = Number.parseFloat(border);

  return contentWidth + paddingWidth * 2 + borderWidth * 2;
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
