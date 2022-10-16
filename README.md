## How to use?

```
npm i simple-mock-generator
```

```tsx
import { MockGenerator } from 'simple-mock-generator'

const gen = new MockGenerator();

const mockStringValue = gen.string();
```

## When to use?

When you need to make nestJS test using jest, you need to make mock data.

But it sucks when you need to make mock data on your own like this!

```tsx
const makeMockValues = (): Post => {
  const list = [];
  for (let i = 10; i < 60; i++) {
    list.push({
      id: i - 10,
      title: `the Test${i - 10}`,
      content: `the content of the Test${i - 10}`,
      createdAt: `2022-07-27T06:${i}:21.986Z`,
    });
  }
  return list;
};
```

If you use simple-mock-generator, you don’t need to do that.

The only thing you need to do is this!

```tsx
const mockValue = gen.objectList(50, { object: new Post() });
```

## Supports

1. string
2. number
3. boolean
4. date
5. object
