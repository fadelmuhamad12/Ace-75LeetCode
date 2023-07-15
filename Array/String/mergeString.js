const mergeAlternately = (word1, word2) => {

    let output = []; //f,m,a,u,d,h,e,a,l,m,_,a_,d

    for(let i = 0; i < word1.length + word2.length; i++){
        output.push(word1[i]);
        output.push(word2[i]);

    }
    return output.join("");

    
};

console.log(mergeAlternately("fadel","muhamad"));