import { addExistingItem } from '../utils/addExistingItem';

describe("새로운 아이템을 추가한 아이템 리스트를 반환", () => {
  test('기존 리스트에 새로운 아이템이 존재하지 않는 경우 1', () => {
    const items = [];
    const newItem = { id: 1, cnt: 1 };
    expect(addExistingItem(items, newItem)).toEqual([
      { id: 1, cnt: 1 }
    ])
  })

  test('기존 리스트에 새로운 아이템이 존재하지 않는 경우 2', () => {
    const items = [
      { id: 1, cnt: 1 },
      { id: 2, cnt: 1 },
    ];
    const newItem = { id: 3, cnt: 1 };
    expect(addExistingItem(items, newItem)).toEqual([
      { id: 1, cnt: 1 },
      { id: 2, cnt: 1 },
      { id: 3, cnt: 1 },
    ])
  })

  test('기존 리스트에 새로운 아이템이 존재하지 않는 경우 3', () => {
    const items = [
      { id: 1, cnt: 1 },
      { id: 3, cnt: 1 },
      { id: 2, cnt: 1 },
    ];
    const newItem = { id: 4, cnt: 1 };
    expect(addExistingItem(items, newItem)).toEqual([
      { id: 1, cnt: 1 },
      { id: 3, cnt: 1 },
      { id: 2, cnt: 1 },
      { id: 4, cnt: 1 },
    ])
  })

  test('기존 리스트에 새로운 아이템이 이미 존재하는 경우 1', () => {
    const items = [
      { id: 1, cnt: 1 },
    ];
    const newItem = { id: 1, cnt: 1 };
    expect(addExistingItem(items, newItem)).toEqual([
      { id: 1, cnt: 2 },
    ])
  })

  test('기존 리스트에 새로운 아이템이 이미 존재하는 경우 2', () => {
    const items = [
      { id: 1, cnt: 1 },
      { id: 2, cnt: 1 },
    ];
    const newItem = { id: 1, cnt: 5 };
    expect(addExistingItem(items, newItem)).toEqual([
      { id: 1, cnt: 6 },
      { id: 2, cnt: 1 },
    ])
  })
})