import {capitalize,reverse,caesarCipher} from './index';

test('capitalize ahmed to Ahmed',()=>{
    expect(capitalize('ahmed')).toBe('Ahmed');
})

test('capitalize ali to Ali',()=>{
    expect(capitalize('ali')).toBe('Ali');
})


test('reverse ahmed to demha',()=>{
    expect(reverse('ahmed')).toBe('demha');
})

test('shift xyz to abc',()=>{
    expect(caesarCipher('xyz',3)).toBe('abc')
})

test('shift HeLLo to KhOOr',()=>{
    expect(caesarCipher('HeLLo',3)).toBe('KhOOr')
})

test('shift Hello, World! to Khoor, Zruog!',()=>{
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!')
})