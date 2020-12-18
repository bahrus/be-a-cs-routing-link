import {XtalDecor} from 'xtal-decor/xtal-decor.js';
import {define} from 'xtal-element/XtalElement.js';
export const route_change = 'route-change';
export class BeANavLink extends XtalDecor {
    static is='be-a-nav-link';
    on = {
        click:({self}: any, e: Event) =>{
            e.preventDefault();
            self.dispatchEvent(new CustomEvent(route_change, {
                detail: {
                    link: this
                }
            }));
        }
    };
    init = (h: HTMLElement) => {};
    actions = [];
    upgrade = 'a';
    ifWantsToBe = 'a-nav-link';
}
define(BeANavLink);