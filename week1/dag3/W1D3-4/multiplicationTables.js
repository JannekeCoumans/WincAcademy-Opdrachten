let multiply = 9;

for (i=0; i <= 10; i++){
    var result = i * multiply;
    console.log(i + " * " + multiply + " = " + result);
}

for (multiply=0; multiply <= 10; multiply++){
    for (i=0; i <= 10; i++){
        var result = i * multiply;
        console.log(i + " * " + multiply + " = " + result);
    } 
}