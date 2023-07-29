var qoute = [
    {
        qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        auther: "-- Albert Einstein"
    },
    {
        qoute: "You only live once, but if you do it right, once is enough.",
        auther: "-- Mae West"
    },
    {
        qoute: "Be the change that you wish to see in the world",
        auther: "-- Mahatma Gandhi"
    },
    {
        qoute: "In three words I can sum up everything I've learned about life: it goes on.",
        auther: "-- Robert Frost"
    },

  

]




function getQoutes() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].auther;

}