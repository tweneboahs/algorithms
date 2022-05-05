
//BINARY TREE



//EASY

//SAME TREE - ITERATIVE
var isSameTree = function(p, q) {
    
    const stack1 = [p];
    const stack2 = [q];
    
    while ( stack1.length && stack2.length ){
        const curr1 = stack1.pop();
        const curr2 = stack2.pop();
        if ( curr1 === null || curr2 === null){
            if ( curr1 !== curr2 ){
                return false;
            } else {
                continue;
            }
        }
        
        if ( curr1.val !== curr2.val ){
            return false;
        }

        
        stack1.push(curr1.left);
        stack1.push(curr1.right);
        
        stack2.push(curr2.left);
        stack2.push(curr2.right);
    }
    
    if (stack1.length || stack2.length) {
        return false;
    }
    
    return true;
};