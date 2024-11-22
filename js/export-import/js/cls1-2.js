// Regular expresion
let str=" hello world"
let str1="1at eat fish"
let str2="rat eat wheat"
let str3="bat eat fruit"
let str4="Hat eat fruite"
let str5="Hat eat fruites"
reg=/hello/
reg1=/^hello/
a=/rat/
b=/^[r,c,b]at/
c=/^[0-9]/
d=/^[\d]/
e=/h$/
f=/^hat/
g=/^hat/i
h=/fishe?$/
i=/fruit(es)?$/i
console.log(reg.test(str));

console.log(reg1.test(str));

console.log(a.test(str1));
console.log(a.test(str2));
console.log(a.test(str3));

console.log(b.test(str1));
console.log(b.test(str2));
console.log(b.test(str3));

console.log(c.test(str1));
console.log(c.test(str2));
console.log(c.test(str3));

console.log(d.test(str1));
console.log(d.test(str2));
console.log(d.test(str3));

console.log(e.test(str1));
console.log(e.test(str2));
console.log(e.test(str3));

console.log(f.test(str4));

console.log(g.test(str4));

console.log(h.test(str1));
console.log(e.test(str1));

console.log(e.test(str4));
console.log(e.test(str2));
console.log(e.test(str3));


phone="9876543210"
phone1="1234567890"

x=/^[6-9]\d{9}$/
console.log(x.test(phone));
console.log(x.test(phone1));

