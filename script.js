function task2(){
    setTimeout(function(){
        alert("Press Z to start task2()")
    },10000)
    document.addEventListener('keypress', (event) => {
        var keyName = event.key;

        if (event.code == 'KeyZ'){
            document.querySelector("#First").style.fontStyle='italic';
            document.querySelector("#Sixth").style.fontStyle='italic';
        }
        setInterval(function(){if(document.querySelector("#Fifth").style.fontStyle=='italic' ){
            
            document.querySelector("#Fifth").style.fontStyle='normal';
            
        }
        else{
            
            document.querySelector("#Fifth").style.fontStyle='italic';
                
            }
        },3000)
            
        
        
    });
}

function task1(){
    let one = document.querySelector("first").innerHTML;
    let two = document.querySelector("second").innerHTML;
    let three = document.querySelector("third").innerHTML;
    let four = document.querySelector("fourth").innerHTML;
    let five = document.querySelector("fifth").innerHTML;
    let six = document.querySelector("sixth").innerHTML;
    
    setTimeout(function(){
        document.querySelector("fifth").innerHTML = six;
        setTimeout(function(){
            document.querySelector("fourth").innerHTML = five;
            setTimeout(function(){
                document.querySelector("third").innerHTML = four;
                setTimeout(function(){
                    document.querySelector("second").innerHTML = three;
                    setTimeout(function(){
                        document.querySelector("first").innerHTML = two;
                        setTimeout(function(){
                            document.querySelector("sixth").innerHTML = one;
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);
    }, 5000);   
}

function Get_Commits(url)
{
    fetch(url).then((response) => 
    {
        if (!response.ok)
        {
            Git_Resp_1.style.background = "red";
            Git_Resp_1.style.textAling = "center";
            Git_Resp_1.style.height = "50px";
            Git_Resp_1.style.border = "2 px solid black";
            Git_Resp_1.innerHTML = response.status + "-" + response.statusText;
            throw new Error(response.message);
        }
        return response.json();
    })
    .then((contents) => 
    {
        let answ = "";
        contents.forEach((i) => {
            answ += `${i.commit.author.name} : ${i.commit.message}\n`;
        });
        Git_Resp_1.style.background = "green";
        Git_Resp_1.style.textAling = "center";
        Git_Resp_1.style.height = "50px";
        Git_Resp_1.style.border = "2 px solid black";
        Git_Resp_1.innerHTML = answ;
        throw new Error(response.message);
    })
    .catch((Error) => {});
}
function task3(){
    B1.onclick = () =>
    {
        let url = "https://api.github.com/repos/" + area_1.value + "/" + area_2.value + "/commits";
        Get_Commits(url);
    }   
}

function call_1(call_2, call_3){
    console.log("One");
    call_2(call_3);
    console.log("Six");
}
function call_2(call_3){
    console.log("Two");
    console.log("Three");
    call_3();
}
function call_3(){
    console.log("Four");
    console.log("Five")
}
function task4(call_1, call_2, call_3){
    call_1(call_2, call_3);
}

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
function Save(){
    const reg = /^\d+$/;
    let Data = document.Form.Line.value;

    let a = new Array();
    a = Data.split(' ');
    for(let j =0; j < a.length;j++){
        for(let i = 0; i < a.length; i++){
            if(!reg.test(a[i])){
                a.splice(i,1);
                break;
            }
        }
    }   

    insertionSort(a);

    alert(a);
    
    
    

}
function compare(a,b){
    if(a < b) return -1;
    if(a > b) return 1;
    if(a == b) return 0;
}


//////////////////
//task1();
//task2();
//task3();
task4(call_1, call_2,call_3);


