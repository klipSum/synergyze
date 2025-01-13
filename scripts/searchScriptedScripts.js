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

            var getSearchButton = document.querySelector(".scriptedMainSearchElementSearchBarButtonSideClickerActual")
            var getSearchButtonShell = document.querySelector(".scriptedMainSearchElementSearchBarButtonSideElementContainer")

            var getSearchWall = document.querySelector(".scriptedLoadingScreenContainer")
            var gteSearchWallImage = document.querySelector(".scriptedLoadingScreenContentLoadBoxImageActual")

            var getInputElement = document.querySelector(".scriptedMainSearchElementSearchBarElementInputActual")

        // VARIABLES FOR RESULTS SECTION ---------------------------------------------
        // ///////////////////////////////////////////////////////////////////////////

            var getResultsMainContainerBlock = document.querySelector(".scriptedResultsContainerMain")

            var getResultsSplurbBodyText = document.querySelector(".scriptedResultsSplurbBodyTextActual")

            var getResultsCardMainContainer = document.querySelector(".scriptedResultsCorrectAsnwerCardContainer")

                var getCardActual = document.querySelector(".scriptedResultsCorrectAsnwerCardActualCard")

            var getResultsUnkownCardBlock = document.querySelector(".scriptedResultsUnkownAsnwerCardContainer")







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

            var makeLoadingResultsStallArray = [500, 1000, 2000, 5000]
            var collectDescriptions = []
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
                "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",

                "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", 
                "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty",

                "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive", 
                "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine", "Fourty",

                "FourtyOne", "FourtyTwo", "FourtyThree", "FourtyFour", "FourtyFive", 
                "FourtySix", "FourtySeven", "FourtyEight", "FourtyNine", "Fifty",




                "FiftyOne", "FiftyTwo", "FiftyThree", "FiftyFour", "FiftyFive", 
                "FiftySix", "FiftySeven", "FiftyEight", "FiftyNine", "Sixty",

                "SixtyOne", "SixtyTwo", "SixtyThree", "SixtyFour", "SixtyFive", 
                "SixtySix", "SixtySeven", "SixtyEight", "SixtyNine", "Seventy",

                "SeventyOne", "SeventyTwo", "SeventyThree", "SeventyFour", "SeventyFive", 
                "SeventySix", "SeventySeven", "SeventyEight", "SeventyNine", "Eighty",

                "EightyOne", "EightyTwo", "EightyThree", "EightyFour", "EightyFive", 
                "EightySix", "EightySeven", "EightyEight", "EightyNine", "Ninety",

                "NinetyOne", "NinetyTwo", "NinetyThree", "NinetyFour", "NinetyFive", 
                "NinetySix", "NinetySeven", "NinetyEight", "NinetyNine", "OneHundred"

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
                "/images/responseImages/thinkingImages/thinkTen.gif",





                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif",





                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif",





                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif",





                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif",





                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif",





                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif",





                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif",





                "/images/responseImages/thinkingImages/thinkOne.gif",
                "/images/responseImages/thinkingImages/thinkTwo.gif",
                "/images/responseImages/thinkingImages/thinkThree.gif",
                "/images/responseImages/thinkingImages/thinkFour.gif",
                "/images/responseImages/thinkingImages/thinkFive.gif",

                "/images/responseImages/thinkingImages/thinkSix.gif",
                "/images/responseImages/thinkingImages/thinkSeven.gif",
                "/images/responseImages/thinkingImages/thinkEight.gif",
                "/images/responseImages/thinkingImages/thinkNine.gif",
                "/images/responseImages/thinkingImages/thinkTen.gif",





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
                "Six", "Seven", "Eight", "Nine", "Ten",

                "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",

                "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", 
                "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty",

                "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive", 
                "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine", "Fourty",

                "FourtyOne", "FourtyTwo", "FourtyThree", "FourtyFour", "FourtyFive", 
                "FourtySix", "FourtySeven", "FourtyEight", "FourtyNine", "Fifty",




                "FiftyOne", "FiftyTwo", "FiftyThree", "FiftyFour", "FiftyFive", 
                "FiftySix", "FiftySeven", "FiftyEight", "FiftyNine", "Sixty",

                "SixtyOne", "SixtyTwo", "SixtyThree", "SixtyFour", "SixtyFive", 
                "SixtySix", "SixtySeven", "SixtyEight", "SixtyNine", "Seventy",

                "SeventyOne", "SeventyTwo", "SeventyThree", "SeventyFour", "SeventyFive", 
                "SeventySix", "SeventySeven", "SeventyEight", "SeventyNine", "Eighty",

                "EightyOne", "EightyTwo", "EightyThree", "EightyFour", "EightyFive", 
                "EightySix", "EightySeven", "EightyEight", "EightyNine", "Ninety",

                "NinetyOne", "NinetyTwo", "NinetyThree", "NinetyFour", "NinetyFive", 
                "NinetySix", "NinetySeven", "NinetyEight", "NinetyNine", "OneHundred"

            ]

            var makeResultsColorSelector = [

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",


                

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F",

                "#2C2C2C", "#D97272", "#72A9D9", "#72D9A6", "#D9A272",
                "#7472D9", "#D972D0", "#D7D972", "#9F324A", "#80329F"

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
                "got that answer faster than you could blink."

            ]

            var makeUnkownResultsBlurb = [

                "I'll be honest, I have not learned that one yet, ask me again in a few minutes. Let's try another question in the meanwhile.",
                "oh boy, this is embarassing, I also don't know that one either ask me again in a few minutes. Let's try another question in the meanwhile.",
                "please, don't be mad, but this one doesn't seem to be in my memory bank yet. Let's try another question in the meanwhile.",
                "lets agree to blame energy for this one, because that answer doesn't seem to be around here, ill have another look in a second. Let's try another question in the meanwhile.",
                "you are really stumping today because I don't know that one. Let's try another question in the meanwhile.",

                "I'm not making excuses, I promise, but that answer seems to be missing from my memory collection. Let's try another question in the meanwhile.",
                "hackers got into my brain and are currently stealing info, let me go and deal with them quickly, Ill be right back. Let's try another question in the meanwhile.",
                "I think that might be a new topic as I'm not yet clued up about that answer, let me read some books and get back to you. Let's try another question in the meanwhile.",
                "I think I might not have clearance to know that much about this topic, let me go and ask my superior for some permissions. Let's try another question in the meanwhile.",
                "goodness, gracious, I think I accidentally confused the topic with another topic, let me quickly sort this out. Let's try another question in the meanwhile."

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

                            var getString = text

                            var splitString = getString.split(",")


                            for (pushCounter = 0; pushCounter < splitString.length; pushCounter ++) {

                                collectQuestions.push(`${splitString[pushCounter].toLowerCase()}`)

                                console.log("QUESTIONS COLLECTED: " + collectQuestions[pushCounter])

                            }

                        
                        })

                        

                            // RUN OTHER COLLECTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                            // ///////////////////////////////////////////////////////

                                getDescriptions()
                                getAnswers()
                                getSlogan()
                                getLinks()

                            

                }



                




                // COLLECT DESCRIPTIONS ==============================================
                // ///////////////////////////////////////////////////////////////////

                    function getDescriptions () {

                        // RETRIEVE CONTENTS AND STORE IN LOCAL MEMORY ...................
                        // ...............................................................
    
                            fetch("/dox/descriptions.txt")
                            .then(res => res.text())
                            .then((text) => {

                                var getString = text

                                var splitString = getString.split(",")


                                for (pushCounter = 0; pushCounter < splitString.length; pushCounter ++) {

                                    collectDescriptions.push(`${splitString[pushCounter].toLowerCase()}`)

                                    console.log("DESCRIPTIONS COLLECTED: " + collectDescriptions[pushCounter])

                                }
                                
                            
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

                                var getString = text

                                var splitString = getString.split(",")


                                for (pushCounter = 0; pushCounter < splitString.length; pushCounter ++) {

                                    collectAnswers.push(`${splitString[pushCounter].toLowerCase()}`)

                                    console.log("ANSWERS COLLECTED: " + collectAnswers[pushCounter])

                                }
                                
                            
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

                                var getString = text

                                var splitString = getString.split(",")


                                for (pushCounter = 0; pushCounter < splitString.length; pushCounter ++) {

                                    collectSlogan.push(`${splitString[pushCounter].toLowerCase()}`)

                                    console.log("SLOGAN COLLECTED: " + collectSlogan[pushCounter])

                                }
                                
                            
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

                                var getString = text

                                var splitString = getString.split(",")


                                for (pushCounter = 0; pushCounter < splitString.length; pushCounter ++) {

                                    collectLinks.push(`${splitString[pushCounter].toLowerCase()}`)

                                    console.log("LINKS COLLECTED: " + collectLinks[pushCounter])

                                }
                                
                            
                            })


                    }












    // RUN FUNCTIONS FOR INPUT SATISFACTORY VALIDATION -------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        function runInputCheck () {

            // CHECK IF INPUT ELEMENT EMPTY AND REMOVE SEARCH BUTTON xxxxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////////////

                if ( getInputElement.value == "" || getInputElement.value.length < 3 ) {


                    // FIRSTLY REMOVE SEARCH FUNCTION AND BUTTON ===================
                    // /////////////////////////////////////////////////////////////

                        getSearchButton.style = `
                        
                            width:100%;
                            height:100%;
                            top:0;
                            bottom:0;
                            left:0;
                            right:0;
                            margin:auto;
                            cursor:pointer;
                            opacity:0;
                            display:none;
                            position:absolute;
                            background:#2c2c2c;
                            transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getSearchButtonShell.style = `
                        
                            left:0px;
                            right:0px;
                            margin:0px auto;
                            opacity:0.1;
                            padding:20px 40px;
                            display:inline-block;
                            position:relative;
                            background:#2D3D4C;
                            border-radius:1000px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                            // THEN CHECK WHICH VIOLATION WAS TRIGGERED ------------
                            // /////////////////////////////////////////////////////

                                // IF INPUT WAS EMPTY ==============================
                                // /////////////////////////////////////////////////

                                    if ( getInputElement.value == "" ) {


                                        // CHANGE SPLURB TEXT TO EMPTY FIELD CHECK x
                                        // /////////////////////////////////////////

                                            getResultsSplurbBodyText.textContent = "Even with my infinite knowledge, I'm sure I can't answer a question that's not asked. Please ask me something."


                                                // CHECK IF RESULTS CARD IS VISIBLE OR NOT
                                                // ///////////////////////////////////////

                                                    dissapearResultsCardBlock()


                                    }

                                // IF INPUT WAS EMPTY ==============================
                                // /////////////////////////////////////////////////

                                    else if ( getInputElement.value.length < 3 ) {


                                        // CHANGE SPLURB TEXT TO EMPTY FIELD CHECK x
                                        // /////////////////////////////////////////

                                            getResultsSplurbBodyText.textContent = "I'm going to need a little bit more context for that one, can you try adding more words so I can better understand your request?"


                                                // CHECK IF RESULTS CARD IS VISIBLE OR NOT
                                                // ///////////////////////////////////////

                                                    dissapearResultsCardBlock()


                                    }


                }

            // IF INPUT ELEMENT IS NOT EMPTY THEN RETURN SEARCH BUTTON xxxxxxxxxxxxxx
            // //////////////////////////////////////////////////////////////////////

                else {


                    // FIRSTLY RETURN SEARCH FUNCTION AND BUTTON ===================
                    // /////////////////////////////////////////////////////////////

                        getSearchButton.style = `
                        
                            width:100%;
                            height:100%;
                            top:0;
                            bottom:0;
                            left:0;
                            right:0;
                            margin:auto;
                            cursor:pointer;
                            opacity:0;
                            display:block;
                            position:absolute;
                            background:#2c2c2c;
                            transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        getSearchButtonShell.style = `
                        
                            left:0px;
                            right:0px;
                            margin:0px auto;
                            opacity:1;
                            padding:20px 40px;
                            display:inline-block;
                            position:relative;
                            background:#2D3D4C;
                            border-radius:1000px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                            // IF CONTEXT IS GREATER THAN 5 CHARACTERS /////////////
                            // /////////////////////////////////////////////////////

                                if ( getInputElement.value.length < 10 && getInputElement.value.length > 5 ) {

                                    getResultsSplurbBodyText.textContent = "OKAY! Now we are cooking, just a little bit more context if you can, if not, then hit the search button and let's get started"

                                }

                            // IF CONTEXT IS GREATER THAN 10 CHARACTERS /////////////
                            // /////////////////////////////////////////////////////

                                else if ( getInputElement.value.length < 20 && getInputElement.value.length > 10 ) {

                                    getResultsSplurbBodyText.textContent = "OH YES! okay thats a very good starting point! hit search to confirm your query, and I'll get your answer ready."

                                }

                            // IF CONTEXT IS GREATER THAN 10 CHARACTERS /////////////
                            // /////////////////////////////////////////////////////

                                else if ( getInputElement.value.length < 1000 && getInputElement.value.length > 20 ) {

                                    getResultsSplurbBodyText.textContent = "MUMTAAZ! this should work perfectly, hit the search button and let me do my magic.."

                                }

                }



            
        }












    // RUN MINI FUNCTIONS -------------------------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        // RUN FUNCTIONS FOR RESULTS BLOCK DISSAPEARING ACT >>>>>>>>>>>>>>>>>>>>>>>>>>
        // ///////////////////////////////////////////////////////////////////////////

            function dissapearResultsCardBlock () {


                // IF RESULTS CARD IS PRESENT //
                // /////////////////////////////

                    if ( getResultsCardMainContainer != null || getResultsCardMainContainer != undefined ) {

                        getResultsCardMainContainer.style = `
                    
                            width:100%;
                            display:none;
                            opacity:0;
                            transform:translateY(30px);
                            margin-top:30px;
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;
                        
                        `

                    }




                // IF RESULTS CARD IS NOT PRESENT
                // /////////////////////////////

                    else {

                        console.log("BLLOPS: ")

                    }


            }












    // RUN FUNCTIONS FOR SEARCH ------------------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        function runSearch () {


            // FIRST SWITCH ON SEARCHING BLOCK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////////////////

                var getRandomSearchImage = makeLoadingResultsImage[(Math.floor(Math.random() * makeLoadingResultsImage.length))];

                getSearchWall.style = `
                
                    width:100%;
                    height:100%;
                    z-index:2;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    display:block;
                    position:fixed;
                    background:rgba(255, 255, 255, 0.5);
                    backdrop-filter:blur(10px);
                    transition:all 600ms ease;
                    -o-transition:all 600ms ease;
                    -ms-transition:all 600ms ease;
                    -moz-transition:all 600ms ease;
                    -webkit-transition:all 600ms ease;

                `

                    gteSearchWallImage.style = `
                    
                        width:80%;
                        height:80%;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        margin:auto;
                        position:absolute;
                        background:url(${getRandomSearchImage});
                        border-radius:1000px;
                        background-size:cover;
                        background-repeat:center;
                        background-position:center;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `


            // THEN SWITCH OFF SEARCHING BLOCK AFTER TIMEOUT xxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////////////////

                var getRandomTimeStamp = makeLoadingResultsStallArray[(Math.floor(Math.random() * makeLoadingResultsStallArray.length))];

                setTimeout(() => {


                    getSearchWall.style = `
                
                        width:100%;
                        height:100%;
                        z-index:2;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
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


                }, getRandomTimeStamp )


        }









    // RUN FUNCTIONS FOR RESULTS SECTION ---------------------------------------------
    // ///////////////////////////////////////////////////////////////////////////////

        // CHECK QUESTIONS AND INPUT BLOCK FOR CONNECTION ===========================
        // //////////////////////////////////////////////////////////////////////////

            function checkInputForCorrelation () {


                var getSelectedAnswer = -1


                // MINI FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                // //////////////////////////////////////////////////////////////////

                    // WHEN ANSWER IS FOUND .........................................
                    // //////////////////////////////////////////////////////////////

                        function whenAnswerIsFound (elementSelector) {


                            // PREP MAIN RELEVANT ANSWER BLOCK AND SHOW BLOCK ===
                            // //////////////////////////////////////////////////

                                // BRING TO LIFE FIRST --------------------------
                                // //////////////////////////////////////////////

                                    getResultsMainContainerBlock.style = `
                                    
                                        width:100%;
                                        z-index:0;
                                        padding:40px 0px;
                                        opacity:0;
                                        display:inline-block;
                                        position:relative;
                                        transform:translateY(70px);
                                        margin-top:30px;
                                        background:#8ed9d9;
                                        box-shadow:0px 10px 50px -20px rgba(0, 0, 0, 0.2);
                                        margin-bottom:50px;
                                        border-radius:10px;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        // THEN FADE IN TO PLACE ////////////////
                                        // //////////////////////////////////////

                                            setTimeout(() => {

                                                getResultsMainContainerBlock.style = `
                                    
                                                    width:100%;
                                                    z-index:0;
                                                    padding:40px 0px;
                                                    opacity:1;
                                                    display:inline-block;
                                                    position:relative;
                                                    transform:translateY(0px);
                                                    margin-top:30px;
                                                    background:#8ed9d9;
                                                    box-shadow:0px 30px 30px -20px rgba(0, 0, 0, 0.2);
                                                    margin-bottom:50px;
                                                    border-radius:10px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            },200)







                            // PREP CORRECT ANSWER SPLURB TEXT BLOCK AND SHOW BLOCK
                            // //////////////////////////////////////////////////

                                var getRandomAnswerRemark = makeResultsBlurb[(Math.floor(Math.random() * makeResultsBlurb.length))];

                                getResultsSplurbBodyText.textContent = `${getRandomAnswerRemark}`







                            // PREP CORRECT ANSWER CARD BLOCK AND SHOW BLOCK ----
                            // //////////////////////////////////////////////////

                                getResultsCardMainContainer.style = `
                                
                                    width:100%;
                                    display:block;
                                    opacity:0;
                                    transform:translateY(30px);
                                    margin-top:30px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                                    // THEN FADE IN /////////////////////////////
                                    // //////////////////////////////////////////

                                        getResultsCardMainContainer.style = `
                                
                                            width:100%;
                                            display:block;
                                            opacity:1;
                                            transform:translateY(0px);
                                            margin-top:30px;
                                            transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;

                                        `







                                            // UPDATE CARD HEADLINE =============
                                            // //////////////////////////////////

                                                var getCardHeadline = document.querySelector(".scriptedResultsCorrectAsnwerCardActualHeaderActual")

                                                getCardHeadline.textContent = `${collectAnswers[elementSelector]}`







                                            // UPDATE CARD DISPLAY IMAGE ========
                                            // //////////////////////////////////

                                                var getCardDisplayImage = document.querySelector(".scriptedResultsCorrectAsnwerCardActualImageActual")

                                                getCardDisplayImage.style = `
                                                
                                                    width:100%;
                                                    height:100px;
                                                    background:url("/images/resultsImages/result${makeResultsBoxImages[elementSelector]}.jpg");
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






                                            // UPDATE CARD BODY TEXT ============
                                            // //////////////////////////////////

                                                var getCardBodyText = document.querySelector(".scriptedResultsCorrectAsnwerCardActualDescriptionActual")

                                                getCardBodyText.textContent = `${collectDescriptions[elementSelector]}`







                                            // CREATE NEW CLICKER BLOCK =========
                                            // //////////////////////////////////

                                                // FIRST REMOVE PREVIOUS CLICKER
                                                // /////////////////////////////

                                                    getCardActual.removeChild(getCardActual.children[4])

                                                // THEN ADD NEW CLICKER FOR CORRECT ANSWER
                                                // /////////////////////////////

                                                    var createNewClicker = document.createElement("div")
                                                    createNewClicker.className = `scriptedResultsCardClicker${makeClassNumberStrings[elementSelector]}`

                                                        // STYLE THE CLICKER BLOCK
                                                        // ////////////////////

                                                            createNewClicker.style = `
                                                            
                                                                width:100%;
                                                                height:100%;
                                                                top:0px;
                                                                left:0px;
                                                                right:0px;
                                                                bottom:0px;
                                                                margin:0px auto;
                                                                opacity:0;
                                                                z-index:1;
                                                                position:absolute;
                                                                background:${makeResultsColorSelector[elementSelector]};
                                                                border-radius:10px;
                                                                transition:all 600ms ease;
                                                                -o-transition:all 600ms ease;
                                                                -ms-transition:all 600ms ease;
                                                                -moz-transition:all 600ms ease;
                                                                -webkit-transition:all 600ms ease;

                                                            `

                                                        // ADD EVENT LISTENER TO CLICKER BLOCK
                                                        // ////////////////////

                                                            createNewClicker.addEventListener("click", function (){

                                                                window.open(`${collectLinks[elementSelector]}`, `_blank`)

                                                            })

                                                        // ADD NEW CLICKER TO CARD
                                                        // ////////////////////

                                                            getCardActual.appendChild(createNewClicker)














                            // SWITCH OFF UNKOWN CARD BLOCK ---------------------
                            // //////////////////////////////////////////////////

                                getResultsUnkownCardBlock.style = `
                                    
                                    width:100%;
                                    display:block;
                                    opacity:0;
                                    transform:translateY(30px);
                                    margin-top:30px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                                    // THEN FADE IN /////////////////////////////
                                    // //////////////////////////////////////////

                                        setTimeout(() => {

                                            getResultsUnkownCardBlock.style = `
                                
                                                width:100%;
                                                display:none;
                                                opacity:0;
                                                transform:translateY(30px);
                                                margin-top:30px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        }, 300)



                        }






                    // WHEN ANSWER IS NOT FOUND .....................................
                    // //////////////////////////////////////////////////////////////

                        function whenAnswerIsNotFound () {


                            // PREP MAIN RELEVANT ANSWER BLOCK AND SHOW BLOCK ===
                            // //////////////////////////////////////////////////

                                // BRING TO LIFE FIRST --------------------------
                                // //////////////////////////////////////////////

                                    getResultsMainContainerBlock.style = `
                                    
                                        width:100%;
                                        z-index:0;
                                        padding:40px 0px;
                                        opacity:0;
                                        display:inline-block;
                                        position:relative;
                                        transform:translateY(70px);
                                        margin-top:30px;
                                        background:#8ed9d9;
                                        box-shadow:0px 10px 50px -20px rgba(0, 0, 0, 0.2);
                                        margin-bottom:50px;
                                        border-radius:10px;
                                        transition:all 600ms ease;
                                        -o-transition:all 600ms ease;
                                        -ms-transition:all 600ms ease;
                                        -moz-transition:all 600ms ease;
                                        -webkit-transition:all 600ms ease;

                                    `

                                        // THEN FADE IN TO PLACE ////////////////
                                        // //////////////////////////////////////

                                            setTimeout(() => {

                                                getResultsMainContainerBlock.style = `
                                    
                                                    width:100%;
                                                    z-index:0;
                                                    padding:40px 0px;
                                                    opacity:1;
                                                    display:inline-block;
                                                    position:relative;
                                                    transform:translateY(0px);
                                                    margin-top:30px;
                                                    background:#8ed9d9;
                                                    box-shadow:0px 30px 30px -20px rgba(0, 0, 0, 0.2);
                                                    margin-bottom:50px;
                                                    border-radius:10px;
                                                    transition:all 600ms ease;
                                                    -o-transition:all 600ms ease;
                                                    -ms-transition:all 600ms ease;
                                                    -moz-transition:all 600ms ease;
                                                    -webkit-transition:all 600ms ease;

                                                `

                                            },200)



                            // CHANGE SPLURB FIRST LINE BODY TEXT TO NOT KNOWN --
                            // //////////////////////////////////////////////////

                                var getRandomUnkownResponse = makeUnkownResultsBlurb[(Math.floor(Math.random() * makeUnkownResultsBlurb.length))]

                                getResultsSplurbBodyText.textContent = `${getRandomUnkownResponse}`







                            // CHANGE RESULTS CORRECT ANSWER CARD TO NOT KNOWN --
                            // //////////////////////////////////////////////////

                                getResultsCardMainContainer.style = `
                                
                                    width:100%;
                                    display:block;
                                    opacity:0;
                                    transform:translateY(30px);
                                    margin-top:30px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                                    // THEN FADE OUT ////////////////////////////
                                    // //////////////////////////////////////////

                                        setTimeout(() => {

                                            getResultsCardMainContainer.style = `
                                        
                                                width:100%;
                                                display:none;
                                                opacity:0;
                                                transform:translateY(30px);
                                                margin-top:30px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        }, 300)





                                

                            // SWITCH ON UNKOWN CARD BLOCK ----------------------
                            // //////////////////////////////////////////////////

                                getResultsUnkownCardBlock.style = `
                                
                                    width:100%;
                                    display:block;
                                    opacity:0;
                                    transform:translateY(30px);
                                    margin-top:30px;
                                    transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;

                                `

                                    // THEN FADE IN /////////////////////////////
                                    // //////////////////////////////////////////

                                        setTimeout(() => {

                                            getResultsUnkownCardBlock.style = `
                                
                                                width:100%;
                                                display:block;
                                                opacity:1;
                                                transform:translateY(0px);
                                                margin-top:30px;
                                                transition:all 600ms ease;
                                                -o-transition:all 600ms ease;
                                                -ms-transition:all 600ms ease;
                                                -moz-transition:all 600ms ease;
                                                -webkit-transition:all 600ms ease;

                                            `

                                        }, 300)



                        }









                // RUN LOOP TO CHECK WHICH QUESTIONS MATCH WITH INPUT >>>>>>>>>>>>>>>
                // //////////////////////////////////////////////////////////////////


                    collectQuestions.forEach( mixer => {


                        // CHECK IF QUESTIONS SHOW UP IN MATCH ......................
                        // //////////////////////////////////////////////////////////

                            if ( 
                                
                                    `${mixer.toLowerCase()}`.includes(`${getInputElement.value.toLowerCase()}`) || 
                                    `${mixer.toLowerCase()}` == `${getInputElement.value.toLowerCase()}`
                                
                                ) 
                                
                            {

                                getSelectedAnswer = collectQuestions.indexOf(`${mixer.toLowerCase()}`)

                            }



                    })


                        // FOUND ANSWER POPULATE ''''''''''''''''''''''''''''''''''''
                        // //////////////////////////////////////////////////////////

                            // IF THE NUMBER IS BIGGER THAN ZERO ====================
                            // //////////////////////////////////////////////////////

                                if ( getSelectedAnswer != -1 ){

                                    console.log("WE KNOW THE ANSWER: " + getSelectedAnswer)

                                    whenAnswerIsFound(getSelectedAnswer)

                                        // RESET ANSWER TRACKER ---------------------
                                        // //////////////////////////////////////////

                                            getSelectedAnswer = -1

                                }

                            // IF THE NUMBER IS LESS THAN ZERO ======================
                            // //////////////////////////////////////////////////////

                                else if ( getSelectedAnswer == -1 ){

                                    console.log("WE DONT KNOW THE ANSWER: " + getSelectedAnswer)

                                    whenAnswerIsNotFound()

                                        // RESET ANSWER TRACKER ---------------------
                                        // //////////////////////////////////////////

                                            getSelectedAnswer = -1

                                                // ACTIVATE SELF REPORT UNKOWN QUESTION
                                                // /////////////////////////////////



                                }



                    



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

        // RUN FUNCTION FOR INPUT SATISFACTORY CHECKS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // ///////////////////////////////////////////////////////////////////////////

            getInputElement.addEventListener("keydown", function () {

                runInputCheck()

            })

        // INITIATE SEARCH ///////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////

            getSearchButton.addEventListener("click", function () {

                runSearch()
                checkInputForCorrelation()

            })

    // EVENTS FOR RESULTS SECTION ====================================================
    // ///////////////////////////////////////////////////////////////////////////////