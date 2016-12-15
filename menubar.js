/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function buildMenu(x){
    
    var menuBar = document.getElementById(x);
    
    var unordered = document.createElement("ul");
    menuBar.appendChild(unordered);
   
    var list1 = document.createElement("li");
    unordered.appendChild(list1);
    var list1a1 = document.createElement("a");
    list1.appendChild(list1a1);
    list1a1.href="https://perryma.tk/ChikkenNugget";
    list1a1.textContent="HOME";
    
    var list2 = document.createElement("li");
    unordered.appendChild(list2);
    var list1a2 = document.createElement("a");
    list2.appendChild(list1a2);
    list1a2.href="https://perryma.tk/ChikkenNugget/sitemap.html";
    list1a2.textContent="SITEMAP";
    
    var list3 = document.createElement("li");
    unordered.appendChild(list3);
    var list1a3 = document.createElement("a");
    list3.appendChild(list1a3);
    list1a3.href="https://perryma.tk/ChikkenNugget/favorites.html";
    list1a3.textContent="Favorite Works";
    
    var list4 = document.createElement("li");
    unordered.appendChild(list4);
    var list1a4 = document.createElement("a");
    list4.appendChild(list1a4);
    list1a4.href="https://perryma.tk/ChikkenNugget/breakout.html";
    list1a4.textContent="BREAKOUT";
    
    var list5 = document.createElement("li");
    unordered.appendChild(list5);
    var list1a5 = document.createElement("a");
    list5.appendChild(list1a5);
    list1a5.href="https://perryma.tk/ChikkenNugget/javafun.html";
    list1a5.textContent="JAVA FUN";
    
    var list6 = document.createElement("li");
    unordered.appendChild(list6);
    var list1a6 = document.createElement("a");
    list6.appendChild(list1a6);
    list1a6.href="https://perryma.tk/ChikkenNugget/404.html";
    list1a6.textContent="404";
    
    /*
    var list7 = document.createElement("li");
    unordered.appendChild(list7);
    var list1a7 = document.createElement("a");
    list1.appendChild(list1a7);
    list1a1.href="";
    list1a1.href="HOME";
    */ 
   
    var list8 = document.createElement("li");
    unordered.appendChild(list8);
    var list1a8 = document.createElement("a");
    list8.appendChild(list1a8);
    list1a8.href="https://perryma.tk/ChikkenNugget/meme.html";
    list1a8.textContent="MEME";
    
        var subBar = document.createElement("ul");
        unordered.appendChild(subBar);
        
            var subList1 = document.createElement("li");
            subBar.appendChild(subList1);
            var subList1a1 = document.createElement("a");
            subList1.appendChild(subList1a1);
            subList1a1.href="https://perryma.tk/ChikkenNugget/popup.html";
            subList1a1.textContent="POP-UP MESSAGE";
            
            var subList2 = document.createElement("li");
            subBar.appendChild(subList2);
            var subList1a2 = document.createElement("a");
            subList2.appendChild(subList1a2);
            subList1a2.href="https://perryma.tk/ChikkenNugget/events.html";
            subList1a2.textContent="JAVA EVENTS";
            
            var subList3 = document.createElement("li");
            subBar.appendChild(subList3);
            var subList1a3 = document.createElement("a");
            subList3.appendChild(subList1a3);
            subList1a3.href="https://perryma.tk/ChikkenNugget/t-t-t.html";
            subList1a3.textContent="TIC TAC TOE";
            
            var subList4 = document.createElement("li");
            subBar.appendChild(subList4);
            var subList1a4 = document.createElement("a");
            subList4.appendChild(subList1a4);
            subList1a4.href="https://perryma.tk/ChikkenNugget/todolist.html";
            subList1a4.textContent="MISCELLANEOUS";
            
            var subList5 = document.createElement("li");
            subBar.appendChild(subList5);
            var subList1a5 = document.createElement("a");
            subList5.appendChild(subList1a5);
            subList1a5.href="https://perryma.tk/ChikkenNugget/volume.html";
            subList1a5.textContent="VOLUME CALCULATOR";
            
            var subList6 = document.createElement("li");
            subBar.appendChild(subList6);
            var subList1a6 = document.createElement("a");
            subList6.appendChild(subList1a6);
            subList1a6.href="https://perryma.tk/ChikkenNugget/tablelist.html";
            subList1a6.textContent="TABLES";
            
                var subBar2 = document.createElement("ul");
                subBar.appendChild(subBar2);
                
                    var sub2List1 = document.createElement("li");
                    subBar2.appendChild(sub2List1);
                    var sub2List1a1 = document.createElement("a");
                    sub2List1.appendChild(sub2List1a1);
                    sub2List1a1.href="https://perryma.tk/ChikkenNugget/timestable.html";
                    sub2List1a1.textContent="TIMES TABLE";
                    
                    var sub2List2 = document.createElement("li");
                    subBar2.appendChild(sub2List2);
                    var sub2List1a2 = document.createElement("a");
                    sub2List2.appendChild(sub2List1a2);
                    sub2List1a2.href="https://perryma.tk/ChikkenNugget/sizabletimestable.html";
                    sub2List1a2.textContent="SCALABLE TIMES TABLE";
}

//create var for a tag, use a.href=..., a.textContent="..."





