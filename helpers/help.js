module.exports = {
  fine:(in_date,out_date,days)=>{
    let fine = 1000*(new Date(in_date)-(new Date(Number(new Date(out_date))+Number(new Date(days*1000*60*60*24)))))/(1000*60*60*24)
    if(fine<0){
      fine=0
    }
    return fine
  },
  due_date:(out_date,days)=>{
    return new Date(Number(out_date)+Number(new Date(days*1000*60*60*24)))
  }
};