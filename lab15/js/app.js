/**
 * app.js
 * @author Elly Businge
 */

 "use strict";

 $(document).ready(function() {

    $("#patientsForm").submit(
        function(event) {
            event.preventDefault();
        
            const middleName = $("#middleName").val();
            const patientNo = $("#patientNo").val();
            const firstName = $("#firstName").val();
            const lastName = $("#lastName").val();
            const dob = $("#dob").val();
            const department = $("#department").val();
            const isOutPatient = $("input[name='radioOutPatient']:checked").val();

            let newDataRecord = `<tr><td>${patientNo}</td><td>${firstName}</td><td>${middleName}</td><td>${lastName}</td><td>${dob}</td><td>${department}</td><td>${isOutPatient}</td></tr>`;
            
            $("#tbodyPatientsList").append(newDataRecord);
           
            $("#patientNo").val("");
            $("#firstName").val("");
            $("#middleName").val("");
            $("#lastName").val("");
            $("#dob").val("");
            $("#department").prop("selectedIndex", 0);

            $("#radioradioOutPatientYes").prop("checked", false);
            $("#radioradioOutPatientNo").prop("checked", false);
            $("#patientNo").focus();
        }
    );

    $('#outPatientsOnly').click(function(){
        $('td:contains("No")').parent().toggle();
    });

    $('#elderlyPatients').click(function(){
    });
 });

