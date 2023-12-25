export default function destructuring(obj) {
  const { special } = obj;
  const specialArr = [];
  for (const item of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    specialArr.push({
      id, name, icon, description,
    });
  }
  return specialArr;
}
