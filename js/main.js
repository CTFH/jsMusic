window.onload=function(){
            
    let results=[
    "選択なし",
    "hawaiian musicで旅行にいった気分になろう☆",
    "reggae musicで旅行にいった気分になろう★",
    "jazzでカフェ気分♪",
    "nature soundで癒されよう彡",
    "pop musicで踊っちゃう？",
    "静かなclassical musicでリラックス",
    "ロックでぶちかまそう!"
    ];
    
    let index = document.getElementById("selectMood");
    
    index.onchange=function(){
        
        let indexn=parseInt(this.value);
        let str=results[indexn];

        document.getElementById("result").textContent=str;  

        
        let arr = document.getElementsByClassName("disp");
        for(let i=0; i<arr.length; i++){
            arr[i].style.display="none"
        }
        
        let array = [, hawaiC, reggaeC, jazzC, natureC, popC, classicC, rockC]
        
        
        array[indexn].style.display="block"
    }

    
}