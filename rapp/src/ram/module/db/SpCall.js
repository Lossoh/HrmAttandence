/*om*/

/**/
class SpCall{
    /**/
    constructor(){

    }
    /*methods*/
    static i_company_profile(in_id,in_name,in_country,in_noofficelocations,in_noofemployees,in_created_at,in_modified_at,in_RegistrationNumber,in_Phone,in_Mobile,in_Fax,in_Email,in_Address,in_is_on,in_assigned_user_id,in_log_user_id,in_transaction_id,in_pcdate){
        var in_id = in_id || '' ,
	in_name = in_name || '' ,
	in_country = in_country || '' ,
	in_noofficelocations = in_noofficelocations || '' ,
	in_noofemployees = in_noofemployees || '' ,
	in_created_at = in_created_at || '' ,
	in_modified_at = in_modified_at || '' ,
	in_RegistrationNumber = in_RegistrationNumber || '' ,
	in_Phone = in_Phone || '' ,
	in_Mobile = in_Mobile || '' ,
	in_Fax = in_Fax || '' ,
	in_Email = in_Email || '' ,
	in_Address = in_Address || '' ,
	in_is_on = in_is_on || '' ,
	in_assigned_user_id = in_assigned_user_id || '' ,
	in_log_user_id = in_log_user_id || '' ,
	in_transaction_id = in_transaction_id || '' ,
	in_pcdate = in_pcdate || '' ;

        return `CALL i_company_profile('${in_id}','${in_name}','${in_country}','${in_noofficelocations}','${in_noofemployees}','${in_created_at}','${in_modified_at}','${in_RegistrationNumber}','${in_Phone}','${in_Mobile}','${in_Fax}','${in_Email}','${in_Address}','${in_is_on}','${in_assigned_user_id}','${in_log_user_id}','${in_transaction_id}','${in_pcdate}');`

    }
static i_employee_list(in_id,in_First_Name,in_Last_Name,in_Employee_Code,in_Date_Of_Joining,in_Date_Of_Birth,in_Manager_Code,in_created_at,in_modified_at,in_is_on,in_assigned_user_id,in_log_user_id,in_transaction_id,in_pcdate){
        var in_id = in_id || '' ,
	in_First_Name = in_First_Name || '' ,
	in_Last_Name = in_Last_Name || '' ,
	in_Employee_Code = in_Employee_Code || '' ,
	in_Date_Of_Joining = in_Date_Of_Joining || '' ,
	in_Date_Of_Birth = in_Date_Of_Birth || '' ,
	in_Manager_Code = in_Manager_Code || '' ,
	in_created_at = in_created_at || '' ,
	in_modified_at = in_modified_at || '' ,
	in_is_on = in_is_on || '' ,
	in_assigned_user_id = in_assigned_user_id || '' ,
	in_log_user_id = in_log_user_id || '' ,
	in_transaction_id = in_transaction_id || '' ,
	in_pcdate = in_pcdate || '' ;

        return `CALL i_employee_list('${in_id}','${in_First_Name}','${in_Last_Name}','${in_Employee_Code}','${in_Date_Of_Joining}','${in_Date_Of_Birth}','${in_Manager_Code}','${in_created_at}','${in_modified_at}','${in_is_on}','${in_assigned_user_id}','${in_log_user_id}','${in_transaction_id}','${in_pcdate}');`

    }
static i_holidays(in_id,in_Holiday_date,in_Holiday_name,in_comment,in_created_at,in_modified_at,in_is_on,in_assigned_user_id,in_log_user_id,in_transaction_id,in_pcdate){
        var in_id = in_id || '' ,
	in_Holiday_date = in_Holiday_date || '' ,
	in_Holiday_name = in_Holiday_name || '' ,
	in_comment = in_comment || '' ,
	in_created_at = in_created_at || '' ,
	in_modified_at = in_modified_at || '' ,
	in_is_on = in_is_on || '' ,
	in_assigned_user_id = in_assigned_user_id || '' ,
	in_log_user_id = in_log_user_id || '' ,
	in_transaction_id = in_transaction_id || '' ,
	in_pcdate = in_pcdate || '' ;

        return `CALL i_holidays('${in_id}','${in_Holiday_date}','${in_Holiday_name}','${in_comment}','${in_created_at}','${in_modified_at}','${in_is_on}','${in_assigned_user_id}','${in_log_user_id}','${in_transaction_id}','${in_pcdate}');`

    }
static i_leaves_and_work_hours(in_id,in_leav_number,in_leav_type,in_working_hours_week,in_working_hours_day,in_check_in,in_check_out,in_minute_late_allowed,in_minute_early_allowed,in_created_at,in_modified_at,in_is_on,in_assigned_user_id,in_log_user_id,in_transaction_id,in_pcdate){
        var in_id = in_id || '' ,
	in_leav_number = in_leav_number || '' ,
	in_leav_type = in_leav_type || '' ,
	in_working_hours_week = in_working_hours_week || '' ,
	in_working_hours_day = in_working_hours_day || '' ,
	in_check_in = in_check_in || '' ,
	in_check_out = in_check_out || '' ,
	in_minute_late_allowed = in_minute_late_allowed || '' ,
	in_minute_early_allowed = in_minute_early_allowed || '' ,
	in_created_at = in_created_at || '' ,
	in_modified_at = in_modified_at || '' ,
	in_is_on = in_is_on || '' ,
	in_assigned_user_id = in_assigned_user_id || '' ,
	in_log_user_id = in_log_user_id || '' ,
	in_transaction_id = in_transaction_id || '' ,
	in_pcdate = in_pcdate || '' ;

        return `CALL i_leaves_and_work_hours('${in_id}','${in_leav_number}','${in_leav_type}','${in_working_hours_week}','${in_working_hours_day}','${in_check_in}','${in_check_out}','${in_minute_late_allowed}','${in_minute_early_allowed}','${in_created_at}','${in_modified_at}','${in_is_on}','${in_assigned_user_id}','${in_log_user_id}','${in_transaction_id}','${in_pcdate}');`

    }
static i_leave_rules(in_id,in_leav_number,in_leav_type,in_comment,in_created_at,in_modified_at,in_is_on,in_assigned_user_id,in_log_user_id,in_transaction_id,in_pcdate){
        var in_id = in_id || '' ,
	in_leav_number = in_leav_number || '' ,
	in_leav_type = in_leav_type || '' ,
	in_comment = in_comment || '' ,
	in_created_at = in_created_at || '' ,
	in_modified_at = in_modified_at || '' ,
	in_is_on = in_is_on || '' ,
	in_assigned_user_id = in_assigned_user_id || '' ,
	in_log_user_id = in_log_user_id || '' ,
	in_transaction_id = in_transaction_id || '' ,
	in_pcdate = in_pcdate || '' ;

        return `CALL i_leave_rules('${in_id}','${in_leav_number}','${in_leav_type}','${in_comment}','${in_created_at}','${in_modified_at}','${in_is_on}','${in_assigned_user_id}','${in_log_user_id}','${in_transaction_id}','${in_pcdate}');`

    }
static i_work_hours(in_id,in_working_hours_week,in_working_hours_day,in_check_in,in_check_out,in_minute_late_allowed,in_minute_early_allowed,in_created_at,in_modified_at,in_is_on,in_assigned_user_id,in_log_user_id,in_transaction_id,in_pcdate){
        var in_id = in_id || '' ,
	in_working_hours_week = in_working_hours_week || '' ,
	in_working_hours_day = in_working_hours_day || '' ,
	in_check_in = in_check_in || '' ,
	in_check_out = in_check_out || '' ,
	in_minute_late_allowed = in_minute_late_allowed || '' ,
	in_minute_early_allowed = in_minute_early_allowed || '' ,
	in_created_at = in_created_at || '' ,
	in_modified_at = in_modified_at || '' ,
	in_is_on = in_is_on || '' ,
	in_assigned_user_id = in_assigned_user_id || '' ,
	in_log_user_id = in_log_user_id || '' ,
	in_transaction_id = in_transaction_id || '' ,
	in_pcdate = in_pcdate || '' ;

        return `CALL i_work_hours('${in_id}','${in_working_hours_week}','${in_working_hours_day}','${in_check_in}','${in_check_out}','${in_minute_late_allowed}','${in_minute_early_allowed}','${in_created_at}','${in_modified_at}','${in_is_on}','${in_assigned_user_id}','${in_log_user_id}','${in_transaction_id}','${in_pcdate}');`

    }
}

/**/
module.exports = SpCall;