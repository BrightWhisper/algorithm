/**有效的括号
 * 思路是用栈先进后出的特点
 * 遇到左括号，就把它放入栈中
 * 遇到右括号，判断和栈顶元素类型是否匹配，不匹配直接返回false,匹配则把栈顶元素弹出
 * 如果最后栈空了，则合法，否则不合法
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let result = true;
    let stack = [];
    for(let i=0;i<s.length;i++){
        const c = s[i];
        if(c === '(' || c === '[' || c ==='{'){
            stack.push(c);
        }else{
            const top = stack[stack.length-1];
            if(
                (top === '(' && c === ')') ||
                (top === '{' && c === '}') || 
                (top === '[' && c === ']')
            ){
                stack.pop();
            }else {
                return false;
            }
        }
    }
    if(stack.length!==0){
        result = false;
    }
    return result;
};