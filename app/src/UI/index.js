//start UI buidling
//const ui = new UI();
(()=>{
	//import classes
	fetch('/app/classes/classes.js');
	//append CSS
	const css = document.createElement('style');
	css.innerHTML = `
		#UI {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: aqua;
			padding: 10px;
			border-radius: 5px;
		}
	`;
	document.head.appendChild(css);
	//Append UI
	const UI = document.createElement('div');
	UI.id = 'UI';
	document.body.appendChild(UI);
	UI.append(document.createTextNode('UI'));

	//Append UI elements
	const admin = new UI_section('100%', '2em', 'branch', '#UI', 'Return to admin', `<a href="${location.origin}/admin">Admin</a>`);
	const account_admin = new UI_section('100%', '2em', 'branch', '#UI', 'Return to current hotel admin', `<a href="${location.origin}/admin/usermanagement/hotel/182252/change</a>`);
})();