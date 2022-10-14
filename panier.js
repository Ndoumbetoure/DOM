let btnPrimary = document.querySelectorAll('.fa-plus')                          //plus button      
let btnSecondary = document.querySelectorAll('.fa-minus')                      //minus button
let quant = document.getElementsByClassName('quantite')                       //quantity
let prix = document.querySelectorAll('.prix-unit')                           //price unitaire
let totalUnitire = document.querySelectorAll('.prixT')                      // total unitaire
let prixtotal = document.querySelector('#prixTotal')                       //total price
let likeProduit = document.querySelectorAll('.fa-heart')                  //like button
let dislikeProduit = document.querySelectorAll('.fa-heart')              // dislike button
let deleat = document.querySelectorAll('.fa-trash')                     //deleat button




                                        // plus button


    for (let i = 0; i < btnPrimary.length; i++)
    {
        totalUnitire[i].innerHTML = prix[i].innerHTML + " "+ "CFA"

        let p = parseInt(prix[i].innerHTML);
        let tunit = totalUnitire[i]

        btnPrimary[i].addEventListener('click', augmenterQuant)

        function augmenterQuant()
        {
            let val = quant[i].value++
            let total = (p*val)+p
            tunit.innerHTML = total +" "+ "CFA"

            prixTotal()
        }

    }

                            //minus button


    for (let i = 0; i <btnSecondary.length; i++)
    {

        let p = parseInt(prix[i].innerHTML);
        let tunit = totalUnitire[i]

        btnSecondary[i].addEventListener('click', diminueQuant);

        function diminueQuant()
        {
            if(quant[i].value>0)
            {
                let vl =  quant[i].value --; 
                let total = (p*vl)-p
                tunit.innerHTML = total +" " + "CFA"      
            }

            prixTotal()
        }

    }


                              // Total function price

            
    function prixTotal()
    {
        let tt = 0

        let a = document.querySelectorAll('.prixT')

        for (let i = 0; i < a.length; i++)
        {
            tt += parseInt(a[i].innerHTML); 
        }

        prixtotal.innerText = tt +" "+ "CFA"

         return tt;
    }

    prixTotal()



                              // like function


    
    for(let i = 0; i<likeProduit.length; i++)
    {
        likeProduit[i].addEventListener('click', likerProduit)

        function likerProduit()
        {
            likeProduit[i].style.color = "red"
        }
    }


                             // dislike function



    for(let i = 0; i<dislikeProduit.length; i++)
    {
        dislikeProduit[i].addEventListener('dblclick', dislikerProduit)

        function dislikerProduit()
        {
            dislikeProduit[i].style.color = "black"  
        }    
    }



                           //  trash function


    for(let i = 0; i < deleat.length; i++)
    {

        deleat[i].addEventListener('click', deleatProduit)

        function deleatProduit()
        {
            deleat[i].parentElement.parentElement.remove()

            prixTotal()

        }

    }

