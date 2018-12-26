/*om*/
/*rlocali object*/
var rlocali = {
    inputList: [{select: '[name="name"]', id: 'roleList', rtc: 'r-role-name'}],
    disabled: [{}],
    max: [{}],
    min: [{}],
    pattern: [{}],
    required: [{select: '[name="name"]'}],
    type: [{}],
    rtg: [{key: 'data-rfrm'}],
    msg: [{name: 'Provide requierd informatin'}],
    readonly: [{}],
    autocomplete: [{}],
    autofocus: [{select: '[name="name"]'}],
    placeholder: [{select: '[name="name"]', closest: '.form-group', find: 'label'}],
    novalidate: [{}],
    frm:[{select:'[data-action="save"]',send:'/geo/role-add',cbf:'sram'}]
};
