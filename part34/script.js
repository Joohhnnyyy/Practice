function test(fn){
  fn(function (fn3){
    fn3(function (fn5){
      fn5(function (){
        console.log("done");
      });
    });
  
  
  });


}

test(function (fn2){
  fn2(function (fn4){
    fn4(function (fn6){
      fn6();

    });


  });

});