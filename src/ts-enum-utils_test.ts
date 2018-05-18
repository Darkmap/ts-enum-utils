import { expect } from 'chai';
import {listEnumMemberNames, listNumericEnumMembers, listStringEnumMembers} from './ts-enum-utils';

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

function compareByName(obj1: any, obj2: any) {
  if (obj1.name > obj2.name) {
    return 1;
  } else if (obj1.name < obj2.name) {
    return -1;
  }
  return 0;
}

describe('ts-enum-utils', () => {

  describe('listEnumMemberNames', () => {
    it('should list name of all members of enum type', () => {
      expect(listEnumMemberNames(TestingNumericEnum).sort()).to.deep.equal([
        'TYPE_0',
        'TYPE_1',
        'TYPE_2',
      ]);

      expect(listEnumMemberNames(TestingStringEnum).sort()).to.deep.equal([
        'TYPE_0',
        'TYPE_1',
        'TYPE_2',
      ]);
    });
  });

  describe('listNumericEnumMembers', () => {
    it('should list all members of enum type', () => {
      expect(listNumericEnumMembers(TestingNumericEnum).sort(compareByName)).to.deep.equal([
        {name: 'TYPE_0', value: 0},
        {name: 'TYPE_1', value: 1},
        {name: 'TYPE_2', value: 2},
      ]);
    });
  });

  describe('listStringEnumMembers', () => {
    it('should list all members of enum type', () => {
      expect(listStringEnumMembers(TestingStringEnum).sort(compareByName)).to.deep.equal([
        {name: 'TYPE_0', value: 'TYPE_0_VALUE'},
        {name: 'TYPE_1', value: 'TYPE_1_VALUE'},
        {name: 'TYPE_2', value: 'TYPE_2_VALUE'},
      ]);
    });
  });
});
