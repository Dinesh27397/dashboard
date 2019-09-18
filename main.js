$(function(){
    $('#Home').hover(
        function () {
         
            $('#Home').css('border-bottom','1px solid red')
        },
        function () {
  
      
            $('#Home').css('border-bottom','none')
            $('#Home').css('backgroundColor','unset')
        }
    )
    $('#stat').hover(
        function () {
         
            $('#stat').css('border-bottom','1px solid red')
        },
        function () {
  
      
            $('#stat').css('border-bottom','none')
            $('#stat').css('backgroundColor','unset')
        }

    )
      $('#user').hover(
        function () {
         
            $('#user').css('border-bottom','1px solid red')
        },
        function () {
  
      
            $('#user').css('border-bottom','none')
            $('#user').css('backgroundColor','unset')
        }

  )
  $('#drive').hover(
    function () {
         
        $('#drive').css('border-bottom','1px solid red')
    },
    function () {

        $('#drive').css('border-bottom','none')
        $('#drive').css('backgroundColor','unset')
    }

  )
  
  
   $('#stat').click(function(){
       $('.graphs').hide();
    //    $('#forms-show').classList.add('d-block')
    //    $('#forms-show').classList.remove('d-none')
    $('#forms-show').show()
   })
  
   $('#Home').click(function(){
    $('.graphs').show(1000);
    $('#forms-show').hide()
    $('#forms-show').classList.add('d-none');
    $('#forms-show').classList.remove('d-block');
})
 
  });
  
var ctx = document.getElementById('myChart').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
     maintainAspectRatio:false,
     responsive:true

    }
});
var ctx1 = document.getElementById('piechart').getContext('2d');
var myChart2 = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
     maintainAspectRatio:false,
     responsive:true

    }
});
var ctx2 = document.getElementById('linechart').getContext('2d');
var myChart3 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
     maintainAspectRatio:false,
     responsive:true

    }
});
// CURD OPERATIONS//
var inputvalue1,inputvalue2,inputvalue3,inputvalue4,inputvalue5,formdata,i,setdata,getdata,x=0,y=0;
var cell=[5];
var SelectedRow=null


var form=document.getElementById("form");
form.addEventListener('submit',function(event){
    event.preventDefault();
    formsdata=readdata();
    
    if(SelectedRow==null)
    {
        appenddata(formsdata)
    }
    else{
        Update(formsdata);
        cleardata();
    }
        
       

   
})
document.getElementById('submit').addEventListener('click',function(){
    readdata();
    x=0;

  
})


function readdata(){
    formdata=[
        inputvalue1=document.getElementById('EmployeeName').value,
        inputvalue2=document.getElementById('email').value,
        inputvalue3=document.getElementById('designation').value,
        inputvalue4=document.getElementById('mobileno').value,
        inputvalue5=document.getElementById('address').value
    ] 
    var setdata=[localStorage.setItem('empname',formdata[0]),localStorage.setItem('email',formdata[1]),localStorage.setItem('designation',formdata[2]),localStorage.setItem('mobileno',formdata[3]),localStorage.setItem('address',formdata[4])  
]

var getdata=[localStorage.getItem('empname'),localStorage.getItem('email'),localStorage.getItem('designation'),localStorage.getItem('mobileno'),localStorage.getItem('address')  
]
    return setdata,getdata;
}
employeelist=document.getElementById("employeelist").getElementsByTagName('tbody')[0];
function appenddata(data)
{
    var newrow=employeelist.insertRow(employeelist.length);
    for(i=0;i<=5;i++)
      {
        cell[i]=newrow.insertCell(i);
        
      }
    
      for(i=0;i<=5;i++)
      {
        cell[i].innerHTML=data[i]
        cell[5].innerHTML="<a onClick=Edit(this) class='mr-3' id='edit'><i class='fas fa-edit'></i></a><a OnClick=Delete(this) class='delete' id='delete'><i class='fas fa-trash'></i></a> "
      }
   
clear();
        

	    
}
function clear()
{
    document.getElementById('EmployeeName').value=""
    document.getElementById('email').value=""
     document.getElementById('designation').value=""
       document.getElementById('mobileno').value=""
      document.getElementById('address').value=""
}

function cleardata()
{
    
    
     document.getElementById('EmployeeName').value=""
    document.getElementById('email').value=""
     document.getElementById('designation').value=""
       document.getElementById('mobileno').value=""
      document.getElementById('address').value=""
      SelectedRow=null;
    
}
function Edit(td){
SelectedRow=td.parentElement.parentElement;
document.getElementById('EmployeeName').value=SelectedRow.cells[0].innerHTML;
    document.getElementById('email').value=SelectedRow.cells[1].innerHTML;
     document.getElementById('designation').value=SelectedRow.cells[2].innerHTML;
       document.getElementById('mobileno').value=SelectedRow.cells[3].innerHTML;
      document.getElementById('address').value=SelectedRow.cells[4].innerHTML;
      if(y==0)
      {
        document.getElementById('submit').classList.add('d-none')
        document.getElementById('update').classList.add('d-block');
        document.getElementById('cancel').classList.add('d-block')
        y=1
      }
      else{
          document.getElementById('submit').classList.remove('d-block')
        document.getElementById('submit').classList.add('d-none')
        document.getElementById('update').classList.add('d-block');
        document.getElementById('cancel').classList.add('d-block')
        y++;
      }
  
       
}
// document.getElementById('edit').addEventListener(click,Edit)

function Update(setdata)
{

          SelectedRow.cells[0].innerHTML=setdata[0];
          SelectedRow.cells[1].innerHTML=setdata[1];
          SelectedRow.cells[2].innerHTML=setdata[2];
          SelectedRow.cells[3].innerHTML=setdata[3];
          SelectedRow.cells[4].innerHTML=setdata[4];
         document.getElementById('submit').classList.add('d-block')
         document.getElementById('update').classList.add('d-none')
         document.getElementById('update').classList.remove('d-block');
         document.getElementById('cancel').classList.remove('d-block');
document.getElementById('cancel').classList.add('d-none')
}
     
     


document.getElementById('cancel').addEventListener('click',cancel)
  function cancel()
  {
    readdata();
    document.getElementById('cancel').classList.remove('d-block');
    document.getElementById('cancel').classList.add('d-none')
    clear();
  }


function Delete(td){
if(confirm("Are U want To delete the Record")){
  row=td.parentElement.parentElement;
     console.log(row.rowIndex)
    document.getElementById("employeedetails").deleteRow(row.rowIndex-1);
    cleardata();
}
}
