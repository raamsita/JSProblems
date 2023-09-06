function repeatstring( str,num){
    var output = "" ;
    if (num>=0){
        for(var i = 0; i<num ; i++){
            output = output + str;
        }
        console.log(output);
    }
    else{
        console.log("Error");
    }
}

repeatstring("san" , 3);
repeatstring("ram" , 1);
repeatstring("sita" ,0);
repeatstring("mini",-2);