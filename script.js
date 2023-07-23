

 //********************************Variable's Declaration and Identification**************************** *//


var btn = document.getElementById('btn');
var Btn_Item1 = document.getElementById('Btn_Item1');
var Header = document.getElementById('Header');
var Text3 = document.getElementById('Text3');
var MainSection_Part2_Img = document.getElementById('MainSection_Part2_Img');
var Input1 = document.getElementById('Input1');
var Input2 = document.getElementById('Input2');
var Input3 = document.getElementById('Input3');
var Input4 = document.getElementById('Input4');
var Input5 = document.getElementById('Input5');
var InputMessage = document.getElementById('InputMessage');
var InputRoad = document.getElementById('InputRoad');
var InputAvenue = document.getElementById('InputAvenue');
var InputPostal = document.getElementById('InputPostal');
var InputCity = document.getElementById('InputCity');
var Btn = document.getElementById('Btn');
var MyText = document.getElementById('MyText');
var Indicators = document.getElementById('Indicators');
var Indicator1 = document.getElementById('Indicator1');
var Indicator2 = document.getElementById('Indicator2');
var Indicator3 = document.getElementById('Indicator3');
var Indicator4 = document.getElementById('Indicator4');
var Indicator5 = document.getElementById('Indicator5');
var Indicator6 = document.getElementById('Indicator6');
var Indicator7 = document.getElementById('Indicator7');
var Indicator8 = document.getElementById('Indicator8');
var Indicator9 = document.getElementById('Indicator9');
var Indicator10 = document.getElementById('Indicator10');
let arrayEmail = Input3.value.split("@");
let arrayEmailLast = Input3.value.split("@").split('.');
var Item1 = document.getElementById('Item1');
var Body_Overlay = document.getElementById('Body_Overlay');
var Body = document.getElementsByTagName("body"); 
var NavBar = document.getElementById('NavBar');



//***********************************Functions's Declaration*************************************** *//

 //********************************************************************************** *//

btn.onclick = function () {

   Header.style.backgroundColor = "red";


}

 //********************************************************************************** *//


function bigText(Text3) {
   Text3.style.transform = "scale(1.1)";
   Text3.style.cursor = "pointer";
   
 }

  //********************************************************************************** *//

function normalText(Text3) {
   Text3.style.transform = "none";
   
 }

  //********************************************************************************** *//

function imageOpacity(MainSection_Part2_Img) {
   MainSection_Part2_Img.style.opacity = "0.7";
}

 //********************************************************************************** *//

function NoneImageOpacity(MainSection_Part2_Img) {
   MainSection_Part2_Img.style.opacity = "1";
}


 //********************************************************************************** *//

function Mybtn() {

   

   let tab = Array.from(Input2.value);
   let tab2 = Array.from(Input1.value);
   let tab4 = Array.from(Input4.value);
   let tab5 = Array.from(InputRoad.value);
   let tab6 = Array.from(InputAvenue.value);
   let tab7 = Array.from(InputPostal.value);
   let tab8 = Array.from(InputCity.value);
   let tab9 = Array.from(InputMessage.value);


if(Input1.value!=""){

      for(var j=0;j<Input1.value.length;j++){

         if ((!tab2[j].match(/[a-z]/i)) || !(isNaN(tab2[j])) ){
            Input1.style.backgroundColor = "red";
            Indicators.style.display = "block";
            Indicator1.style.display = "block";
            Indicator1.innerHTML = "You Should Enter A Valid First Name, It Should Contain Only Letters";
            Indicator10.style.display = "block";
            
         }
   
         
   
      }


} else
   {
      Indicator1.innerHTML = "You Should Enter A Valid First Name";
      Input1.style.backgroundColor = "red";
      Indicators.style.display = "block";
      Indicator1.style.display = "block";
      
}



if(Input2.value!=""){
   
   for(var i=0;i<Input2.value.length;i++){

      if ((!tab[i].match(/[a-z]/i)) || !(isNaN(tab[i])) ){
         Input2.style.backgroundColor = "red";
         Indicators.style.display = "block";
         Indicator2.style.display = "block";
         Indicator2.innerHTML = "You Should Enter A Valid Last Name, It Should Contain Only Letters";
      }

      

   }
} else
{
   Indicator2.innerHTML = "You Should Enter A Valid Last Name";
   Input2.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator2.style.display = "block";
}



if(InputRoad.value!=""){

   for(var h=0;h<InputRoad.value.length;h++){

      if ((!tab5[h].match(/[a-z]/i)) || !(isNaN(tab5[h])) ){
         InputRoad.style.backgroundColor = "red";
         Indicators.style.display = "block";
         Indicator10.style.display = "block";
         Indicator10.innerHTML = "You Should Enter A Valid Road, It Should Contain Only Letters";
         
         
      }

      

   }


} else
{
   Indicator10.innerHTML = "You Should Enter A Valid Road";
   InputRoad.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator10.style.display = "block";
}



if(InputAvenue.value!=""){

   for(var k=0;k<InputAvenue.value.length;k++){

      if ((!tab6[k].match(/[a-z]/i)) || !(isNaN(tab6[k])) ){
         InputAvenue.style.backgroundColor = "red";
         Indicators.style.display = "block";
         Indicator9.style.display = "block";
         Indicator9.innerHTML = "You Should Enter A Valid Avenue, It Should Contain Only Letters";
         
         
      }

      

   }


} else
{
   Indicator9.innerHTML = "You Should Enter A Valid Avenue";
   InputAvenue.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator9.style.display = "block";
}



if((InputPostal.value!="") && (InputPostal.value.length === 4)){

   for(var m=0;m<InputPostal.value.length;m++){
   
         if ((isNaN(tab7[m]))) {
            InputPostal.style.backgroundColor = "red";
            Indicators.style.display = "block";
            Indicator8.style.display = "block";
            Indicator8.innerHTML = "You Should Enter A Valid Postal Code, It Should Contain Only Numbers";
         }
   
         
   
   }
   } else
   {
      Indicator8.innerHTML = "You Should Enter A Valid Posal Code";
      InputPostal.style.backgroundColor = "red";
      Indicators.style.display = "block";
      Indicator8.style.display = "block";
   }



if(InputCity.value!=""){

      for(var n=0;n<InputCity.value.length;n++){

         if ((!tab8[n].match(/[a-z]/i)) || !(isNaN(tab8[n])) ){
            InputCity.style.backgroundColor = "red";
            Indicators.style.display = "block";
            Indicator7.style.display = "block";
            Indicator7.innerHTML = "You Should Enter A Valid City, It Should Contain Only Letters";
            Indicator7.style.display = "block";
            
         }
   
         
   
      }


} else
   {
      Indicator7.innerHTML = "You Should Enter A Valid City";
      InputCity.style.backgroundColor = "red";
      Indicators.style.display = "block";
      Indicator7.style.display = "block";
      
}



if(InputMessage.value!=""){  


} else
{
   Indicator6.innerHTML = "You Should Enter A Message";
   InputMessage.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator6.style.display = "block";
   
}





if(Input3.value!=""){

}
else
{
   Indicator3.innerHTML = "You Should Enter A Valid Email";
   Input3.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator3.style.display = "block";
}

   

if((Input4.value!="") && (Input4.value.length === 8)){

for(var k=0;k<Input4.value.length;k++){

      if ((isNaN(tab4[k]))) {
         Input4.style.backgroundColor = "red";
         Indicators.style.display = "block";
         Indicator4.style.display = "block";
         Indicator4.innerHTML = "You Should Enter A Valid Phone Number, It Should Contain Only Numbers";
      }

      

}
} else
{
   Indicator4.innerHTML = "You Should Enter A Valid Phone Number";
   Input4.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator4.style.display = "block";
}
   


if(Input5.value!=""){

}
else
{
   Indicator5.innerHTML = "You Should Enter A Valid Adress";
   Input5.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator5.style.display = "block";
}


if(Input6.value!=""){

}
else
{
   Indicator6.innerHTML = "You Should Enter A Valid Message";
   Input6.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator6.style.display = "block";
}




if  (/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(Input3.value) == false ) {
   
   Indicator3.innerHTML = "You Should Enter A Valid Email";
   Input3.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator3.style.display = "block";

 }



if ((typeof(Indicator6.innerText = Input3.value.split("@")[1].split('.')[1]) === "undefined")
 
 || ((Indicator6.innerText = Input3.value.split("@")[1].split('.')[1]) != "fr"
 && (Indicator6.innerText = Input3.value.split("@")[1].split('.')[1]) != "com")

 || ((Indicator6.innerText = Input3.value.split("@")[1].split('.')[0]) != "gmail"
 && (Indicator6.innerText = Input3.value.split("@")[1].split('.')[0]) != "yahoo"))
 
 
 {

   Indicator3.innerHTML = "You Should Enter A Valid Email";
   Input3.style.backgroundColor = "red";
   Indicators.style.display = "block";
   Indicator3.style.display = "block";

 } 
 


}

 //********************************************************************************** *//


function bigPicture1(Text3) {
   
      var Text3 = document.getElementById("Text3");
      var x = document.getElementById("Body");
      var Main_Section = document.getElementById('Main_Section');
      var Work_Experience_Section = document.getElementById('Work_Experience_Section');
      var About_Section = document.getElementById('About_Section');
      var Contact_Section = document.getElementById('Contact_Section');
      var Portfolio_Section = document.getElementById('Portfolio_Section');
      var NavBar = document.getElementById('NavBar'); 
      var Vertical_Line = document.getElementById('Vertical_Line');
      var Vertical_Line2 = document.getElementById('Vertical_Line2');
      var Vertical_Line3 = document.getElementById('Vertical_Line3');
      var Item1 = document.getElementById('Item1');
      var Item2 = document.getElementById('Item2');
      var Item3 = document.getElementById('Item3');
      var Item4 = document.getElementById('Item4');
      var Item5 = document.getElementById('Item5');
      var Item6 = document.getElementById('Item6');
      var Item7 = document.getElementById('Item7');
      var Item8 = document.getElementById('Item8');
      var Item9 = document.getElementById('Item9');
      var Item10 = document.getElementById('Item10');
      var Item11 = document.getElementById('Item11');
      var Item12 = document.getElementById('Item12');
      var Footer = document.getElementById('Footer');
      
      x.style.backgroundColor ="#009688";

      Item1.style.display = "none";
      Item2.style.display = "none";
      Item3.style.display = "none";
      Item4.style.display = "none";
      Item5.style.display = "none";
      Item6.style.display = "none";
      Item7.style.display = "none";
      Item8.style.display = "none";
      Item9.style.display = "none";
      Item10.style.display = "none";
      Item11.style.display = "none";
      Item12.sty4.display = "none";
      NavBar.style.display = "none";
      Vertical_Line.style.display = "none";
      Vertical_Line2.style.display = "none";
      Vertical_Line3.style.display = "none";
      Main_Section.style.display = "none";
      Work_Experience_Section.style.display = "none";
      About_Section.style.display = "none";
      Contact_Section.style.display = "none";
      Footer.style.display = "none";

      Text3.style.display = "block";

      Portfolio_Section.style.top = "0";
      Portfolio_Section.style.left = "0";   
      Portfolio_Section.style.display = "flex";
      Portfolio_Section.style.flexDirection = "column";      
      Portfolio_Section.style.position = "fixed";
      Portfolio_Section.style.width = "100%";
      Portfolio_Section.style.height = "300px";
     

   // ***************** Create The Main Header ****************//



     // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Doctor Planner Web Site");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("Portfolio_Section");
  document.body.insertBefore(newDiv, currentDiv);

  newDiv.style.color = "white";
  newDiv.style.backgroundColor ="red"; 
  newDiv.style.width ="500px";
  newDiv.style.height = "50px";
  newDiv.style.fontSize ="40px";
  newDiv.style.margin = "auto";
  newDiv.style.padding = "auto";
  newDiv.style.paddingLeft = "120px";
  newDiv.style.marginTop = "70px";
  newDiv.style.boxShadow =  "10px 20px 30px red";

  

  
// ************************ Create The Second Header *********************// 



   // create a new div element
   const newDiv2 = document.createElement("div");

   // and give it some content
   const newContent2 = document.createTextNode("Web Site Gallery");
 
   // add the text node to the newly created div
   newDiv2.appendChild(newContent2);
 
   // add the newly created element and its content into the DOM
   const currentDiv2 = document.getElementById("Portfolio_Section");
   document.body.insertBefore(newDiv2, currentDiv2);
  
   
   newDiv2.style.width ="280px";
   newDiv2.style.height = "50px";
   newDiv2.style.marginTop = "100px";   
   newDiv2.style.padding = "auto";
   newDiv2.style.fontSize = "40px";
   newDiv2.style.color = "white";
   newDiv2.style.marginLeft = "710px";


   // ********************** Create The main Box *************************//


   // create a new div element
   const newDiv3 = document.createElement("div");   
   
 
   // add the newly created element and its content into the DOM
   const currentDiv3 = document.getElementById("Portfolio_Section");
   document.body.insertBefore(newDiv3, currentDiv3);

   
   newDiv3.style.width = "80%";
   newDiv3.style.height = "405px";
   newDiv3.style.marginTop = "70px";
   newDiv3.style.display = "flex";
   newDiv3.style.justifyContent = "space-around";
   newDiv3.style.flexWrap = "wrap";
   newDiv3.style.flexDirection = "row";


   // ******************* Create the Part 1 of the main box **********************//


    // create a new div element
    const newDiv3_Part1 = document.createElement("div");   
   
 
    // add the newly created element and its content into the DOM
    const currentDiv3_Part1 = document.getElementById("newDiv3");
    newDiv3.appendChild(newDiv3_Part1);



   // ******************* Create the Part 2 of the main box **********************//

    // create a new div element
    const newDiv3_Part2 = document.createElement("div");   
   
 
    // add the newly created element and its content into the DOM
    const currentDiv3_Part2 = document.getElementById("newDiv3");
    newDiv3.appendChild(newDiv3_Part2);


   // ******************* Create the Part 3 of the main box **********************// 


    // create a new div element
    const newDiv3_Part3 = document.createElement("div");   
   
 
    // add the newly created element and its content into the DOM
    const currentDiv3_Part3 = document.getElementById("newDiv3");
    newDiv3.appendChild(newDiv3_Part3);


    // ******************* Create the Part 4 of the main box **********************// 


    // create a new div element
    const newDiv3_Part4 = document.createElement("div");   
   
 
    // add the newly created element and its content into the DOM
    const currentDiv3_Part4 = document.getElementById("newDiv3");
    newDiv3.appendChild(newDiv3_Part4);


    // ******************* Create the Part 5 of the main box **********************// 


    // create a new div element
    const newDiv3_Part5 = document.createElement("div");   
   
 
    // add the newly created element and its content into the DOM
    const currentDiv3_Part5 = document.getElementById("newDiv3");
    newDiv3.appendChild(newDiv3_Part5);


    // ******************* Create the Part 6 of the main box **********************// 


    // create a new div element
    const newDiv3_Part6 = document.createElement("div");   
   
 
    // add the newly created element and its content into the DOM
    const currentDiv3_Part6 = document.getElementById("newDiv3");
    newDiv3.appendChild(newDiv3_Part6);


    // ******************* Create the Part 7 of the main box **********************// 


    // create a new div element
    const newDiv3_Part7 = document.createElement("div");   
   
 
    // add the newly created element and its content into the DOM
    const currentDiv3_Part7 = document.getElementById("newDiv3");
    newDiv3.appendChild(newDiv3_Part7);

    



    // ************************** Set the propreties of Part1 of the main box*****************//


    
    newDiv3_Part1.style.width = "1342px";
    newDiv3_Part1.style.height = "285px";    
    newDiv3_Part1.style.backgroundImage.objectFit = "cover";
    newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
    newDiv3_Part1.style.float = "left";
    newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
    

    //*****************Create Background Image Part1 of the main box**************************// 

    const img = document.createElement("img");
    img.src = "images/Image1.png";
    newDiv3_Part1.appendChild(img);




    // ************************** Set the propreties of Part2 of the main box*****************//

    
    newDiv3_Part2.style.width = "1342px";
    newDiv3_Part2.style.height = "250px";    
    newDiv3_Part2.style.float = "left";
    newDiv3_Part2.style.backgroundImage.objectFit = "cover";
    newDiv3_Part2.style.backgroundImage.boxSizing = "border-box";
    newDiv3_Part2.style.marginTop = "50px";
    newDiv3_Part2.style.paddingRight = "10px";
    newDiv3_Part2.style.boxShadow = "0px 0px 10px 0 white";

    //*****************Create Background Image Part2 of the main box*****************************// 

    const img2 = document.createElement("img");
    img2.src = "images/Image2.png";
    newDiv3_Part2.appendChild(img2);

    // ************************** Set the propreties of Part3 of the main box*****************//

    
    newDiv3_Part3.style.width = "1355px";
    newDiv3_Part3.style.height = "205px"; 
    newDiv3_Part3.style.float = "left"; 
    newDiv3_Part3.style.backgroundImage.objectFit = "cover";
    newDiv3_Part3.style.backgroundImage.boxSizing = "border-box";
    newDiv3_Part3.style.paddingLef = "10px"; 
    newDiv3_Part3.style.marginTop = "350px";   
    newDiv3_Part3.style.boxShadow = "0px 0px 10px 0 white";
    

    //*****************Create Background Image Part3 of the main box*****************************// 

    const img3 = document.createElement("img");
    img3.src = "images/Image3.png";
    newDiv3_Part3.appendChild(img3);


     // ************************** Set the propreties of Part4 of the main box*****************//

     
     newDiv3_Part4.style.width = "1342px";
     newDiv3_Part4.style.height = "250px"; 
     newDiv3_Part4.style.float = "left"; 
     newDiv3_Part4.style.backgroundImage.objectFit = "cover";
     newDiv3_Part4.style.backgroundImage.boxSizing = "border-box";
     newDiv3_Part4.style.marginTop = "60px";
     newDiv3_Part4.style.float = "left";     
     newDiv3_Part4.style.boxShadow = "0px 0px 10px 0 white";


 
     //*****************Create Background Image Part4 of the main box*****************************// 
 
     const img4 = document.createElement("img");
     img4.src = "images/Image4.png";
     newDiv3_Part4.appendChild(img4);



      // ************************** Set the propreties of Part5 of the main box*****************//

     
      newDiv3_Part5.style.width = "1308px";
      newDiv3_Part5.style.height = "598px"; 
      newDiv3_Part5.style.float = "left"; 
      newDiv3_Part5.style.backgroundImage.objectFit = "cover";
      newDiv3_Part5.style.backgroundImage.boxSizing = "border-box";
      newDiv3_Part5.style.marginTop = "405px";
      newDiv3_Part5.style.float = "left";
      newDiv3_Part5.style.boxShadow = "0px 0px 10px 0 white";
  
      //*****************Create Background Image Part5 of the main box*****************************// 
  
      const img5 = document.createElement("img");
      img5.src = "images/Image5.png";
      newDiv3_Part5.appendChild(img5);



      // ************************** Set the propreties of Part6 of the main box*****************//

     
      newDiv3_Part6.style.width = "1342px";
      newDiv3_Part6.style.height = "622px"; 
      newDiv3_Part6.style.float = "left"; 
      newDiv3_Part6.style.backgroundImage.objectFit = "cover";
      newDiv3_Part6.style.backgroundImage.boxSizing = "border-box";
      newDiv3_Part6.style.marginTop = "65px";
      newDiv3_Part6.style.float = "left";
      
      newDiv3_Part6.style.boxShadow = "0px 0px 10px 0 white";
  
      //*****************Create Background Image Part6 of the main box*****************************// 
  
      const img6 = document.createElement("img");
      img6.src = "images/Image6.png";
      newDiv3_Part6.appendChild(img6);



      // ************************** Set the propreties of Part7 of the main box*****************//

     
      newDiv3_Part7.style.width = "1342px";
      newDiv3_Part7.style.height = "326px"; 
      newDiv3_Part7.style.float = "left"; 
      newDiv3_Part7.style.backgroundImage.objectFit = "cover";
      newDiv3_Part7.style.backgroundImage.boxSizing = "border-box";
      newDiv3_Part7.style.marginTop = "65px";
      newDiv3_Part7.style.float = "left";
      newDiv3_Part7.style.paddingLeftLeft = "10px";
      newDiv3_Part7.style.boxShadow = "0px 0px 10px 0 white";
  
      //*****************Create Background Image Part7 of the main box*****************************// 
  
      const img7 = document.createElement("img");
      img7.src = "images/Image7.png";
      newDiv3_Part7.appendChild(img7);


      
     

    
 }



 //********************************************************************************** *//


 function bigPicture2(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display ="none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("WebPage With Full Screen Video");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="540px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";

newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="280px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "710px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);



// ******************* Create the Part 2 of the main box **********************//

 // create a new div element
 const newDiv3_Part2 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part2 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part2);






 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1366px";
 newDiv3_Part1.style.height = "203px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image9.png";
 newDiv3_Part1.appendChild(img);




 // ************************** Set the propreties of Part2 of the main box*****************//

 
 newDiv3_Part2.style.width = "1355px";
 newDiv3_Part2.style.height = "375px";    
 newDiv3_Part2.style.float = "left";
 newDiv3_Part2.style.backgroundImage.objectFit = "cover";
 newDiv3_Part2.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part2.style.marginTop = "30px";
 newDiv3_Part2.style.paddingRight = "10px";
 newDiv3_Part2.style.boxShadow = "0px 0px 10px 0 white";

 //*****************Create Background Image Part2 of the main box*****************************// 

 const img2 = document.createElement("img");
 img2.src = "images/Image10.png";
 newDiv3_Part2.appendChild(img2);

 
  

  

 
}


//********************************************************************************** *//


function bigPicture3(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";


   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Travel Agency WebSite");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="500px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";
newDiv.style.paddingLeft = "120px";
newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="280px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "710px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);



// ******************* Create the Part 2 of the main box **********************//

 // create a new div element
 const newDiv3_Part2 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part2 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part2);


// ******************* Create the Part 3 of the main box **********************// 


 // create a new div element
 const newDiv3_Part3 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part3 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part3);


 // ******************* Create the Part 4 of the main box **********************// 


 // create a new div element
 const newDiv3_Part4 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part4 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part4);


 // ******************* Create the Part 5 of the main box **********************// 


 // create a new div element
 const newDiv3_Part5 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part5 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part5);


 // ******************* Create the Part 6 of the main box **********************// 


 // create a new div element
 const newDiv3_Part6 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part6 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part6);




 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1366px";
 newDiv3_Part1.style.height = "313px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image11.png";
 newDiv3_Part1.appendChild(img);




 // ************************** Set the propreties of Part2 of the main box*****************//

 
 newDiv3_Part2.style.width = "1334px";
 newDiv3_Part2.style.height = "571px";    
 newDiv3_Part2.style.float = "left";
 newDiv3_Part2.style.backgroundImage.objectFit = "cover";
 newDiv3_Part2.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part2.style.marginTop = "30px";
 newDiv3_Part2.style.paddingRight = "10px";
 newDiv3_Part2.style.boxShadow = "0px 0px 10px 0 white";

 //*****************Create Background Image Part2 of the main box*****************************// 

 const img2 = document.createElement("img");
 img2.src = "images/Image12.png";
 newDiv3_Part2.appendChild(img2);

 // ************************** Set the propreties of Part3 of the main box*****************//

 
 newDiv3_Part3.style.width = "1350px";
 newDiv3_Part3.style.height = "470px"; 
 newDiv3_Part3.style.float = "left"; 
 newDiv3_Part3.style.backgroundImage.objectFit = "cover";
 newDiv3_Part3.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part3.style.paddingLef = "10px"; 
 newDiv3_Part3.style.marginTop = "70px";   
 newDiv3_Part3.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part3 of the main box*****************************// 

 const img3 = document.createElement("img");
 img3.src = "images/Image13.png";
 newDiv3_Part3.appendChild(img3);


  // ************************** Set the propreties of Part4 of the main box*****************//

  
  newDiv3_Part4.style.width = "1350px";
  newDiv3_Part4.style.height = "580px"; 
  newDiv3_Part4.style.float = "left"; 
  newDiv3_Part4.style.backgroundImage.objectFit = "cover";
  newDiv3_Part4.style.backgroundImage.boxSizing = "border-box";
  newDiv3_Part4.style.marginTop = "70px";
  newDiv3_Part4.style.float = "left";     
  newDiv3_Part4.style.boxShadow = "0px 0px 10px 0 white";



  //*****************Create Background Image Part4 of the main box*****************************// 

  const img4 = document.createElement("img");
  img4.src = "images/Image14.png";
  newDiv3_Part4.appendChild(img4);



   // ************************** Set the propreties of Part5 of the main box*****************//

  
   newDiv3_Part5.style.width = "1344px";
   newDiv3_Part5.style.height = "409px"; 
   newDiv3_Part5.style.float = "left"; 
   newDiv3_Part5.style.backgroundImage.objectFit = "cover";
   newDiv3_Part5.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part5.style.marginTop = "70px";
   newDiv3_Part5.style.float = "left";
   newDiv3_Part5.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part5 of the main box*****************************// 

   const img5 = document.createElement("img");
   img5.src = "images/Image15.png";
   newDiv3_Part5.appendChild(img5);



   // ************************** Set the propreties of Part6 of the main box*****************//

  
   newDiv3_Part6.style.width = "1350px";
   newDiv3_Part6.style.height = "320px"; 
   newDiv3_Part6.style.float = "left"; 
   newDiv3_Part6.style.backgroundImage.objectFit = "cover";
   newDiv3_Part6.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part6.style.marginTop = "70px";
   newDiv3_Part6.style.float = "left";
   
   newDiv3_Part6.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part6 of the main box*****************************// 

   const img6 = document.createElement("img");
   img6.src = "images/Image16.png";
   newDiv3_Part6.appendChild(img6);



  
  

 
}


//********************************************************************************** *//


function bigPicture4(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Hair Studio WebSite");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="500px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";
newDiv.style.paddingLeft = "120px";
newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="280px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "710px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);



// ******************* Create the Part 2 of the main box **********************//

 // create a new div element
 const newDiv3_Part2 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part2 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part2);


// ******************* Create the Part 3 of the main box **********************// 


 // create a new div element
 const newDiv3_Part3 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part3 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part3);


 // ******************* Create the Part 4 of the main box **********************// 


 // create a new div element
 const newDiv3_Part4 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part4 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part4);


 // ******************* Create the Part 5 of the main box **********************// 


 // create a new div element
 const newDiv3_Part5 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part5 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part5);


 // ******************* Create the Part 6 of the main box **********************// 


 // create a new div element
 const newDiv3_Part6 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part6 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part6);




 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1366px";
 newDiv3_Part1.style.height = "500px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image17.png";
 newDiv3_Part1.appendChild(img);




 // ************************** Set the propreties of Part2 of the main box*****************//

 
 newDiv3_Part2.style.width = "1334px";
 newDiv3_Part2.style.height = "663px";    
 newDiv3_Part2.style.float = "left";
 newDiv3_Part2.style.backgroundImage.objectFit = "cover";
 newDiv3_Part2.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part2.style.marginTop = "50px";
 newDiv3_Part2.style.paddingRight = "10px";
 newDiv3_Part2.style.boxShadow = "0px 0px 10px 0 white";

 //*****************Create Background Image Part2 of the main box*****************************// 

 const img2 = document.createElement("img");
 img2.src = "images/Image18.png";
 newDiv3_Part2.appendChild(img2);

 // ************************** Set the propreties of Part3 of the main box*****************//

 
 newDiv3_Part3.style.width = "1350px";
 newDiv3_Part3.style.height = "544px"; 
 newDiv3_Part3.style.float = "left"; 
 newDiv3_Part3.style.backgroundImage.objectFit = "cover";
 newDiv3_Part3.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part3.style.paddingLef = "10px"; 
 newDiv3_Part3.style.marginTop = "50px";   
 newDiv3_Part3.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part3 of the main box*****************************// 

 const img3 = document.createElement("img");
 img3.src = "images/Image19.png";
 newDiv3_Part3.appendChild(img3);


  // ************************** Set the propreties of Part4 of the main box*****************//

  
  newDiv3_Part4.style.width = "1350px";
  newDiv3_Part4.style.height = "390px"; 
  newDiv3_Part4.style.float = "left"; 
  newDiv3_Part4.style.backgroundImage.objectFit = "cover";
  newDiv3_Part4.style.backgroundImage.boxSizing = "border-box";
  newDiv3_Part4.style.marginTop = "50px";
  newDiv3_Part4.style.float = "left";     
  newDiv3_Part4.style.boxShadow = "0px 0px 10px 0 white";



  //*****************Create Background Image Part4 of the main box*****************************// 

  const img4 = document.createElement("img");
  img4.src = "images/Image20.png";
  newDiv3_Part4.appendChild(img4);



   // ************************** Set the propreties of Part5 of the main box*****************//

  
   newDiv3_Part5.style.width = "1344px";
   newDiv3_Part5.style.height = "602px"; 
   newDiv3_Part5.style.float = "left"; 
   newDiv3_Part5.style.backgroundImage.objectFit = "cover";
   newDiv3_Part5.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part5.style.marginTop = "50px";
   newDiv3_Part5.style.float = "left";
   newDiv3_Part5.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part5 of the main box*****************************// 

   const img5 = document.createElement("img");
   img5.src = "images/Image21.png";
   newDiv3_Part5.appendChild(img5);



   // ************************** Set the propreties of Part6 of the main box*****************//

  
   newDiv3_Part6.style.width = "1350px";
   newDiv3_Part6.style.height = "573px"; 
   newDiv3_Part6.style.float = "left"; 
   newDiv3_Part6.style.backgroundImage.objectFit = "cover";
   newDiv3_Part6.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part6.style.marginTop = "50px";
   newDiv3_Part6.style.float = "left";
   
   newDiv3_Part6.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part6 of the main box*****************************// 

   const img6 = document.createElement("img");
   img6.src = "images/Image22.png";
   newDiv3_Part6.appendChild(img6);



  
  

 
}



//********************************************************************************* *//

function bigPicture5(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("ANIMATED IMAGE GALLERY");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="550px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";

newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="280px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "710px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);





 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1366px";
 newDiv3_Part1.style.height = "500px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image23.png";
 newDiv3_Part1.appendChild(img);






  
  

 
}


//************************************************************************************* *//


function bigPicture6(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');
   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("E Commerce Web Site");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="500px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";
newDiv.style.paddingLeft = "120px";
newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="280px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "710px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);



// ******************* Create the Part 2 of the main box **********************//

 // create a new div element
 const newDiv3_Part2 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part2 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part2);


// ******************* Create the Part 3 of the main box **********************// 


 // create a new div element
 const newDiv3_Part3 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part3 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part3);


 // ******************* Create the Part 4 of the main box **********************// 


 // create a new div element
 const newDiv3_Part4 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part4 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part4);


 // ******************* Create the Part 5 of the main box **********************// 


 // create a new div element
 const newDiv3_Part5 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part5 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part5);


 // ******************* Create the Part 6 of the main box **********************// 


 // create a new div element
 const newDiv3_Part6 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part6 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part6);


 // ******************* Create the Part 7 of the main box **********************// 


 // create a new div element
 const newDiv3_Part7 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part7 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part7);

 // ******************* Create the Part 8 of the main box **********************// 


 // create a new div element
 const newDiv3_Part8 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part8 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part8);

 



 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1354px";
 newDiv3_Part1.style.height = "154px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image24.png";
 newDiv3_Part1.appendChild(img);




 // ************************** Set the propreties of Part2 of the main box*****************//

 
 newDiv3_Part2.style.width = "1354px";
 newDiv3_Part2.style.height = "500px";    
 newDiv3_Part2.style.float = "left";
 newDiv3_Part2.style.backgroundImage.objectFit = "cover";
 newDiv3_Part2.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part2.style.marginTop = "50px";
 newDiv3_Part2.style.paddingRight = "10px";
 newDiv3_Part2.style.boxShadow = "0px 0px 10px 0 white";

 //*****************Create Background Image Part2 of the main box*****************************// 

 const img2 = document.createElement("img");
 img2.src = "images/Image25.png";
 newDiv3_Part2.appendChild(img2);

 // ************************** Set the propreties of Part3 of the main box*****************//

 
 newDiv3_Part3.style.width = "1355px";
 newDiv3_Part3.style.height = "416px"; 
 newDiv3_Part3.style.float = "left"; 
 newDiv3_Part3.style.backgroundImage.objectFit = "cover";
 newDiv3_Part3.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part3.style.paddingLef = "10px"; 
 newDiv3_Part3.style.marginTop = "50px";   
 newDiv3_Part3.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part3 of the main box*****************************// 

 const img3 = document.createElement("img");
 img3.src = "images/Image26.png";
 newDiv3_Part3.appendChild(img3);


  // ************************** Set the propreties of Part4 of the main box*****************//

  
  newDiv3_Part4.style.width = "1350px";
  newDiv3_Part4.style.height = "455px"; 
  newDiv3_Part4.style.float = "left"; 
  newDiv3_Part4.style.backgroundImage.objectFit = "cover";
  newDiv3_Part4.style.backgroundImage.boxSizing = "border-box";
  newDiv3_Part4.style.marginTop = "50px";
  newDiv3_Part4.style.float = "left";     
  newDiv3_Part4.style.boxShadow = "0px 0px 10px 0 white";



  //*****************Create Background Image Part4 of the main box*****************************// 

  const img4 = document.createElement("img");
  img4.src = "images/Image27.png";
  newDiv3_Part4.appendChild(img4);



   // ************************** Set the propreties of Part5 of the main box*****************//

  
   newDiv3_Part5.style.width = "1355px";
   newDiv3_Part5.style.height = "333px"; 
   newDiv3_Part5.style.float = "left"; 
   newDiv3_Part5.style.backgroundImage.objectFit = "cover";
   newDiv3_Part5.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part5.style.marginTop = "50px";
   newDiv3_Part5.style.float = "left";
   newDiv3_Part5.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part5 of the main box*****************************// 

   const img5 = document.createElement("img");
   img5.src = "images/Image28.png";
   newDiv3_Part5.appendChild(img5);



   // ************************** Set the propreties of Part6 of the main box*****************//

  
   newDiv3_Part6.style.width = "1350px";
   newDiv3_Part6.style.height = "455px"; 
   newDiv3_Part6.style.float = "left"; 
   newDiv3_Part6.style.backgroundImage.objectFit = "cover";
   newDiv3_Part6.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part6.style.marginTop = "50px";
   newDiv3_Part6.style.float = "left";
   
   newDiv3_Part6.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part6 of the main box*****************************// 

   const img6 = document.createElement("img");
   img6.src = "images/Image29.png";
   newDiv3_Part6.appendChild(img6);



   // ************************** Set the propreties of Part7 of the main box*****************//

  
   newDiv3_Part7.style.width = "1350px";
   newDiv3_Part7.style.height = "515px"; 
   newDiv3_Part7.style.float = "left"; 
   newDiv3_Part7.style.backgroundImage.objectFit = "cover";
   newDiv3_Part7.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part7.style.marginTop = "50px";
   newDiv3_Part7.style.float = "left";
   newDiv3_Part7.style.paddingLeftLeft = "10px";
   newDiv3_Part7.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part7 of the main box*****************************// 

   const img7 = document.createElement("img");
   img7.src = "images/Image30.png";
   newDiv3_Part7.appendChild(img7);


   // ************************** Set the propreties of Part8 of the main box*****************//

  
   newDiv3_Part8.style.width = "1350px";
   newDiv3_Part8.style.height = "544px"; 
   newDiv3_Part8.style.float = "left"; 
   newDiv3_Part8.style.backgroundImage.objectFit = "cover";
   newDiv3_Part8.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part8.style.marginTop = "50px";
   newDiv3_Part8.style.float = "left";
   newDiv3_Part8.style.paddingLeftLeft = "10px";
   newDiv3_Part8.style.boxShadow = "0px 0px 10px 0 white";


   //*****************Create Background Image Part8 of the main box*****************************// 

   const img8 = document.createElement("img");
   img8.src = "images/Image31.png";
   newDiv3_Part8.appendChild(img8);


   
  

 
}

//************************************************************************************* *//


function bigPicture7(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Shopping Card");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="250px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";

newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Image Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="480px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "640px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);





 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1366px";
 newDiv3_Part1.style.height = "105px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image32.png";
 newDiv3_Part1.appendChild(img);



 // ******************* Create the Part 2 of the main box **********************//


 // create a new div element
 const newDiv3_Part2 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part2 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part2);





 // ************************** Set the propreties of Part2 of the main box*****************//


 
 newDiv3_Part2.style.width = "1366px";
 newDiv3_Part2.style.height = "630px";    
 newDiv3_Part2.style.backgroundImage.objectFit = "cover";
 newDiv3_Part2.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part2.style.float = "left";
 newDiv3_Part2.style.marginTop = "50px";
 newDiv3_Part2.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part2 of the main box**************************// 

 const img2 = document.createElement("img");
 img2.src = "images/Image33.png";
 newDiv3_Part2.appendChild(img2);





  
  

 
}


//************************************************************************************* *//

function bigPicture8(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Visa Card");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="170px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";

newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Image Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="480px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "640px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);





 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1334px";
 newDiv3_Part1.style.height = "582px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.marginTop = "50px";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image34.png";
 newDiv3_Part1.appendChild(img);



  
  

 
}


//************************************************************************************* *//

function bigPicture9(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Movie App");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="200px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";

newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Image Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="480px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "640px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);





 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1356px";
 newDiv3_Part1.style.height = "378px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.marginTop = "50px";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image35.png";
 newDiv3_Part1.appendChild(img);



 // ******************* Create the Part 2 of the main box **********************//


 // create a new div element
 const newDiv3_Part2 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part2 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part2);





 // ************************** Set the propreties of Part2 of the main box*****************//


 
 newDiv3_Part2.style.width = "1356px";
 newDiv3_Part2.style.height = "608px";    
 newDiv3_Part2.style.backgroundImage.objectFit = "cover";
 newDiv3_Part2.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part2.style.float = "left";
 newDiv3_Part2.style.marginTop = "50px";
 newDiv3_Part2.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part2 of the main box**************************// 

 const img2 = document.createElement("img");
 img2.src = "images/Image36.png";
 newDiv3_Part2.appendChild(img2);


  
  

 
}


//************************************************************************************* *//

function bigPicture10(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Timer App");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="200px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";

newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Image Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="480px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "640px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);





 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1356px";
 newDiv3_Part1.style.height = "605px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.marginTop = "50px";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

  //*****************Create Background Image Part1 of the main box**************************// 

  const img = document.createElement("img");
  img.src = "images/Image37.png";
  newDiv3_Part1.appendChild(img);
 
  

 
}



//************************************************************************************* *//

function bigPicture11(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');

   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Login Form");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="200px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";

newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Image Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="480px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "640px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);





 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1356px";
 newDiv3_Part1.style.height = "605px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.marginTop = "50px";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

  //*****************Create Background Image Part1 of the main box**************************// 

  const img = document.createElement("img");
  img.src = "images/Image38.png";
  newDiv3_Part1.appendChild(img);
 
  

 
}


//*********************************************************************************** *//

function bigPicture12(Text3) {
   
   var Text3 = document.getElementById("Text3");
   var x = document.getElementById("Body");
   var Main_Section = document.getElementById('Main_Section');
   var Work_Experience_Section = document.getElementById('Work_Experience_Section');
   var About_Section = document.getElementById('About_Section');
   var Contact_Section = document.getElementById('Contact_Section');
   var Portfolio_Section = document.getElementById('Portfolio_Section');
   var NavBar = document.getElementById('NavBar'); 
   var Vertical_Line = document.getElementById('Vertical_Line');
   var Vertical_Line2 = document.getElementById('Vertical_Line2');
   var Vertical_Line3 = document.getElementById('Vertical_Line3');
   var Item1 = document.getElementById('Item1');
   var Item2 = document.getElementById('Item2');
   var Item3 = document.getElementById('Item3');
   var Item4 = document.getElementById('Item4');
   var Item5 = document.getElementById('Item5');
   var Item6 = document.getElementById('Item6');
   var Item7 = document.getElementById('Item7');
   var Item8 = document.getElementById('Item8');
   var Item9 = document.getElementById('Item9');
   var Item10 = document.getElementById('Item10');
   var Item11 = document.getElementById('Item11');
   var Item12 = document.getElementById('Item12');
   var Footer = document.getElementById('Footer');
   
   x.style.backgroundColor ="#009688";

   Item1.style.display = "none";
   Item2.style.display = "none";
   Item3.style.display = "none";
   Item4.style.display = "none";
   Item5.style.display = "none";
   Item6.style.display = "none";
   Item7.style.display = "none";
   Item8.style.display = "none";
   Item9.style.display = "none";
   Item10.style.display = "none";
   Item11.style.display = "none";
   Item12.style.display = "none";
   NavBar.style.display = "none";
   Vertical_Line.style.display = "none";
   Vertical_Line2.style.display = "none";
   Vertical_Line3.style.display = "none";
   Main_Section.style.display = "none";
   Work_Experience_Section.style.display = "none";
   About_Section.style.display = "none";
   Contact_Section.style.display = "none";
   Footer.style.display = "none";

   Text3.style.display = "block";

   Portfolio_Section.style.top = "0";
   Portfolio_Section.style.left = "0";   
   Portfolio_Section.style.display = "flex";
   Portfolio_Section.style.flexDirection = "column";      
   Portfolio_Section.style.position = "fixed";
   Portfolio_Section.style.width = "100%";
   Portfolio_Section.style.height = "300px";
  

// ***************** Create The Main Header ****************//



  // create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Portfolio WebSite");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv, currentDiv);

newDiv.style.color = "white";
newDiv.style.backgroundColor ="red"; 
newDiv.style.width ="500px";
newDiv.style.height = "50px";
newDiv.style.fontSize ="40px";
newDiv.style.margin = "auto";
newDiv.style.padding = "auto";
newDiv.style.paddingLeft = "120px";
newDiv.style.marginTop = "70px";
newDiv.style.boxShadow =  "10px 20px 30px red";




// ************************ Create The Second Header *********************// 



// create a new div element
const newDiv2 = document.createElement("div");

// and give it some content
const newContent2 = document.createTextNode("Web Site Gallery");

// add the text node to the newly created div
newDiv2.appendChild(newContent2);

// add the newly created element and its content into the DOM
const currentDiv2 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv2, currentDiv2);


newDiv2.style.width ="280px";
newDiv2.style.height = "50px";
newDiv2.style.marginTop = "100px";   
newDiv2.style.padding = "auto";
newDiv2.style.fontSize = "40px";
newDiv2.style.color = "white";
newDiv2.style.marginLeft = "710px";


// ********************** Create The main Box *************************//


// create a new div element
const newDiv3 = document.createElement("div");   


// add the newly created element and its content into the DOM
const currentDiv3 = document.getElementById("Portfolio_Section");
document.body.insertBefore(newDiv3, currentDiv3);


newDiv3.style.width = "80%";
newDiv3.style.height = "405px";
newDiv3.style.marginTop = "70px";
newDiv3.style.display = "flex";
newDiv3.style.justifyContent = "space-around";
newDiv3.style.flexWrap = "wrap";
newDiv3.style.flexDirection = "row";


// ******************* Create the Part 1 of the main box **********************//


 // create a new div element
 const newDiv3_Part1 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part1 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part1);



// ******************* Create the Part 2 of the main box **********************//

 // create a new div element
 const newDiv3_Part2 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part2 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part2);


// ******************* Create the Part 3 of the main box **********************// 


 // create a new div element
 const newDiv3_Part3 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part3 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part3);


 // ******************* Create the Part 4 of the main box **********************// 


 // create a new div element
 const newDiv3_Part4 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part4 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part4);


 // ******************* Create the Part 5 of the main box **********************// 


 // create a new div element
 const newDiv3_Part5 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part5 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part5);


 // ******************* Create the Part 6 of the main box **********************// 


 // create a new div element
 const newDiv3_Part6 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part6 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part6);


 // ******************* Create the Part 7 of the main box **********************// 


 // create a new div element
 const newDiv3_Part7 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part7 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part7);

 // ******************* Create the Part 8 of the main box **********************// 


 // create a new div element
 const newDiv3_Part8 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part8 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part8);


 // ******************* Create the Part 9 of the main box **********************// 


 // create a new div element
 const newDiv3_Part9 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part9 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part9);


 // ******************* Create the Part 10 of the main box **********************// 


 // create a new div element
 const newDiv3_Part10 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part10 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part10);

 // ******************* Create the Part 11 of the main box **********************// 


 // create a new div element
 const newDiv3_Part11 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part11 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part11);

 // ******************* Create the Part 12 of the main box **********************// 


 // create a new div element
 const newDiv3_Part12 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part12 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part12);

 // ******************* Create the Part 13 of the main box **********************// 


 // create a new div element
 const newDiv3_Part13 = document.createElement("div");   


 // add the newly created element and its content into the DOM
 const currentDiv3_Part13 = document.getElementById("newDiv3");
 newDiv3.appendChild(newDiv3_Part13);
 



 // ************************** Set the propreties of Part1 of the main box*****************//


 
 newDiv3_Part1.style.width = "1332px";
 newDiv3_Part1.style.height = "637px";    
 newDiv3_Part1.style.backgroundImage.objectFit = "cover";
 newDiv3_Part1.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part1.style.float = "left";
 newDiv3_Part1.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part1 of the main box**************************// 

 const img = document.createElement("img");
 img.src = "images/Image39.png";
 newDiv3_Part1.appendChild(img);




 // ************************** Set the propreties of Part2 of the main box*****************//

 
 newDiv3_Part2.style.width = "1333px";
 newDiv3_Part2.style.height = "520px";    
 newDiv3_Part2.style.float = "left";
 newDiv3_Part2.style.backgroundImage.objectFit = "cover";
 newDiv3_Part2.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part2.style.marginTop = "50px";
 newDiv3_Part2.style.paddingRight = "10px";
 newDiv3_Part2.style.boxShadow = "0px 0px 10px 0 white";

 //*****************Create Background Image Part2 of the main box*****************************// 

 const img2 = document.createElement("img");
 img2.src = "images/Image40.png";
 newDiv3_Part2.appendChild(img2);

 // ************************** Set the propreties of Part3 of the main box*****************//

 
 newDiv3_Part3.style.width = "1355px";
 newDiv3_Part3.style.height = "594px"; 
 newDiv3_Part3.style.float = "left"; 
 newDiv3_Part3.style.backgroundImage.objectFit = "cover";
 newDiv3_Part3.style.backgroundImage.boxSizing = "border-box";
 newDiv3_Part3.style.paddingLef = "10px"; 
 newDiv3_Part3.style.marginTop = "50px";   
 newDiv3_Part3.style.boxShadow = "0px 0px 10px 0 white";
 

 //*****************Create Background Image Part3 of the main box*****************************// 

 const img3 = document.createElement("img");
 img3.src = "images/Image41.png";
 newDiv3_Part3.appendChild(img3);


  // ************************** Set the propreties of Part4 of the main box*****************//

  
  newDiv3_Part4.style.width = "1342px";
  newDiv3_Part4.style.height = "520px"; 
  newDiv3_Part4.style.float = "left"; 
  newDiv3_Part4.style.backgroundImage.objectFit = "cover";
  newDiv3_Part4.style.backgroundImage.boxSizing = "border-box";
  newDiv3_Part4.style.marginTop = "50px";
  newDiv3_Part4.style.float = "left";     
  newDiv3_Part4.style.boxShadow = "0px 0px 10px 0 white";



  //*****************Create Background Image Part4 of the main box*****************************// 

  const img4 = document.createElement("img");
  img4.src = "images/Image42.png";
  newDiv3_Part4.appendChild(img4);



   // ************************** Set the propreties of Part5 of the main box*****************//

  
   newDiv3_Part5.style.width = "1350px";
   newDiv3_Part5.style.height = "560px"; 
   newDiv3_Part5.style.float = "left"; 
   newDiv3_Part5.style.backgroundImage.objectFit = "cover";
   newDiv3_Part5.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part5.style.marginTop = "50px";
   newDiv3_Part5.style.float = "left";
   newDiv3_Part5.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part5 of the main box*****************************// 

   const img5 = document.createElement("img");
   img5.src = "images/Image43.png";
   newDiv3_Part5.appendChild(img5);



   // ************************** Set the propreties of Part6 of the main box*****************//

  
   newDiv3_Part6.style.width = "1350px";
   newDiv3_Part6.style.height = "240px"; 
   newDiv3_Part6.style.float = "left"; 
   newDiv3_Part6.style.backgroundImage.objectFit = "cover";
   newDiv3_Part6.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part6.style.marginTop = "50px";
   newDiv3_Part6.style.float = "left";
   
   newDiv3_Part6.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part6 of the main box*****************************// 

   const img6 = document.createElement("img");
   img6.src = "images/Image44.png";
   newDiv3_Part6.appendChild(img6);



   // ************************** Set the propreties of Part7 of the main box*****************//

  
   newDiv3_Part7.style.width = "1342px";
   newDiv3_Part7.style.height = "260px"; 
   newDiv3_Part7.style.float = "left"; 
   newDiv3_Part7.style.backgroundImage.objectFit = "cover";
   newDiv3_Part7.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part7.style.marginTop = "50px";
   newDiv3_Part7.style.float = "left";
   newDiv3_Part7.style.paddingLeftLeft = "10px";
   newDiv3_Part7.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part7 of the main box*****************************// 

   const img7 = document.createElement("img");
   img7.src = "images/Image45.png";
   newDiv3_Part7.appendChild(img7);


   // ************************** Set the propreties of Part8 of the main box*****************//

  
   newDiv3_Part8.style.width = "1342px";
   newDiv3_Part8.style.height = "200px"; 
   newDiv3_Part8.style.float = "left"; 
   newDiv3_Part8.style.backgroundImage.objectFit = "cover";
   newDiv3_Part8.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part8.style.marginTop = "50px";
   newDiv3_Part8.style.float = "left";
   newDiv3_Part8.style.paddingLeftLeft = "10px";
   newDiv3_Part8.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part8 of the main box*****************************// 

   const img8 = document.createElement("img");
   img8.src = "images/Image46.png";
   newDiv3_Part8.appendChild(img7);


   // ************************** Set the propreties of Part9 of the main box*****************//

  
   newDiv3_Part9.style.width = "1350px";
   newDiv3_Part9.style.height = "404px"; 
   newDiv3_Part9.style.float = "left"; 
   newDiv3_Part9.style.backgroundImage.objectFit = "cover";
   newDiv3_Part9.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part9.style.marginTop = "50px";
   newDiv3_Part9.style.float = "left";
   newDiv3_Part9.style.paddingLeftLeft = "10px";
   newDiv3_Part9.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part9 of the main box*****************************// 

   const img9 = document.createElement("img");
   img9.src = "images/Image47.png";
   newDiv3_Part9.appendChild(img9);

   
   // ************************** Set the propreties of Part10 of the main box*****************//

  
   newDiv3_Part10.style.width = "1347px";
   newDiv3_Part10.style.height = "401px"; 
   newDiv3_Part10.style.float = "left"; 
   newDiv3_Part10.style.backgroundImage.objectFit = "cover";
   newDiv3_Part10.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part10.style.marginTop = "50px";
   newDiv3_Part10.style.float = "left";
   newDiv3_Part10.style.paddingLeftLeft = "10px";
   newDiv3_Part10.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part10 of the main box*****************************// 

   const img10 = document.createElement("img");
   img10.src = "images/Image48.png";
   newDiv3_Part10.appendChild(img10);


   // ************************** Set the propreties of Part11 of the main box*****************//

  
   newDiv3_Part11.style.width = "1345px";
   newDiv3_Part11.style.height = "396px"; 
   newDiv3_Part11.style.float = "left"; 
   newDiv3_Part11.style.backgroundImage.objectFit = "cover";
   newDiv3_Part11.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part11.style.marginTop = "50px";
   newDiv3_Part11.style.float = "left";
   newDiv3_Part11.style.paddingLeftLeft = "10px";
   newDiv3_Part11.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part11 of the main box*****************************// 

   const img11 = document.createElement("img");
   img11.src = "images/Image49.png";
   newDiv3_Part11.appendChild(img11);

   // ************************** Set the propreties of Part12 of the main box*****************//

  
   newDiv3_Part12.style.width = "1350px";
   newDiv3_Part12.style.height = "400px"; 
   newDiv3_Part12.style.float = "left"; 
   newDiv3_Part12.style.backgroundImage.objectFit = "cover";
   newDiv3_Part12.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part12.style.marginTop = "50px";
   newDiv3_Part12.style.float = "left";
   newDiv3_Part12.style.paddingLeftLeft = "10px";
   newDiv3_Part12.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part12 of the main box*****************************// 

   const img12 = document.createElement("img");
   img12.src = "images/Image50.png";
   newDiv3_Part12.appendChild(img12);


   // ************************** Set the propreties of Part13 of the main box*****************//

  
   newDiv3_Part13.style.width = "1350px";
   newDiv3_Part13.style.height = "374px"; 
   newDiv3_Part13.style.float = "left"; 
   newDiv3_Part13.style.backgroundImage.objectFit = "cover";
   newDiv3_Part13.style.backgroundImage.boxSizing = "border-box";
   newDiv3_Part13.style.marginTop = "50px";
   newDiv3_Part13.style.float = "left";
   newDiv3_Part13.style.paddingLeftLeft = "10px";
   newDiv3_Part13.style.boxShadow = "0px 0px 10px 0 white";

   //*****************Create Background Image Part13 of the main box*****************************// 

   const img13 = document.createElement("img");
   img13.src = "images/Image51.png";
   newDiv3_Part13.appendChild(img13);


 
}


 //********************************************************************************** *//