module.exports = function toReadable (number) {
  const
   hundred = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
   bigTens = ['', "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
   units = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
   tens = ["ten", "eleven", "twelve", "thirteen", "fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

   let str = number.toString(), result = '';

   if (number === 0){return 'zero'};
   
   if(str.length == 1) return units[number-1];
   else if(str.length == 2){
       if(str[0] == 1) result = tens[parseInt(str[1])];
       else result = (bigTens[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + units[parseInt(str[1])-1]):''));
   }
   else if(str.length == 3){
    result = (hundred[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + bigTens[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + units[parseInt(str[2])-1]):''));
   }

   if (number>=110 && number<120){return hundred[0] + ' ' + tens[number-110]};
   if (number>=210 && number<220){return hundred[1] + ' ' + tens[number-210]};
   if (number>=310 && number<320){return hundred[2] + ' ' + tens[number-310]};
   if (number>=410 && number<420){return hundred[3] + ' ' + tens[number-410]};
   if (number>=510 && number<520){return hundred[4] + ' ' + tens[number-510]};
   if (number>=610 && number<620){return hundred[5] + ' ' + tens[number-610]};
   if (number>=710 && number<720){return hundred[6] + ' ' + tens[number-710]};
   if (number>=810 && number<820){return hundred[7] + ' ' + tens[number-810]};
   if (number>=910 && number<920){return hundred[8] + ' ' + tens[number-910]};
   

   return result;

  }
