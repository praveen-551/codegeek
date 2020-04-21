function getObject(status){
    if(status){
    return{
        name:'A',
        age:20
    }
    }else{
        return ['B',21];
    }
}
const {name,age}=getObject(true);
console.log(name+" and "+age);
const [x,y]=getObject(false);
console.log(x+" and "+y);