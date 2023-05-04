/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const n = senate.length;
   const radiant = [];
   const dire = [];
   
   // create array of senators for each party
   for (let i = 0; i < n; i++) {
       if (senate[i] == 'R') {
          radiant.push(i);
       } else {
          dire.push(i);
       }
   }
   
   // simulate voting rounds
   while (radiant.length > 0 && dire.length > 0) {
      const radIndex = radiant.shift();
      const dirIndex = dire.shift();
      
      if (radIndex < dirIndex) {
          radiant.push(radIndex + n);
      } else {
          dire.push(dirIndex + n);
      }
   }
   
   // return result based on which party has remaining senators
   return radiant.length > 0 ? "Radiant" : "Dire";
};