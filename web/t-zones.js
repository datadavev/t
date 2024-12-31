import { LitElement, html, css } from "https://unpkg.com/lit@2.0.0-rc.4/index.js?module";
import { DateTime, Duration } from "https://unpkg.com/luxon@2.0.2/src/luxon.js?module";

const DEFAULT_ZONES = [
    "UTC",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Phoenix",
    "US/Pacific",
    "US/Alaska",
    "Pacific/Tahiti",
    "Pacific/Auckland",
    "Australia/Sydney",
    "Australia/Adelaide",
    "Asia/Tokyo",
    "Australia/Perth",
    "Asia/Hong_Kong",
    "Asia/Kathmandu",
    "Europe/Riga",
    "Europe/Copenhagen",
].join(",");

export class TZones extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                padding: 16px;
                color: var(--t-zones-color, black);
                font-size: var(--t-zones-font-size, 14px);
                font-family: var(--t-zones-font-family, monospace);
                font-weight: var(--t-zones-font-weight, 300);
            }

            table {
              overflow: hidden;
              border: solid 1px gray;
              border-spacing: 0;
            }
            
            tr.czone  {
              color: var(--t-zones-color-current, black);
              font-weight: var(--t-zones-font-weight-current, 500);
            }
            td, th {
              position: relative;
              padding-left:3px;
              padding-right: 3px;
            }
            td.night {
                color: var(--t-zones-night, #6699ff);
            }
            td.day {
                color: var(--t-zones-day, #cc6600);
            }
            tr:hover {
              background-color: #ffa;
            }
            td:hover::after,
            th:hover::after {
              content: "";
              position: absolute;
              background-color: #ffa;
              left: 0;
              top: -5000px;
              height: 10000px;
              width: 100%;
              z-index: -1;
            }            
        `;
    }

    static get properties() {
        return {
            zones: {type: String},
            czone: {type:String},
        };
    }

    constructor() {
        super();
        this.dmatrix = null;
        this.zones = DEFAULT_ZONES;
        this.czone = DateTime.now().zoneName;
    }

    connectedCallback() {
        super.connectedCallback();
        this.dmatrix = [];
        const now = DateTime.utc()
        for (const z of this.zones.split(",")) {
            let dt_row = now.setZone(z);
            let row = [z, dt_row ];
            for (let h=1; h<24; h++) {
                let dur = Duration.fromObject({hours: h});
                row.push(dt_row.plus(dur));
            }
            this.dmatrix.push(row);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    render(){
        let rm = [];
        for (const rw of this.dmatrix) {
            let row = [rw[0]]
            for (let i=1; i < rw.length; i++) {
                const hv = rw[i].toFormat("HH")
                const hv_f = parseFloat(hv);
                let hv_class = "night"
                if (hv_f >= 6 && hv_f <= 18) {
                    hv_class= "day"
                }
                row.push(html`<td class="${hv_class}">${hv}</td>`)
            }
            if (rw[1].zoneName === this.czone){
                rm.push(html`<tr class="czone">${row}</tr>`)
            } else {
                rm.push(html`<tr>${row}</tr>`)
            }
        }
        return html`
            <table>
                <tbody>
                ${rm}
                </tbody>
            </table>
        `;
    }
}

window.customElements.define("t-zones", TZones);