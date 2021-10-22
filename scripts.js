document.addEventListener('DOMContentLoaded', function()
{
    document.querySelector('button').addEventListener('click', function(event) 
    {
        event.preventDefault();
    });

    document.getElementsByTagName("button")[0].addEventListener("click",divA);
},false);



function divA()
{
    let eml = document.querySelector('input').value;

    if (eml == "")
    {
        document.getElementsByTagName("div")[20].textContent = "Please enter a valid email address";
    }
    else
    {
        document.getElementsByTagName("div")[20].textContent = "Thank you! Your email address ";

        let app = document.getElementsByTagName("div")[20];

        app.append(eml);

        app.append(' has been added to our mailing list.');
    }
}