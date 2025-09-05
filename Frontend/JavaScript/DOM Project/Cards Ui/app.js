var arr = [
    {
        companyLogo:'./Google.png',
        companyName: 'Google',
        role: 'Graphic Designer',
        money: '$' + (15 - 220) + 'k',
        location: 'New Delhi',
        joinDays:'29',
        jobType: 'Intership',
        isStatus:  'Apply'
    },
     {
        companyLogo: './micro-removebg-preview.png',
        companyName: 'Microsoft',
        role: 'Software Engineer',
        money: `$25-300k`,
        location: 'Bengaluru',
        joinDays:'22',
        jobType: 'Hybrid Job',
        isStatus:  'Apply'
    },
    {
        companyLogo: './amozon-removebg-preview.png',
        companyName: 'Amazon',
        role: 'Data Analyst',
        money: `$20-180k`,
        location: 'Hyderabad',
        joinDays:'18',
        jobType: 'Remote Job',
        isStatus:  'Apply'
    },
    {
        companyLogo: './apple-removebg-preview.png',
        companyName: 'Apple',
        role: 'UI/UX Designer',
        money: `$18-250k`,
        location: 'Mumbai',
        joinDays:'25',
        jobType: 'Contract Job',
        isStatus:  'Apply'
    },
    {
        companyLogo: './gfg-removebg-preview.png',
        companyName: 'Netflix',
        role: 'Backend Developer',
        money: `$30-320k`,
        location: 'Pune',
        joinDays:'5',
        jobType: 'Freelancing',
        isStatus:  'Apply'
    },
    {
        companyLogo: './cog-removebg-preview.png',
        companyName: 'Meta (Facebook)',
        role: 'AI Researcher',
        money: `$40-400k`,
        location: 'Gurugram',
        joinDays:'10',
        jobType: 'Part-time',
        isStatus:  'Apply'
    },
    {
        companyLogo: "./tesla.png",
        companyName: 'Tesla',
        role: 'Embedded Systems',
        money: `$28-280k`,
        location: 'Chennai',
        joinDays:'20',
        jobType: 'Full-time',
        isStatus:  'Apply'
    }
]


var body = document.querySelector('body');


function action(){
    let sum ='';
arr.forEach(function(elem, idx){
    sum += `<div class="container">
        
        <div id="logo">
            <img src= ${elem.companyLogo} alt="">
            <h3>Saved<i class="ri-bookmark-line"></i></h3>
        </div>

        <div id="company">
            <h3>${elem.companyName}</h3>
            <p>${elem.joinDays} days ago</p>
        </div>
        

        <h2>${elem.role}</h2>

        <div id="role">
            <p>${elem.jobType}</p>
            <p>Flexible Schedule</p>
        </div>  
        

        <div class="footer">
            <div class="money">
                <h4>${elem.money}</h4>
                <p>${elem.location}</p>
            </div>
            <button id = ${idx} style= "background-Color:${elem.isStatus == 'Sucess' ? 'green' : '#007bff'}">${elem.isStatus }</button>
        </div>
        </div>`
    })
    body.innerHTML = sum;
}
action()



var btn = document.querySelector('button');
var flg =false;

body.addEventListener('click', function(e){
    let idx = e.target.id;
    if(e.target.tagName === "BUTTON"){  
        
        if (arr[idx].isStatus == 'Apply'){
            arr[idx].isStatus = "Applied";
            action();

            setTimeout(()=>{
            arr[idx].isStatus = "Sucess";
            action();
            },2000);
        }else {
        arr[idx].isStatus = 'Apply' 
        action()
    } 
    }
    
})



