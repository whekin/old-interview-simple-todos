const exprs = [
  [/(^|\s)(сегодня)|(today)($|\s)/i, 0],
  [/(^|\s)(завтра)|(tomorrow)($|\s)/i, 1],
  [/(^|\s)(послезавтра)|(after tomorrow)($|\s)/i, 2]
];

/**
 * @param {String} text
 * @return {Date|false} dueDate
 */
export const parser = text => {
  let now = new Date();
  let dueDate = new Date(now.getTime());
  let thereIsDateExpression = false;

  exprs.forEach(expr => {
    if (text.match(expr[0])) {
      dueDate.setDate(dueDate.getDate() + expr[1]);
      thereIsDateExpression = true;
    }
  });

  const time = /(\d{1,2}):(\d{1,2})/i;
  const match_time = text.match(time);

  if (match_time) {
    dueDate.setHours(match_time[1], match_time[2], 0);
    thereIsDateExpression = true;
  } else
    dueDate.setHours(24, 0, 0);

  if (thereIsDateExpression)
    return dueDate;
  return false;
};
