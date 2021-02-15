import { XtalDecor } from 'xtal-decor/xtal-decor.js';
import { define } from 'xtal-element/lib/define.js';
export const route_changed = 'route-changed';
export class BeANavLink extends XtalDecor {
    constructor() {
        super(...arguments);
        this.on = {
            click: ({ self }, e) => {
                e.preventDefault();
                self.dispatchEvent(new CustomEvent(route_changed, {
                    detail: {
                        link: this
                    }
                }));
            }
        };
        this.init = (h) => { };
        this.actions = [];
        this.upgrade = 'a';
        this.ifWantsToBe = 'a-nav-link';
    }
}
BeANavLink.is = 'be-a-nav-link';
define(BeANavLink);
