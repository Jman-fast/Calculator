function reply_click(clicked_id)
        {
            if(clicked_id == 'c'){
                display.value = null;
            }
            else if(clicked_id == '='){
                let str = "";
                str = display.value;
                display.value = calc(str); 
            }
            else{
                display.value = display.value + clicked_id;
            }
        }
        function calc(string){
            let flag = 0;
            let pos = 0
            if(string.includes("/")){
                flag=1;
                pos = string.indexOf("/");
                console.log("/, flag=", flag)
            }
            else if(string.includes("x")){
                flag=2;
                pos = string.indexOf("x");
            }
            else if(string.includes("+")){
                flag=3;
                pos = string.indexOf("+");
                console.log("+, flag = ", flag, "pos = ",pos);
            }
            else if(string.includes("-")){
                flag=4;
                pos = string.indexOf("-");
            }
            else{
                
            }
            if(flag!=0){
                let S1 = string.slice(0, pos);
                let S2 = string.slice(pos+1);
                console.log("S1 = ", S1, "S2 = ", S2);
                if (flag == 1){
                    return calc(S1)/calc(S2);
                }
                else if (flag==2){
                    return calc(S1)*calc(S2);
                }
                else if (flag==3){
                    console.log("S1 = ", S1, "S2 = ", S2, "flag = ", flag);
                    return calc(S1)+calc(S2);
                }
                else if (flag==4){
                    return calc(S1)-calc(S2);
                }
                else{

                }
            } 
            
            if (flag == 0){
                let num = Number(string)
                console.log("num = ", num);
                return num;
            }
        }