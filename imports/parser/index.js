const codeExpressions = [
  ["Сегодня", 1000 * 3600],
  ["Завтра", 3600 * 24 * 1000],
  ["Послезавтра", 3600 * 24 * 1000 * 2]
];

export const parser = text => {
  const now = new Date();
  let dueDate = new Date(now.getTime());

  codeExpressions.forEach(expr => {
    if (new RegExp(expr[0], "i").test(text))
      dueDate.setTime(Date.now() + expr[1]);
  });

  let match = text.match(/(\d{1,2})\:(\d{1,2})/i);
  if (match)
    dueDate.setHours(match[1], match[2]);

  if (now.getTime() === dueDate.getTime())
    dueDate = null;
  return dueDate;
}
