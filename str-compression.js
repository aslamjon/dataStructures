/* Berilgan harflar ketma-ketligida malum bir harf nechi marta takrorlanganligini 
topib o'sha harfni yoniga yozish kerak. Masalan: Input: 'aaaabbcccd' Output: 'a4b2c3d1' 
Agar qaytarilayotgan string berilayotgan stringdan uzun bo'lsa unda berilgan stringni o'zini qaytarsin */ 
function compress(rawString) {
    let count = 0;
    let compressedString = "";
    for (let i = 0; i < rawString.length; i++) {
        const currentLetter = rawString[i];
        count++;
        if (currentLetter !== rawString[i+1]) {
            compressedString += currentLetter + count;
            count = 0;
        }
    }
    return compressedString.length < rawString.length ? compressedString : rawString;
}

let rawString = "aaabbcccd";
console.log(`Raw: ${rawString}`);
console.log(`Compressed: ${compress(rawString)}`);
