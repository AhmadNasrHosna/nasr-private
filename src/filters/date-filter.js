module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ];

  return `${dateObject.getDate()} ${
    months[dateObject.getMonth()]
  } ${dateObject.getFullYear()}`;
};
