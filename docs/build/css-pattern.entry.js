import { r as registerInstance, h, H as Host } from './index-987772c2.js';

const Patterns = [
    {
        title: "Half-Rombes",
        name: "half-rombes",
        author: "Valentin Agachi",
        authorUrl: "http://agachi.name"
    },
    {
        title: "Zig-Zag",
        name: "zig-zag",
        author: "eCSSpert",
        authorUrl: "http://twitter.com/ecsspert"
    },
    {
        title: "Weave",
        name: "carbon-fibre",
        author: "Jeroen Franse",
        authorUrl: "http://twitter.com/jroenf"
    },
    {
        title: "Brady Bunch",
        name: "brady-bunch",
        author: "Estelle Weyl",
        authorUrl: "http://www.standardista.com"
    },
    {
        title: "Shippo",
        name: "shippo",
        author: "",
        authorUrl: ""
    },
    {
        title: "Japanese cube",
        name: "japanese-cube",
        author: "",
        authorUrl: ""
    },
    {
        title: "Diagonal stripes",
        name: "diagonal-checkerboard",
        author: "",
        authorUrl: ""
    },
    {
        title: "Blueprint grid",
        name: "blueprint-grid",
        author: "",
        authorUrl: ""
    },
    {
        title: "Cicada stripes",
        name: "cicada-stripes",
        author: "Randy Merrill",
        authorUrl: "http://forthedeveloper.com"
    },
    {
        title: "Tablecloth",
        name: "tablecloth",
        author: "",
        authorUrl: ""
    },
    {
        title: "Chocolate Weave",
        name: "chocolate-weave",
        author: "Paul Salentiny",
        authorUrl: ""
    },
    {
        title: "Madras",
        name: "madras",
        author: "Divya Manian",
        authorUrl: "http://nimbupani.com"
    }
];

const cssPatternCss = ":host{--width:80px;--height:80px;--border-radius:0}div{display:flex;align-content:center;justify-content:space-around;align-items:center;width:var(--width);height:var(--height);border-radius:var(--border-radius)}.half-rombes{background:#36c;background:linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0, linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0, linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px, linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px, #36c;background-size:15px 30px}.zig-zag{background:linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0, linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0, linear-gradient(315deg, #ECEDDC 25%, transparent 25%), linear-gradient(45deg, #ECEDDC 25%, transparent 25%);background-size:100px 100px;background-color:#EC173A}.carbon-fibre{background:radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;background-color:#282828;background-size:16px 16px}.brady-bunch{background-image:radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%), radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%);background-size:110px 110px;background-color:#C8D3A7;background-position:0 0, 55px 55px}.shippo{background-color:#def;background-image:radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%), radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%);background-size:80px 80px;background-position:0 0, 40px 40px}.japanese-cube{background-color:#556;background-image:linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a);background-size:80px 140px;background-position:0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px}.diagonal-checkerboard{background-color:#eee;background-image:linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);background-size:60px 60px}.madras{background-color:hsl(34, 53%, 82%);background-image:repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px ), repeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px )}.blueprint-grid{background-color:#269;background-image:linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px}.cicada-stripes{background-color:#026873;background-image:linear-gradient(90deg, rgba(255,255,255,.07) 50%, transparent 50%), linear-gradient(90deg, rgba(255,255,255,.13) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,.17) 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,.19) 50%);background-size:13px, 29px, 37px, 53px}.tablecloth{background-color:white;background-image:linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%), linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);background-size:50px 50px}.chocolate-weave{background:linear-gradient(45deg, #dca 12%, transparent 0, transparent 88%, #dca 0), linear-gradient(135deg, transparent 37%, #a85 0, #a85 63%, transparent 0), linear-gradient(45deg, transparent 37%, #dca 0, #dca 63%, transparent 0) #753;background-size:25px 25px}";

const CssPattern = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Returns a pattern calculated from the input. Returns always the same pattern if the input stays the same.
     */
    async getPatternFromExternalTitle(name) {
        return this._getPatternFromExternalTitle(name);
    }
    /**
    * Returns a pattern object. If it can't find the pattern it returns the first pattern in the list.
    */
    async getPatternFromPatternName(name) {
        return this._getPatternFromPatternName(name);
    }
    /**
    * Returns a list of all available pattern objects.
    */
    async getAllAvailablePatterns() {
        return Patterns;
    }
    _getPatternFromExternalTitle(name) {
        const position = Math.round(name.length / 2);
        const code = name.charCodeAt(position) % Patterns.length;
        return Patterns[code];
    }
    _getPatternFromPatternName(name) {
        const index = Patterns.findIndex(pattern => pattern.name === name);
        return index !== -1 ? Patterns[index] : Patterns[0];
    }
    render() {
        const pattern = this.patternFor ? this._getPatternFromExternalTitle(this.patternFor) : this._getPatternFromPatternName(this.pattern);
        return (h(Host, { title: pattern.title, "data-author-url": pattern.authorUrl, "data-author": pattern.author }, h("div", { class: pattern.name }, h("slot", null))));
    }
};
CssPattern.style = cssPatternCss;

export { CssPattern as css_pattern };
