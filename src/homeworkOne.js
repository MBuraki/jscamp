// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function primeNumbers(...numbers) {
    for (let i = 0; i < numbers.length; i++) {     
        let count = 0
        for (let j = 1; j <= numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                count++
            }
        }
        if (count == 2) {
            console.log("Asal sayıdır.")
        } else {
            console.log("Asal sayı değildir.")
        }
    }
}

primeNumbers(1,2,7,113,26,119)

//---------------------------------------------------------------------------------------------------------------------------------------------
// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function friendsNumber(joey, chandler) {
    let rachel1 = 0
    let rachel2 = 0
    for (let monica = 0; monica < chandler; monica++) {
        if (joey % monica == 0) {
            rachel1 = rachel1 + monica
        }
    }

    for (let monica = 0; monica < chandler; monica++) {
        if (chandler % monica == 0) {
            rachel2 = rachel2 + monica
        }
    }
    if (rachel1 == chandler && rachel2 == joey) {
        console.log(joey + " and " + chandler + " are friends")
    } else {
        console.log(joey + " and " + chandler + " aren't friends. Joey can say to Chandler *how u doin*")                                        
    }
}

friendsNumber(284,220)
friendsNumber(3,26)

//---------------------------------------------------------------------------------------------------------------------------------------------
//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumber() {    
    for (let nmbr = 1; nmbr < 1000; nmbr++) {
        let toplam = 0
        for (let i = 1; i <= nmbr; i++) {
            if (nmbr % i == 0) {
                toplam = toplam + i
            }
        }
        if(toplam == nmbr*2){
            console.log(nmbr + " is perfect number.")
        }
    }
}

perfectNumber()

//---------------------------------------------------------------------------------------------------------------------------------------------
// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function primeNmbr(sayi) {
    for (let sayi = 2; sayi < 1000; sayi++) {
        let sayac=0
        for (let i = 2; i <= sayi; i++) {
            if (sayi % i == 0) {
                sayac++
            }
        }
        if (sayac == 1) {
            console.log(sayi + " is not prime number")
        }
    }
}

primeNmbr()