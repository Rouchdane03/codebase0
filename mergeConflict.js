 // this function add two numbers
const add = (n1,n2)=> n1+n2;

const soustraction = (n1,n2)=> n1-n2;
 
const divide = (n1,n2)=> {
  if(n2==0){
   throw Error("cannot divide by 0");
  }

  return n1/n2;
}

export {add, soustraction, divde}
