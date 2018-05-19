# ts-enum-utils

This small utility package helps you dealing with TypeScript's enum type.

Support methods:
1. `listEnumMemberNames`: list name of all members of a enum type.
2. `listNumericEnumMembers`: list all members(name with value) of numeric enum type.
2. `listStringEnumMembers`: List all members(name with value) of string enum type.

## Installation
```
npm install ts-enum-utils
```

## Usage:
```typescript
import {listEnumMemberNames, listNumericEnumMembers, listStringEnumMembers} from 'ts-enum-utils';

enum TestingNumericEnum {
  TYPE_0 = 0,
  TYPE_1 = 1,
  TYPE_2 = 2,
}

enum TestingStringEnum {
  TYPE_0 = 'TYPE_0_VALUE',
  TYPE_1 = 'TYPE_1_VALUE',
  TYPE_2 = 'TYPE_2_VALUE',
}


// Should contain exactly: ['TYPE_0', 'TYPE_1', 'TYPE_2']
const numericNames: string[] = listEnumMemberNames(TestingNumericEnum);

// Should contain exactly: ['TYPE_0', 'TYPE_1', 'TYPE_2']
const stringNames: string[] = listEnumMemberNames(TestingStringEnum);

// Should contain exactly:
// [
//   {name: 'TYPE_0', value: 0},
//   {name: 'TYPE_1', value: 1},
//   {name: 'TYPE_2', value: 2},
// ]
const numericMembers = listNumericEnumMembers(TestingNumericEnum);

// Should contain exactly:
// [
//   {name: 'TYPE_0', value: 'TYPE_0_VALUE'},
//   {name: 'TYPE_1', value: 'TYPE_1_VALUE'},
//   {name: 'TYPE_2', value: 'TYPE_2_VALUE'},
// ]
const stringMembers = listStringEnumMembers(TestingStringEnum);
```