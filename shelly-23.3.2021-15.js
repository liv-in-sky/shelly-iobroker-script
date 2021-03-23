  //@liv-in-sky 2021  23.3.-15:40

 // DAS WIDGET IN DER VIS
 // das Standard html-Widget wird genutzt in der VIS - dazu den DP javascript.x.Tabellen@Liv.TestTabelleVIS.HTMLTableVis als binding angeben d.h.
 // im html-teil des widgets wird dier daten punkt in geschweiften klammern angegeben z.B. {javascript.0.Tabellen@Liv.TestTabelleVIS.HTMLTableVis}

 // @ts-ignore
 let braucheEinVISWidget=true;                          // bei true wird ein html-tabelle in einen dp geschrieben - siehe nächste zeile
 let  dpVIS="ShellyTabelleVIS"                            // WICHTIG wenn braucheEinVISWidget auf true gesetzt !!  Ist der Name zum datenpunkt anlegen
 let braucheEinJSON=false;                               // bei true wird ein html-tabelle in einen dp geschrieben - siehe nächste zeile
 let  dpJSON="ShellyTabelleJSON"                          // WICHTIG wenn braucheEinJSON auf true gesetzt !!   Ist der Name zum datenpunkt anlegen
 let mySchedule="  */15 * * * * ";                         // jede minute  

 //ZUSÄTZLICH VARIABLEN

 let sortierenEIN=true;
 let farbeInaktiverShelly="#5590CA"
 let welcheSortierung=2;          // je nach spalte von 0 bis 6
 let geteiteVersionsAnzeige=true; // version in spalte 7 wird 2-zeilig
 const schalterUmrahmung="0"                              //wenn überschriften buttons sind , den rahmen mit 0 wegmachen 
 let mitSearch=true;
 let ipButtonColorONBkground="#CBCBCA"; 
 let powerButtonColorONSchrift="black";
  let ipButtonColorONBkground2="#5590CA"; 
 let powerButtonColorONSchrift2="white";

 let flexboxView=false;   // startet im flexbox modus - keine tabelle


 //---------------------------------------

//HIER DIE SPALTEN ANZAHL DEFINIEREN - jede Spalte einen Wert - in diesem Beispiel sind es 3 - es MÜSSEN in allen Arrays die GLEICHE Anzahl für die Werte sein
let htmlFeld=        ["NAME","IP","ONLINE","UPTIME","RSSI","ID","VERSION"];              // GLEICHE ANZAHL !! NAME/ÜBERSCHRIFT DER SPALTE
let val=             ["true","true","true","true","false","true","true"];                 // GLEICHE ANZAHL !! SPALTE ANZEIGEN/AUSBLENDEN UND HIER SIND DIE  WERTE, DIE IN DER SCHLEIFE GEFILTERET WERDEN -  jeder val[x] muss unten in der schleife gesetzt werden !!
let Feld1lAlign=     ["left","center","center","center","center","left","left"];         // GLEICHE ANZAHL !! AUSRICHTUNG IN DER SPALTE
let htmlSpalte1Weite=["0px","0px","0px","0px","0px","0px","0px"];                        // GLEICHE ANZAHL !! BREITE DER SPALTE, wenn "0px" auto
let schalterInSpaltenUeberschrift=[true,true,true,true,true,true,true,true];                  // WENN BUTTONS INSTALLIERT WERDEN - sonst false
let symbolSchalter=              ["na","&check;","&cross;"];        //ONLINE SYMBOLE         // SYMBOLE DER BUTTONS - standardmäßig sind die spaltennamen (htmlFeld) genutzt - werden im standard nicht genutzt
//-----------------------------------

//Symbole für Tabelle z.b.: ⚪  ⚫ ⭕  🔴 🔵 ⏱ 💀 👍 👎 📑 💲 👀 🔹 ✅ ❌ ⚠️ mehr: https://emojiterra.com/de/ oder https://unicode-table.com/de/html-entities/

//hier werden die styles für die tabelle definiert
//ÜBERSCHRIFT ÜBER TABELLE
const htmlUberschrift=true;                             // mit Überschrift über der tabelle
const htmlSignature=true;                               // anstatt der Überscghrift eine signature: - kleiner - anliegend
const htmlFeldUeber='Shelly Übersicht';                // für Überschrift und Signature falls htmlUberschrift und htmlSignature ist true
const htmlFarbUber="white";                              // Farbe der Überschrift
const htmlSchriftWeite="normal";                         // bold, normal - Fettschrift für Überschrift
const htmlUEberFontGroesse="18px";                       // schriftgröße überschrift
//SEITENLEISTE
const ichWillSeitenLeiste=true;                          // links einblenden einer Seitenleiste
const nameSeitenLeiste="SHELLY"
const breiteSeitenleiste=35;
const schriftGroesseSeitenleiste=18;
const abstandSeitentextVonOben=4;
const htmlFarbSeiteSchrift="white";
const htmlBackgroundFarbeSeitenliste="blue";
//BUTTON ÜBERSCHRIFT
const htmlBackgroundButtonUeberschrift="transparent";
//SUCHE
let bkgroundSearch=3;                                    //   hintergrund für suche-ergebnis und flexboxen    // 1: carbon; 2: iobroker; 3: colored bubbles;  4: gradient farben von htmlFarbTableColorGradient1; 5: gradient farben wie farbeUngeradeZeilen; 6: heller hintergrund
const sucheEin=true;
const sucheHoehe=25;
//MEHRERE TABELLEN NEBENEINANDER
let mehrfachTabelle=1;                                   // bis zu 3 Tabellen werden nebeneinander geschrieben-  verkürzt das Ganze, dafür etwas breiter - MÖGLICH 1,2,3 !!!
const trennungsLinie=1;                                // extra trennungslinie bei mehrfachtabellen - evtl auf 0 stellen, wnn htmlRahmenLinien auf none sind
const farbetrennungsLinie="#5590CA";                     // bei mehreren Tabellen nebeneinander wird ein Strich zw. den Tabellen gezogen
const htmlFarbTableColorUber="white"                     // Spalten-Überschrift in der tabelle - für die einzelnen Spalten //"#BDBDBD"; 
const htmlFarbZweiteTabelle="white";                     // Farbe der Spalten-Überschrift bei jeder 2.ten Tabelle        
//ÜBERSCHRIFT SPALTEN - OBERSTE ZEILE IN TAB
const UeberSchriftHoehe=40;                            // Überschrift bekommt mehr Raum - darunter und darüber - Zellenhöhe
const LinieUnterUeberschrift="1";                        // Liniehoehe nur unter Spaltenüberschrift  
const farbeLinieUnterUeberschrift="blue";               // LinienFarbe unter Spaltenüberschrift
const groesseUeberschrift=16; 
const UeberschriftStyle="normal"                         // möglich "bold"
const UeberschriftSpalten=true;                          // ein- oder ausblenden der spatlen-überschriften
//GANZE TABELLE
const abstandZelle="7";                                  // legt den abstand in den zellen zum rahmen fest
const zeilenAbstand=40;                                   // legt den abstand zwischen den zeilen fest
const farbeUngeradeZeilen="#2F2F2F";                     // Farbe für ungerade Zeilenanzahl - Hintergrund der Spaltenüberschrift bleibt bei htmlFarbTableColorGradient1/2 - bei "transparent" gewinnt htmlFarbTableColorGradient1
const farbeGeradeZeilen="#3c3c3c"//"#151515";            // Farbe für gerade Zeilenanzahl - Hintergrund der Spaltenüberschrift bleibt bei htmlFarbTableColorGradient1/2   - bei "transparent" gewinnt htmlFarbTableColorGradient2
let weite="1000";                                        // Weite der Tabelle - verhindert das dynamische breiter werden, wenn werte unterschiedliche werte haben
let hoeheTabelle=387;
const zentriert=true;                                    // ganze tabelle zentriert im html Widget - muss in pixel angegeben werden oder "auto"
const backgroundAll="#000000";                           // Hintergrund für die ganze Seite - für direkten aufruf oder iqontrol sichtber - keine auswirkung auf vis-widget
const htmlSchriftart="Ubuntu-Regular"                    // "Jura-DemiBold"   //"RobotoCondensed-Bold"   //"Helvetica"; .....
const htmlSchriftgroesse="16px";                         // schriftgröße in den zellen
const rahmenBreite="1px";                                //mit 0 ist äußerer rahmen weg
//FELDER UND RAHMEN
const htmlFarbFelderschrift="#CBCBCA";                   // SchriftFarbe der Felder
const htmlFarbFelderschrift2="#CBCBCA";                  // SchriftFarbe der Felder für jede 2te Tabelle
const htmlGragient=[150,30,70];                          // einstellung des gradienten
const htmlFarbTableColorGradient1="#265686";             // Gradient - Hintergrund der Tabelle - Verlauffarbe
const htmlFarbTableColorGradient2="#5590CA";              // Gradient - Hintergrund der Tabelle - ist dieser Wert gleich Gradient1 gibt es keinen verlauf  
const htmlFarbTableBorderColor="grey";                   // Farbe des Rahmen - ist dieser gleich den gradienten, sind die rahmen unsichtbar
let htmlRahmenLinien="none";                             // Format für Rahmen: MÖGLICH: "none" oder "all" oder "cols" oder "rows"


// AB HIER NICHTS  ÄNDERN -------------------------------------------------------------------------------------------------
// AB HIER NICHTS  ÄNDERN -------------------------------------------------------------------------------------------------
// AB HIER NICHTS  ÄNDERN ---------------------------------erst wieder ab Zeile 134----------------------------------------

let borderHelpBottum;
let borderHelpRight;
let htmlcenterHelp;
let htmlcenterHelp2;

let trHelperClass=" ";
let htmlTabUeber4;
let htmlTabUeber2;
let htmlTabUeber2_1;
let searchMe;
let htmlSeitenleiste;
let htmlTabStyle;
let htmlTabUeber3="";       //wird in function writeHTML gesetzt - wegen umschalten views

let buttonScript; //scripte am ende einfügen

let bkgDiv;   //background scroll-div
let scrollBar; //dünne scrollbar

let aktiv=0; let inaktiv=0;
let myButtonUeberschrift; //not in use
let htmlZentriert;   //css
let einmalAbstand; //seitenleiste

if(String(htmlRahmenLinien)=="rows") {borderHelpBottum=1;borderHelpRight=0;}
if(String(htmlRahmenLinien)=="cols") {borderHelpBottum=0;borderHelpRight=1;}
if(String(htmlRahmenLinien)=="none") {borderHelpBottum=0;borderHelpRight=0;}
if(String(htmlRahmenLinien)=="all")  {borderHelpBottum=1;borderHelpRight=1;}
zentriert ? htmlcenterHelp="auto" : htmlcenterHelp="left";
zentriert ? htmlcenterHelp2="center" : htmlcenterHelp2="left";

if(weite=="auto") {weite="100%"} else {weite=String(Number(weite)*mehrfachTabelle)}
 
  makeMyCSS();
  makeMySearch_Seitenleiste();
  makeMyVisScripte();

//------------------------------------------------------
if ( !(val.length == Feld1lAlign.length && htmlSpalte1Weite.length == htmlFeld.length && val.length == htmlFeld.length) || (mehrfachTabelle<1 || mehrfachTabelle>3) ) 
      { log("Anzahle der Definitions Arrays sind ungleich ODER mehrfachTabelle ist falsch - Script wurde gestoppt !!!","error");
          // @ts-ignore
          stopScript();}

let langeGesamt=0; 
let htmlTabUeber="";
let htmlOut="";
let mix;
let counter;
let makeJsonWidget;
let myObject=[];

 let mitAlphabet=false;

needDP();

 function writeHTML(){
     aktiv=0;  inaktiv=0;
 let seitenLeistenTest="";
 //log(flexboxView.toString())
 flexboxView ? htmlTabUeber3=`</tr></thead><tbody></tbody></table><div class="divFlexBoxen${dpVIS}">` :
              htmlTabUeber3=`</tr></thead><tbody class="scrollContent${dpVIS}" > `;
 let htmlTabUeber1=htmlTabUeber4
 myObject=[]
let helperLeerzeile=""
let makeJsonWidget=[];
htmlOut="";
counter=-1;

 //--------------------------------------------------------------------------------------------------------------------------------------------------
 //---------hier kommt eure schleife rein counter++, tabelleBind() und tabelleFinish() müssen so integriert bleiben !!!------------------------------
 //---------alle val[x] werte müssen von euch bestimmt werden - val[0],val[1],val[2] !!!-------------------------------------------------------------
 //--------------------------------------------------------------------------------------------------------------------------------------------------

let valueuptime

$('shelly.*.*.id').each(function(id, i) {           // hier eigene schleife definieren und den wert counter++ nicht vergessen  !!!
      
        val[0]=val[1]=val[1]=val[2]=val[3]=val[4]=val[5]=val[6]= "missingState";
 // log(val[3])
           var ida = id.split('.');
      
        //   if(existsState(id) && existsState(id.replace("alive","uptime"))) {

         if( existsState(id.replace("id","name")) ) { if (getState(id.replace("id","name")).val!="" && getState(id.replace("id","name")).val!=null && getState(id.replace("id","name")).val!=undefined) { 
                                                                     val[0]=getState(id.replace("id","name")).val} 
                                                                     else{  val[0]=getObject(ida[0]+"."+ida[1]+"."+ida[2]).common.name.replace("Device ","") }} 
                                                                 else{val[0]=getObject(ida[0]+"."+ida[1]+"."+ida[2]).common.name.replace("Device ","")} //       " --- ";}"."+ida[3]+"."+ida[4]
          
          if (existsState(id.replace("id","hostname"))) {getState(id.replace("id","hostname")).val!=null &&  getState(id.replace("id","hostname")).val!="" && getState(id.replace("id","hostname")).val!=undefined ?
                                                            val[1]=getState(id.replace("id","hostname")).val : val[1]="noHostname"}
          if (existsState(id.replace("id","online"))) { getState(id.replace("id","online")).val!=null &&  getState(id.replace("id","online")).val!="" && getState(id.replace("id","online")).val!=undefined ?
                                                            val[2]=getState(id.replace("online","online")).val : val[2]="noValue"}
          if (existsState(id.replace("id","uptime"))) { if(getState(id.replace("id","uptime")).val!=null &&  getState(id.replace("id","uptime")).val!="" && getState(id.replace("id","uptime")).val!=undefined ) {
                                                            val[3]=getState(id.replace("id","uptime")).val;
                                                            valueuptime=(Number(val[3].replace(/.*?([0-9][0-9]?)\:.*/,"$1"))*60*60)+
                                                            (Number(val[3].replace(/.*?[0-9][0-9]?\:([0-9][0-9]?)\:.*/,"$1"))*60)+
                                                            (Number(val[3].replace(/.*?[0-9][0-9]?\:[0-9][0-9]?\:([0-9][0-9]?).*/,"$1")))
                                                            if( !val[3].replace(/^(.+)D.+/,"$1").includes(":")) valueuptime=valueuptime+Number(val[3].replace(/^(.+)D.+/,"$1"))*24*60*60} else{val[3]="noUptime"}}
                                                            // log(valueuptime.toString()+"  ----" +val[3].replace(/^(.+)D.+/,"$1"))

          if (existsState(id.replace("id","rssi"))) {getState(id.replace("id","rssi")).val!=null &&  getState(id.replace("id","rssi")).val!="" && getState(id.replace("id","rssi")).val!=undefined ?
                                                         val[4]=getState(id.replace("id","rssi")).val: val[4]="noRSSI"}
          if (existsState(id.replace("id","id"))) {  getState(id.replace("id","id")).val!=null &&  getState(id.replace("id","id")).val!="" && getState(id.replace("id","id")).val!=undefined ?
                                                         val[5]=getState(id.replace("id","id")).val: val[5]="noID"}
 
          if (existsState(id.replace("id","version"))) {getState(id.replace("id","version")).val!=null &&  getState(id.replace("id","version")).val!="" && getState(id.replace("id","version")).val!=undefined ?
                                                           val[6]=getState(id.replace("id","version")).val: val[6]="noVersion"}              
      

         myObject.push({                "value0" : val[0],            //  "INSTANCE"
                                        "value1" : val[1],            //  "SINCE"
                                        "value2" : val[2],            //  "STATUS"
                                        "value3" : val[3],            //  "INSTANCE"
                                        "value4" : val[4],            //  "SINCE"
                                        "value5" : val[5],
                                        "value6":  val[6],
                                        "valueuptime": valueuptime
                                           //   ID
                                                        })
                
           makeJsonWidget.push({        [htmlFeld[0]] : val[0],  //  "INSTANCE"
                                        [htmlFeld[1]] : val[1],  //  "SINCE"
                                        [htmlFeld[2]] : val[2],   //  "STATUS"
                                        "vallly"      : getState(id).val
                                                        })  
         
           
          
                                                  // diese function muss als letztes in der eigenen schleife aufgerufen werden
    });                                            // Schleifen Ende - je nach schleifenart muss hier etwas geändert werden !!!!!!!!!

   // Sortierungen---------------------------------------------------------
   //welcheSortierung=3
   
  
   if( sortierenEIN && (welcheSortierung==3 || welcheSortierung==4 || welcheSortierung==1)    ) {
              if(welcheSortierung==3) myObject.sort(function (alpha, beta) { return  Number(beta["value4"]) -Number(alpha["value4"]);   }); 
              if(welcheSortierung==4) myObject.sort(function (alpha, beta) { /*log(beta.valueuptime+" --" +alpha.valueuptime);*/ return  beta.valueuptime -alpha.valueuptime;   });
              if(welcheSortierung==1)   myObject.sort( function( a, b )   {
	                                      	a = a["value1"].split( '.' );
	                                      	b = b["value1"].split( '.' );
	                                    	for( var i = 0; i < a.length; i++ )	{
		                                 	if( ( a[i] = parseInt( a[i] ) ) < ( b[i] = parseInt( b[i] ) ) )
		                         		return -1;	else if( a[i] > b[i] )
		                            	return 1;}  	return 0;} );                                      

              } else {
     switch (welcheSortierung) {
        case 0: sortMe("alpha","value0");break;  
        case 1: break;
        case 2: sortMe("bool","value2");break;  
        case 3: break;  
        case 4: break;  
        case 5: sortMe("alpha","value5");break; 
        case 6: sortMe("alpha","value6");break;
     }   }

    for(let zz=0;zz<myObject.length;zz++){

  // Unterüberschften ------------------------------------------------------       
         if (mitAlphabet){
           if( myObject[zz].value0[0]!=helperLeerzeile){ tabelleAusbessern();
                                                         counter=-1;  for(let ic=0;ic<mehrfachTabelle;ic++ ) { for (let tt=0 ;tt<val.length;tt++) 
                                                                                                                   { tt==0 && ic==0 ? val[tt]=(myObject[zz].value0[0]).toUpperCase() : val[tt]="&ensp;"
                                                                                                                   }   
                                                                                                               counter++;tabelleBind();langeGesamt++; }
           helperLeerzeile=myObject[zz].value0[0] } ; sortierenEIN=false;}

  // Zuteilung der Tabellenspalten-------------------------------------------

     val[0]=myObject[zz].value0;
     val[1]=myObject[zz].value1; // log(typeof val[2])
      myObject[zz].value2!="noValue" && myObject[zz].value4 !="missingState"  ?  val[2]=myObject[zz].value2 : myObject[zz].value2=false;
     myObject[zz].value2 ? val[1]= `<a href="http://${val[1]}" target="_blank"><button style="border:0px solid\; text-align:center;  border-radius: 5px; background: ${ipButtonColorONBkground}\; color: ${powerButtonColorONSchrift}; font-size :75%; ">${val[1]}</button> </a>`:
              val[1]= `<a href="http://${val[1]}" target="_blank"><button style="border:0px solid\; text-align:center;  border-radius: 5px; background: ${ipButtonColorONBkground2}\; color: ${powerButtonColorONSchrift2}; font-size :75%; ">${val[1]}</button> </a>`

    
     let regH=myObject[zz].value3.trim().replace(/^(.+)[C-E].+?$/,"$1 d")
     if(regH.includes(":")) regH="";
     //log(myObject[zz].value3.replace(reg,"$1 d"))
     if( myObject[zz].value3!="noUptime" && myObject[zz].value3 !="missingState" ) {geteiteVersionsAnzeige ? val[3]=( (myObject[zz].value3.replace(/.+D(.+)/,"$1"))+"</br>"+regH)  :  val[3]=myObject[zz].value3.replace(/(.+D)(.*)/,"$2 +$1");} else {val[3]="noUptime"}
     myObject[zz].value4!="noRSSI" && myObject[zz].value4 !="missingState"  ?  val[4]=myObject[zz].value4+" dB" : val[4]="noRSSI"
     myObject[zz].value5!="noID" && myObject[zz].value5 !="missingState"  ? val[5]=myObject[zz].value5.replace(/.helly(.+)/,"$1") : val[5]="shelly ?";
     geteiteVersionsAnzeige ? val[6]=myObject[zz].value6.replace(/^(.+?)\/(.+)/,"$1</br>$2")  : val[6]=myObject[zz].value6;  
     

     
    if (!myObject[zz].value2) {val[2]=symbolSchalter[2];inaktiv++}
     if (myObject[zz].value2)  {val[2]=symbolSchalter[1];aktiv++}
    //  if(getState("javascript." + instance +".Tabellen@Liv."+dpVIS+".Spalte2").val) { val[2]=myObject[zz].value2} 
     if (!myObject[zz].value2) {     val[0]="<font color=\""+farbeInaktiverShelly +"\">"+val[0]+"</font>";
                                    val[1]="<font color=\""+farbeInaktiverShelly +"\">"+val[1]+"</font>";
                                    val[2]="<font color=\""+farbeInaktiverShelly +"\">"+val[2]+"</font>";
                                    val[3]="<font color=\""+farbeInaktiverShelly +"\">"+val[3]+"</font>";
                                    val[4]="<font color=\""+farbeInaktiverShelly +"\">"+val[4]+"</font>";
                                    val[5]="<font color=\""+farbeInaktiverShelly +"\">"+val[5]+"</font>";
                                    val[6]="<font color=\""+farbeInaktiverShelly +"\">"+val[6]+"</font>";

                               }  
      counter++;                                       // SEHR WICHTIG - MUSS IN JEDER SCHLEIFE INTEGRIERT SEIN
     flexboxView ? flexboxBind() : tabelleBind();                                   // HIER NICHTS ÄNDERN : HIER WERDEN DIE DATEN DER SCHLEIFE ZUSAMMENGESETZT  
      langeGesamt++;                                   // WICHTIG Seitenleiste
    }
    

 //-------------------------------------------------------------------------------------------------------------------------------------------------
 //--------------------------------------------------Ende der schleife------------------------------------------------------------------------------
 //-------------------------------------------------------------------------------------------------------------------------------------------------

 
    htmlTabUeber2=""
   
 //SpaltenÜberschrift
for (let ue=0;ue<htmlSpalte1Weite.length;ue++) { if (!schalterInSpaltenUeberschrift[ue] ) { 
                    htmlTabUeber2=htmlTabUeber2.concat("<td  style=\"color:"+htmlFarbTableColorUber+"\">"+htmlFeld[ue]+"</td>")} 
                    else {let valButton="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte"+ue;
                     if(ue==htmlSpalte1Weite.length-1) {htmlTabUeber2=htmlTabUeber2.concat("<th class=\"myTHclass"+dpVIS+" toDel"+dpVIS+"\" >"+
                                                                   "<button class=\"myButt"+dpVIS+"\" style=\" border-radius: 4px; border:"+schalterUmrahmung+"px solid; background-color\: "+htmlBackgroundButtonUeberschrift+"\; color: "
                                                                   +htmlFarbTableColorUber+"; font-family: "+htmlSchriftart+"; font-size :"+groesseUeberschrift+"px; text\-align:left\" value=\"toggle\" onclick=\"setOnOtherValue\(\'"+valButton+"\')\">"
                                                                   +htmlFeld[ue]+"</button>"+" <font style=\"; font-weight: normal; font-size :"+groesseUeberschrift+"; color: "+htmlFarbTableColorUber+"; font-family: "+htmlSchriftart+";\" > &ensp;&ensp;&ensp;&ensp;("+aktiv+"\/"+(aktiv+inaktiv)+")</th>")} else{
                                        htmlTabUeber2=htmlTabUeber2.concat("<th class=\"myTHclass"+dpVIS+" toDel"+dpVIS+"\">"+""
                                                                    +"<button class=\"myButt"+dpVIS+"\" style\=\" border-radius: 4px; border:"+schalterUmrahmung+"px solid; background-color\: "+htmlBackgroundButtonUeberschrift+"\; color: "
                                                                    +htmlFarbTableColorUber+"; font-family: "+htmlSchriftart+"; font-size :"+groesseUeberschrift+"px; text-align:left\" value=\"toggle\" onclick=\"setOnOtherValue\(\'"+valButton+"\')\">"
                                                                    +htmlFeld[ue]+"</button></th>")} } //symbolSchalter[ue]   
                       }
 
//SpaltenÜberschrift bei mehrfachtabelle
 
 if (!flexboxView){ htmlTabUeber2_1=""
for (let ue=0;ue<htmlSpalte1Weite.length;ue++) { let valButton="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte"+ue;
    if(ue==htmlSpalte1Weite.length) {htmlTabUeber2_1=htmlTabUeber2_1.concat("<th class=\"myTHclass"+dpVIS+" toDel"+dpVIS+"\" >"+""
                                                                    +"<button class=\"myButt"+dpVIS+"\" style\=\" border-radius: 4px; border:"+schalterUmrahmung+"px solid; background-color\: "+htmlBackgroundButtonUeberschrift+"; color: "
                                                                    +htmlFarbTableColorUber+"; font-family: "+htmlSchriftart+"; font-size :"+groesseUeberschrift+"px; text-align:left\" value=\"toggle\" onclick=\"setOnOtherValue\(\'"+valButton+"\')\">"
                                                                    +htmlFeld[ue]+"</button></th>")}
    else{ if(ue==0){htmlTabUeber2_1=htmlTabUeber2_1.concat("<th class=\"myTHclass"+dpVIS+" toDel"+dpVIS+"\" >"+""
                                                                    +"<button class=\"myButt"+dpVIS+"\" style\=\" border-radius: 4px; border:"+schalterUmrahmung+"px solid; background-color\: "+htmlBackgroundButtonUeberschrift+"; color: "
                                                                    +htmlFarbTableColorUber+"; font-family: "+htmlSchriftart+"; font-size :"+groesseUeberschrift+"px; text-align:left\" value=\"toggle\" onclick=\"setOnOtherValue\(\'"+valButton+"\')\">"
                                                                    +htmlFeld[ue]+"</button></th>")


    } else{
     htmlTabUeber2_1=htmlTabUeber2_1.concat("<th class=\"myTHclass"+dpVIS+" toDel"+dpVIS+"\" >"+""
                                                                    +"<button class=\"myButt"+dpVIS+"\" style\=\" border-radius: 4px; border:"+schalterUmrahmung+"px solid; background-color\: "+htmlBackgroundButtonUeberschrift+"; color: "
                                                                    +htmlFarbTableColorUber+"; font-family: "+htmlSchriftart+"; font-size :"+groesseUeberschrift+"px; text-align:left\" value=\"toggle\" onclick=\"setOnOtherValue\(\'"+valButton+"\')\">"
                                                                    +htmlFeld[ue]+"</button></th>")}}  } 

 }else { htmlTabUeber2_1="";for (let ue=0;ue<htmlSpalte1Weite.length;ue++) { htmlTabUeber2_1=htmlTabUeber2_1.concat("<th class=\"myTHclass"+dpVIS+" toDel"+dpVIS+" emptyFlex2_1"+dpVIS+"\">"+htmlFeld[ue]+"</th>")}
     
 /*    for (let ue=0;ue<htmlSpalte1Weite.length;ue++) { 
     htmlTabUeber2_1=htmlTabUeber2_1.concat("<th class=\"myTHclass"+dpVIS+" toDel"+dpVIS+"\" >"+""
                                                                    +"<button class=\"myButt"+dpVIS+"\" style\=\" border-radius: 4px; border:"+schalterUmrahmung+"px solid; background-color\: "+htmlBackgroundButtonUeberschrift+"; color: "
                                                                    +htmlFarbTableColorUber+"; font-family: "+htmlSchriftart+"; font-size :"+groesseUeberschrift+"px; text-align:left\" value=\"toggle\" onclick=\"setOnOtherValue\(\'"+valButton+"\')\">"
                                                                    +htmlFeld[ue]+"</button></th>")}*/
 }                                                                  
                                                                    

  htmlTabUeber="";

  switch (mehrfachTabelle) { 
    case 1: htmlTabUeber=htmlTabUeber1+htmlTabUeber2+htmlTabUeber3;  break;
    case 2: htmlTabUeber=htmlTabUeber1+htmlTabUeber2+htmlTabUeber2_1+htmlTabUeber3; break;
    case 3: htmlTabUeber=htmlTabUeber1+htmlTabUeber2+htmlTabUeber2_1+htmlTabUeber2_1+htmlTabUeber3; break;
    case 4: htmlTabUeber=htmlTabUeber1+htmlTabUeber2+htmlTabUeber2_1+htmlTabUeber2+htmlTabUeber2_1+htmlTabUeber3; break;
   };   
   if (!UeberschriftSpalten) {htmlTabUeber=""}

    flexboxView ? flexboxFinish() :  tabelleFinish(); 
       if (braucheEinJSON ) {setStateDelayed("javascript." + instance + ".Tabellen@Liv."+dpVIS+".JSONVis",JSON.stringify(makeJsonWidget),1000 )}
      
} // function ende
 
 //MAIN:
  
schedule(mySchedule,  function () { 
  writeHTML();
 // if (braucheEinFile) {writeFile(home, path ,htmlOut, function (error) { /* log('file written');*/  });}
 }); 
 setTimeout(function () {writeHTML();  }, 2050);                                 

  function tabelleBind(){
   
    switch (mehrfachTabelle) { 

    case 1: if(counter%2==0)   {htmlOut=htmlOut+"<tr class=\"myclasstr_gerade"+dpVIS+" \">";
                                for(let u=0;u<val.length;u++){ htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\">"+val[u]+"</td>"); // style=\"width:"+htmlSpalte1Weite[u]+"\" 
                                                             }  htmlOut=htmlOut.concat("</tr>");   break;
 
                                } else   {htmlOut=htmlOut+"<tr class=\"myclasstr_ungerade"+dpVIS+" \">";
                                          for(let u=0;u<val.length;u++){ htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\">"+val[u]+"</td>"); //style=\"width:"+htmlSpalte1Weite[u]+"\" 
                                                                       }  htmlOut=htmlOut.concat("</tr>");   break;
                                }
    
    case 2: if(counter%4==0){  if(counter%2==0)  {htmlOut = htmlOut+"<tr class=\"myclasstr_gerade"+dpVIS+" \">";
                                                  for(let u=0;u<val.length;u++){ if(u<val.length-1) {htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\">"+val[u]+"</td>");} else
                                                                               {htmlOut=htmlOut.concat("<td class=\"myclasstd_trennungslinie"+dpVIS+"\" style=\" border-right:"+trennungsLinie+"px solid "+farbetrennungsLinie+ ";\">"+val[u]+"</td>")}
                                                                               }  
                                                                            
                                 } else { for(let u=0;u<val.length;u++){ htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+" toDel"+dpVIS+"\" style=\"color:"+htmlFarbFelderschrift2+"\">"+val[u]+"</td>");
                                                                       }  htmlOut=htmlOut.concat("</tr>");  } break;
                            } else {
                              if(counter%2==0)  {htmlOut=htmlOut+"<tr class=\"myclasstr_ungerade"+dpVIS+" \">";
                                                 for(let u=0;u<val.length;u++){  if(u<val.length-1) {htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\">"+val[u]+"</td>");} else
                                                                              {htmlOut=htmlOut.concat("<td class=\"myclasstd_trennungslinie"+dpVIS+" toDel"+dpVIS+"\" style=\" border-right:"+trennungsLinie+"px solid "+farbetrennungsLinie+ ";\">"+val[u]+"</td>")}
                                                                              }  
                                 } else {        for(let u=0;u<val.length;u++){ htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\" style=\"color:"+htmlFarbFelderschrift2+"\">"+val[u]+"</td>");
                                                                              }  htmlOut=htmlOut.concat("</tr>");  }  break;}

    case 3: if(counter%2==0)  {  if(counter%3==0 ) {htmlOut = htmlOut+"<tr class=\"myclasstr_gerade"+dpVIS+" \">";
                                                    for(let u=0;u<val.length;u++){if(u<val.length-1) {htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\">"+val[u]+"</td>");} else
                                                                                 {htmlOut=htmlOut.concat("<td class=\"myclasstd_trennungslinie"+dpVIS+" toDel"+dpVIS+"\" style=\" border-right:"+trennungsLinie+"px solid "+farbetrennungsLinie+ ";\">"+val[u]+"</td>")}
                                                                                                         }  
                                } else { if(counter%3==1)  {for(let u=0;u<val.length;u++){  if(u<val.length-1) {htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\" style=\"color:"+htmlFarbFelderschrift2+"\">"+val[u]+"</td>");} else
                                                                                                               {htmlOut=htmlOut.concat("<td  style=\" border-right: "+trennungsLinie+"px solid "+farbetrennungsLinie+ "; color:"+htmlFarbFelderschrift2+"\">"+val[u]+"</td>")}
                                                                                                         }  
                                                           } else  { for(let u=0;u<val.length;u++){  htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\">"+val[u]+"</td>");
                                                                                                  }  htmlOut=htmlOut.concat("</tr>");  } }  break;
                              } 
                              else {
                                 if(counter%3==0 )  {htmlOut = htmlOut+"<tr class=\"myclasstr_ungerade"+dpVIS+" \">";
                                                    for(let u=0;u<val.length;u++){ if(u<val.length-1) {htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+" toDel"+dpVIS+"\">"+val[u]+"</td>");} else
                                                                                                      {htmlOut=htmlOut.concat("<td class=\"myclasstd_trennungslinie"+dpVIS+" toDel"+dpVIS+" toDel"+dpVIS+"\" style=\" border-right:"+trennungsLinie+"px solid "+farbetrennungsLinie+ ";\">"+val[u]+"</td>")}
                                                                                                         }  
                                                                                                         
                              } else{ if(counter%3==1 )  { for(let u=0;u<val.length;u++){ if(u<val.length-1) {htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\" style=\"color:"+htmlFarbFelderschrift2+"\">"+val[u]+"</td>");} else
                                                                                                             {htmlOut=htmlOut.concat("<td  style=\" border-right: "+trennungsLinie+"px solid "+farbetrennungsLinie+ "; color:"+htmlFarbFelderschrift2+"\">"+val[u]+"</td>")}
                                                                                                         }  
                                                          } else {        for(let u=0;u<val.length;u++){ htmlOut=htmlOut.concat("<td class=\"myclasstd_normal"+dpVIS+" toDel"+dpVIS+"\">"+val[u]+"</td>");
                                                                                                       }  htmlOut=htmlOut.concat("</tr>"); } } break;
                              }                                        


                                 
         } //switch ende

 }

  function tabelleAusbessern() {         // bessert mei mehrfachtabellen die nicht vollen zeilenn aus - bevor die unterüberschriften kommen

 switch (mehrfachTabelle) {
         
        case 1:    break;
        case 2:    let helpMehrfach="</td>";
                   for(let w=0;w<val.length;w++){helpMehrfach=helpMehrfach.concat("<td>&ensp;</td>")};helpMehrfach=helpMehrfach.concat("</tr>")
                   if(counter%2==0)  htmlOut = htmlOut.replace(/<\/td>$/, helpMehrfach);
                   break;
        case 3:   let helpMehrfach2="</td>";
                  for(let w=0;w<val.length;w++){helpMehrfach2=helpMehrfach2.concat("<td>&ensp;</td>")};helpMehrfach2=helpMehrfach2.concat("</tr>")
                  if(counter%3==2)  htmlOut = htmlOut.replace(/<\/td>$/, "</td></tr>");
                  if(counter%3==1)  htmlOut = htmlOut.replace(/<\/td>$/, helpMehrfach2);
                  let helpMehrfach3="</td>";
                  let helpMehrfach31="";for(let w=0;w<val.length;w++){helpMehrfach31=helpMehrfach31.concat("<td>&ensp;</td>")}
                  for(let w=0;w<val.length;w++){if(w<val.length-1) {helpMehrfach3=helpMehrfach3.concat("<td>&ensp;</td>")} else
                                                          {helpMehrfach3=helpMehrfach3.concat("<td class=\"myclasstd_trennungslinie"+dpVIS+"\" style=\" border-right: "+trennungsLinie+"px solid "+farbetrennungsLinie+"\">&ensp;</td>"+helpMehrfach31)}
                                                    };helpMehrfach3=helpMehrfach3.concat("</tr>")        
                  if(counter%3==0)  htmlOut = htmlOut.replace(/<\/td>$/, helpMehrfach3);  break; }}

  function tabelleFinish() {

 switch (mehrfachTabelle) {
         
        case 1:    break;
        case 2:    let helpMehrfach="</td>";
                   for(let w=0;w<val.length;w++){helpMehrfach=helpMehrfach.concat("<td>&ensp;</td>")};helpMehrfach=helpMehrfach.concat("</tr>")
                   if(counter%2==0)  htmlOut = htmlOut.replace(/<\/td>$/, helpMehrfach);
                   break;
        case 3:   let helpMehrfach2="</td>";
                  for(let w=0;w<val.length;w++){helpMehrfach2=helpMehrfach2.concat("<td>&ensp;</td>")};helpMehrfach2=helpMehrfach2.concat("</tr>")
                  if(counter%3==2)  htmlOut = htmlOut.replace(/<\/td>$/, "</td></tr>");
                  if(counter%3==1)  htmlOut = htmlOut.replace(/<\/td>$/, helpMehrfach2);
                  let helpMehrfach3="</td>";
                  let helpMehrfach31="";for(let w=0;w<val.length;w++){helpMehrfach31=helpMehrfach31.concat("<td>&ensp;</td>")}
                  for(let w=0;w<val.length;w++){if(w<val.length-1) {helpMehrfach3=helpMehrfach3.concat("<td>&ensp;</td>")} else
                                                          {helpMehrfach3=helpMehrfach3.concat("<td class=\"myclasstd_trennungslinie"+dpVIS+"\" style=\" border-right: "+trennungsLinie+"px solid "+farbetrennungsLinie+"\">&ensp;</td>"+helpMehrfach31)}
                                                    };helpMehrfach3=helpMehrfach3.concat("</tr>")        
                  if(counter%3==0)  htmlOut = htmlOut.replace(/<\/td>$/, helpMehrfach3);  break; }
      
         var htmlUeber=    "<p  class=\"divWeiten"+dpVIS+"\" style=\"color:"+htmlFarbUber+"; font-family:"+htmlSchriftart+"; font-size: "+htmlUEberFontGroesse+"; font-weight:"+htmlSchriftWeite+ "\">"+htmlFeldUeber+"&ensp;&ensp;Last Update: "+formatDate(getDateObject((new Date().getTime())), 'SS:mm:ss')+"</p>"; 
         if(mitSearch) htmlUeber=htmlUeber+searchMe
         var htmlUnter= "<div class=\"divWeiten"+dpVIS+"\" style=\"margin-top: 10px; color:"+htmlFarbUber+"; height: 30px; font-family:"+htmlSchriftart+"; font-size: 85%; text-align: center;\" >"+htmlFeldUeber+"&ensp;&ensp;Last Update: "+formatDate(getDateObject((new Date().getTime())), "SS:mm:ss");"</div>";
         
         if (!htmlSignature) htmlUnter="";
              var htmlOutVIS="";
              if (htmlUberschrift) 
                 { zentriert ? htmlOutVIS=htmlZentriert+htmlUeber+htmlTabStyle+htmlTabUeber+htmlOut+"</tbody></table></div></div>"+htmlUnter+"</center>"+ buttonScript : htmlOutVIS=htmlUeber+htmlTabStyle+htmlTabUeber+htmlOut+"</tbody></table></div></div>"+htmlUnter+"</center>"+ buttonScript ;
             } else {
                zentriert ?  htmlOutVIS=htmlZentriert+htmlTabStyle+htmlTabUeber+htmlOut+"</tbody></table></div></div>"+htmlUnter+"</center>"+ buttonScript :  htmlOutVIS=htmlTabStyle+htmlTabUeber+htmlOut+"</tbody></table></div></div>"+htmlUnter+"</center>"+ buttonScript;
             }
                 

   // log("bin raus aus tabelleBind");
            if (braucheEinVISWidget)  setStateDelayed("javascript." + instance + ".Tabellen@Liv."+dpVIS+".HTMLTableVis", htmlOutVIS ,1000);

  var htmlUnter= "<div  style=\"color:"+htmlFarbUber+"; font-family:"+htmlSchriftart+"; height: 30px; font-size: 80%;  text-align: center; \" >"+htmlFeldUeber+"&ensp;&ensp;Last Update: "+formatDate(getDateObject((new Date().getTime())), "SS:mm:ss");+"</div>"

  if (!htmlSignature) htmlUnter="";
   var htmlEnd="</table>"+htmlUnter+"</div></body>";
  //mit oder ohne überschrift - zentriert oder links
 //htmlUberschrift ? htmlOut=htmlStart+htmlUeber+htmlTabStyle+htmlTabUeber+htmlOut+htmlEnd : htmlOut=htmlStart+htmlTabStyle+htmlTabUeber+htmlOut+htmlEnd;
  //log(htmlOut);


 }


 function flexboxBind(){


   htmlOut=htmlOut+"<div class=\"divFlexBoxenEinzeln"+dpVIS+" divInFlex"+dpVIS+"\"> <div  style=\"font-size: 125%; font-weight: bold\">"+val[0]+"</style></div><br>IP: "+val[1]+"<br>RSSI: "+val[4]
                                                                  +" </div>"
  //setStateDelayed("javascript." + instance + ".Tabellen@Liv."+dpVIS+".HTMLTableVis", myFlexer ,1000);  "<br> "+val[3]+   "<br> "+val[5]+
  //log(htmlOut)
   }

 function flexboxFinish(){
 var htmlUeber=    "<p  class=\"divWeiten"+dpVIS+"\" style=\"color:"+htmlFarbUber+"; font-family:"+htmlSchriftart+"; font-size: "+htmlUEberFontGroesse+"; font-weight:"+htmlSchriftWeite+ "\">"+htmlFeldUeber+"&ensp;&ensp;Last Update: "+formatDate(getDateObject((new Date().getTime())), 'SS:mm:ss')+"</p>"; 
         if(mitSearch) htmlUeber=htmlUeber+searchMe
         var htmlUnter= "<div class=\"divWeiten"+dpVIS+"\" style=\"margin-top: 10px; color:"+htmlFarbUber+"; height: 30px; font-family:"+htmlSchriftart+"; font-size: 85%; text-align: center;\" >"+htmlFeldUeber+"&ensp;&ensp;Last Update: "+formatDate(getDateObject((new Date().getTime())), "SS:mm:ss");"</div>";
 // htmlOutVIS=htmlUeber+htmlTabStyle+htmlTabUeber+htmlOut+"</tbody></table></div></div>"+htmlUnter+"</center>"+ buttonScript ;
    var htmlOutVIS="";
              if (htmlUberschrift) 
                 { zentriert ? htmlOutVIS=htmlZentriert+htmlUeber+htmlTabStyle+htmlTabUeber+htmlOut+"</div></div></div>"+htmlUnter+"</center>"+ buttonScript : htmlOutVIS=htmlUeber+htmlTabStyle+htmlTabUeber+htmlOut+"</div></div></div>"+htmlUnter+"</center>"+ buttonScript ;
             } else {
                zentriert ?  htmlOutVIS=htmlZentriert+htmlTabStyle+htmlTabUeber+htmlOut+"</div></div></div>"+htmlUnter+"</center>"+ buttonScript :  htmlOutVIS=htmlTabStyle+htmlTabUeber+htmlOut+"</div></div></div>"+htmlUnter+"</center>"+ buttonScript;
             }
  // htmlOut=htmlOut+"<div> val[0] <br> val[2] </div>"
  setStateDelayed("javascript." + instance + ".Tabellen@Liv."+dpVIS+".HTMLTableVis", htmlOutVIS ,1000);
 }


async function needDP(){
    for(let s=0;s<schalterInSpaltenUeberschrift.length;s++){ if(schalterInSpaltenUeberschrift[s]){
    if (!(await existsStateAsync("javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte"+s))) {
        await createStateAsync("Tabellen@Liv."+dpVIS+".Spalte"+s, false,{type: "boolean", name: "Schalter_Spalte"+s, role: "value", read: true, write: true, } ); } 
      }}

    if (!(await existsStateAsync("javascript." + instance + ".Tabellen@Liv."+dpVIS+".HTMLTableVis"))) {
        await createStateAsync("Tabellen@Liv."+dpVIS+".HTMLTableVis", "empty",{type: "string", name: "HTML_Standard_Widget_mit_Binding", role: "value", read: true, write: true, } ); } 
     if (!(await existsStateAsync("javascript." + instance + ".Tabellen@Liv."+dpVIS+".JSONVis"))) {
        await createStateAsync("Tabellen@Liv."+dpVIS+".JSONVis", "",{type: "string", name: "JSON Format", role: "value", read: true, write: true, } ); }   
    



}
   setTimeout(function () { 

    let arrTriggerSchalter=[]
    $("javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte*").each(function(id, i) {  
           arrTriggerSchalter.push(id) 
    });
  //  log(arrTriggerSchalter.toString())
    on({id: arrTriggerSchalter, ack: false, change: "any"}, function (obj) { 
      //  log(obj.id)
      if (obj.id=="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte0") welcheSortierung=0;
      if (obj.id=="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte1" )  welcheSortierung=1 ;
      if (obj.id=="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte2" )  welcheSortierung=2; 
      if (obj.id=="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte4")  welcheSortierung=3;
      if (obj.id=="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte3" )  welcheSortierung=4;
      if (obj.id=="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte5") welcheSortierung=5;
      if (obj.id=="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte6" )  welcheSortierung=6; 

      if (obj.id=="javascript." + instance + ".Tabellen@Liv."+dpVIS+".Spalte7" )  flexboxView=!flexboxView; 
      
    //  log(String(mehrfachTabelle))
   setTimeout(function () {  
        writeHTML();
      //  if (braucheEinFile) {writeFile(home, path ,htmlOut, function (error) { /* log('file written');*/  });}
}, 900);
     
 
      
    });}, 5050);


//SORTIEREN
function sortMe(myType,value){

if(myType=="alpha" ){ myObject.sort(function (alpha, beta) {
             if ((alpha[value].toString().toUpperCase()).trim() > (beta[value].toString().toUpperCase()).trim())
                return 1;
             if ((beta[value].toString().toUpperCase()).trim()> (alpha[value].toUpperCase().toString()).trim())
                return -1;
             return 0;
            });}
 if(myType=="bool" ) {
      
   myObject .sort(function(x, y) { return x[value] - y[value] }); }       
 
 
   if(myType=="num" )   { myObject.sort(function (alpha, beta) {
                      return  beta[value] -alpha[value];   });}

}


function makeMyCSS() {

    trHelperClass=" ";
for (let jj=0;jj<(Feld1lAlign.length)*mehrfachTabelle;jj++) {  //"td:nth-child(1) {width: "+htmlSpalte1Weite[0]+"}"+"td:nth-child(2) {width:"+htmlSpalte1Weite[1]+"}"+
        trHelperClass= trHelperClass+ " .scrollContent"+dpVIS+" td"+":nth-of-type("+(jj+1)+") {width: "+htmlSpalte1Weite[jj]+"; text-align: "+Feld1lAlign[jj]+" }"
  }
  //log(trHelperClass)
switch (bkgroundSearch){
    case 1 :   bkgDiv=`background:
                       radial-gradient(black 15%, transparent 16%) 0 0,
                       radial-gradient(black 15%, transparent 16%) 8px 8px,
                       radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
                       radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
                       background-color:#282828;
                       background-size:16px 16px;`; break;

   case 2 : bkgDiv=`background:
                    url(data:image/gif;base64,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)`
                   ; break

   case 3 : bkgDiv=`background:
                    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,
                    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,
                    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,
                    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,
                    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,
                    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,
                    linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);
                    background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;
                    background-color: #840b2a;`; break;

   case 4 : bkgDiv=`background: radial-gradient(${htmlFarbTableColorGradient1}, ${htmlFarbTableColorGradient2});`; break;   //265686 5590CA 2F2F2F 3c3c3c
   case 5 : bkgDiv=`background: radial-gradient(${farbeUngeradeZeilen}, ${farbeGeradeZeilen});`; break;   //265686 5590CA 2F2F2F 3c3c3c

   case 6 : bkgDiv=`background: radial-gradient(#bfbcbc, #ffffff);`; break;   //265686 5590CA 2F2F2F 3c3c3c


}

 scrollBar=` .thescroller${dpVIS}::-webkit-scrollbar { width: 5px;}
.thescroller${dpVIS}::-webkit-scrollbar-track {background: transparent; width: 5px;}
.thescroller${dpVIS}::-webkit-scrollbar-thumb {border-radius: 40px; border: transparent ; background: ${htmlFarbTableColorGradient1}; }
.thescroller${dpVIS} {scrollbar-width: thin; scrollbar-color: ${htmlFarbTableColorGradient1} transparent;}}`

myButtonUeberschrift=" .myButt"+dpVIS+" {border-radius: 4px; border:"+schalterUmrahmung+"px solid; background-color: "+htmlBackgroundButtonUeberschrift+"\; color: "+htmlFarbTableColorUber+"; font-family: "+htmlSchriftart+"; font-size :"+groesseUeberschrift+"px; text-align:left;}"


           htmlZentriert=   "<style>"+                       // <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />
            /*weite*/          " .divWeiten"+dpVIS+" {  width: "+weite+"px }"+
            /*thead*/          " .fixedHeader"+dpVIS+" { position: sticky; top: 0px ; overflow-y:auto; overflow-x: hidden; width: 100%;  height: "+UeberSchriftHoehe+"px; border-bottom: "+LinieUnterUeberschrift+"px solid "+farbeLinieUnterUeberschrift+";"+
                                               " font-family:"+htmlSchriftart+"\;  color:"+htmlFarbTableColorUber+"; "+  //  border-spacing:"+abstandZelle+"px;
                                               " font-size: "+groesseUeberschrift+"px; font-weight: "+UeberschriftStyle+";  background-image: linear-gradient("+htmlGragient[0]+"deg,"+htmlFarbTableColorGradient2+" "+htmlGragient[1]+"%,"+htmlFarbTableColorGradient1+" "+htmlGragient[2]+"%); }"+ //
            /*tbody */         " .scrollContent"+dpVIS+" { width: 100%;  overflow-y: scroll;   }"+ // height: "+hoeheTabelle2+"px; 
                               
                               " .scrollContent"+dpVIS+" td {padding: "+abstandZelle+"px;}"+
            /*div*/            " .tableContainer"+dpVIS+" {  display: flex; flex-direction: column;  height: "+hoeheTabelle+"px; width: "+weite+"px; overflow-y:auto; overflow-x: hidden ; "
                                                          +bkgDiv+" }"+  // position: sticky; top: 0; background-color: black;
            /*seitenl*/        " .seitenleiste"+dpVIS+" { background-image: linear-gradient("+htmlGragient[0]+"deg,"+htmlFarbTableColorGradient2+" "+htmlGragient[1]+"%,"+htmlFarbTableColorGradient1+" "+htmlGragient[2]+"%); color: " //background-color: "+htmlBackgroundFarbeSeitenliste+";
                                                          +htmlFarbSeiteSchrift+ ";font-size:"+schriftGroesseSeitenleiste+"px; vertical-align:top; text-align:center; width: "+breiteSeitenleiste+"px}"+  //margin-top: 30px;
                               " .flexContainer"+dpJSON+" {display: flex; width: "+weite+"px}"+                        
            /*table*/          " .tablezusatz"+dpVIS+" {  border:"+rahmenBreite+";  "+  //table-layout: fixed;
                                              "width:100%; color:"+htmlFarbFelderschrift+";  font-size:"+htmlSchriftgroesse+";"+
                                              "font-family:"+htmlSchriftart+"; background-image: linear-gradient("+htmlGragient[0]+"deg,"+htmlFarbTableColorGradient2+" "+htmlGragient[1]+"%,"+htmlFarbTableColorGradient1+" "+htmlGragient[2]+"%); }"+
                               " .mythclass0"+dpVIS+" {    }"+  //text-align:"+Feld1lAlign[0]+"
                               " .mythclass1"+dpVIS+" {   }"+
                               " .mythclass2"+dpVIS+" {   }"+
                               " .mythclass3"+dpVIS+" {  }"+
                               " .mythclass4"+dpVIS+" {  }"+
                               " .mythclass5"+dpVIS+" {  }"+
                               " .mythclass6"+dpVIS+" {   }"+ 
                               " .divFlexBoxen"+dpVIS+" {overflow-y: scroll; display: flex; flex-direction: row; flex-wrap: wrap; width: 100%; height: "+(hoeheTabelle-(Number(UeberSchriftHoehe)))+"px;  align-items: center; justify-content: center; }"+ 
                               " .divFlexBoxenEinzeln"+dpVIS+" { padding: 20px; color: "+htmlFarbFelderschrift+"; border: 2px solid; border-radius: 25px; width: auto; height: auto; border-color: "+htmlFarbTableColorGradient2+"; margin: 10px;}"+
                               " .divInFlex"+dpVIS+" {  background-image: linear-gradient("+htmlGragient[0]+"deg,"+htmlFarbTableColorGradient2+" 10%,"+htmlFarbTableColorGradient1+" 20%); }"+ //  "+htmlGragient[1]+"   "+htmlGragient[2]+" 
                               " .emptyFlex2_1"+dpVIS+" { color: transparent; background-image: none !important; background-color: "+htmlFarbTableColorGradient1+" !important;}"+
                             //  " th {position: sticky; top: 0px ; height: "+UeberSchriftHoehe+"px; background-image: linear-gradient("+htmlGragient[0]+"deg,"+htmlFarbTableColorGradient2+" "+htmlGragient[1]+"%,"+htmlFarbTableColorGradient1+" "+htmlGragient[2]+"%); }"+  //position: sticky; top: 0px ;
                               " .myclassueber_spalte_button     {color:"+htmlFarbTableColorUber+"}"+
                               " .myclassueber_spalte_ohne_button{color:"+htmlFarbTableColorUber+"}"+
                               " .myTHclass"+dpVIS+" {position: sticky; top: 0px ; height: "+UeberSchriftHoehe+"px; background-image: linear-gradient("+htmlGragient[0]+"deg,"+htmlFarbTableColorGradient2+" "+htmlGragient[1]+"%,"+htmlFarbTableColorGradient1+" "+htmlGragient[2]+"%);}"+
                               " .myTRclass"+dpVIS+" {}"+
                               " .myclasstr_gerade"+dpVIS+" { height:"+zeilenAbstand+"px; background-color:"+farbeGeradeZeilen+"}"+  //border-spacing:"+abstandZelle+"px; 
                               " .myclasstr_ungerade"+dpVIS+" {  height:"+zeilenAbstand+"px;  background-color:"+farbeUngeradeZeilen+"}"+ //border-spacing:"+abstandZelle+"px;
                               " .myclasstd_normal"+dpVIS+" {}"+
                               " .myclasstd_trennungslinie"+dpVIS+" {}"+
                               " .myinputclass"+dpVIS+" {width: "+weite+"px; border: 1px solid; border-color: "+htmlFarbTableColorGradient2+"; margin-bottom: 15px;  color: "+htmlFarbTableColorUber+
                                                        "; height: "+sucheHoehe+"px; background-image: linear-gradient("+htmlGragient[0]+"deg,"+htmlFarbTableColorGradient2+" "+htmlGragient[1]+"%,"+htmlFarbTableColorGradient1+" "+
                                                        htmlGragient[2]+"%); font-family:"+htmlSchriftart+"\; font-size: 110%; color: "+htmlFarbTableColorUber+"}"+
                            trHelperClass+scrollBar+ //myButtonUeberschrift+
                          //     " .thescroller"+dpVIS+"::-webkit-scrollbar {width: 0px; }"+
                               "</style>"+'<center>'

//not in use

//alt -  falls eine extra html datei gebraucht wird
 /*let htmlStart; //file
const path = "/htmlexample.html";                        //FIlenamen definieren
const home ='vis.0'                                      //wo soll das file im iobroker-file-system liegen ? (oder z.b auch iqontrol.meta)
let   braucheEinFile=false;                              // bei true wird ein file geschrieben
 htmlStart=    "<!DOCTYPE html><html lang=\"de\"><head><title>Vorlage</title><meta http-equiv=\"content-type\" content=\"text/html;  http-equiv=\"refresh\" content=\"30\"; charset=utf-8\">"+
                    "<style> * {  margin: 0;} body {background-color: "+backgroundAll+"; margin: 0 auto;  }"+
                    " p {padding-top: 10px; padding-bottom: 10px; text-align: "+htmlcenterHelp2+"}"+
                   // " div { margin: 0 auto;  margin-left: auto; margin-right: auto;}"+
                    " td { padding:"+abstandZelle+"px; border:0px solid "+htmlFarbTableBorderColor+";  border-right:"+borderHelpRight+"px solid "+htmlFarbTableBorderColor+";border-bottom:"+borderHelpBottum+"px solid "+htmlFarbTableBorderColor+";}"+ 
                    " table { width: "+weite+";  margin: 0 "+htmlcenterHelp+"; border:1px solid "+htmlFarbTableBorderColor+"; border-spacing=\""+abstandZelle+"0px\" ; }"+   // margin macht center
                    "td:nth-child(1) {width: "+htmlSpalte1Weite[0]+"}"+"td:nth-child(2) {width:"+htmlSpalte1Weite[1]+"}"+
                    " </style></head><body> <div>";  */                             

}// endCSS



function makeMySearch_Seitenleiste() {

    
//const htmlUeber=    "<p style=\"color:"+htmlFarbUber+"; font-family:"+htmlSchriftart+"; font-weight: bold\">"+htmlFeldUeber+"</p>";   

   einmalAbstand=`<br>
`
  let seitenLeistenTest="&#128472;";
  for (let f=0;f<abstandSeitentextVonOben;f++){ 
      seitenLeistenTest=seitenLeistenTest+`<br>
`}
  for (let i=0;i<nameSeitenLeiste.length;i++){
      seitenLeistenTest=seitenLeistenTest+nameSeitenLeiste[i]+`<br>
`
 }

  htmlSeitenleiste="";
  if (ichWillSeitenLeiste) htmlSeitenleiste= "<div class=\"flexContainer"+dpJSON+"\"> <div class=\"seitenleiste"+dpVIS+"\">"+seitenLeistenTest+"</div>" ;// htmlTabUeber1=htmlTabUeber1+
searchMe="";
sucheEin ? searchMe="<div class=\"divWeiten"+dpVIS+"\"><input class=\"myinputclass"+dpVIS+"\" type=\"search\" id=\"search"+dpVIS+"\" placeholder=\"Filter by Item\""+">"+"</div>" :
            searchMe=""     
searchMe=searchMe+htmlSeitenleiste
htmlTabStyle= "<div class=\"tableContainer"+dpVIS+" thescroller"+dpVIS+"\" >"+
                    "<table class=\"tablezusatz"+dpVIS+"\" rules=\""+htmlRahmenLinien+"\">"+
                    "<thead class=\"fixedHeader"+dpVIS+"\">"
                

htmlTabUeber4="<tr class=\"myTRclass"+dpVIS+"\">";
}



function makeMyVisScripte() {

     let valSpalte=[] ;
    for(let kk=0;kk<val.length;kk++){
      valSpalte.push(val[kk])
    }

    let spaltenAnzeigeScript=`$(document).ready(function() { `
    let spaltenAnzeigeScriptEnd=` });` ;
for (let ff=0;ff<(valSpalte.length);ff++){
                                        // log(valSpalte[ff]); 
                                         if (valSpalte[ff]=="false") { spaltenAnzeigeScript=spaltenAnzeigeScript.concat(`$('td:nth-child(${(ff+1)}).toDel${dpVIS},th:nth-child(${(ff+1)}).toDel${dpVIS}').hide();`) 
                                                                       if (mehrfachTabelle==2) {spaltenAnzeigeScript=spaltenAnzeigeScript.concat(`$('td:nth-child(${(ff+1+valSpalte.length)}).toDel${dpVIS},th:nth-child(${(ff+1+valSpalte.length)}).toDel${dpVIS}').hide();`) }
                                                                       if (mehrfachTabelle==3) {spaltenAnzeigeScript=spaltenAnzeigeScript.concat(`$('td:nth-child(${(ff+1+(2*valSpalte.length))}).toDel${dpVIS},th:nth-child(${(ff+1+(2*valSpalte.length))}).toDel${dpVIS}').hide();`) }                        
                                         }}

 buttonScript =   '<script> function setOnOtherValue(myval) {	var Self = this;	Self.servConn.getStates(myval, (error, states) => {  console.log(states); self.servConn.setState(myval, !states[myval].val);}  )}; '
                      + '$( "button.myButt'+dpVIS+'" ).click(function() {  $( this ).slideUp() });' //'[class*="test"]' [class~="value"]   "[class~='gerade']"
     /*search*/       + `var allRows = $("[class*='gerade${dpVIS}']");  $("input.myinputclass${dpVIS}").on("keydown keyup", function() {  allRows.hide();  $("tr:contains('" + $(this).val() + "')").show();});`
     /*search*/       + `var allRows2 = $("div.divFlexBoxenEinzeln${dpVIS}"); console.log(allRows2);  $("input.myinputclass${dpVIS}").on("keydown keyup", function() {  allRows2.hide();  $("div.divFlexBoxenEinzeln${dpVIS}:contains('" + $(this).val() + "')").show();});`
                      + `$( ".seitenleiste${dpVIS}" ).click(function() {var Self = this; var myvali='javascript.0.Tabellen@Liv.ShellyTabelleVIS.Spalte7'; vis.setValue(myvali,true)    });`
     /*dbclick*/      + `$( "[class*='gerade${dpVIS}']" ).dblclick(function() {var Self = this; var myvali='javascript.${instance}.Tabellen@Liv.${dpVIS}.Spalte7'; vis.setValue(myvali,true)    });`
     /*dbclick*/      + `$( "[class*='divFlexBoxen${dpVIS}']" ).dblclick(function() {var Self = this; var myvali='javascript.${instance}.Tabellen@Liv.${dpVIS}.Spalte7'; vis.setValue(myvali,true)    });`
                      +   spaltenAnzeigeScript  +  spaltenAnzeigeScriptEnd  
                      +'</script>'


}




