const expressions = [
  [/(^|\s)(сегодня)|(today)($|\s)/i, 0],
  [/(^|\s)(завтра)|(tomorrow)($|\s)/i, 1],
  [/(^|\s)(послезавтра)|(after tomorrow)($|\s)/i, 2]
];

const TEXT_CODE_INDEX = 0;
const ADDING_TIME_INDEX = 1;

/**
 * @param {String} text
 * @return {Object|false}
 */
export const parser = text => {
  const now = new Date();
  let dueDate = new Date(now.getTime());
  let thereIsDateExpression = false;
  let isWholeDay = true;
  let isOnlyDate = false;
  let textWithoutDate = text.toString();

  expressions.forEach(expr => {
    if (text.match(expr[TEXT_CODE_INDEX])) {
      dueDate.setDate(dueDate.getDate() + expr[ADDING_TIME_INDEX]);
      thereIsDateExpression = true;
      textWithoutDate = textWithoutDate.replace(expr[TEXT_CODE_INDEX], "");
    }
  });

  const time = /(\d{1,2}):(\d{1,2})/i;
  const match_time = text.match(time);

  if (match_time) {
    dueDate.setHours(match_time[1], match_time[2], 0);
    thereIsDateExpression = true;
    textWithoutDate = textWithoutDate.replace(match_time[0], "").replace(/at|в/i, "");
    isWholeDay = false;
  } else
    dueDate.setHours(23, 59, 59);

  if (!/\S/.test(textWithoutDate))
    isOnlyDate = true;

  if (thereIsDateExpression)
    return {
      date: dueDate,
      isWholeDay,
      isOnlyDate
    };

  return false;
};
