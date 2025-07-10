//İf-Else Koşulları
 
//yas >=18
// mezuniyet == "lise" yada mezuniyet =="universite"

let yas = 20;
let mezuniyet = "ilkokul";

if((yas >= 18) && (mezuniyet == "lise" || mezuniyet == "üniversite")){
    console.log("ehliyet alabilirsiniz.");
}
else{
    console.log("ehliyeti alamazsınız.");
}

// and (&&)
//true,true ==true
//true,false ==false
//false,false ==false

// veya (||)

//true,true ==true
//true,false ==true
//false,false ==false

