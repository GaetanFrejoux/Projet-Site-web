//Fonction qui permet de savoir quel mois nous sommes actuellement !
function getMonthName(m) {
    if (m>12 || m<1){
    return(" ")
    }
    else {
    if (m === 0) {
    return ("JANUARY")
    } else if (m === 1) {
    return ("FEBRUARY")
    } else if (m === 2) {
    return ("MARCH")
    } else if (m === 3) {
    return ("APRIL")
    } else if (m === 4) {
    return ("MAY")
    } else if (m === 5) {
    return ("JUNE")
    } else if (m === 6) {
    return ("JULY")
    } else if (m === 7) {
    return ("AUGUST")
    } else if (m === 8) {
    return ("SEPTEMBER")
    } else if (m === 9) {
    return ("OCTOBER")
    } else if (m === 10) {
    return ("NOVEMBER")
    } else return ("DECEMBER")
    }
}
//Fonction qui renvoie la date
function my_Date(){
    var d = new Date();
    var body = document.body;
    var p = document.createElement("p");
    var month_name = getMonthName(d.getMonth());
    var t = document.createTextNode(d.getHours()+"h : "+ d.getMinutes()+ "m : " + d.getSeconds()+"s      "+ d.getDate()+"  " + month_name +"   " + d.getFullYear());
    p.appendChild(t);
    p.style.color="#212121";
    p.style.fontSize="50px";
    p.style.fontFamily = "Arial"
    body.insertBefore(p, document.getElementById("header"));

}

let numImage = 0;
let numImage2 = 0;
//fonction qui change les images lorsqu'on clique
function switchImg(){
    let tabImg = ["Images/PACMAN1.png", "Images/PACMAN2.png"];
    let tabImg2 =["Images/GHOSTLeft.png","Images/GHOSTLeft2.png","Images/GHOSTRight.png","Images/GHOSTRight2.png"]

    let o = document.getElementsByTagName("img");
    o[0].src = tabImg[numImage];
    o[1].src = tabImg2[numImage2];
    numImage = numImage + 1;
    numImage2 = numImage2 + 1;
    if (numImage >= tabImg.length) {
        numImage = 0;
    }
    if (numImage2 >= tabImg2.length) {
        numImage2 = 0;
    }
}

let k = 0;
//fonction qui fait une boucle d'echange d'image
function boucle_switchImg(){
  k++;
    if (k % 2 === 1){
       imgS = setInterval("switchImg()",250);
    }
    else if (k % 2 === 0){
      clearInterval(imgS);
    }
}
//fonction qui affiche ou non les élements dans le sitemap
function mDisplay(id) {
    var a = document.getElementById(id);
    if (a.style.display === 'none') {
        a.style.display = 'block';
    } else {
        a.style.display = 'none';
    }
}
//fonction qui verifie si tout les champs sont remplis
function check_form_complete_min(){
  if (((document.getElementById('min_q1_1').checked) || (document.getElementById('min_q1_2').checked)
   || (document.getElementById('min_q1_3').checked) || (document.getElementById('min_q1_4').checked))
   && ((document.getElementById('min_q2_1').checked) || (document.getElementById('min_q2_2').checked)
   || (document.getElementById('min_q2_3').checked) || (document.getElementById('min_q2_4').checked))
   && ((document.getElementById('min_q3_1').value!=="")))
   {

   }else {
    window.alert("Veuillez remplir toute les questions !")
  }
}
//fonction qui verifie si tout les champs sont remplis
function check_form_complete_spy(){
  if (((document.getElementById('spy_q1_1').checked) || (document.getElementById('spy_q1_2').checked)
   || (document.getElementById('spy_q1_3').checked) || (document.getElementById('spy_q1_4').checked))
   && ((document.getElementById('spy_q2_1').checked) || (document.getElementById('spy_q2_2').checked)
   || (document.getElementById('spy_q2_3').checked) || (document.getElementById('spy_q2_4').checked))
   && ((document.getElementById('spy_q3').value!=="")))
   {

   }else {
    window.alert("Veuillez remplir toute les questions !")
  }
}
//fonction qui verifie si tout les champs sont remplis
function check_form_complete_nfs(){
  if (((document.getElementById('nfs_q1').value!=="")) && ((document.getElementById('nfs_q2_1').checked)
   || (document.getElementById('nfs_q2_2').checked) || (document.getElementById('nfs_q2_3').checked)
   || (document.getElementById('nfs_q2_4').checked)))
   {

   }else {
    window.alert("Veuillez remplir toute les questions !")
  }
}
//fonction qui verifie si tout les champs sont remplis
function check_form_complete_pok(){
  if (((document.getElementById('pok_q2_1').checked) || (document.getElementById('pok_q2_2').checked)
   || (document.getElementById('pok_q2_3').checked) || (document.getElementById('pok_q2_4').checked))
   && ((document.getElementById('pok_q3').value!=="")))
   {

   }else {
    window.alert("Veuillez remplir toute les questions !")
  }
}

//fonction qui verifie si tout les champs sont remplis et envoie le récapitulatif
function submit_all(){
    if  (((document.getElementById('min_q1_1').checked) || (document.getElementById('min_q1_2').checked)
        || (document.getElementById('min_q1_3').checked) || (document.getElementById('min_q1_4').checked))
        && ((document.getElementById('min_q2_1').checked) || (document.getElementById('min_q2_2').checked)
        || (document.getElementById('min_q2_3').checked) || (document.getElementById('min_q2_4').checked))
        && ((document.getElementById('min_q3_1').value!==""))
        && ((document.getElementById('spy_q1_1').checked) || (document.getElementById('spy_q1_2').checked)
        || (document.getElementById('spy_q1_3').checked) || (document.getElementById('spy_q1_4').checked))
        && ((document.getElementById('spy_q2_1').checked) || (document.getElementById('spy_q2_2').checked)
        || (document.getElementById('spy_q2_3').checked) || (document.getElementById('spy_q2_4').checked))
        && ((document.getElementById('spy_q3').value!==""))
        && ((document.getElementById('nfs_q1').value!=="")) && ((document.getElementById('nfs_q2_1').checked)
        || (document.getElementById('nfs_q2_2').checked) || (document.getElementById('nfs_q2_3').checked)
        || (document.getElementById('nfs_q2_4').checked))
        && ((document.getElementById('pok_q2_1').checked) || (document.getElementById('pok_q2_2').checked)
        || (document.getElementById('pok_q2_3').checked) || (document.getElementById('pok_q2_4').checked))
        && ((document.getElementById('pok_q3').value!=="")))
    {
      document.getElementById("formulaire_1").submit();

    }
    else
    {
        window.alert("Veuillez remplir toute les questions !")
    }
}
//fonction qui verifie si tout les champs sont remplis et envoie le récapitulatif
function upload_game(){
  if ((document.getElementById('title').value!=="")&&(document.getElementById('desc').value!=="")
     &&(document.getElementById('editeur').value!=="")&&(document.getElementById('dev').value!=="")
     &&(document.getElementById('pf').value!=="")&&(document.getElementById('kind').value!=="")
     &&(document.getElementById('number').value!==""))
     {
       document.getElementById("addgame_form").submit();
     }else
     {
       window.alert("Veuillez remplir tous les compartiments !")
     }
}
