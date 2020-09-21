import Quill from "quill";
import IconAlignLeft from 'quill/assets/icons/align-left.svg';
import IconAlignCenter from 'quill/assets/icons/align-center.svg';
import IconAlignRight from 'quill/assets/icons/align-right.svg';
import { BaseModule } from './BaseModule';

const Parchment = Quill.imports.parchment;
const Align = Quill.imports['formats/align'];

const offsetAttributor = new Parchment.Attributor.Attribute('nameClass', 'class', {
	scope: Parchment.Scope.INLINE,
});

Quill.register(offsetAttributor);

export class Toolbar extends BaseModule {
	onCreate = () => {
		// Setup Toolbar
		this.toolbar = document.createElement('div');
		Object.assign(this.toolbar.style, this.options.toolbarStyles);
		this.overlay.appendChild(this.toolbar);

		// Setup Buttons
		this._defineAlignments();
		this._addToolbarButtons();
	};

	// The toolbar and its children will be destroyed when the overlay is removed
	onDestroy = () => { };

	onUpdate = () => {
		this.overlay.removeChild(this.toolbar);
		this.onCreate();
	};

	_defineAlignments = () => {
		this.alignments = [
			{
				icon: IconAlignLeft,
				apply: () => {
					const line = Quill.find(this.img).parent;
					Align.remove(line.domNode);
				},
				isApplied: () => {
					const line = Quill.find(this.img).parent;
					return !Align.whitelist.includes(Align.value(line.domNode));
				},
			},
			{
				icon: IconAlignCenter,
				apply: () => {
					const line = Quill.find(this.img).parent;
					Align.add(line.domNode, 'center');
				},
				isApplied: () => {
					const line = Quill.find(this.img).parent;
					return Align.value(line.domNode) == 'center';
				},
			},
			{
				icon: IconAlignRight,
				apply: () => {
					const line = Quill.find(this.img).parent;
					Align.add(line.domNode, 'right');
				},
				isApplied: () => {
					const line = Quill.find(this.img).parent;
					return Align.value(line.domNode) == 'right';
				},
			},
		];
	};

	_addToolbarButtons = () => {
		const buttons = [];
		this.alignments.forEach((alignment, idx) => {
			const button = document.createElement('span');
			buttons.push(button);
			button.innerHTML = alignment.icon;
			button.addEventListener('click', () => {
				// deselect all buttons
				buttons.forEach(button => button.style.filter = '');
				if (alignment.isApplied()) {
					// If applied, unapply
					const line = Quill.find(this.img).parent;
					Align.remove(line.domNode);
				} else {
					// otherwise, select button and apply
					this._selectButton(button);
					alignment.apply();
				}
				// image may change position; redraw drag handles
				this.requestUpdate();
			});
			Object.assign(button.style, this.options.toolbarButtonStyles);
			if (idx > 0) {
				button.style.borderLeftWidth = '0';
			}
			Object.assign(button.children[0].style, this.options.toolbarButtonSvgStyles);
			if (alignment.isApplied()) {
				// select button if previously applied
				this._selectButton(button);
			}
			this.toolbar.appendChild(button);
		});
	};

	_selectButton = (button) => {
		button.style.filter = 'invert(20%)';
	};

}
