// create a task manager where user can  add,remove and mark tasks as completed
const array=[];

const addtask = (task)=>{
    return array.push({ value: task, completed:false})
};
const removetask = (index) =>{
    return array.splice(index,1);
};
const sorttask =() =>{
    return array.sort();
};
const displayincomplete =() =>{
    
}