import destructuring from '../app';

test('no description at all', () => {
  const obj = {
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const expectedArr = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  const result = destructuring(obj);
  expect(result).toEqual(expectedArr);
});

test('descriptions exist', () => {
  const obj = {
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Удар отправляет в нокаут',
      },
    ],
  };
  const expectedArr = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Удар отправляет в нокаут',
    },
  ];
  const result = destructuring(obj);
  expect(result).toEqual(expectedArr);
});
