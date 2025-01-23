/*
Find Years When Jan 1 is Sunday (2014?2050)
Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 
*/

const findYear = function (year){

    for(let year=2014; year<=2050; year++)
    {
        let day = new Date(year,0,1);

        if(day.getDay()===0)
        {
            console.log(`1st january is being sunday to this year ${year}`)
        }
    }
}
findYear()