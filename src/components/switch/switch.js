import { createElement } from "../../utils/createElement";
// import { result } from "../../pages/Calculator/calculator";

/*
Sources:
https://www.w3schools.com/howto/howto_css_switch.asp
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
*/

export function createSwitchFunction(id) {
  return createElement('label',{
        className: 'switch',
        children:[
          createElement('input',{
            type: 'checkbox',
            id: id,
          }),
          createElement('span',{
            className: 'slider round',
          })
        ]
      })


}
