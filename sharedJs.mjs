export const printer = (x)=>{
  if (typeof x === "string") return x; 
  return JSON.stringify(x);
};