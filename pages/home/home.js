Page({
  data:{
    name:'Coderwhy',
    age:18,
    students:[
      {id:110,name:'aaa',age:12},
      {id:111,name:'bbb',age:22},
      {id:112,name:'ccc',age:32},
      {id:113,name:'ddd',age:42}
    ],
    counter:0
  },
  handlebtnClick(){
    //1.错误做法：界面是不会刷新的
    //this.data.counter+=1;
    //console.log(this.data.counter);

    //2.this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})

// 编程范式：
// 1.命令式编程：原生操作DOM
// 2.声明式编程： Vue/React/Angular