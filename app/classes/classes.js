class UI {
	constructor(width, heigth, tree_level /*top OR branch */, parent /* null if top or selector if branch */, name, input) {
		
	}
}

class UI_section {
	constructor(width, heigth, tree_level /*'top' OR 'branch' */, parent /* null if top or selector if branch */, title, input) {
		uititle = document.createElement('div');
		data = document.createElement('div');
		block = document.createElement('div');

		uititle.append(document.createTextNode(title));
		data.append(document.createTextNode(input));
		block.append(uititle);
		block.append(data);
		block.style.width = width;
		block.style.height = heigth;
		if (tree_level == 'branch') document.querySelector(parent)[0].append(block); else document.body.append(block);
	}
}