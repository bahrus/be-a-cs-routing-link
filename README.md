# be-a-nav-link

Naming this component (which requires avoiding the npm spam filter among other obstacles) was not easy, and I'm not altogether pleased with the name.

This web component "upgrades" hyperlink tags so that rather than opening the url, it instead fires an event "route-changed", which the nav tag can, for example, be extended to handle.

Syntax:

```html
<be-a-nav-link upgrade=a if-wants-to-be-a-nav-link></be-a-nav-link>

<nav id=test be-a-router>
    <a  be-a-nav-link href="myAccounts/14394402/statements/201904?page=1">
        Statement for April 2019
    </a>
    <br>
    <a be-a-nav-link href="myAccounts/398821401/transactions?from=2020-10-01&to=2020-11-19">
        Transactions for 10/1/2020 - 11/19/2020
    </a>
</nav>
```