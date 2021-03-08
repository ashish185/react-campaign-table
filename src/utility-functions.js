export const getFormattedDate = (timeStamp) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const campaign_date = new Date(timeStamp);
    const todayDate= new Date();
    var diff_in_time = todayDate.getTime() - campaign_date.getTime(); 
    let cd = `${monthNames[campaign_date.getMonth()].substring(0, 3)} ${campaign_date.getFullYear()}, ${campaign_date.getDate()}`;
    var daysDiff =Math.round(diff_in_time / (1000 * 3600 * 24)); 
    let str=daysDiff;
    if(daysDiff>0){
        str = str+" days ago";
    } 
    else if(daysDiff<0){
        str = Math.abs(daysDiff)+" days ago";
    }
    const compDateAndDiff= { daysDiff:daysDiff,timeDiffString:str, campaign_date:cd }
    return compDateAndDiff;
}
