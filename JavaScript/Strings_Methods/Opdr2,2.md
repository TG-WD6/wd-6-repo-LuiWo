let someKittens = "De poes van de buur heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
console.log(someKittens.length);
// 78



// Opd 1
 Wat doet substring() als het eerste getal hoger is dan het tweede getal?
The effect works as if the two arguments were swapped. The string is still returned.


// Opd 2
Wat doet slice() als het eerste getal hoger is dan het tweede getal?
This method returns an empty string.


// Opd 3
Wat doet substring() bij negatieve waardes?
If one or both are negatives, they are treated as a "0" . This also works with NaN.


// Opd 4
Wat doet slice() bij negatieve waardes?
With Nan it treats it as a "0". Starts at the end of the string and starts counting backwards
