$(document).ready(function(){
    $("#btn-cmt").click(function(){
      $("#box-form").toggle(600)
    }),
     

  
    $("#submit-form").validate({
        rules:{
           
            NAME:{
              
              minlength:3
             
                
            },
            PHONE:{
                required:true,
                maxlength:10,
                minlength:10,
               
              
                
            },
            MAIL:{
                required:true,
                email:true,
            },
            COMMENTS:{
                required:true
            },
           
                
            } ,required:true,
            
    
        submitHandler : function(form){

        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbyzAi2eA-IflphFe5MW1p9T4dfbatrXUo7arOhUsyzLbZ9s6WOkLsX_vYYJL40n9N2g/exec",
            
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
               
            },
            error:function (err){
                alert("Something Error")

            }
        })
     }
    })




  })