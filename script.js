// generatePDF code
let option  = "";

let selTag = document.querySelector("#select_two_items");
selTag.addEventListener('change', (e)=>{
   option =  e.target.value;
});

function generatePDF(){
    const ele = document.querySelector(`#show${option}`);
    html2pdf().from(ele).save();
}

//1. color and textcolor
let selectColor = document.querySelector(".colorid");//console.log(selectColor);
let selectTextColor = document.querySelector(".textid");//console.log(selectTextColor);
let selectBrownBox = document.querySelector(".brown_color_box");//console.log(selectBrownBox);

let selectColor2 = document.querySelector("#showTwo .colorid");
let selectTextColor2 = document.querySelector("#showTwo .textid");
let selectBrownBox2 = document.querySelector("#showTwo .brown_color_box");

selectColor.addEventListener('change', () =>{
    selectBrownBox.style.backgroundColor = selectColor.value;
});
selectColor.addEventListener('change', () =>{
    selectBrownBox2.style.backgroundColor = selectColor.value;
});

selectTextColor.addEventListener('change', ()=>{
    selectBrownBox.style.color = selectTextColor.value;
});
selectTextColor.addEventListener('change', ()=>{
    selectBrownBox2.style.color = selectTextColor.value;
});


//2. personal info
let selectPersonalName = document.querySelector("#names");//console.log(selectPersonalName);
let selectPersonalEmail = document.querySelector("#email_id");//console.log(selectPersonalEmail);
let selectPhoneNumber = document.querySelector("#phone_number");//console.log(selectPhoneNumber);
let selectCitys = document.querySelector("#citys"); //onsole.log(selectCitys);
let selectHeading1 = document.querySelector(".heading1");//console.log(selectHeading1);
let selectSkillPhone = document.querySelector(".personal_detail_phone_data");//console.log(selectSkillPhone);
let selectSkillEmail = document.querySelector(".personal_detail_email_data");//console.log(selectSkillEmail);
let selectSkillLocation = document.querySelector(".personal_detail_country_data");//console.log(selectSkillLocation);

let selectHeading2 = document.querySelector("#showTwo .heading1");
let selectSkillPhone2 = document.querySelector("#showTwo .personal_detail_phone_data");
let selectSkillEmail2 = document.querySelector("#showTwo .personal_detail_email_data");
let selectSkillLocation2 = document.querySelector("#showTwo .personal_detail_country_data");
// akhil sharma name code
selectPersonalName.addEventListener('input' , ()=>{
    selectHeading1.innerHTML = selectPersonalName.value;
});
selectPersonalName.addEventListener('input' , ()=>{
    selectHeading2.innerHTML = selectPersonalName.value;
});
// email id print code
selectPersonalEmail.addEventListener('input', ()=>{
    selectSkillEmail.innerHTML = selectPersonalEmail.value;
});
selectPersonalEmail.addEventListener('input', ()=>{
    selectSkillEmail2.innerHTML = selectPersonalEmail.value;
});
//phone num print code
selectPhoneNumber.addEventListener('input', ()=>{
    selectSkillPhone.innerHTML = selectPhoneNumber.value;
});
selectPhoneNumber.addEventListener('input', ()=>{
    selectSkillPhone2.innerHTML = selectPhoneNumber.value;
});
//location/country print code
selectCitys.addEventListener('input' , ()=> {
    selectSkillLocation.innerHTML = selectCitys.value;
});
selectCitys.addEventListener('input' , ()=> {
    selectSkillLocation2.innerHTML = selectCitys.value;
});


//3.profeessional info
let selectProfessTitle = document.querySelector("#profess_title");//console.log(selectProfessTitle);
let selectProfessTextarea = document.querySelector(".profess_details_inputs");//console.log(selectProfessTextarea);
let selectProfessSkill = document.querySelector("#pro_skill");//console.log(selectProfessSkill);
let selectHeading3 = document.querySelector(".heading3");//console.log(selectHeading3);
let selectSummaryBelow = document.querySelector(".profeessional_textarea_data");//console.log(selectSummaryBelow);
let selectSkillBelow = document.querySelector(".profressional_form_skills_data");//console.log(selectSkillBelow);

let selectHeading3Second = document.querySelector("#showTwo .heading3");//console.log(selectHeading3);
let selectSummaryBelow2 = document.querySelector("#showTwo .profeessional_textarea_data");//console.log(selectSummaryBelow);
let selectSkillBelow2 = document.querySelector("#showTwo .profressional_form_skills_data");//console.log(selectSkillBelow);

// profess SDE code
selectProfessTitle.addEventListener('input', ()=>{
    selectHeading3.innerHTML = selectProfessTitle.value;
});
selectProfessTitle.addEventListener('input', ()=>{
    selectHeading3Second.innerHTML = selectProfessTitle.value;
});

//profess textarea code
selectProfessTextarea.addEventListener('input', ()=>{
    selectSummaryBelow.innerHTML = selectProfessTextarea.value;
});
selectProfessTextarea.addEventListener('input', ()=>{
    selectSummaryBelow2.innerHTML = selectProfessTextarea.value;
});
//profess skill code
selectProfessSkill.addEventListener('input', ()=>{
    selectSkillBelow.innerHTML = selectProfessSkill.value;
});
selectProfessSkill.addEventListener('input', ()=>{
    selectSkillBelow2.innerHTML = selectProfessSkill.value;
});
// selectProfessSkill.value.split(",").forEach(ele =>{
//         const p = document.createElement('p');
//         p.classList.add('p_tag');
//         p.innerText = `
//         <p style="color: white; background-color: black;">${ele}</p>`
//         selectSkillBelow.append(ele);
// });



/* add employment button start */
let selectAddEmployment = document.querySelector(".add_employee");//console.log(selectAddEmployment);
let selectAddEmploymentForm = document.querySelector(".add_employee_form");
let selectProfeeExperiSummary = document.querySelectorAll(".profess_experience_summary");
// console.log(selectProfeeExperiSummary);
selectAddEmployment.addEventListener('click',()=>{
        
    /* first div create */
    let createAddEmploymentDiv = document.createElement('div');
    createAddEmploymentDiv.innerHTML = `
        <label>Start</label>
        <input type="date" id="start_date_add_employee">
        <label>End</label>
        <input type="date" id="end_date_add_employee">
        <input type="text" autocomplete="off" id="job_title_employeement" placeholder="job Title">
        <input type="text" autocomplete="off" id="employer_employeement" placeholder="Employer">
        <textarea id="employment_description" autocomplete="off" cols="40" rows="8" placeholder="Description"></textarea>`
        selectAddEmploymentForm.append(createAddEmploymentDiv);

    /* second div create */
    let createprofeeExperiSummDiv = document.createElement('div');
    createprofeeExperiSummDiv.innerHTML = `
        <div class="flex_data">
            <ul>
                <li class="pasteText_job_title_employeement"></li>
            </ul> 
            <span>
                <span class="start_Date"></span>
                <span class="end_Date"></span>
            </span>
        </div><br>
        <label class="pasteText_employer"></label><br><br>
        <label class="pasteText_description_employeement"></label>`
        // selectProfeeExperiSummary.append(createprofeeExperiSummDiv);
        selectProfeeExperiSummary.forEach((ele) =>{
            let clonediv = createprofeeExperiSummDiv.cloneNode(true);
            ele.appendChild(clonediv);
        });

    /* pass values start */
    let selectStartDateOfAddEmployee = document.querySelector("#start_date_add_employee");
    // console.log(selectStartDateOfAddEmployee);
    let selectEndDateOfAddEmployee = document.querySelector("#end_date_add_employee");
    let selectJobTitleValueOfEmployee = document.querySelector("#job_title_employeement");
    let selectEmployerOfEmployee = document.querySelector("#employer_employeement");
    let selectEmployeeDescription = document.querySelector("#employment_description");

    let selectStartDateOfProfessExperi = document.querySelectorAll(".start_Date");
    let selectEndDateOfProfessExperi = document.querySelectorAll(".end_Date");
    let selectSDEAtAmazon = document.querySelectorAll(".pasteText_job_title_employeement");//console.log(selectSDEAtAmazonValue);
    let selectSDE = document.querySelectorAll(".pasteText_employer");//console.log(selectSDE);
    let selectcanWritingAnything = document.querySelectorAll(".pasteText_description_employeement");//console.log(selectcanWritingAnything);


    selectStartDateOfAddEmployee.addEventListener('input', ()=>{
        selectStartDateOfProfessExperi.forEach((ele)=>{
            ele.innerHTML = selectStartDateOfAddEmployee.value;
        })
    });

    selectEndDateOfAddEmployee.addEventListener('input', ()=>{
        selectEndDateOfProfessExperi.forEach((ele)=>{
            ele.innerHTML = selectEndDateOfAddEmployee.value;
        })
    });  
    selectJobTitleValueOfEmployee.addEventListener('input', ()=>{
        selectSDEAtAmazon.forEach((ele)=>{
            ele.innerHTML = selectJobTitleValueOfEmployee.value;
        })
    });
    selectEmployerOfEmployee.addEventListener('input', ()=>{
        selectSDE.forEach((ele)=>{
            ele.innerHTML = selectEmployerOfEmployee.value;
        })
    });
    selectEmployeeDescription.addEventListener('input', ()=>{
        selectcanWritingAnything.forEach((ele)=>{
             ele.innerHTML = selectEmployeeDescription.value; 
        })
    });
    
});
/* add employment button end */

/* add project button start */
let selectAddProject = document.querySelector(".add_project");//console.log(selectAddEmployment);
let selectAddProjectForm = document.querySelector(".add_project_form");
let selectProjectSummary = document.querySelectorAll(".projects_summary");

/* first div created */
selectAddProject.addEventListener('click',()=>{
    let createAddProjectDiv = document.createElement('div');
    createAddProjectDiv.innerHTML = `
        <label>Start</label>
        <input type="date" id="start_date_add_project">
        <label>End</label>
        <input type="date" id="end_date_add_project">
        <input type="text" autocomplete="off" id="project_title" placeholder="Project Title">
        <textarea id="project_description" autocomplete="off" cols="40" rows="8" placeholder="Description"></textarea>`
        selectAddProjectForm.append(createAddProjectDiv);


/*sec div created */
    let createProjectSummDiv = document.createElement('div');
    createProjectSummDiv.innerHTML = `
        <div class="flex_data">
        <ul>
            <li class="pasteText_job_title_project"></li>
        </ul> 
        <span>
            <span class="start_Date_project"></span>
            <span class="end_Date_project"></span>
        </span>
        </div><br>
        <label class="pasteText_project"></label><br><br>`
        // selectProjectSummary.append(createProjectSummDiv);
        selectProjectSummary.forEach((ele)=>{
            let clonediv2 = createProjectSummDiv.cloneNode(true);
            ele.appendChild(clonediv2);
        });

    /* pass values start */
    let selectStartDateOfAddProject = document.querySelector("#start_date_add_project");
    let selectEndDateOfAddProject = document.querySelector("#end_date_add_project");
    let selectJobTitleValueOfProject = document.querySelector("#project_title");
    let selectProjectDescription = document.querySelector("#project_description");

    let selectStartDateOfProject = document.querySelectorAll(".start_Date_project");
    let selectEndDateOfProject = document.querySelectorAll(".end_Date_project");
    let selectSDEAtAmazonProject = document.querySelectorAll(".pasteText_job_title_project");//console.log(selectSDEAtAmazonValue);
    let selectSDEProject = document.querySelectorAll(".pasteText_project");//console.log(selectSDE);


    selectStartDateOfAddProject.addEventListener('input', ()=>{
        selectStartDateOfProject.forEach((ele)=>{
            ele.innerHTML = selectStartDateOfAddProject.value;
        })
    });

    selectEndDateOfAddProject.addEventListener('input',()=>{
        selectEndDateOfProject.forEach((ele)=>{
            ele.innerHTML = selectEndDateOfAddProject.value;
        })
    });  
    selectJobTitleValueOfProject.addEventListener('input', ()=>{
        selectSDEAtAmazonProject.forEach((ele)=>{
            ele.innerHTML = selectJobTitleValueOfProject.value;
        })
    });
    selectProjectDescription.addEventListener('input', ()=>{
        selectSDEProject.forEach((ele)=>{
            ele.innerHTML = selectProjectDescription.value;
        }) 
    });

});
/* add project button end */

/* add education button start */
let selectAddEducation = document.querySelector(".add_education");//console.log(selectAddEmployment);
let selectAddEducationForm = document.querySelector(".add_education_form");
let selectEducationSummary = document.querySelectorAll(".education_summary");

/* first div  */
selectAddEducation.addEventListener('click',()=>{
    let createAddEducationDiv = document.createElement('div');
    createAddEducationDiv.innerHTML = `
        <label>Start</label>
        <input type="date" id="start_date_add_education">
        <label>End</label>
        <input type="date" id="end_date_add_education">
        <input type="text" autocomplete="off" id="education_qualification" placeholder="Qualification">
        <input type="text" autocomplete="off" id="education_school" placeholder="School/College">
        <textarea id="education_description" autocomplete="off" cols="40" rows="8" placeholder=" Description"></textarea>`
        selectAddEducationForm.append(createAddEducationDiv);

    /* second div create */
    let createEucationSummDiv = document.createElement('div');
    createEucationSummDiv.innerHTML = `
        <div class="flex_data">
            <ul>
                <li class="pasteText_job_title_education"></li>
            </ul> 
            <span>
                <span class="start_Date_education"></span>
                <span class="end_Date_education"></span>
            </span>
        </div><br>
        <label class="pasteText_education"></label><br><br>
        <label class="pasteText_description_education"></label>`
        // selectEducationSummary.append(createEucationSummDiv);
        selectEducationSummary.forEach((ele)=>{
            let clonediv3 = createEucationSummDiv.cloneNode(true);
            ele.appendChild(clonediv3);
        });


    /* pass values start */
    let selectStartDateOfAddEducation = document.querySelector("#start_date_add_education");
    let selectEndDateOfAddEducation = document.querySelector("#end_date_add_education");
    let selectJobTitleValueOfEducation = document.querySelector("#education_qualification");
    let selectEmployerOfEducation = document.querySelector("#education_school");
    let selectEducationDescription = document.querySelector("#education_description");

    let selectStartDateOfEducation = document.querySelectorAll(".start_Date_education");
    let selectEndDateOfEducation = document.querySelectorAll(".end_Date_education");
    let selectSDEAtAmazonEducation = document.querySelectorAll(".pasteText_job_title_education");//console.log(selectSDEAtAmazonValue);
    let selectSDEEducation = document.querySelectorAll(".pasteText_education");//console.log(selectSDE);
    let selectcanWritingAnythingEducation = document.querySelectorAll(".pasteText_description_education");//console.log(selectcanWritingAnything);


    selectStartDateOfAddEducation.addEventListener('input', ()=>{
        selectStartDateOfEducation.forEach((ele)=>{
            ele.innerHTML = selectStartDateOfAddEducation.value;
        })
    });
    selectEndDateOfAddEducation.addEventListener('input',()=>{
        selectEndDateOfEducation.forEach((ele)=>{
            ele.innerHTML = selectEndDateOfAddEducation.value;
        })
    });  
    selectJobTitleValueOfEducation.addEventListener('input', ()=>{
        selectSDEAtAmazonEducation.forEach((ele)=>{
            ele.innerHTML = selectJobTitleValueOfEducation.value;
        })
    });
    selectEmployerOfEducation.addEventListener('input', ()=>{
        selectSDEEducation.forEach((ele)=>{
            ele.innerHTML = selectEmployerOfEducation.value;
        })
    });
    selectEducationDescription.addEventListener('input', ()=>{
        selectcanWritingAnythingEducation.forEach((ele)=>{
            ele.innerHTML = selectEducationDescription.value;
        }) 
    });
});
/* add education button end */






// $(document).ready(function(){
//     $('#select_two_items').on('change', function(){
        
//     	var demovalue = $(this).val(); 
//         $("div.myDiv").hide();
//         $("#show"+demovalue).show();
        
//     });
// });

$(document).ready(function(){
    $('#select_two_items').change(function(){
      var selectedOption = $(this).val();
      

      if(selectedOption === 'One') {
        $('#showOne').show();
        $('#showTwo').hide();
      } 
      if(selectedOption === 'Two') {
        $('#showTwo').show();
        $('#showOne').hide();
      } 
    });
  });