var isAnagram = function(s, t) {
    s= Array.from(s);
    t= Array.from(t);
    if(s.length != t.length){
        return false;
    }
    for(let i=0 ; i< s.length ; i++){
        let pos = t.indexOf(s[i]);
        if( pos === -1){
            return false; 
        }
        t.splice(pos, 1);
    }
    return true;
};