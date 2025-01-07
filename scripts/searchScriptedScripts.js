// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DECLARE VARAIBAES FOR ENTIRE DOCUMENT =================================================================================================
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // PAGE ELEMENT RETRIEVAL VARIABLES ----------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        // VARIABLES FOR MAIN PAGE ---------------------------------------------------
        // ///////////////////////////////////////////////////////////////////////////

        // VARIABLES FOR NAV BAR SECTION ---------------------------------------------
        // ///////////////////////////////////////////////////////////////////////////

        // VARIABLES FOR SEARCH BAR SECTION ------------------------------------------
        // ///////////////////////////////////////////////////////////////////////////

        // VARIABLES FOR RESULTS SECTION ---------------------------------------------
        // ///////////////////////////////////////////////////////////////////////////







    // STRING BUILDER VARIABLES ------------------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        // BUILD STRING VARIABLES FOR NAV BAR SECTION ================================
        // ///////////////////////////////////////////////////////////////////////////

        // BUILD STRING VARIABLES FOR SEARCH BAR SECTION =============================
        // ///////////////////////////////////////////////////////////////////////////

        // BUILD STRING VARIABLES FOR RESULTS SECTION ================================
        // ///////////////////////////////////////////////////////////////////////////







    // ARRAY VARIABLES ---------------------------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        // COLLECT VARIABLES FOR NAV BAR SECTION =====================================
        // ///////////////////////////////////////////////////////////////////////////

        // COLLECT VARIABLES FOR SEARCH BAR SECTION ==================================
        // ///////////////////////////////////////////////////////////////////////////

            var makeLoadingResultsStallArray = [100, 200, 500, 1000, 2000, 5000]
            var collectQuestions = []
            var collectAnswers = []
            var collectSlogan = []
            var collectLinks = []

        // CLASS NUMBER STRINGS MAKES ================================================
        // ///////////////////////////////////////////////////////////////////////////

            var makeClassNumberStrings = [

                "One", "Two", "Three", "Four", "Five", 
                "Six", "Seven", "Eight", "Nine", "Ten",

                "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"

            ]

        // COLLECT VARIABLES FOR RESULTS SECTION =====================================
        // ///////////////////////////////////////////////////////////////////////////

            var makeLoadingResultsImage = [
                
                
                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif"
            
            ]

            var makeResultsBoxImages = [

                "One", "Two", "Three", "Four", "Five",
                "Six", "Seven", "Eight", "Nine", "Ten"

            ]

            var makeResultsBlurb = [

                "according to my super space powers, I've deduced that this is the best suited answer for your question.",
                "looks like this is the best option for your question.",
                "okay, so this answers is the best fitted answer for your question.",
                "a couple of my NEOM network friends agree, that this is the best suited answer for your question.",
                "tough question but, we found this answer for your question",

                "stats show that this is the best suited answer for your question.",
                "not going to lie, I almost gave up on that this one, but, I got something on that question you asked.",
                "there were a few results for this question but we recommend this answer as the best fitted.",
                "ah yes this is a popular one, got your answer right here.",
                "got that answer faster than you could blink.",

            ]







    // NUMBER COLLECT AND COUNTER VARIABLES ------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        // NUMBER COLLECT AND COUNTER VARIABLES FOR NAV BAR SECTION ==================
        // ///////////////////////////////////////////////////////////////////////////

        // NUMBER COLLECT AND COUNTER VARIABLES FOR SEARCH BAR SECTION ===============
        // ///////////////////////////////////////////////////////////////////////////

        // NUMBER COLLECT AND COUNTER VARIABLES FOR RESULTS SECTION ==================
        // ///////////////////////////////////////////////////////////////////////////




























// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS FOR ENTIRE DOCUMENT =========================================================================================================
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // FUNCTIONS FOR MAIN PAGE -------------------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

    // FUNCTIONS FOR NAV BAR SECTION -------------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

    // FUNCTIONS FOR SEARCH BAR SECTION ----------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        // COLLECT SEARCH BAR PREPOULATE RESULTS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // ///////////////////////////////////////////////////////////////////////////

            // COLLECT QUESTIONS =====================================================
            // ///////////////////////////////////////////////////////////////////////

                function getQuestions () {

                    // RETRIEVE CONTENTS AND STORE IN LOCAL MEMORY ...................
                    // ...............................................................

                        fetch("/dox/questions.txt")
                        .then(res => res.text())
                        .then((text) => {
                            
                            collectQuestions.push(text)
                        
                        })

                            

                }



                




                // COLLECT ANSWERS ===================================================
                // ///////////////////////////////////////////////////////////////////

                    function getAnswers () {

                        // RETRIEVE CONTENTS AND STORE IN LOCAL MEMORY ...................
                        // ...............................................................
    
                            fetch("/dox/answersHeadlines.txt")
                            .then(res => res.text())
                            .then((text) => {
                                
                                collectAnswers.push(text)

                            })


                    }



                




                // COLLECT SLOGAN ====================================================
                // ///////////////////////////////////////////////////////////////////

                    function getSlogan () {

                        // RETRIEVE CONTENTS AND STORE IN LOCAL MEMORY ...............
                        // ...........................................................
    
                            fetch("/dox/slogan.txt")
                            .then(res => res.text())
                            .then((text) => {
                                
                                collectSlogan.push(text)



                            })


                    }



                




                // COLLECT LINKS =====================================================
                // ///////////////////////////////////////////////////////////////////

                    function getLinks () {

                        // RETRIEVE CONTENTS AND STORE IN LOCAL MEMORY ...............
                        // ...........................................................
    
                            fetch("/dox/links.txt")
                            .then(res => res.text())
                            .then((text) => {
                                
                                collectLinks.push(text)



                            })


                    }












    // RUN FUNCTIONS FOR RESULTS SEARCH ON BUTTON CLICK ------------------------------
    // ///////////////////////////////////////////////////////////////////////////////









    // RUN FUNCTIONS FOR RESULTS SECTION ---------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        // BUILD RESULTS SECTION -----------------------------------------------------
        // ///////////////////////////////////////////////////////////////////////////

            function createResultsSectionOnce () {


                var getpageMainContentContainer = document.querySelector(".scriptedMainElementsControl")
                var getResultsMainBlock = document.querySelector(".scriptedResultsMainSectionContainer")

                var getInputContainer = document.querySelector(".scriptedMainSearchElementSearchBarElementInputActual")


                if (getResultsMainBlock == null || getResultsMainBlock == undefined) {

                    console.log("new release")




                        // FRESH NEW COPY OF MAIN RESULTS AREA -----------------------
                        // ///////////////////////////////////////////////////////////

                            var createResultsSectionMain = document.createElement("div")
                            createResultsSectionMain.className = "scriptedResultsMainSectionContainer"

                                var createResultsContentResizer = document.createElement("div")
                                createResultsContentResizer.className = "scriptedResultsMainSectionContentResizer"
                                


                                    // STYLE MAIN RESULTS BLOCK ======================
                                    // ///////////////////////////////////////////////

                                        createResultsSectionMain.style = `
                                        
                                            width:100%;
                                            height:60%;
                                            left:0;
                                            right:0;
                                            margin:20px 0px 40px 0px;
                                            display:inline-block;
                                            position:relative;
                                            background:#8ED9D9;
                                            border-radius:10px;
                                            box-shadow:0px 30px 30px -20px rgba(0,0,0,0.2);
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            createResultsContentResizer.style = `
                                            
                                                width:80%;
                                                height:80%;
                                                top:0;
                                                left:0;
                                                right:0;
                                                bottom:0;
                                                margin:auto;
                                                position:absolute;
                                                /*background:#e0f78b;*/
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;
                                            
                                            `

                                                // APPEND CHILDREN TO RESPECTED PARENTS
                                                // ///////////////////////////////////

                                                    getpageMainContentContainer.appendChild(createResultsSectionMain)

                                                        createResultsSectionMain.appendChild(createResultsContentResizer)










                        // FRESH NEW COPY OF MAIN RESULTS AREA LOADING STANCE --------
                        // ///////////////////////////////////////////////////////////

                            var createResultsMainContentLoaderBlockConatainer = document.createElement("div")
                            createResultsMainContentLoaderBlockConatainer.className = "scriptedResultsMainSectionLoadingBlockerContainer" 

                                var createResultsMainContentLoaderContainer = document.createElement("div")
                                createResultsMainContentLoaderContainer.className = "scriptedResultsMainSectionLoaderContainer"

                                    var createResultsMainLoaderActual = document.createElement("div")
                                    createResultsMainLoaderActual.className = "scriptedResultsMainSectionLoaderActual"


                                    // STYLE MAIN RESULTS BLOCK ======================
                                    // ///////////////////////////////////////////////

                                        createResultsMainContentLoaderBlockConatainer.style = `
                                        
                                            width:100%;
                                            height:100%;
                                            top:0;
                                            left:0;
                                            right:0;
                                            bottom:0;
                                            margin:auto;
                                            z-index:2;
                                            display:none;
                                            position:fixed;
                                            background:rgba(255, 255, 255, 0.5);
                                            backdrop-filter:blur(10px);
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            createResultsMainContentLoaderContainer.style = `
                                            
                                                width:100px;
                                                height:100px;
                                                top:0;
                                                left:0;
                                                right:0;
                                                bottom:0;
                                                margin:auto;
                                                position:absolute;
                                                background:#FFFFFF;
                                                border-radius:12px;
                                                box-shadow:0px 20px 30px -10px rgba(0,0,0,0.5);
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                                createResultsMainLoaderActual.style = `
                                                
                                                    width:80%;
                                                    height:80%;
                                                    top:0;
                                                    left:0;
                                                    right:0;
                                                    bottom:0;
                                                    margin:auto;
                                                    background:#e9afc0;
                                                    position:absolute;
                                                    border-radius:8px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;


                                                `

                                                // APPEND CHILDREN TO RESPECTED PARENTS
                                                // ///////////////////////////////////

                                                    createResultsContentResizer.appendChild(createResultsMainContentLoaderBlockConatainer)

                                                        createResultsMainContentLoaderBlockConatainer.appendChild(createResultsMainContentLoaderContainer)

                                                            createResultsMainContentLoaderContainer.appendChild(createResultsMainLoaderActual)









                        // CHECK IF INPUT FIELD IS POPULATED -------------------------
                        // ///////////////////////////////////////////////////////////

                            checkInputFieldsForQuestions()


                        // FRESH NEW COPY OF CORRECT RESULT --------------------------
                        // ///////////////////////////////////////////////////////////

                            buildCorrectAnswerResultMainSection()

                                buildCorrectAnswerResultsBlurbText()

                                console.log("BEEZUS: " + collectQuestions.length)
    
                                numberForInputQuestionAsked = 1



                            // buildDoopAnswersResultMainSection()

                            //     buildCDoopAnswerResultsMainContainer()



                } 

                else {

                    console.log("add the rest")


                    // CHECK IF INPUT FIELD IS POPULATED -------------------------
                    // ///////////////////////////////////////////////////////////

                        checkInputFieldsForQuestions()


                        // BUILD ANSWER CORRECT RESULTS BLOCK ========================
                        //////////////////////////////////////////////////////////////

                            buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                }

            }








                // BUILD CONTENTS OF RESULT SECTION //////////////////////////////////
                // ///////////////////////////////////////////////////////////////////


                    // BUILD MOST RELEVENT SELECTOR SECTION ==========================
                    // ///////////////////////////////////////////////////////////////

                        function buildCorrectAnswerResultMainSection() {


                            var getResultsResizerContainer = document.querySelector(".scriptedResultsMainSectionContentResizer")


                                var createCorrectAnswerMainSectionContainer = document.createElement("div")
                                createCorrectAnswerMainSectionContainer.className = "scriptedCorrectAnswerMainSectionContainer"

                                    var createCorrectAnswerHeadlineContainer = document.createElement("div")
                                    createCorrectAnswerHeadlineContainer.className = "scriptedCorrectAnswerHeadlineContainer"

                                        var createCorrectAnswerHeadlineActual = document.createElement("div")
                                        createCorrectAnswerHeadlineActual.className = "scriptedCorrectAnswerHeadlineActual"




                                // STYLE MAIN RESULTS BLOCK ======================
                                // ///////////////////////////////////////////////

                                    createCorrectAnswerMainSectionContainer.style = `
                                    
                                        width:100%;
                                        height:100%;
                                        padding:0px 0px;
                                        position:relative;
                                        /*background:#82dd66;*/
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        createCorrectAnswerHeadlineContainer.style = `
                                        
                                            width:100%;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `

                                            createCorrectAnswerHeadlineActual.style = `
                                            
                                                width:100%;
                                                color:#3A5668;
                                                font-size:12px;
                                                text-align:left;
                                                font-weight:800;
                                                font-family:arial;
                                                letter-spacing:2px;
                                                text-transform:uppercase;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `




                                        // ADD TEXT TO BLOCK /////////////////////
                                        // ///////////////////////////////////////

                                            createCorrectAnswerHeadlineActual.textContent = "most relevant answer"




                                        // APPEND CHILDREN TO RESPECTED PARENTS //
                                        // ///////////////////////////////////////

                                            getResultsResizerContainer.appendChild(createCorrectAnswerMainSectionContainer) 

                                                createCorrectAnswerMainSectionContainer.appendChild(createCorrectAnswerHeadlineContainer)

                                                    createCorrectAnswerHeadlineContainer.appendChild(createCorrectAnswerHeadlineActual)




                        }



                        


                                        // BUILD MOST RELEVENT BLURB TEXT SELECTOR SECTION ==
                                        // ///////////////////////////////////////

                                            function buildCorrectAnswerResultsBlurbText () {


                                                var checkSplurbLiveStatus = document.querySelector(".scriptedRelevantAnswersBlurbActual")


                                                    if ( checkSplurbLiveStatus == null || checkSplurbLiveStatus == undefined ) {


                                                        var getRelavantAnswersMainContainer = document.querySelector(".scriptedCorrectAnswerMainSectionContainer")

                                                            var createRelevantAnswersBlurbContainer = document.createElement("div")
                                                            createRelevantAnswersBlurbContainer.className = "scriptedRelevantAnswersBlurbContainer"

                                                                var createRelevantAnswersBlurbActual = document.createElement("div")
                                                                createRelevantAnswersBlurbActual.className = "scriptedRelevantAnswersBlurbActual"

                                                                    var getRandomBlurb = makeResultsBlurb[(Math.floor(Math.random() * makeResultsBlurb.length))]


                                                                        // STYLE MAIN RESULTS BLOCK
                                                                        // ///////////////////////

                                                                            createRelevantAnswersBlurbContainer.style = `
                                                                            
                                                                                width:100%;
                                                                                margin-top:10px;
                                                                                transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;

                                                                            `

                                                                                createRelevantAnswersBlurbActual.style = `
                                                                                
                                                                                    width:100%;
                                                                                    font-size:12px;
                                                                                    text-align:left;
                                                                                    line-height:20px;
                                                                                    font-family:arial, sans-serif;
                                                                                    letter-spacing:2px;
                                                                                    transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;

                                                                                `


                                                                                    // ADD TEXT TO BLOCK
                                                                                    // ///////////////


                                                                                        createRelevantAnswersBlurbActual.textContent = `${getRandomBlurb}`




                                                                                    // APPEND CHILDREN TO RESPECTED PARENTS //
                                                                                    // ///////////////////////////////////////


                                                                                        getRelavantAnswersMainContainer.appendChild(createRelevantAnswersBlurbContainer)
                                                                                        createRelevantAnswersBlurbContainer.appendChild(createRelevantAnswersBlurbActual)
                                                        

                                                    } else {

                                                        var getBlurbTextCorrect = document.querySelector(".scriptedRelevantAnswersBlurbActual")
                                                        var getRandomBlurb = makeResultsBlurb[(Math.floor(Math.random() * makeResultsBlurb.length))]


                                                            // ADD TEXT TO BLOCK
                                                            // ///////////////

                                                                getBlurbTextCorrect.textContent = `${getRandomBlurb}`



                                                    }



                                            }














                        


                                        // BUILD QUESTIONS ASNWERS INPUT CHECKERS 
                                        // ///////////////////////////////////////

                                            function checkInputFieldsForQuestions () {

                                                var getLengthOfQuestions = collectQuestions.length

                                                var getQuestionAskedInInput = document.querySelector(".scriptedMainSearchElementSearchBarElementInputActual")

                                                console.log("SEVEN: " + (getQuestionAskedInInput.value).toLowerCase())




                                                // UPDATE LENGTH COUNT OF QUESIIONS ASKED 
                                                // ///////////////////////////////

                                                    numberForQuestionedAskedCounter = getLengthOfQuestions







                                                // IF QUESTION INPUT EMPTY DELETE ANSWER AND RESIZE BLOCK
                                                // ///////////////////////////////

                                                    function rectifyInfoPopulation () {

                                                        
                                                        var getResultsAnswerBlock = document.querySelector(".scriptedCorrectAnswersBlockMain")
                                                        var getResultsMainBlock = document.querySelector(".scriptedResultsMainSectionContainer")
                                                        var getResultsResizerBlock = document.querySelector(".scriptedResultsMainSectionContentResizer")


                                                        // CHECK IF ANSWER BLOCK IS VISIBLE AND DELETE IT
                                                        // //////////////////////

                                                            if ( getResultsAnswerBlock == null || getResultsAnswerBlock == undefined ) {

                                                                console.log("ALREADY DEAD...")
                                                                
                                                                getResultsMainBlock.style = `
                                                                
                                                                    width:100%;
                                                                    height:25%;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:20px 0px 40px;
                                                                    display:inline-block;
                                                                    position:relative;
                                                                    background:rgb(142, 217, 217);
                                                                    border-radius:10px;
                                                                    box-shadow:rgba(0, 0, 0, 0.2) 0px 30px 30px -20px;
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                                    getResultsResizerBlock.style = `
                                                                    
                                                                        width:80%;
                                                                        height:50%;
                                                                        inset:0px;
                                                                        margin:auto;
                                                                        position:absolute;
                                                                        transition:600ms;
                                                                        transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;

                                                                    `

                                                            }

                                                                // IF ANSWER IS EMPTY OR NOT UNDERSTOOD DELETE BLOCK
                                                                // //////////////

                                                            else {

                                                                getResultsAnswerBlock.remove(getResultsAnswerBlock)

                                                                getResultsMainBlock.style = `
                                                                
                                                                    width:100%;
                                                                    height:25%;
                                                                    left:0px;
                                                                    right:0px;
                                                                    margin:20px 0px 40px;
                                                                    display:inline-block;
                                                                    position:relative;
                                                                    background:rgb(142, 217, 217);
                                                                    border-radius:10px;
                                                                    box-shadow:rgba(0, 0, 0, 0.2) 0px 30px 30px -20px;
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                                    getResultsResizerBlock.style = `
                                                                    
                                                                        width:80%;
                                                                        height:50%;
                                                                        inset:0px;
                                                                        margin:auto;
                                                                        position:absolute;
                                                                        transition:600ms;
                                                                        transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;

                                                                    `

                                                            }



                                                    }







                                                // IF QUESTION INPUT NOT EMPTY RESIZE BLOCK TO POPULATED
                                                // ///////////////////////////////

                                                    function rectifyInfoBlockToDefaultPopulated () {



                                                        var getResultsMainBlock = document.querySelector(".scriptedResultsMainSectionContainer")
                                                        var getResultsResizerBlock = document.querySelector(".scriptedResultsMainSectionContentResizer")

                                                        var getResizerMainBlock = document.querySelector(".scriptedResultsMainSectionContentResizer")







                                                        // BUILD CONTENT RESIZER FIRST SECTION BLOCK
                                                        // ///////////////////////////////
        
                                                            var buildContentSetterBlock = document.createElement("div")
                                                            buildContentSetterBlock.className = "scriptedCorrectAnswerMainSectionContainer"
        
        
                                                                // STYLE CONTENT BLOCK
                                                                // //////////////////////
        
                                                                    buildContentSetterBlock.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100%;
                                                                        padding:0px;
                                                                        position:relative;
                                                                        transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
        
                                                                    `
        
                                                                        // ADD BLOCK TO RESIZER BLOCK
                                                                        // //////////////

                                                                            getResizerMainBlock.appendChild(buildContentSetterBlock)







                                                        // CHECK IF ANSWER BLOCK IS VISIBLE AND DELETE IT
                                                        // //////////////////////
                                                                
                                                            getResultsMainBlock.style = `
                                                            
                                                                width:100%;
                                                                height:60%;
                                                                left:0;
                                                                right:0;
                                                                margin:20px 0px 40px 0px;
                                                                display:inline-block;
                                                                position:relative;
                                                                background:#8ED9D9;
                                                                border-radius:10px;
                                                                box-shadow:0px 30px 30px -20px rgba(0,0,0,0.2);
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                                getResultsResizerBlock.style = `
                                                                
                                                                    width:80%;
                                                                    height:80%;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    margin:auto;
                                                                    position:absolute;
                                                                    /*background:#e0f78b;*/
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                    }







                                                // DAMAGE CONTROL FOR EXTRA ARTIFACTS
                                                // ///////////////////////////////

                                                    function artifactsDamageControl (numberSelector) {


                                                        setTimeout(() => {


                                                            var getCorrectAnswerImage = document.querySelector(".scriptedCorrectAnswerBlockCardMainElementContentBodyImageContainer")
                                                            var getExtraDoubleContentArtifacts = document.querySelector(".scriptedResultsMainSectionContentResizer")

                                                            var getCardHeading = document.querySelector(".scriptedCorrectAnswerBlockCardMainElementContentHeaderTextActual")
                                                            var getCorrectAnswer = collectAnswers[numberSelector]


                                                                // IF NUMBER OF ELEMENTS IN BLOCK ARE OVER TWO
                                                                // ////////////////////////////////////////////

                                                                    if ( getExtraDoubleContentArtifacts.children.length > 2 ) {
                                                                        
                                                                        // RUN LOOP TO DELETE EXTRA ARTIFACTS
                                                                        // ///////////////////////////////////

                                                                            for ( extraItemsCounter = 2; extraItemsCounter < getExtraDoubleContentArtifacts.children.length; extraItemsCounter ++ ) {

                                                                                console.log("MENSA: " + getExtraDoubleContentArtifacts.children[extraItemsCounter].className)

                                                                                    // TERMINATE =============
                                                                                    // ///////////////////////

                                                                                        getExtraDoubleContentArtifacts.removeChild(getExtraDoubleContentArtifacts.children[extraItemsCounter])

                                                                            }

                                                                    }

                                                                    console.log("YEEPERS: " + numberSelector)



                                                                    getCorrectAnswerImage.style = `
                                                                    
                                                                        width:100%;
                                                                        height:100px;
                                                                        background:url("/images/resultsImages/result${makeResultsBoxImages[numberSelector]}.jpg");
                                                                        box-shadow:0px 30px 30px -10px rgba(0,0,0,0.5);
                                                                        border-radius:8px;
                                                                        background-size:cover;
                                                                        background-repeat:no-repeat;
                                                                        background-position:center;
                                                                        transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;
                                                                    
                                                                    `


                                                                // UPDATE CARD HEADING xxxxxxxxxxxxxxxxxxxxxxxx
                                                                // ////////////////////////////////////////////

                                                                    getCardHeading.textContent = getCorrectAnswer

                                                        }, 50)



                                                    }





                                                // CARD CLICKER CREATION ==========
                                                // ////////////////////////////////

                                                    

                                                    function manageCardClickers (cardNumberSelector) {




                                                        var getCardBlockActual = document.querySelector(".scriptedCorrectAnswerBlockCardMainElement")

                                                        var getCardBlockerActual = document.querySelector(`.scriptedCorrectAnswerCardClicker${makeClassNumberStrings[cardNumberSelector]}`)


                                                            if ( getCardBlockerActual == null || getCardBlockerActual == undefined ) {




                                                                // RUN CLEAN UP PREVIOUS CLICKERS ===============
                                                                // //////////////////////////////////////////////

                                                                    for ( blockerCounter = 0; blockerCounter < getLengthOfQuestions; blockerCounter ++ ) {

                                                                        if ( 
                                                                            
                                                                                (document.querySelector(`.scriptedCorrectAnswerCardClicker${makeClassNumberStrings[blockerCounter]}`) != null || document.querySelector(`.scriptedCorrectAnswerCardClicker${makeClassNumberStrings[blockerCounter]}`) != undefined) &&

                                                                                ( blockerCounter != cardNumberSelector )
                                                                            
                                                                            ) 
                                                                            
                                                                        {


                                                                            getCardBlockActual.removeChild(document.querySelector(`.scriptedCorrectAnswerCardClicker${makeClassNumberStrings[blockerCounter]}`))

                                                                            console.log("THIS ONE LIVES, KILLING IT: " + blockerCounter)

                                                                        }

                                                                    }




                                                                // PLACE FRESH CLICKER ==========================
                                                                // //////////////////////////////////////////////


                                                                    var createClickerBlock = document.createElement("div")
                                                                    createClickerBlock.className = `scriptedCorrectAnswerCardClicker${makeClassNumberStrings[cardNumberSelector]}`


                                                                        createClickerBlock.style = `
                                                                        
                                                                            width:100%;
                                                                            height:100%;
                                                                            top:0;
                                                                            left:0;
                                                                            right:0;
                                                                            bottom:0;
                                                                            margin:auto;
                                                                            z-index:1;
                                                                            opacity:1;
                                                                            position:absolute;
                                                                            /*background:#2C2C2C;*/
                                                                            transition:all 600ms ease;
                                                                            -o-transition:all 600ms ease;
                                                                            -ms-transition:all 600ms ease;
                                                                            -moz-transition:all 600ms ease;
                                                                            -webkit-transition:all 600ms ease;
                                                                        
                                                                        `



                                                                            createClickerBlock.addEventListener("click", function () {

                                                                                window.open(`${collectLinks[cardNumberSelector]}`, `_blank`)

                                                                            })


                                                                                getCardBlockActual.appendChild(createClickerBlock)

                                                            }




                                                    }









                                                // CHECK IF QUESTIONS FIELD IS EMPTY OR NOT
                                                // ///////////////////////////////

                                                    if ( (getQuestionAskedInInput.value).toLowerCase() == "" || (getQuestionAskedInInput.value).toLowerCase().length < 5 ) {

                                                        // IF EMPTY FIELD --------
                                                        // ///////////////////////

                                                            if ( (getQuestionAskedInInput.value).toLowerCase() == "" ) {

                                                                console.log("EMPTY STRING...")


                                                                    setTimeout(() => {


                                                                        // GET TEXT BOX INPUT FIELD 
                                                                        // ///////////////////////////////
                
                                                                            var getResultsSplurb = document.querySelector(".scriptedRelevantAnswersBlurbActual")
        
                                                                            getResultsSplurb.textContent = "Even with my infinite knowledge, I'm sure I can't answer a question that's not asked."

                                                                                // CORRECT CONTENT POPULATION
                                                                                // //////////////////////

                                                                                    rectifyInfoPopulation()


                                                                    }, 50)

                                                            }

                                                        // IF FIELD LESS THAN FIVE
                                                        // ///////////////////////

                                                            else if ( (getQuestionAskedInInput.value).toLowerCase().length < 5 ) {

                                                                console.log("LOW NUMBER STRING...")


                                                                    setTimeout(() => {


                                                                        // GET TEXT BOX INPUT FIELD 
                                                                        // ///////////////////////////////
                
                                                                            var getResultsSplurb = document.querySelector(".scriptedRelevantAnswersBlurbActual")
        
                                                                            getResultsSplurb.textContent = "I'm going to need a little bit more context for that one, can you try adding more words so I can better understand your request?"

                                                                                // CORRECT CONTENT POPULATION
                                                                                // //////////////////////

                                                                                    rectifyInfoPopulation()


                                                                    }, 50)
                                                                
                                                            }

                                                    }





                                                // IF FIELDS PASS REQUIREMENTS 
                                                // ///////////////////////////////

                                                    else {


                                                        // GET TEXT BOX INPUT FIELD 
                                                        // ///////////////////////////////

                                                            var getResultsSplurb = document.querySelector(".scriptedRelevantAnswersBlurbActual")


                                                        // CHECK IF INPUT FIELD HAS CERTAIN QUESTION 
                                                        // ///////////////////////////////
        
                                                            // IF QUESTION ONE IS ASKED 
                                                            // ///////////////////////////
        
                                                                if ( 
                                                                    
                                                                        collectQuestions[0].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[0]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {

                                                                    console.log("QUESTION ONE LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()
                                                                                
                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(0)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(0)

                                                                            


        
                                                                }
        
                                                            // IF QUESTION TWO IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[1].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[1]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION TWO LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(1)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(1)


        
                                                                }
        
                                                            // IF QUESTION THREE IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[2].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[2]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION THREE LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(2)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(2)


        
                                                                }
        
                                                            // IF QUESTION FOUR IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[3].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[3]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION FOUR LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(3)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(3)


        
                                                                }
        
                                                            // IF QUESTION FIVE IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[4].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[4]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION FIVE LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(4)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(4)


        
                                                                }
        
                                                            // IF QUESTION SIX IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[5].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[5]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION SIX LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(5)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(5)


        
                                                                }
        
                                                            // IF QUESTION SEVEN IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[6].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[6]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION SEVEN LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(6)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(6)


        
                                                                }
        
                                                            // IF QUESTION EIGHT IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[7].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[7]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION EIGHT LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(7)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(7)


        
                                                                }
        
                                                            // IF QUESTION NINE IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[8].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[8]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION NINE LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(8)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(8)


        
                                                                }
        
                                                            // IF QUESTION TEN IS ASKED 
                                                            // ///////////////////////////

                                                                else if ( 
                                                                    
                                                                        collectQuestions[9].includes((getQuestionAskedInInput.value).toLowerCase()) || 
                                                                        (getQuestionAskedInInput.value).toLowerCase() == `${collectQuestions[9]}`
                                                                    
                                                                    ) 
                                                                    
                                                                {


                                                                    
                                                                    console.log("QUESTION TEN LOAD UP")

                                                                    runGeneralSearch()

                                                                    rectifyInfoBlockToDefaultPopulated()

                                                                        // CHECK IF RESIZER ALREADY EXISTS THEN DONT ADD NEW BLOCK
                                                                        // ///////////////////////////////////////////////////////

                                                                            if ( document.querySelector(".scriptedResultsMainSectionContentResizer") == null || document.querySelector(".scriptedResultsMainSectionContentResizer") == undefined ) {

                                                                                buildCorrectAnswerResultMainSection()

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }

                                                                            else {

                                                                                console.log("ALREADY EXISTS...")

                                                                                buildCorrectAnswerResultsBlurbText()
            
                                                                                buildCorrectAnswerResultsCorrectItemBlock(numberForInputQuestionAsked)

                                                                            }



                                                                        // RUN DAMAGE CONTROL MEASURES FOR DOUBLE BLOCK CREATION
                                                                        // /////////////////////////////////////////////////////

                                                                            artifactsDamageControl(9)


                                                                        // UPDATE CARD EVENTS HANDLERS xxxxxxxxxxxxxxxxxxxxxxxxx
                                                                        // /////////////////////////////////////////////////////

                                                                            manageCardClickers(9)


        
                                                                }










        
                                                            // IF QUESTION IS NEW OR NOT UNDERSTOOD
                                                            // ///////////////////////////

                                                                // IF QUESTION ONE NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[0].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[0]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD ONE:")

                                                                        setTimeout(() => {


                                                                            var getSplurbTextCurrent = document.querySelector(".scriptedRelevantAnswersBlurbActual")
                                                                            getSplurbTextCurrent.textContent = "I'll be honest, I have not learned that one yet, ask me again in a few minutes. Let's try another question in the meanwhile."
        
                                                                                // CORRECT CONTENT POPULATION
                                                                                // //////////////////////
        
                                                                                    rectifyInfoPopulation()


                                                                        }, 50)
                                                                        
                                                                    }

                                                                // IF QUESTION TWO NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[1].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[1]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD TWO:")

                                                                        setTimeout(() => {


                                                                            var getSplurbTextCurrent = document.querySelector(".scriptedRelevantAnswersBlurbActual")
                                                                            getSplurbTextCurrent.textContent = "oh boy, this is embarassing, I also don't know that one either ask me again in a few minutes. Let's try another question in the meanwhile."
        
                                                                                // CORRECT CONTENT POPULATION
                                                                                // //////////////////////
        
                                                                                    rectifyInfoPopulation()


                                                                        }, 50)
                                                                        
                                                                    }

                                                                // IF QUESTION THREE NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[2].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[2]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD THREE:")

                                                                        buildCorrectAnswerResultsBlurbText()

                                                                        getResultsSplurb.textContent = "please, don't be mad, but this one doesn't seem to be in my memory bank yet. Let's try another question in the meanwhile."
    
                                                                            // CORRECT CONTENT POPULATION
                                                                            // //////////////////////
    
                                                                                rectifyInfoPopulation()
                                                                        
                                                                    }

                                                                // IF QUESTION FOUR NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[3].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[3]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD FOUR:")

                                                                        buildCorrectAnswerResultsBlurbText()

                                                                        getResultsSplurb.textContent = "lets agree to blame energy for this one, because that answer doesn't seem to be around here, ill have another look in a second. Let's try another question in the meanwhile."
    
                                                                            // CORRECT CONTENT POPULATION
                                                                            // //////////////////////
    
                                                                                rectifyInfoPopulation()
                                                                        
                                                                    }

                                                                // IF QUESTION FIVE NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[4].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[4]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD FIVE:")

                                                                        buildCorrectAnswerResultsBlurbText()

                                                                        getResultsSplurb.textContent = "you are really stumping today because I don't know that one. Let's try another question in the meanwhile."
    
                                                                            // CORRECT CONTENT POPULATION
                                                                            // //////////////////////
    
                                                                                rectifyInfoPopulation()
                                                                        
                                                                    }

                                                                // IF QUESTION SIX NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[5].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[5]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD SIX:")

                                                                        buildCorrectAnswerResultsBlurbText()

                                                                        getResultsSplurb.textContent = "I'm not making excuses, I promise, but that answer seems to be missing from my memory collection. Let's try another question in the meanwhile."
    
                                                                            // CORRECT CONTENT POPULATION
                                                                            // //////////////////////
    
                                                                                rectifyInfoPopulation()
                                                                        
                                                                    }

                                                                // IF QUESTION SEVEN NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[6].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[6]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD SEVEN:")

                                                                        buildCorrectAnswerResultsBlurbText()

                                                                        getResultsSplurb.textContent = "hackers got into my brain and are currently stealing info, let me go and deal with them quickly, Ill be right back. Let's try another question in the meanwhile."
    
                                                                            // CORRECT CONTENT POPULATION
                                                                            // //////////////////////
    
                                                                                rectifyInfoPopulation()
                                                                        
                                                                    }

                                                                // IF QUESTION EIGHT NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[7].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[7]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD EIGHT:")

                                                                        buildCorrectAnswerResultsBlurbText()

                                                                        getResultsSplurb.textContent = "I think that might be a new topic as I'm not yet clued up about that answer, let me read some books and get back to you. Let's try another question in the meanwhile."
    
                                                                            // CORRECT CONTENT POPULATION
                                                                            // //////////////////////
    
                                                                                rectifyInfoPopulation()
                                                                        
                                                                    }

                                                                // IF QUESTION NINE NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[8].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[8]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD NINE:")

                                                                        buildCorrectAnswerResultsBlurbText()

                                                                        getResultsSplurb.textContent = "I think i might not have clearance to know that much about this topic, let me go and ask my superior for some permissions. Let's try another question in the meanwhile."
    
                                                                            // CORRECT CONTENT POPULATION
                                                                            // //////////////////////
    
                                                                                rectifyInfoPopulation()
                                                                        
                                                                    }

                                                                // IF QUESTION NINE NOT UNDERSTOOD
                                                                // //////////////////////////////

                                                                    else if ( 
                                                                        
                                                                            collectQuestions[9].includes((getQuestionAskedInInput.value).toLowerCase()) == false || 
                                                                            (getQuestionAskedInInput.value).toLowerCase() != `${collectQuestions[9]}`
                                                                        
                                                                        ) 
                                                                        
                                                                    {

                                                                        console.log("NOT UNDERSTOOD TEN:")

                                                                        buildCorrectAnswerResultsBlurbText()

                                                                        getResultsSplurb.textContent = "goodness, gracious, I think I accidentally confused the topic with another topic, let me quickly sort this out. Let's try another question in the meanwhile."
    
                                                                            // CORRECT CONTENT POPULATION
                                                                            // //////////////////////
    
                                                                                rectifyInfoPopulation()
                                                                        
                                                                    }










        
                                                            // IF QUESTION IS NEW OR NOT UNDERSTOOD
                                                            // ///////////////////////////

                                                                else {

                                                                    console.log("QUESTION NOT UNDERSTOOD")

                                                                    runGeneralSearch()

                                                                    buildCorrectAnswerResultsBlurbText()

                                                                    getResultsSplurb.textContent = "I'll be honest, I have not learned that one yet, ask me again in a few minutes. Let's try another question in the meanwhile."

                                                                        // CORRECT CONTENT POPULATION
                                                                        // //////////////////////

                                                                            rectifyInfoPopulation()
        
                                                                }


                                                    }

                                                    

                                            }




















                        


                                        // BUILD MOST RELEVENT ITEM CONTENT BLOCK ==
                                        // ///////////////////////////////////////

                                            function buildCorrectAnswerResultsCorrectItemBlock (numberSelect) {

                                                var getActualRelevantAnswer = document.querySelector(".scriptedCorrectAnswersBlockMain")

                                                var getRelevantAnswerActualContentBlock = document.querySelector(".scriptedCorrectAnswerMainSectionContainer")


                                                    if ( getActualRelevantAnswer == null || getActualRelevantAnswer == undefined ) {

                                                        var createCorrectAnswersBlockMain = document.createElement("div")
                                                        createCorrectAnswersBlockMain.className = "scriptedCorrectAnswersBlockMain"



                                                            // INFO CARD MAIN ----
                                                            // ///////////////////

                                                                var createCorrectAnswerBlockCardMainElement = document.createElement("div")
                                                                createCorrectAnswerBlockCardMainElement.className = "scriptedCorrectAnswerBlockCardMainElement"

                                                                    var createCorrectAnswerBlockCardMainElementContentResizer = document.createElement("div")
                                                                    createCorrectAnswerBlockCardMainElementContentResizer.className = "scriptedCorrectAnswerBlockCardMainElementContentResizer"



                                                                        // INFO CARD HEADER SECTION 
                                                                        // ////////////////////////

                                                                            var createCorrectAnswerBlockCardMainElementContentHeaderContainer = document.createElement("div")
                                                                            createCorrectAnswerBlockCardMainElementContentHeaderContainer.className = "scriptedCorrectAnswerBlockCardMainElementContentHeaderContainer"

                                                                                var createCorrectAnswerBlockCardMainElementContentHeaderTextActual = document.createElement("div")
                                                                                createCorrectAnswerBlockCardMainElementContentHeaderTextActual.className = "scriptedCorrectAnswerBlockCardMainElementContentHeaderTextActual"

                                                                    

                                                                        // INFO CARD IMAGE SECTION 
                                                                        // ////////////////////////

                                                                            var createCorrectAnswerBlockCardMainElementContentBodyImageContainer = document.createElement("div")
                                                                            createCorrectAnswerBlockCardMainElementContentBodyImageContainer.className = "scriptedCorrectAnswerBlockCardMainElementContentBodyImageContainer"

                                                                    

                                                                        // INFO CARD GO BUTTON SECTION 
                                                                        // ////////////////////////

                                                                            var createCorrectAnswerBlockCardMainElementContentGoButtonContainer = document.createElement("div")
                                                                            createCorrectAnswerBlockCardMainElementContentGoButtonContainer.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonContainer"

                                                                    

                                                                                // GO BUTTON TEXT SIDE
                                                                                // ////////////////////////

                                                                                    var createCorrectAnswerBlockCardMainElementContentGoButtonTextSide = document.createElement("div")
                                                                                    createCorrectAnswerBlockCardMainElementContentGoButtonTextSide.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonTextSide"

                                                                                        var createCorrectAnswerBlockCardMainElementContentGoButtonTextActual = document.createElement("div")
                                                                                        createCorrectAnswerBlockCardMainElementContentGoButtonTextActual.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonTextActual"

                                                                    

                                                                                // GO BUTTON BUTTON SIDE
                                                                                // ////////////////////////

                                                                                    var createCorrectAnswerBlockCardMainElementContentGoButtonButtonSide = document.createElement("div")
                                                                                    createCorrectAnswerBlockCardMainElementContentGoButtonButtonSide.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonButtonSide"

                                                                                        var createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemContainer = document.createElement("div")
                                                                                        createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemContainer.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonButtonItemContainer"

                                                                                            var createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconMover = document.createElement("div")
                                                                                            createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconMover.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconMover"

                                                                                                var createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineOne = document.createElement("div")
                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineOne.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineOne"

                                                                                                var createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineTwo = document.createElement("div")
                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineTwo.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineTwo"

                                                                                                var createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineThree = document.createElement("div")
                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineThree.className = "scriptedCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineThree"





















                                                        createCorrectAnswersBlockMain.style = `
                                                        
                                                            width:100%;
                                                            position:relative;
                                                            margin-top:20px;
                                                            transition:all 600ms ease;
                                                            -o-transition:all 600ms ease;
                                                            -ms-transition:all 600ms ease;
                                                            -moz-transition:all 600ms ease;
                                                            -webkit-transition:all 600ms ease;

                                                        `


                                                            // INFO CARD MAIN ----
                                                            // ///////////////////

                                                                createCorrectAnswerBlockCardMainElement.style = `
                                                                
                                                                    width:100%;
                                                                    cursor:pointer;
                                                                    position:relative;
                                                                    background:#FFFFFF;
                                                                    border-radius:10px;
                                                                    box-shadow:0px 30px 20px -10px rgba(0,0,0,0.2);
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                                    createCorrectAnswerBlockCardMainElementContentResizer.style = `
                                                                    
                                                                        width:90%;
                                                                        top:0;
                                                                        left:0;
                                                                        right:0;
                                                                        bottom:0;
                                                                        margin:auto;
                                                                        padding:10px 0px;
                                                                        position:relative;
                                                                        transition:all 600ms ease;
                                                                        -o-transition:all 600ms ease;
                                                                        -ms-transition:all 600ms ease;
                                                                        -moz-transition:all 600ms ease;
                                                                        -webkit-transition:all 600ms ease;

                                                                    `

                                                                        // INFO CARD HEADER SECTION 
                                                                        // ////////////////////////

                                                                            createCorrectAnswerBlockCardMainElementContentHeaderContainer.style = `
                                                                            
                                                                                width:100%;
                                                                                transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;

                                                                            `

                                                                                createCorrectAnswerBlockCardMainElementContentHeaderTextActual.style = `
                                                                                
                                                                                    width:100%;
                                                                                    color:#2D3E4D;
                                                                                    padding:5px 0px 15px 0px;
                                                                                    font-size:11px;
                                                                                    text-align:left;
                                                                                    font-weight:900;
                                                                                    letter-spacing:2px;
                                                                                    font-family:arial, sans-serif;
                                                                                    text-transform:uppercase;
                                                                                    transition:all 600ms ease;
                                                                                    -o-transition:all 600ms ease;
                                                                                    -ms-transition:all 600ms ease;
                                                                                    -moz-transition:all 600ms ease;
                                                                                    -webkit-transition:all 600ms ease;

                                                                                `



                                                                                

                                                                        // INFO CARD IMAGE SECTION 
                                                                        // ////////////////////////

                                                                            createCorrectAnswerBlockCardMainElementContentBodyImageContainer.style = `
                                                                            
                                                                                width:100%;
                                                                                height:100px;
                                                                                background:url("/images/resultsImages/result${makeResultsBoxImages[numberSelect]}.jpg");
                                                                                box-shadow:0px 30px 30px -10px rgba(0,0,0,0.5);
                                                                                border-radius:8px;
                                                                                background-size:cover;
                                                                                background-repeat:no-repeat;
                                                                                background-position:center;
                                                                                transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;

                                                                            `

                                                                    

                                                                        // INFO CARD GO BUTTON SECTION 
                                                                        // ////////////////////////

                                                                            createCorrectAnswerBlockCardMainElementContentGoButtonContainer.style = `
                                                                            
                                                                                width:100%;
                                                                                height:40px;
                                                                                padding:10px 0px 0px 0px;
                                                                                position:relative;
                                                                                transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;
                                                                            
                                                                            `

                                                                                // GO BUTTON TEXT SIDE
                                                                                // ////////////////////////

                                                                                    createCorrectAnswerBlockCardMainElementContentGoButtonTextSide.style = `
                                                                                    
                                                                                        width:80%;
                                                                                        height:40px;
                                                                                        float:left;
                                                                                        position:relative;
                                                                                        transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;

                                                                                    `

                                                                                        createCorrectAnswerBlockCardMainElementContentGoButtonTextActual.style = `
                                                                                        
                                                                                            width:100%;
                                                                                            top:0;
                                                                                            left:0;
                                                                                            right:0;
                                                                                            bottom:0;
                                                                                            margin:auto;
                                                                                            position:absolute;
                                                                                            font-size:12px;
                                                                                            text-align:left;
                                                                                            line-height:40px;
                                                                                            font-family:arial, sans-serif;
                                                                                            letter-spacing:3px;
                                                                                            text-transform:uppercase;
                                                                                            transition:all 600ms ease;
                                                                                            -o-transition:all 600ms ease;
                                                                                            -ms-transition:all 600ms ease;
                                                                                            -moz-transition:all 600ms ease;
                                                                                            -webkit-transition:all 600ms ease;

                                                                                        `

                                                                                // GO BUTTON BUTTON SIDE
                                                                                // ////////////////////////

                                                                                    createCorrectAnswerBlockCardMainElementContentGoButtonButtonSide.style = `
                                                                                    
                                                                                        width:20%;
                                                                                        height:40px;
                                                                                        float:left;
                                                                                        position:relative;
                                                                                        transition:all 600ms ease;
                                                                                        -o-transition:all 600ms ease;
                                                                                        -ms-transition:all 600ms ease;
                                                                                        -moz-transition:all 600ms ease;
                                                                                        -webkit-transition:all 600ms ease;

                                                                                    `

                                                                                        createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemContainer.style = `
                                                                                        
                                                                                            width:40px;
                                                                                            height:40px;
                                                                                            top:0;
                                                                                            right:0px;
                                                                                            bottom:0;
                                                                                            margin:auto;
                                                                                            cursor:pointer;
                                                                                            position:absolute;
                                                                                            background:#2D3D4C;
                                                                                            border-radius:1000px;
                                                                                            transition:all 600ms ease;
                                                                                            -o-transition:all 600ms ease;
                                                                                            -ms-transition:all 600ms ease;
                                                                                            -moz-transition:all 600ms ease;
                                                                                            -webkit-transition:all 600ms ease;
                                                                                        
                                                                                        `

                                                                                            createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconMover.style = `
                                                                                            
                                                                                                width:25px;
                                                                                                height:25px;
                                                                                                top:0;
                                                                                                left:0;
                                                                                                right:0;
                                                                                                bottom:0;
                                                                                                margin:auto;
                                                                                                position:absolute;
                                                                                                transition:all 600ms ease;
                                                                                                -o-transition:all 600ms ease;
                                                                                                -ms-transition:all 600ms ease;
                                                                                                -moz-transition:all 600ms ease;
                                                                                                -webkit-transition:all 600ms ease;
                                                                                            
                                                                                            `

                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineOne.style = `
                                                                                                
                                                                                                    width:10px;
                                                                                                    height:3px;
                                                                                                    top:-6px;
                                                                                                    left:8px;
                                                                                                    right:0;
                                                                                                    bottom:0;
                                                                                                    margin:auto;
                                                                                                    position:absolute;
                                                                                                    background:#FFFFFF;
                                                                                                    transform:rotateZ(45deg);
                                                                                                    border-radius:1000px;
                                                                                                    transition:all 600ms ease;
                                                                                                    -o-transition:all 600ms ease;
                                                                                                    -ms-transition:all 600ms ease;
                                                                                                    -moz-transition:all 600ms ease;
                                                                                                    -webkit-transition:all 600ms ease;
                                                                                                
                                                                                                `

                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineTwo.style = `
                                                                                                
                                                                                                    width:15px;
                                                                                                    height:3px;
                                                                                                    top:0;
                                                                                                    left:0;
                                                                                                    right:0;
                                                                                                    bottom:0;
                                                                                                    margin:auto;
                                                                                                    position:absolute;
                                                                                                    background:#FFFFFF;
                                                                                                    transform:rotateZ(0deg);
                                                                                                    border-radius:1000px;
                                                                                                    transition:all 600ms ease;
                                                                                                    -o-transition:all 600ms ease;
                                                                                                    -ms-transition:all 600ms ease;
                                                                                                    -moz-transition:all 600ms ease;
                                                                                                    -webkit-transition:all 600ms ease;
                                                                                                
                                                                                                `

                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineThree.style = `
                                                                                                
                                                                                                    width:10px;
                                                                                                    height:3px;
                                                                                                    top:5px;
                                                                                                    left:8px;
                                                                                                    right:0;
                                                                                                    bottom:0;
                                                                                                    margin:auto;
                                                                                                    position:absolute;
                                                                                                    background:#FFFFFF;
                                                                                                    transform:rotateZ(-45deg);
                                                                                                    border-radius:1000px;
                                                                                                    transition:all 600ms ease;
                                                                                                    -o-transition:all 600ms ease;
                                                                                                    -ms-transition:all 600ms ease;
                                                                                                    -moz-transition:all 600ms ease;
                                                                                                    -webkit-transition:all 600ms ease;
                                                                                                
                                                                                                `





















                                                        // ADD TEXT FOR TEXT BLOCKS 
                                                        // ////////////////////////


                                                            // INFO CARD HEADER SECTION 
                                                            // ////////////////////////

                                                                createCorrectAnswerBlockCardMainElementContentHeaderTextActual.textContent = `${collectAnswers[numberSelect]}`

                                                            // INFO CARD IMAGE SECTION 
                                                            // ////////////////////////

                                                                // GO BUTTON TEXT SIDE
                                                                // ////////////////////////

                                                                    createCorrectAnswerBlockCardMainElementContentGoButtonTextActual.textContent = "read article"





















                                                        // ADD EVENT LISTENERS FOR CARD BUTTON 
                                                        // ////////////////////////

                                                            // INFO CARD GO BUTTON SECTION 
                                                            // ////////////////////////

                                                                // GO BUTTON 
                                                                // ////////////////////////





                                                                    // FOR MOUSE OVER 
                                                                    // ////////////////////

                                                                        createCorrectAnswerBlockCardMainElement.addEventListener("mouseover", function () {

                                                                            createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemContainer.style = `
                                                                            
                                                                                width:40px;
                                                                                height:40px;
                                                                                top:0;
                                                                                right:-5px;
                                                                                bottom:0;
                                                                                margin:auto;
                                                                                cursor:pointer;
                                                                                position:absolute;
                                                                                background:#2D3D4C;
                                                                                border-radius:1000px;
                                                                                transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;

                                                                            `

                                                                        })




                                                                    // FOR MOUSE OUT 
                                                                    // ////////////////////

                                                                        createCorrectAnswerBlockCardMainElement.addEventListener("mouseout", function () {

                                                                            createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemContainer.style = `
                                                                            
                                                                                width:40px;
                                                                                height:40px;
                                                                                top:0;
                                                                                right:0px;
                                                                                bottom:0;
                                                                                margin:auto;
                                                                                cursor:pointer;
                                                                                position:absolute;
                                                                                background:#2D3D4C;
                                                                                border-radius:1000px;
                                                                                transition:all 600ms ease;
                                                                                -o-transition:all 600ms ease;
                                                                                -ms-transition:all 600ms ease;
                                                                                -moz-transition:all 600ms ease;
                                                                                -webkit-transition:all 600ms ease;

                                                                            `

                                                                        })





















                                                        getRelevantAnswerActualContentBlock.appendChild(createCorrectAnswersBlockMain)


                                                            // INFO CARD MAIN ----
                                                            // ///////////////////

                                                                createCorrectAnswersBlockMain.appendChild(createCorrectAnswerBlockCardMainElement)

                                                                    createCorrectAnswerBlockCardMainElement.appendChild(createCorrectAnswerBlockCardMainElementContentResizer)


                                                                        // INFO CARD HEADER SECTION 
                                                                        // ////////////////////////

                                                                            createCorrectAnswerBlockCardMainElementContentResizer.appendChild(createCorrectAnswerBlockCardMainElementContentHeaderContainer)
                                                                            
                                                                                createCorrectAnswerBlockCardMainElementContentHeaderContainer.appendChild(createCorrectAnswerBlockCardMainElementContentHeaderTextActual)

                                                                    

                                                                        // INFO CARD IMAGE SECTION 
                                                                        // ////////////////////////

                                                                            createCorrectAnswerBlockCardMainElementContentResizer.appendChild(createCorrectAnswerBlockCardMainElementContentBodyImageContainer)

                                                                    

                                                                        // INFO CARD IMAGE SECTION 
                                                                        // ////////////////////////

                                                                            createCorrectAnswerBlockCardMainElementContentResizer.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonContainer)

                                                                    

                                                                                // GO BUTTON TEXT SIDE
                                                                                // ////////////////////////
                                                                            
                                                                                    createCorrectAnswerBlockCardMainElementContentGoButtonContainer.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonTextSide)

                                                                                        createCorrectAnswerBlockCardMainElementContentGoButtonTextSide.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonTextActual)

                                                                    

                                                                                // GO BUTTON BUTTON SIDE
                                                                                // ////////////////////////
                                                                            
                                                                                    createCorrectAnswerBlockCardMainElementContentGoButtonContainer.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonButtonSide)

                                                                                        createCorrectAnswerBlockCardMainElementContentGoButtonButtonSide.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemContainer)

                                                                                            createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemContainer.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconMover)

                                                                                                

                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconMover.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineOne)

                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconMover.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineTwo)

                                                                                                createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconMover.appendChild(createCorrectAnswerBlockCardMainElementContentGoButtonButtonItemIconLineThree)




                                                    } else {

                                                        
                                                    }

                                                var getMainAttachmentContentContainer = document.querySelector(".scriptedCorrectAnswerMainSectionContainer")

                                            }

























                    // BUILD DOOP RESULTS SELECTOR SECTION ===========================
                    // ///////////////////////////////////////////////////////////////

                        function buildDoopAnswersResultMainSection () {


                            var getResultsResizerContainer = document.querySelector(".scriptedResultsMainSectionContentResizer")


                                var createDoopAnswersMainSectionContainer = document.createElement("div")
                                createDoopAnswersMainSectionContainer.className = "scriptedDoopAnswersMainSectionContainer"

                                    var createDoopAnswersHeadlineContainer = document.createElement("div")
                                    createDoopAnswersHeadlineContainer.className = "scriptedDoopAnswersHeadlineContainer"

                                        var createDoopAnswersHeadlineActual = document.createElement("div")
                                        createDoopAnswersHeadlineActual.className = "scriptedDoopAnswersHeadlineActual"


                                        // STYLE MAIN RESULTS BLOCK ======================
                                        // ///////////////////////////////////////////////

                                            createDoopAnswersMainSectionContainer.style = `
                                            
                                                width:100%;
                                                height:100%;
                                                padding:0px 0px;
                                                position:relative;
                                                background:#350324;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                                createDoopAnswersHeadlineContainer.style = `
                                                
                                                    width:100%;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                                    createDoopAnswersHeadlineActual.style = `
                                                    
                                                        width:100%;
                                                        color:#3A5668;
                                                        font-size:12px;
                                                        text-align:left;
                                                        font-weight:800;
                                                        font-family:arial;
                                                        letter-spacing:2px;
                                                        text-transform:uppercase;
                                                        transition:all 600ms ease;
                                                        -o-transition:all 600ms ease;
                                                        -ms-transition:all 600ms ease;
                                                        -moz-transition:all 600ms ease;
                                                        -webkit-transition:all 600ms ease;

                                                    `




                                        // STYLE MAIN RESULTS BLOCK //////////////
                                        // ///////////////////////////////////////

                                            createDoopAnswersHeadlineActual.textContent = "other answers"

                                            // APPEND CHILDREN TO RESPECTED PARENTS //
                                            // ///////////////////////////////////////

                                                getResultsResizerContainer.appendChild(createDoopAnswersMainSectionContainer) 

                                                    createDoopAnswersMainSectionContainer.appendChild(createDoopAnswersHeadlineContainer)

                                                        createDoopAnswersHeadlineContainer.appendChild(createDoopAnswersHeadlineActual)


                        }



                        


                                        // BUILD DOOP RESULTS MAIN CONTENT SECTION ==
                                        // ///////////////////////////////////////

                                            function buildCDoopAnswerResultsMainContainer () {


                                                var getResultsResizerContainer = document.querySelector(".scriptedResultsMainSectionContentResizer")


                                                var createDoopsResultsMainContentContainer = document.createElement("div")
                                                createDoopsResultsMainContentContainer.className = "scriptedDoopsResultsMainContentContainer"

                                                    var createDoopsResultsMainContentResizer = document.createElement("div")
                                                    createDoopsResultsMainContentResizer.className = "scriptedDoopsResultsMainContentResizer"


                                                        // STYLE MAIN RESULTS BLOCK ======================
                                                        // ///////////////////////////////////////////////


                                                            createDoopsResultsMainContentContainer.style = `
                                                            
                                                                width:100%;
                                                                margin-top:20px;
                                                                position:relative;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                                createDoopsResultsMainContentResizer.style = `
                                                                
                                                                    width:100%;
                                                                    height:100%;
                                                                    top:0;
                                                                    left:0;
                                                                    right:0;
                                                                    bottom:0;
                                                                    position:absolute;
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;
                                                                
                                                                `

                                                                    // APPEND CHILDREN TO RESPECTED PARENTS //
                                                                    // ///////////////////////////////////////


                                                                        getResultsResizerContainer.appendChild(createDoopsResultsMainContentContainer)

                                                                            createDoopsResultsMainContentContainer.appendChild(createDoopsResultsMainContentResizer)





                                            }

                    




























// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AUTORUNS ==============================================================================================================================
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // AUTORUN FUNCTIONS FOR NAV BAR SECTION =========================================
    // ///////////////////////////////////////////////////////////////////////////////

    // AUTORUN FUNCTIONS FOR SEARCH BAR SECTION ======================================
    // ///////////////////////////////////////////////////////////////////////////////

        // FOR GET ANSWERS AND RUN POPULATIONS ---------------------------------------
        // ///////////////////////////////////////////////////////////////////////////

            getQuestions()

    // AUTORUN FUNCTIONS FOR RESULTS SECTION =========================================
    // ///////////////////////////////////////////////////////////////////////////////







// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENTS FOR ENTIRE DOCUMENT ============================================================================================================
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // EVENTS FOR NAV BAR SECTION ====================================================
    // ///////////////////////////////////////////////////////////////////////////////

    // EVENTS FOR SEARCH BAR SECTION =================================================
    // ///////////////////////////////////////////////////////////////////////////////

        // INITIATE SEARCH ///////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////

            getSearchBarSearchButton.addEventListener("click", function () {

                runSearch()

            })

    // EVENTS FOR RESULTS SECTION ====================================================
    // ///////////////////////////////////////////////////////////////////////////////