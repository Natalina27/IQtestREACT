//Buttons Tests with description in main block
const btnIQ = document.querySelector(".main.container.iq");
const btnIA = document.querySelector(".main.container.ia");
const btnMBTI = document.querySelector(".main.container.mbti");
const btnSMIL= document.querySelector(".main.container.smil");


//Main block
const main = document.querySelector("main");

//Tests section
const testBodyIQ = document.querySelector(".iq_test");
const testBodyIA = document.querySelector(".ia_test");
const testBodyMBTI = document.querySelector(".mbti_test");
const testBodySMIL = document.querySelector(".smil_test");

console.log(testBodyMBTI);
console.log(testBodySMIL);

showTest(btnIQ, main, testBodyIQ);
showTest(btnIA, main, testBodyIA);
showTest(btnMBTI, main, testBodyMBTI);
showTest(btnSMIL, main, testBodySMIL);


function showTest(button, elementToHide, elementToShow) {

    button.addEventListener("click", function() {
        elementToHide.style.display = "none";
        elementToShow.style.display = "block";
    });
}

//IQ TEST

// const buttonIQ = document.querySelector('.btn_iq');
// const IqIntro = document.querySelector('.iq_intro');
// const IqQuestion1 = document.querySelector('.iq_q1');
// const IqQuestion2 = document.querySelector('.iq_q2');
//
// const radioButton1 = document.querySelector('#answer0');
// const radioButton2 = document.querySelector('#answer1');
//
//
// showTest(buttonIQ, IqIntro, IqQuestion1);
// showTest(radioButton1, IqQuestion1, IqQuestion2);
// showTest(radioButton2, IqQuestion1, IqQuestion2);
//


function validateSearchBox(aEvent)
{
    try
    {
        var keyEvent = aEvent ? aEvent : window.event;
        if (keyEvent.keyCode == 13) {
            validateSearchCriteriaBox();
        }
    }
    catch(c){}
}
function validateSearchCriteriaBox( ){
    isitvalid = true;
    // Check if user entered anything to search
    // Remove extra spaces
    // Max 3 words Logic
    // No word less than 2 chars

    var keywordvalue = document.getElementById('txtSearchCriteriaHeader').value;
    len = keywordvalue.length;

    prevchar = " ";
    curchar  = "";
    newstring = "";

    /* Start of removing extra spaces */
    for ( i=0;i<len;i++){
        curchar = keywordvalue.charAt(i);
        if ( curchar == " " && prevchar == curchar ){
        } else {
            newstring = newstring + curchar;
        }

        prevchar = curchar;
    }
    len = newstring.length;
    /* Remove remaining spaces at end */
    if ( len != 0 && newstring.charAt(len-1)==" " ){
        newstring = newstring.substring( 0, len-1);
    }
    /* End of removing extra spaces */

    document.getElementById('txtSearchCriteriaHeader').value=newstring;

    len = newstring.length;

    tokens = newstring.split( " "  );
    numtokens = tokens.length;
    if ( len == 0 ){                                  /* Is the length 0 */
        document.getElementById('txtSearchCriteriaHeader').value=newstring;
        document.getElementById('txtSearchCriteriaHeader').focus();
        isitvalid = false;
    } else if ( newstring=="Search Tests") {
        document.getElementById('txtSearchCriteriaHeader').value=newstring;
        document.getElementById('txtSearchCriteriaHeader').focus();
        isitvalid = false;
    }else if ( numtokens > 3 ) {                     /* Too many tokens ? */
        alert("Please limit your entry to a maximum of 3 Keywords");
        isitvalid = false;
    } else {
        if ( isitvalid ) {
            /* Check for length of tokens */
            for ( i=0;i<numtokens;i++){
                if ( tokens[i].length < 2){  // Length of each word should be greater than 1.
                    alert( "Keyword " + (i+1) +" too short. Enter atleast 2 characters.");
                    isitvalid = false;
                    break;
                }
            }
        }
    }

    document.getElementById('txtSearchCriteriaHeader').focus();
    if (isitvalid){
        location.href = "https://www.funeducation.com/Search?q="+document.getElementById('txtSearchCriteriaHeader').value;
    }
}
</script>

<body style="background-color: #FFFFFF">

    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NWGMN6"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="wrapper">
    <main id="main-inner">




    <script language="javascript" src="https://www.funeducation.com/Script/Common.js"></script>
    <script language="javascript">
var paidtest="N"
var acceptedUserEvent =  false;
var count=0;
window.onbeforeunload = pageUnloadEvent;
function pageUnloadEvent() {

}
function validateForm(type) {
    acceptedUserEvent = true;
    var i=0;
    var answered = false, answeredAll = true, removePleaseWait = false;

    answered = true;
    removePleaseWait = true;

    if(answeredAll ) {
        document.getElementById('errorMessage').style.visibility='hidden';
        document.getElementById('errorMessage').style.display='none';
        if (paidtest=="N")
        {
            if(type.type=="submit" && count==0 && removePleaseWait==false)
            {
                document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_btnSubmitAnswer_disabled').style.display='inline';
            }
            else
            {
                document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_btnSubmitAnswer_disabled').style.display='none';
            }
            document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_btnSubmitAnswer').style.display='none';
            document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_btnSubmitAnswer').style.visibility='hidden';
            //document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_quitTest_disabled').style.display='inline';
        }
        try {
            document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_quitTest').style.display='none';
            document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_quitTest').style.visibility='hidden';
        }
        catch(e) {
            document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_quitTest_disabled').style.display='none';
        }
        if(type.type!="submit")
        {
            count=1;
            document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_btnSubmitAnswer').click();
            count=0;
        }
        return true;
    }
    document.getElementById('errorMessage').style.visibility='visible';
    document.getElementById('errorMessage').style.display='block';
    return false;
}
function submitRadioClick() {
    document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_btnSubmitAnswer').click();
    return true;
}
function validateradio()
{
    for (i = 0; i < document.forms[0].elements.length; i++) {
        elm = document.forms[0].elements[i]
        if (elm.type == 'radio') {
            if (elm.checked) {
                return true;
            }
        }
    }
    return false;
}

function quitTest(type) {
    var valrad = validateradio();
    if (valrad == false){
        document.getElementById('errorMessage').style.visibility='visible';
        document.getElementById('errorMessage').style.display='block';
        return false;
    }
    else {
        if(window.confirm("Do you want to quit the test\n")){
            if(validateForm(type)) { //--Check all questions are answered
                if (paidtest=="N"){
                    document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_btnSubmitAnswer_disabled').value='Continue   >';
                }
                document.getElementById('ctl00_ContentPlaceHolder1_TestEngine1_quitTest_disabled').value='Please Wait...';
                return true;
            }
        }
    }
    return false;