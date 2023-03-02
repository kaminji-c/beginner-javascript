//get tab div, buttons, and panel
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
//const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
//turing tabPanels into an Array
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

//KEY TAKEAWAY: if you can reach for an accessibility attribute over a class than do that!

function handleTabClick(e){
    //hide all tab panels, with arrow function
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    //mark all tabs as unselected
    tabButtons.forEach(tab => {
        //tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
    }); //anytime a property is dashed you can most likely access it with a camelCase
    //mark the clicked tab as selected
    e.currentTarget.setAttribute('aria-selected', true);
    //find the associated tab panel and show it!
    //const id = e.currentTarget.id;
    const {id} = e.currentTarget; //destructuring 
    //console.log(id);
   
    /* METHOD #1 
    const tabPanel = tabs.querySelector(`[aria-labelledby = "${id}"]`);
    tabPanel.hidden = false; */

     //METHOD #2 - find in the array of tabPanels
     //find method is only a function on arrays
     console.log(tabPanels);
   const tabPanel = tabPanels.find(panel =>
        panel.getAttribute('aria-labelledby') === id);
        //console.log(tabPanel);
        tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));