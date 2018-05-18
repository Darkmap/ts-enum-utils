"use strict";
/**
 * @fileoverview Provides utilities for dealing with TypeScript's enum.
 */
exports.__esModule = true;
function listEnumMemberNames(enumType) {
    return listEnumMemberNamesHelper(enumType);
}
exports.listEnumMemberNames = listEnumMemberNames;
function listNumericEnumMembers(enumType) {
    return listEnumMemberNamesHelper(enumType).map(function (name) { return ({
        name: name,
        value: Number(enumType[name])
    }); });
}
exports.listNumericEnumMembers = listNumericEnumMembers;
function listStringEnumMembers(enumType) {
    return listEnumMemberNamesHelper(enumType).map(function (name) { return ({
        name: name,
        value: enumType[name]
    }); });
}
exports.listStringEnumMembers = listStringEnumMembers;
function listEnumMemberNamesHelper(enumType) {
    return Object.keys(enumType).filter(function (key) { return isNaN(Number(key)); });
}
