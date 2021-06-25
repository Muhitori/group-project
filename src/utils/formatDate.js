const dayjs = require('dayjs');

export function formatDate(str) {
  const date = new Date(str);
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

export function getMinDeliveryDate() {
  const today = new Date();
  today.setHours(today.getHours() + 24);
  return dayjs(today).format('YYYY-MM-DDTHH:mm');
}
